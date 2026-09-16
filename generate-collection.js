const fs = require('fs');
const path = require('path');

const out = path.join(__dirname, 'HoaDonDienTu.healthcheck.postman_collection.json');
const uaProxy = '{{userAgentProxy}}';
const uaCrawl = '{{userAgentCrawl}}';
const uaPitw = '{{userAgentPitw}}';
const origin = '{{baseUrl}}';
const requestId = { key: 'request-id', value: '{{$guid}}' };

function testEvent(exec) {
  return [{ listen: 'test', script: { type: 'text/javascript', exec } }];
}

const disabledSystemHeaders = {
  'postman-token': true,
  'cache-control': true,
  'accept-encoding': true,
};

/**
 * Không disable `host` / `connection`: Newman `setHost: false` làm mất Host trên wire
 * → OpenShift 503 "The host doesn't exist". Curl report vẫn lọc 2 header này.
 */
const ppbNoFingerprint = { disabledSystemHeaders };

/** Crawler HĐ / PITW / public / guest: không gửi Cookie jar từ GET /. */
const ppbNoCookies = { disabledSystemHeaders, disableCookies: true };

function mergeHeaders(base, extra) {
  const extraList = extra && extra.length ? extra : [];
  const keys = new Set(extraList.map((x) => String(x.key).toLowerCase()));
  const merged = base.filter((x) => !keys.has(String(x.key).toLowerCase())).concat(extraList);
  if (!keys.has('request-id')) merged.push(requestId);
  return merged;
}

/** SanitizeGenericForwardHeaders: UA Chrome/120 + Accept JSON. */
function headersProxy(extra) {
  return mergeHeaders(
    [
      { key: 'User-Agent', value: uaProxy },
      { key: 'Accept', value: 'application/json, text/plain, */*' },
    ],
    extra
  );
}

/** crawl-excel / assets / sold: Chrome/106 + portal HĐ. */
function headersCrawlHd(extra) {
  return mergeHeaders(
    [
      { key: 'User-Agent', value: uaCrawl },
      { key: 'Accept', value: 'application/json, text/plain, */*' },
      { key: 'Accept-Language', value: 'vi' },
      { key: 'Origin', value: origin },
      { key: 'Referer', value: `${origin}/` },
      { key: 'Authorization', value: 'Bearer {{hddt_token}}' },
    ],
    extra
  );
}

/** chung-tu-tncn-crawl-build.js */
function headersPitw(extra) {
  return mergeHeaders(
    [
      { key: 'User-Agent', value: uaPitw },
      { key: 'Accept', value: 'application/json, text/plain, */*' },
      { key: 'Accept-Language', value: 'vi' },
      { key: 'Accept-Encoding', value: 'gzip, deflate, br' },
      { key: 'End-Point', value: '/tra-cuu/tra-cuu-chung-tu-tncn' },
      { key: 'Origin', value: origin },
      { key: 'Referer', value: 'https://hoadondientu.gdt.gov.vn/tra-cuu/tra-cuu-chung-tu-tncn' },
      { key: 'Authorization', value: 'Bearer {{hddt_token}}' },
    ],
    extra
  );
}

function headersPortal() {
  return [
    { key: 'User-Agent', value: uaProxy },
    { key: 'Accept', value: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' },
    { key: 'Accept-Language', value: 'vi' },
    requestId,
  ];
}

const tctHelpers = [
  'function tctJson() {',
  '    try { return pm.response.json(); } catch (e) { return null; }',
  '}',
  'function tctText() { return (pm.response.text() || "").trim(); }',
  'function isTctWafBlocked() {',
  '    var j = tctJson();',
  '    if (!j) return false;',
  '    var msg = String(j.message || "");',
  '    return (pm.response.code === 403 || j.status === 403) && msg.indexOf("Hệ thống phát hiện hành vi không hợp lệ") >= 0 && msg.indexOf("Yêu cầu đã bị chặn") >= 0;',
  '}',
  'function isHtmlBlocked() {',
  '    var t = tctText();',
  '    return t.indexOf("This page can\'t be displayed") >= 0 || /Request Rejected/i.test(t) || t.indexOf("<!DOCTYPE") === 0;',
  '}',
  'function isPitwHtmlLoginRedirect() {',
  '    var t = tctText();',
  '    if (!t || t.charAt(0) !== "<") return false;',
  '    var lower = t.toLowerCase();',
  '    return lower.indexOf("dang-nhap") >= 0 || lower.indexOf("dangnhap") >= 0 || lower.indexOf("/login") >= 0 || t.indexOf("đăng nhập") >= 0 || lower.indexOf("sign in") >= 0 || lower.indexOf("security-taxpayer/authenticate") >= 0;',
  '}',
  'function isPkZip() {',
  '    var s = pm.response.stream;',
  '    if (s && s.length >= 2) return s[0] === 0x50 && s[1] === 0x4b;',
  '    var t = pm.response.text() || "";',
  '    return t.charCodeAt(0) === 0x50 && t.charCodeAt(1) === 0x4b;',
  '}',
  'function isXmlHead() {',
  '    var t = tctText().replace(/^\\uFEFF/, "");',
  '    return t.charAt(0) === "<";',
  '}',
  'function cqtErrorMessage(j) {',
  '    j = j || tctJson();',
  '    if (!j || typeof j !== "object" || Array.isArray(j)) return null;',
  '    if (Array.isArray(j.datas) && j.datas.length) return null;',
  '    var msg = j.message || j.Message || j.error || j.Error || j.title || j.detail;',
  '    if (!msg) return null;',
  '    return String(msg).trim() || null;',
  '}',
];

/**
 * Fail nếu không phải payload repo đang xử lý được.
 * WAF / HTML / HTTP ≠ 200 / JSON {status,message} lỗi → FAIL.
 */
function assertExpect(successExec) {
  return [
    ...tctHelpers,
    'if (isTctWafBlocked()) {',
    '    pm.test("FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn.", function () {',
    '        pm.expect.fail((tctJson() && tctJson().message) || "WAF 403");',
    '    });',
    '} else if (isHtmlBlocked()) {',
    '    pm.test("FAIL: HTML WAF / Request Rejected", function () {',
    '        pm.expect.fail("CQT trả HTML thay vì payload repo expect");',
    '    });',
    '} else if (pm.response.code !== 200) {',
    '    pm.test("HTTP 200", function () {',
    '        pm.expect(pm.response.code).to.eql(200);',
    '    });',
    '} else {',
    ...(successExec && successExec.length ? successExec : [
      '    pm.test("HTTP 200", function () { pm.response.to.have.status(200); });',
    ]),
    '}',
  ];
}

const assertCaptchaJson = assertExpect([
  '    pm.test("captcha: JSON key + content (proxy-login-client captchaViaProxy)", function () {',
  '        const j = tctJson();',
  '        pm.expect(j, "JSON").to.be.an("object");',
  '        pm.expect(j.key, "captcha.key").to.be.ok;',
  '        pm.expect(j.content, "captcha.content").to.be.ok;',
  '        pm.environment.set("hddt_ckey", String(j.key));',
  '    });',
]);

const assertPortal = [
  ...tctHelpers,
  'if (isTctWafBlocked()) {',
  '    pm.test("FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn.", function () {',
  '        pm.expect.fail((tctJson() && tctJson().message) || "WAF 403");',
  '    });',
  '} else if (isHtmlBlocked() && pm.response.code >= 400) {',
  '    pm.test("FAIL: HTML WAF", function () {',
  '        pm.expect.fail("Portal bị HTML WAF");',
  '    });',
  '} else {',
  '    pm.test("Portal HTTP 2xx/3xx", function () {',
  '        pm.expect(pm.response.code).to.be.below(400);',
  '    });',
  '}',
];

const assertCategory = assertExpect([
  '    pm.test("dsdkts/manager: JSON object (TaxCode.get / TaxCodeService.searchTaxCode)", function () {',
  '        const j = tctJson();',
  '        pm.expect(j, "JSON").to.be.an("object");',
  '        const err = cqtErrorMessage(j);',
  '        if (err) pm.expect.fail("CQT lỗi: " + err);',
  '        pm.expect(Array.isArray(j), "không phải array").to.be.false;',
  '    });',
]);

const assertOcrTrace = [
  'pm.test("OCR intercept HTTP 200 (postman-echo trace)", function () {',
  '    pm.response.to.have.status(200);',
  '});',
];

const assertAuthenticate = assertExpect([
  '    pm.test("authenticate: có token (CrawlEInvoiceLoginService / loginOnlyViaProxy)", function () {',
  '        const j = tctJson();',
  '        pm.expect(j, "JSON").to.be.an("object");',
  '        const err = cqtErrorMessage(j);',
  '        if (err && !j.token) pm.expect.fail("CQT lỗi: " + err);',
  '        pm.expect(j.token, "token").to.be.ok;',
  '        pm.environment.set("hddt_token", j.token);',
  '    });',
]);

const assertProfile = assertExpect([
  '    pm.test("profile: username (fetchTaxpayerProfileViaProxy)", function () {',
  '        const j = tctJson();',
  '        pm.expect(j, "JSON").to.be.an("object");',
  '        const err = cqtErrorMessage(j);',
  '        if (err && !j.username) pm.expect.fail("CQT lỗi: " + err);',
  '        pm.expect(j.username, "profile.username").to.be.a("string");',
  '        pm.expect(j.username.length, "profile.username").to.be.above(0);',
  '    });',
]);

const assertGuest = assertExpect([
  '    pm.test("guest-invoices: ttxly hoặc body rỗng (CrawlCheckInvoiceService)", function () {',
  '        const text = tctText();',
  '        if (!text) return;',
  '        const j = tctJson();',
  '        pm.expect(j, "JSON").to.be.an("object");',
  '        const err = cqtErrorMessage(j);',
  '        if (err && j.ttxly == null) pm.expect.fail("CQT lỗi: " + err);',
  '        pm.expect(j.ttxly != null, "ttxly (C# retry nếu thiếu)").to.be.true;',
  '    });',
]);

const assertExcel = assertExpect([
  '    pm.test("export-excel: xlsx/zip PK (msmi-header-service MapExcel / CrawlEInvoiceService)", function () {',
  '        if (tctText().charAt(0) === "{") {',
  '            pm.expect.fail("CQT trả JSON lỗi thay vì Excel: " + (cqtErrorMessage() || tctText().slice(0, 200)));',
  '        }',
  '        pm.expect(isPkZip(), "magic PK (xlsx là zip)").to.be.true;',
  '    });',
]);

const assertDetail = assertExpect([
  '    pm.test("invoices/detail: có id (consume/invoiceDetail)", function () {',
  '        const j = tctJson();',
  '        pm.expect(j, "JSON").to.be.an("object");',
  '        const err = cqtErrorMessage(j);',
  '        if (err && !j.id) pm.expect.fail("CQT lỗi: " + err);',
  '        pm.expect(j.id, "result.id").to.be.ok;',
  '    });',
]);

const assertInvoiceXml = assertExpect([
  '    pm.test("export-xml: ZIP PK (exportXmlViaProxy)", function () {',
  '        if (tctText().charAt(0) === "{") {',
  '            pm.expect.fail("CQT trả JSON lỗi thay vì ZIP: " + (cqtErrorMessage() || tctText().slice(0, 200)));',
  '        }',
  '        pm.expect(isPkZip(), "magic PK").to.be.true;',
  '    });',
]);

const assertRelated = assertExpect([
  '    pm.test("invoices/related: có khhdon (consume/purchaseHdtbssrses, detailHdtbssres)", function () {',
  '        const j = tctJson();',
  '        pm.expect(j, "JSON").to.be.an("object");',
  '        const err = cqtErrorMessage(j);',
  '        if (err && !j.khhdon) pm.expect.fail("CQT lỗi: " + err);',
  '        pm.expect(j.khhdon, "result.khhdon").to.be.ok;',
  '    });',
]);

const assertRelative = assertExpect([
  '    pm.test("invoices/relative: JSON hợp lệ (getJsonViaProxy)", function () {',
  '        const j = tctJson();',
  '        pm.expect(j != null, "parsed JSON").to.be.true;',
  '        const err = cqtErrorMessage(j);',
  '        if (err) pm.expect.fail("CQT lỗi: " + err);',
  '    });',
]);

const assertTbss = assertExpect([
  '    pm.test("TBSS: datas[] + total (consume/hdtbssresExcel)", function () {',
  '        const j = tctJson();',
  '        pm.expect(j, "JSON").to.be.an("object");',
  '        const err = cqtErrorMessage(j);',
  '        if (err && !Array.isArray(j.datas)) pm.expect.fail("CQT lỗi: " + err);',
  '        pm.expect(j.datas, "datas").to.be.an("array");',
  '        pm.expect(typeof j.total === "number", "total number").to.be.true;',
  '    });',
]);

const assertPitwList = assertExpect([
  '    pm.test("pitw: datas[] (parseCrawlResult / chungTuTncnHeader)", function () {',
  '        if (isPitwHtmlLoginRedirect()) {',
  '            pm.expect.fail("Phiên CQT không còn hợp lệ hoặc đã bị điều hướng khỏi /api/pitw");',
  '        }',
  '        const j = tctJson();',
  '        pm.expect(j, "JSON").to.be.an("object");',
  '        const err = cqtErrorMessage(j);',
  '        if (err && !Array.isArray(j.datas) && !Array.isArray(j.content)) pm.expect.fail("CQT lỗi: " + err);',
  '        const datas = Array.isArray(j.datas) ? j.datas : j.content;',
  '        pm.expect(datas, "datas|content").to.be.an("array");',
  '    });',
]);

const assertPitwXml = assertExpect([
  '    pm.test("pitw/export-xml: ZIP hoặc XML (chung-tu-xml throwIfCqtErrorPayload)", function () {',
  '        if (tctText().charAt(0) === "{") {',
  '            pm.expect.fail("CQT trả JSON lỗi thay vì XML/ZIP: " + (cqtErrorMessage() || tctText().slice(0, 200)));',
  '        }',
  '        pm.expect(isPkZip() || isXmlHead(), "ZIP PK hoặc XML <").to.be.true;',
  '    });',
]);

function tctUrl(pathSegments, query) {
  const rawQuery = query && query.length
    ? `?${query.map((q) => `${q.key}=${q.value}`).join('&')}`
    : '';
  const raw = `{{baseUrl}}/api/${pathSegments.join('/')}${rawQuery}`;
  return {
    raw,
    protocol: 'https',
    host: ['hoadondientu', 'gdt', 'gov', 'vn'],
    path: ['api', ...pathSegments],
    ...(query ? { query } : {}),
  };
}

function portalUrl() {
  return {
    raw: '{{baseUrl}}/',
    protocol: 'https',
    host: ['hoadondientu', 'gdt', 'gov', 'vn'],
    path: [''],
  };
}

function itemReq(name, request, assertExec, { cookies = false } = {}) {
  return {
    name,
    event: testEvent(assertExec),
    protocolProfileBehavior: cookies ? ppbNoFingerprint : ppbNoCookies,
    request,
  };
}

function authGet(name, pathSegments, query, extraHeaders, assertExec, family) {
  let header;
  if (family === 'pitw') header = headersPitw(extraHeaders);
  else if (family === 'proxy') {
    header = headersProxy([
      { key: 'Authorization', value: 'Bearer {{hddt_token}}' },
      ...(extraHeaders || []),
    ]);
  } else {
    header = headersCrawlHd(extraHeaders);
  }
  return itemReq(name, {
    method: 'GET',
    header,
    url: tctUrl(pathSegments, query),
  }, assertExec);
}

const invoiceQs = [
  { key: 'nbmst', value: '{{inv_nbmst}}' },
  { key: 'khhdon', value: '{{inv_khhdon}}' },
  { key: 'shdon', value: '{{inv_shdon}}' },
  { key: 'khmshdon', value: '{{inv_khmshdon}}' },
];

const excelQs = [
  { key: 'sort', value: '{{excel_sort}}' },
  { key: 'search', value: '{{excel_search}}' },
];

const excelScoQs = [
  { key: 'sort', value: '{{excel_sort}}' },
  { key: 'search', value: '{{excel_search_sco}}' },
];

/** purchase → export-excel-sold + type=purchase; sold → export-excel, không type */
const excelPurchaseQs = excelQs.concat([{ key: 'type', value: 'purchase' }]);
const excelPurchaseScoQs = excelScoQs.concat([{ key: 'type', value: 'purchase' }]);

const acceptStar = { key: 'Accept', value: '*/*' };
const acceptEncGzip = { key: 'Accept-Encoding', value: 'gzip,deflate,br' };

/** crawl-excel.js / invoice-init-sync-seed.js */
const actionExcel = {
  key: 'Action',
  value: 'Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)',
};
/** service/invoices/assets/index.js */
const actionDetail = {
  key: 'Action',
  value: 'Xem%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)',
};
/** CrawlEInvoiceService.cs export-xml */
const actionXml = {
  key: 'Action',
  value: 'Xu%E1%BA%A5t%20xml%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)',
};
/** routes/invoices/index.js related */
const actionRelated = {
  key: 'Action',
  value: 'Xem%20th%C3%B4ng%20tin%20li%C3%AAn%20quan%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)',
};
/** sold.js TBSS + CQT_CHUNG_TU.actionSearch */
const actionSearch = { key: 'Action', value: 'T%C3%ACm%20ki%E1%BA%BFm' };
/** chung-tu-tncn-crawl-build.js forXml → Action rỗng */
const actionEmpty = { key: 'Action', value: '' };

const endPointHd = { key: 'End-Point', value: '/tra-cuu/tra-cuu-hoa-don' };

const excelHeaders = [acceptStar, acceptEncGzip, actionExcel, endPointHd];
const detailHeaders = [acceptStar, actionDetail, endPointHd];
const xmlHeaders = [acceptStar, actionXml, endPointHd];
const relatedHeaders = [actionRelated, endPointHd];
const tbssHeaders = [actionSearch, endPointHd];
const pitwListHeaders = [actionSearch];
const pitwXmlHeaders = [actionEmpty];

const collection = {
  info: {
    _postman_id: 'hddt-healthcheck-001',
    name: 'HoaDonDienTu - Healthcheck',
    description: [
      'Healthcheck API hoadondientu.gdt.gov.vn/api — query/header khớp call site production + request-id UUID.',
      '',
      'Họ proxy (Chrome/120, Accept JSON): captcha, authenticate, profile, dsdkts, guest, relative.',
      'Họ crawler HĐ (Chrome/106, Action/End-Point): excel, detail, xml, related, TBSS. Không Cookie jar.',
      'Họ PITW (Chrome/150 Edg): Referer TNCN; Cookie chỉ khi pitw_cookie.',
      '',
      'Guest: hdon + (khmshdon==6 ? tdlap : tgtttbso). FE kiem-tra-hoa-don + routes/index.js.',
      'Excel: Action "Xuất hóa đơn (hóa đơn mua vào)"; sco search thêm ttxly==8 (Node crawl-excel).',
      'purchase dùng export-excel-sold?type=purchase; sold không gửi type.',
      'Detail: Action "Xem hóa đơn (hóa đơn bán ra)". XML: Action C# "Xuất xml (hóa đơn mua vào)".',
      'Related: Action "Xem thông tin liên quan (hóa đơn bán ra)". Relative: Bearer only (proxy).',
      'TBSS: sort ngay:desc,so:desc; search ngay=ge/le; size 50; Action Tìm kiếm.',
      'PITW: nlap ISO (VN 00:00 / 23:59:59.999); size 50. Không gọi pitw/export-excel (chỉ config).',
      'XML PITW: Action rỗng + Referer tra-cuu-chung-tu-tncn. Cookie inject run.js nếu pitw_cookie.',
      '',
      'npm test = 01_PUBLIC. npm run test:all = toàn bộ folder (login nếu có tài khoản).',
      'Login: npm run test:login -- --env-var hddt_username=... --env-var hddt_password=...',
      '',
      'Assert theo logic repo: HTTP 200 + body đúng shape. WAF 403 / HTML WAF / 401 / JSON lỗi → FAIL.',
      'Excel: xlsx PK. Detail: id. XML: ZIP PK. Related: khhdon. TBSS/PITW: datas[]. Guest: ttxly hoặc body rỗng.',
    ].join('\n'),
    schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',
  },
  protocolProfileBehavior: ppbNoFingerprint,
  variable: [
    { key: 'baseUrl', value: 'https://hoadondientu.gdt.gov.vn' },
    { key: 'captchaBaseUrl', value: 'https://captcha.minvoice.com.vn' },
  ],
  item: [],
};

collection.item.push({
  name: '01_PUBLIC',
  item: [
    itemReq('01 GET portal', {
      method: 'GET',
      header: headersPortal(),
      url: portalUrl(),
    }, assertPortal),
    itemReq('02 GET /api/captcha', {
      method: 'GET',
      header: headersProxy(),
      url: tctUrl(['captcha']),
    }, assertCaptchaJson),
    itemReq('03 GET /api/category/public/dsdkts/{mst}/manager', {
      method: 'GET',
      header: headersProxy(),
      url: tctUrl(['category', 'public', 'dsdkts', '{{test_mst}}', 'manager']),
    }, assertCategory),
  ],
});

collection.item.push({
  name: '02_LOGIN',
  item: [
    itemReq('01 GET portal', {
      method: 'GET',
      header: headersPortal(),
      url: portalUrl(),
    }, assertPortal, { cookies: true }),
    itemReq('02 GET /api/captcha', {
      method: 'GET',
      header: headersProxy(),
      url: tctUrl(['captcha']),
    }, assertCaptchaJson, { cookies: true }),
    itemReq('03 OCR tax_invoice_gov', {
      method: 'POST',
      header: [
        { key: 'Accept', value: '*/*' },
        { key: 'Content-Type', value: 'application/json' },
        requestId,
      ],
      body: {
        mode: 'raw',
        raw: '{}',
        options: { raw: { language: 'json' } },
      },
      url: '{{captchaBaseUrl}}/api/ocrcaptcha/tax_invoice_gov',
      description: 'Newman rewrite sang postman-echo; OCR thật chạy trong run.js (multipart SVG).',
    }, assertOcrTrace),
    itemReq('04 POST /api/security-taxpayer/authenticate', {
      method: 'POST',
      header: headersProxy([{ key: 'Content-Type', value: 'application/json' }]),
      body: {
        mode: 'raw',
        raw: JSON.stringify(
          {
            username: '{{hddt_username}}',
            password: '{{hddt_password}}',
            ckey: '{{hddt_ckey}}',
            cvalue: '{{hddt_cvalue}}',
          },
          null,
          2
        ),
        options: { raw: { language: 'json' } },
      },
      url: tctUrl(['security-taxpayer', 'authenticate']),
    }, assertAuthenticate, { cookies: true }),
    itemReq('05 GET /api/security-taxpayer/profile', {
      method: 'GET',
      header: headersProxy([{ key: 'Authorization', value: 'Bearer {{hddt_token}}' }]),
      url: tctUrl(['security-taxpayer', 'profile'], [
        { key: 'smiUsername', value: '{{hddt_username}}' },
      ]),
    }, assertProfile, { cookies: true }),
  ],
});

collection.item.push({
  name: '03_GUEST',
  item: [
    itemReq('01 GET portal', {
      method: 'GET',
      header: headersPortal(),
      url: portalUrl(),
    }, assertPortal),
    itemReq('02 GET /api/captcha', {
      method: 'GET',
      header: headersProxy(),
      url: tctUrl(['captcha']),
    }, assertCaptchaJson),
    itemReq('03 OCR tax_invoice_gov', {
      method: 'POST',
      header: [
        { key: 'Accept', value: '*/*' },
        { key: 'Content-Type', value: 'application/json' },
        requestId,
      ],
      body: {
        mode: 'raw',
        raw: '{}',
        options: { raw: { language: 'json' } },
      },
      url: '{{captchaBaseUrl}}/api/ocrcaptcha/tax_invoice_gov',
      description: 'Newman rewrite sang postman-echo; OCR thật chạy trong run.js.',
    }, assertOcrTrace),
    itemReq('04 GET /api/{from}/guest-invoices', {
      method: 'GET',
      header: headersProxy(),
      description: [
        'FE gửi hdon + tgtttbso + tdlap. Backend (routes/index.js) xóa tgtttbso nếu khmshdon==6, ngược lại xóa tdlap.',
        'C# CrawlCheckInvoice luôn gửi hdon="0"+Serial[0] và tgtttbso. run.js áp logic Node/FE.',
      ].join(' '),
      url: {
        raw: '{{baseUrl}}/api/{{guest_from}}/guest-invoices?cvalue={{hddt_cvalue}}&ckey={{hddt_ckey}}&khmshdon={{guest_khmshdon}}&hdon={{guest_hdon}}&nbmst={{guest_nbmst}}&khhdon={{guest_khhdon}}&shdon={{guest_shdon}}&tgtttbso={{guest_tgtttbso}}&tdlap={{guest_tdlap}}',
        protocol: 'https',
        host: ['hoadondientu', 'gdt', 'gov', 'vn'],
        path: ['api', '{{guest_from}}', 'guest-invoices'],
        query: [
          { key: 'cvalue', value: '{{hddt_cvalue}}' },
          { key: 'ckey', value: '{{hddt_ckey}}' },
          { key: 'khmshdon', value: '{{guest_khmshdon}}' },
          { key: 'hdon', value: '{{guest_hdon}}' },
          { key: 'nbmst', value: '{{guest_nbmst}}' },
          { key: 'khhdon', value: '{{guest_khhdon}}' },
          { key: 'shdon', value: '{{guest_shdon}}' },
          { key: 'tgtttbso', value: '{{guest_tgtttbso}}' },
          { key: 'tdlap', value: '{{guest_tdlap}}' },
        ],
      },
    }, assertGuest),
  ],
});

collection.item.push({
  name: '04_EXCEL',
  item: [
    authGet('01 GET /api/query/invoices/export-excel', ['query', 'invoices', 'export-excel'], excelQs, excelHeaders, assertExcel),
    authGet('02 GET /api/sco-query/invoices/export-excel', ['sco-query', 'invoices', 'export-excel'], excelScoQs, excelHeaders, assertExcel),
    authGet('03 GET /api/query/invoices/export-excel-sold', ['query', 'invoices', 'export-excel-sold'], excelPurchaseQs, excelHeaders, assertExcel),
    authGet('04 GET /api/sco-query/invoices/export-excel-sold', ['sco-query', 'invoices', 'export-excel-sold'], excelPurchaseScoQs, excelHeaders, assertExcel),
  ],
});

collection.item.push({
  name: '05_DETAIL',
  item: [
    authGet('01 GET /api/query/invoices/detail', ['query', 'invoices', 'detail'], invoiceQs, detailHeaders, assertDetail),
    authGet('02 GET /api/sco-query/invoices/detail', ['sco-query', 'invoices', 'detail'], invoiceQs, detailHeaders, assertDetail),
  ],
});

collection.item.push({
  name: '06_XML',
  item: [
    authGet('01 GET /api/query/invoices/export-xml', ['query', 'invoices', 'export-xml'], invoiceQs, xmlHeaders, assertInvoiceXml),
    authGet('02 GET /api/sco-query/invoices/export-xml', ['sco-query', 'invoices', 'export-xml'], invoiceQs, xmlHeaders, assertInvoiceXml),
  ],
});

collection.item.push({
  name: '07_RELATED',
  item: [
    authGet('01 GET /api/query/invoices/related', ['query', 'invoices', 'related'], invoiceQs, relatedHeaders, assertRelated),
    authGet('02 GET /api/sco-query/invoices/related', ['sco-query', 'invoices', 'related'], invoiceQs, relatedHeaders, assertRelated),
    authGet('03 GET /api/query/invoices/relative', ['query', 'invoices', 'relative'], invoiceQs, undefined, assertRelative, 'proxy'),
    authGet('04 GET /api/sco-query/invoices/relative', ['sco-query', 'invoices', 'relative'], invoiceQs, undefined, assertRelative, 'proxy'),
  ],
});

collection.item.push({
  name: '08_TBSS',
  item: [
    authGet('01 GET /api/explanation/tbssdts/signed-notifications', ['explanation', 'tbssdts', 'signed-notifications'], [
      { key: 'sort', value: '{{tbss_sort}}' },
      { key: 'search', value: '{{tbss_search}}' },
      { key: 'size', value: '{{page_size}}' },
    ], tbssHeaders, assertTbss),
    authGet('02 GET /api/sco-explanation/tbssdts/signed-notifications', ['sco-explanation', 'tbssdts', 'signed-notifications'], [
      { key: 'sort', value: '{{tbss_sort}}' },
      { key: 'search', value: '{{tbss_search}}' },
      { key: 'size', value: '{{page_size}}' },
    ], tbssHeaders, assertTbss),
  ],
});

collection.item.push({
  name: '09_PITW',
  item: [
    authGet('01 GET /api/pitw', ['pitw'], [
      { key: 'size', value: '{{page_size}}' },
      { key: 'search', value: '{{pitw_search}}' },
      { key: 'sort', value: 'nlap:desc' },
    ], pitwListHeaders, assertPitwList, 'pitw'),
    authGet('02 GET /api/pitw/export-xml', ['pitw', 'export-xml'], [
      { key: 'hsgoc', value: '{{pitw_hsgoc}}' },
    ], pitwXmlHeaders, assertPitwXml, 'pitw'),
  ],
});

fs.writeFileSync(out, JSON.stringify(collection, null, 2) + '\n', 'utf8');
console.log('Wrote', out);
