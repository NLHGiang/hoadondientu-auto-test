#!/usr/bin/env node
/**
 * Chạy Newman + sinh test-report-{timestamp}/ (gitignore) và last-test-report/ (git).
 *
 * Usage:
 *   npm test
 *   node run.js --folder 01_PUBLIC
 *   node run.js --folder 02_LOGIN --env-var hddt_username=... --env-var hddt_password=...
 */
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { randomUUID } = require('crypto');
const newman = require('newman');
const { Url, RequestBody } = require('postman-collection');
const { slugify } = require('./lib/slug');
const { buildCurl, resolveUrl, headersToList, bodyToString, maskSecrets } = require('./lib/curl');
const { saveResponse, getHeader, readResponseBody } = require('./lib/save-response');
const { writeReport } = require('./lib/build-report');

const ROOT = __dirname;
const LAST_REPORT_DIR = path.join(ROOT, 'last-test-report');
const OCR_CLI = path.join(ROOT, 'lib', 'hddt-ocr-cli.js');
const ITEM_CAPTCHA = /GET \/api\/captcha/i;
const ITEM_OCR = /OCR tax_invoice_gov/i;
const ITEM_AUTH = /authenticate/i;
const ITEM_PROFILE = /security-taxpayer\/profile/i;
const ITEM_GUEST = /guest-invoices/i;
const AUTH_FOLDER = /^(04_|05_|06_|07_|08_|09_)/;
const USED_API_FOLDERS = ['04_EXCEL', '05_DETAIL', '06_XML', '07_RELATED', '08_TBSS', '09_PITW'];

function parseArgs(argv) {
  const opts = {
    collection: 'HoaDonDienTu.healthcheck.postman_collection.json',
    environment: 'HoaDonDienTu.environment.json',
    folder: null,
    envVar: [],
    bail: false,
  };

  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--collection' && argv[i + 1]) opts.collection = argv[++i];
    else if (arg === '--environment' && argv[i + 1]) opts.environment = argv[++i];
    else if (arg === '--folder' && argv[i + 1]) opts.folder = argv[++i];
    else if (arg === '--env-var' && argv[i + 1]) opts.envVar.push(argv[++i]);
    else if (arg === '--bail') opts.bail = true;
    else if (arg === '--help' || arg === '-h') {
      console.log(`Usage: node run.js [options]
  --collection <file>   default: HoaDonDienTu.healthcheck.postman_collection.json
  --environment <file>  default: HoaDonDienTu.environment.json
  --folder <name>       01_PUBLIC | 02_LOGIN | 03_GUEST | 04_EXCEL | 05_DETAIL | 06_XML | 07_RELATED | 08_TBSS | 09_PITW
  --env-var key=value   biến môi trường (lặp được)
  --bail                dừng khi fail`);
      process.exit(0);
    }
  }

  return opts;
}

function parseEnvVar(pair) {
  const idx = pair.indexOf('=');
  if (idx < 0) return { key: pair, value: '' };
  return { key: pair.slice(0, idx), value: pair.slice(idx + 1) };
}

function timestampDir() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `test-report-${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}

/** Bản lần cuối để commit/push git. Timestamped test-report-* vẫn gitignore. */
function publishLastTestReport(reportDir, reportDirName) {
  fs.rmSync(LAST_REPORT_DIR, { recursive: true, force: true });
  fs.cpSync(reportDir, LAST_REPORT_DIR, { recursive: true });
  fs.writeFileSync(
    path.join(LAST_REPORT_DIR, 'SOURCE.txt'),
    `${reportDirName}\n`,
    'utf8'
  );
}

function resolveFolderName(item) {
  if (!item) return '';
  try {
    let node = typeof item.parent === 'function' ? item.parent() : item.parent;
    while (node) {
      const ctor = node.constructor?.name || '';
      const grand = typeof node.parent === 'function' ? node.parent() : node.parent;
      if (node.name && grand && (ctor === 'ItemGroup' || typeof node.forEachItem === 'function')) {
        return node.name;
      }
      if (node.name && ctor === 'ItemGroup') return node.name;
      node = grand;
    }
  } catch {
    /* ignore */
  }
  return '';
}

function getEnvValue(environmentPath, key) {
  if (!environmentPath || !fs.existsSync(environmentPath)) return '';
  try {
    const env = JSON.parse(fs.readFileSync(environmentPath, 'utf8'));
    const hit = (env.values || []).find((v) => v.key === key && v.enabled !== false);
    return hit ? String(hit.value ?? '') : '';
  } catch {
    return '';
  }
}

function envLookup(opts, environmentPath, key) {
  const fromCli = opts.envVar.map(parseEnvVar).find((x) => x.key === key);
  if (fromCli && fromCli.value !== undefined) return String(fromCli.value ?? '');
  return getEnvValue(environmentPath, key);
}

function extractCaptcha(response, reportDir) {
  const { buffer, text } = readResponseBody(response);
  const raw = (text && text.length ? text : buffer.toString('utf8')) || '';
  if (!raw) return null;
  let json;
  try {
    json = JSON.parse(raw);
  } catch {
    return null;
  }
  const key = json.key || json.Key || '';
  let content = json.content || json.Content || '';
  if (!key || !content) return null;
  if (String(content).includes('base64,')) {
    content = Buffer.from(String(content).split('base64,').pop(), 'base64').toString('utf8');
  }
  const responsesDir = path.join(reportDir, 'responses');
  fs.mkdirSync(responsesDir, { recursive: true });
  const svgPath = path.join(responsesDir, '_hddt-captcha.svg');
  fs.writeFileSync(svgPath, String(content), 'utf8');
  return { key: String(key), svgPath, size: Buffer.byteLength(String(content)) };
}

function runHddtOcrCli(svgPath, captchaBaseUrl) {
  const args = [OCR_CLI, svgPath];
  if (captchaBaseUrl) args.push(String(captchaBaseUrl).replace(/\/$/, ''));
  const text = execFileSync(process.execPath, args, {
    encoding: 'utf8',
    timeout: 120000,
    windowsHide: true,
  }).trim();
  if (!text || text.includes('ERROR_')) {
    throw new Error(`OCR failed: ${text || '(empty)'}`);
  }
  return text;
}

function setRawJsonBody(request, obj) {
  const raw = JSON.stringify(obj, null, 2);
  const spec = { mode: 'raw', raw, options: { raw: { language: 'json' } } };
  if (request.body && typeof request.body.update === 'function') {
    request.body.update(spec);
    return;
  }
  request.body = new RequestBody(spec);
}

function prepareOcrTraceRequest(request, reportDir, hddtState, captchaBaseUrl) {
  const text = runHddtOcrCli(hddtState.svgPath, captchaBaseUrl);
  hddtState.ocrText = text;
  const responsesDir = path.join(reportDir, 'responses');
  fs.mkdirSync(responsesDir, { recursive: true });
  fs.writeFileSync(path.join(responsesDir, '_hddt-ocr-result.txt'), text, 'utf8');

  const payload = {
    _trace: 'OCR executed by run.js (hddt-ocr-cli) — Newman cannot POST SVG multipart',
    endpoint: `${String(captchaBaseUrl || 'https://captcha.minvoice.com.vn').replace(/\/$/, '')}/api/ocrcaptcha/tax_invoice_gov`,
    field: 'Captcha',
    svg: '_hddt-captcha.svg',
    ocrText: text,
    key: hddtState.key || null,
  };
  request.method = 'POST';
  request.url = new Url('https://postman-echo.com/post');
  request.headers.upsert({ key: 'Content-Type', value: 'application/json' });
  request.headers.upsert({ key: 'Accept', value: 'application/json' });
  if (typeof request.headers.remove === 'function') {
    request.headers.remove('Content-Length');
  }
  setRawJsonBody(request, payload);
  return text;
}

function injectAuthenticate(request, hddtState, username, password) {
  const body = {
    username: username || '',
    password: password || '',
    ckey: hddtState.key || '',
    cvalue: hddtState.ocrText || '',
  };
  request.headers.upsert({ key: 'Content-Type', value: 'application/json' });
  setRawJsonBody(request, body);
}

function injectRequestId(request) {
  if (!request?.headers || typeof request.headers.upsert !== 'function') return;
  request.headers.upsert({ key: 'request-id', value: randomUUID() });
}

function stripNewmanFingerprint(request) {
  if (!request?.headers || typeof request.headers.remove !== 'function') return;
  request.headers.remove('Postman-Token');
  request.headers.remove('postman-token');
}

function injectBearer(request, token) {
  if (!token) return;
  request.headers.upsert({ key: 'Authorization', value: `Bearer ${token}` });
}

function removeQuery(url, key) {
  if (typeof url.query.remove === 'function') url.query.remove(key);
}

function resolveGuestHdon(guest) {
  if (guest.hdon) return guest.hdon;
  if (guest.khmshdon === '6' || guest.khmshdon === 6) return '06_01';
  if (guest.khmshdon) return `0${guest.khmshdon}`;
  return '';
}

/** Khớp FE kiem-tra-hoa-don + msmi-backend/routes/index.js (xóa tgtttbso nếu mẫu 6, ngược lại xóa tdlap). */
function injectGuestQuery(request, hddtState, guest) {
  const url = request.url;
  if (!url || typeof url.query?.upsert !== 'function') return;
  url.query.upsert({ key: 'ckey', value: hddtState.key || '' });
  url.query.upsert({ key: 'cvalue', value: hddtState.ocrText || '' });
  if (guest.nbmst) url.query.upsert({ key: 'nbmst', value: guest.nbmst });
  if (guest.khhdon) url.query.upsert({ key: 'khhdon', value: guest.khhdon });
  if (guest.shdon) url.query.upsert({ key: 'shdon', value: guest.shdon });
  if (guest.khmshdon) url.query.upsert({ key: 'khmshdon', value: guest.khmshdon });
  const hdon = resolveGuestHdon(guest);
  if (hdon) url.query.upsert({ key: 'hdon', value: hdon });
  const isMau6 = guest.khmshdon === '6' || guest.khmshdon === 6;
  if (isMau6) {
    if (guest.tdlap) url.query.upsert({ key: 'tdlap', value: guest.tdlap });
    else removeQuery(url, 'tdlap');
    removeQuery(url, 'tgtttbso');
  } else {
    if (guest.tgtttbso) url.query.upsert({ key: 'tgtttbso', value: guest.tgtttbso });
    else removeQuery(url, 'tgtttbso');
    removeQuery(url, 'tdlap');
  }
}

function extractToken(response) {
  const { text, buffer } = readResponseBody(response);
  const raw = (text && text.length ? text : buffer.toString('utf8')) || '';
  try {
    const json = JSON.parse(raw);
    return json.token || json.Token || '';
  } catch {
    return '';
  }
}

function main() {
  const opts = parseArgs(process.argv);
  const collectionPath = path.join(ROOT, opts.collection);
  const environmentPath = path.join(ROOT, opts.environment);

  if (!fs.existsSync(collectionPath)) {
    console.error('Không tìm thấy collection:', collectionPath);
    console.error('Chạy: node generate-collection.js');
    process.exit(1);
  }

  const username = envLookup(opts, environmentPath, 'hddt_username');
  const password = envLookup(opts, environmentPath, 'hddt_password');
  const guest = {
    nbmst: envLookup(opts, environmentPath, 'guest_nbmst'),
    khhdon: envLookup(opts, environmentPath, 'guest_khhdon'),
    shdon: envLookup(opts, environmentPath, 'guest_shdon'),
    khmshdon: envLookup(opts, environmentPath, 'guest_khmshdon'),
    hdon: envLookup(opts, environmentPath, 'guest_hdon'),
    tgtttbso: envLookup(opts, environmentPath, 'guest_tgtttbso'),
    tdlap: envLookup(opts, environmentPath, 'guest_tdlap'),
  };
  const pitwCookie = envLookup(opts, environmentPath, 'pitw_cookie');
  const guestFrom =
    guest.khhdon && guest.khhdon[3] === 'M' ? 'sco-query' : envLookup(opts, environmentPath, 'guest_from') || 'query';

  if (opts.folder === '02_LOGIN' && (!username || !password)) {
    console.error('Folder 02_LOGIN cần --env-var hddt_username=... --env-var hddt_password=...');
    process.exit(1);
  }
  if (opts.folder === '03_GUEST' && !(guest.nbmst && guest.khhdon && guest.shdon && guest.khmshdon)) {
    console.error('Folder 03_GUEST cần guest_nbmst, guest_khhdon, guest_shdon, guest_khmshdon; guest_hdon (01/02/06_01); guest_tgtttbso (không mẫu 6) hoặc guest_tdlap ISO (mẫu 6).');
    process.exit(1);
  }

  let folderFilter = opts.folder ? [opts.folder] : undefined;
  if (!opts.folder) {
    const folders = ['01_PUBLIC'];
    if (username && password) folders.push('02_LOGIN');
    if (guest.nbmst && guest.khhdon && guest.shdon && guest.khmshdon) folders.push('03_GUEST');
    folders.push(...USED_API_FOLDERS);
    folderFilter = folders;
  }

  const extraEnvVar = [...opts.envVar];
  if (opts.folder === '03_GUEST' || (!opts.folder && guest.nbmst)) {
    if (guestFrom && !extraEnvVar.some((p) => p.startsWith('guest_from='))) {
      extraEnvVar.push(`guest_from=${guestFrom}`);
    }
  }

  const reportDirName = timestampDir();
  const reportDir = path.join(ROOT, reportDirName);
  fs.mkdirSync(reportDir, { recursive: true });

  const startedAt = new Date();
  const cases = [];
  let seq = 0;
  let activeCase = null;
  let activeFolder = '';
  let activeItemName = '';
  const hddtState = {
    svgPath: null,
    key: null,
    ocrText: null,
    token: envLookup(opts, environmentPath, 'hddt_token') || null,
  };
  const captchaBaseUrl =
    envLookup(opts, environmentPath, 'captchaBaseUrl') || 'https://captcha.minvoice.com.vn';

  const envLoaded = fs.existsSync(environmentPath);

  const runOptions = {
    collection: collectionPath,
    environment: envLoaded ? environmentPath : undefined,
    envVar: extraEnvVar.map(parseEnvVar),
    folder: folderFilter,
    reporters: 'cli',
    bail: opts.bail || undefined,
    delayRequest: 300,
    timeout: 300000,
    timeoutRequest: 120000,
    requester: {
      implicitTraceHeader: false,
    },
  };

  if (envLoaded) {
    console.log(`Environment: ${environmentPath}`);
  } else {
    console.warn(`Không tìm thấy environment: ${environmentPath}`);
  }
  if (extraEnvVar.length) {
    const shown = extraEnvVar.map((p) =>
      /password|token/i.test(p) ? `${p.split('=')[0]}=***` : p
    );
    console.log(`CLI overrides: ${shown.join(', ')}`);
  }
  if (folderFilter) {
    console.log(`Folder filter: ${folderFilter.join(', ')}`);
  }

  console.log(`\nReport: ${reportDir}\n`);

  const runner = newman.run(runOptions, (err, summary) => {
    const finishedAt = new Date();

    const meta = {
      title: 'HoaDonDienTu Healthcheck',
      startedAt: startedAt.toISOString(),
      finishedAt: finishedAt.toISOString(),
      durationMs: finishedAt - startedAt,
      collection: opts.collection,
      environment: opts.environment,
      reportDirName,
      newmanError: err ? String(err) : null,
      stats: summary?.run?.stats || null,
    };

    const htmlPath = writeReport(reportDir, meta, cases);
    console.log(`\nHTML report: ${htmlPath}`);
    console.log(`   Markdown report: ${path.join(reportDir, 'test-report.md')}`);
    console.log(`   JSON manifest: ${path.join(reportDir, 'test-report.json')}`);
    console.log(`   Response files: ${path.join(reportDir, 'responses')}/`);

    try {
      publishLastTestReport(reportDir, reportDirName);
      console.log(`   Last report (git): ${LAST_REPORT_DIR}`);
    } catch (copyErr) {
      console.warn('Không copy được last-test-report:', copyErr.message);
    }

    const failed = cases.filter((c) => c.failedAssertions > 0 || c.error).length;
    process.exit(err || failed > 0 ? 1 : 0);
  });

  runner.on('beforeItem', (err, args) => {
    activeCase = null;
    activeFolder = '';
    activeItemName = '';
    if (err || !args?.item) return;
    activeFolder = resolveFolderName(args.item);
    activeItemName = args.item.name || '';
  });

  runner.on('beforeRequest', (err, args) => {
    if (err || !args?.request) return;
    stripNewmanFingerprint(args.request);
    injectRequestId(args.request);
    const name = activeItemName;

    if (ITEM_OCR.test(name)) {
      if (!hddtState.svgPath || !fs.existsSync(hddtState.svgPath)) {
        console.warn('[HDDT OCR] Missing captcha SVG — chạy GET /api/captcha trước');
        return;
      }
      try {
        const text = prepareOcrTraceRequest(args.request, reportDir, hddtState, captchaBaseUrl);
        console.log(`[HDDT OCR] Node CLI ok, text=${text}`);
      } catch (ocrErr) {
        console.warn('[HDDT OCR] failed:', ocrErr.message);
      }
      return;
    }

    if (ITEM_AUTH.test(name)) {
      try {
        injectAuthenticate(args.request, hddtState, username, password);
        console.log(`[HDDT auth] Inject ckey=${hddtState.key || '(empty)'} cvalue=${hddtState.ocrText ? '(set)' : '(empty)'}`);
      } catch (injectErr) {
        console.warn('[HDDT auth]', injectErr.message);
      }
      return;
    }

    if (ITEM_PROFILE.test(name) || AUTH_FOLDER.test(activeFolder)) {
      injectBearer(args.request, hddtState.token);
      if (activeFolder === '09_PITW' && pitwCookie) {
        args.request.headers.upsert({ key: 'Cookie', value: pitwCookie });
      }
      return;
    }

    if (ITEM_GUEST.test(name)) {
      try {
        injectGuestQuery(args.request, hddtState, guest);
      } catch (injectErr) {
        console.warn('[HDDT guest]', injectErr.message);
      }
    }
  });

  runner.on('request', (err, args) => {
    seq += 1;
    const item = args?.item;
    const folder =
      activeFolder ||
      resolveFolderName(item) ||
      (folderFilter && folderFilter.length === 1 ? folderFilter[0] : '') ||
      '';
    const name = item?.name || activeItemName || `Request ${seq}`;
    const baseName = `${String(seq).padStart(3, '0')}-${slugify(folder)}-${slugify(name)}`;

    const code = args?.response?.code ?? args?.response?.responseCode;
    if (ITEM_CAPTCHA.test(name) && code === 200) {
      try {
        const extracted = extractCaptcha(args.response, reportDir);
        if (extracted) {
          hddtState.svgPath = extracted.svgPath;
          hddtState.key = extracted.key;
          hddtState.ocrText = null;
          console.log(`[HDDT] Saved captcha SVG ${extracted.size}B key=${extracted.key} → ${extracted.svgPath}`);
        } else {
          console.warn('[HDDT] extract captcha: empty body/parse');
        }
      } catch (extractErr) {
        console.warn('[HDDT] extract captcha:', extractErr.message);
      }
    }

    if (ITEM_AUTH.test(name) && args?.response) {
      const token = extractToken(args.response);
      if (token) {
        hddtState.token = token;
        console.log('[HDDT] authenticate token captured');
      }
    }

    const caseRecord = {
      index: seq,
      folder,
      name,
      method: 'GET',
      url: '',
      curl: '',
      requestHeaders: [],
      requestBody: '',
      responseCode: null,
      responseTime: null,
      responseContentType: '',
      responseSaved: null,
      assertions: [],
      failedAssertions: 0,
      error: err ? String(err) : null,
    };

    if (args?.request) {
      const reqJson = typeof args.request.toJSON === 'function' ? args.request.toJSON() : args.request;
      caseRecord.method = (reqJson.method || 'GET').toUpperCase();
      caseRecord.url = resolveUrl(reqJson.url);
      let headers = headersToList(reqJson.header);
      let body = bodyToString(reqJson.body);
      ({ headers, body } = maskSecrets(headers, body));
      caseRecord.requestHeaders = headers;
      caseRecord.requestBody = body;
      caseRecord.curl = buildCurl(args.request);
    }

    if (args?.response) {
      caseRecord.responseCode = args.response.code;
      caseRecord.responseTime = args.response.responseTime;
      caseRecord.responseContentType = getHeader(args.response, 'Content-Type');
      try {
        caseRecord.responseSaved = saveResponse(reportDir, baseName, args.response);
      } catch (saveErr) {
        caseRecord.error = caseRecord.error || String(saveErr);
      }
    }

    activeCase = caseRecord;
    cases.push(caseRecord);
  });

  runner.on('assertion', (err, args) => {
    const caseRecord = activeCase || cases[cases.length - 1];
    if (!caseRecord) return;

    const entry = {
      name: args?.assertion || 'assertion',
      error: err || args?.error || null,
    };
    caseRecord.assertions.push(entry);
    if (err || args?.error) caseRecord.failedAssertions += 1;
  });

  runner.on('item', (err) => {
    if (err && activeCase) activeCase.error = activeCase.error || String(err);
    activeCase = null;
  });
}

main();
