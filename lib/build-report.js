const fs = require('fs');
const path = require('path');
const { escapeHtml, formatDuration, statusClass } = require('./html-utils');

function buildReportHtml(meta, cases) {
  const passed = cases.filter((c) => c.failedAssertions === 0 && !c.error).length;
  const failed = cases.length - passed;

  const rows = cases
    .map((c, i) => {
      const status = c.error ? 'error' : c.failedAssertions > 0 ? 'fail' : 'pass';
      return `<tr class="${status}" data-target="case-${i}">
        <td>${i + 1}</td>
        <td>${escapeHtml(c.folder)}</td>
        <td>${escapeHtml(c.name)}</td>
        <td><span class="badge ${status}">${c.error ? 'ERROR' : c.failedAssertions > 0 ? 'FAIL' : 'PASS'}</span></td>
        <td>${escapeHtml(c.method)}</td>
        <td>${c.responseCode ?? '—'}</td>
        <td>${c.responseTime != null ? `${c.responseTime}ms` : '—'}</td>
      </tr>`;
    })
    .join('\n');

  const details = cases.map((c, i) => renderCase(i, c)).join('\n');

  return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Test Report — ${escapeHtml(meta.title)}</title>
  <style>
    :root { --bg:#0f1419; --card:#1a2332; --border:#2d3a4d; --text:#e6edf3; --muted:#8b9cb3; --pass:#3fb950; --fail:#f85149; --warn:#d29922; --accent:#58a6ff; }
    * { box-sizing: border-box; }
    body { margin:0; font-family: "Segoe UI", system-ui, sans-serif; background:var(--bg); color:var(--text); line-height:1.5; }
    header { padding:1.5rem 2rem; border-bottom:1px solid var(--border); background:var(--card); }
    header h1 { margin:0 0 .5rem; font-size:1.35rem; }
    .meta { color:var(--muted); font-size:.9rem; }
    .summary { display:flex; gap:1rem; flex-wrap:wrap; margin-top:1rem; }
    .stat { background:var(--bg); border:1px solid var(--border); border-radius:8px; padding:.6rem 1rem; min-width:100px; }
    .stat strong { display:block; font-size:1.4rem; }
    .stat.pass strong { color:var(--pass); }
    .stat.fail strong { color:var(--fail); }
    main { padding:1.5rem 2rem 3rem; max-width:1400px; margin:0 auto; }
    h2 { font-size:1.1rem; margin:2rem 0 1rem; }
    table { width:100%; border-collapse:collapse; font-size:.9rem; }
    th, td { border:1px solid var(--border); padding:.5rem .75rem; text-align:left; }
    th { background:var(--card); position:sticky; top:0; }
    tr.pass td { border-left:3px solid var(--pass); }
    tr.fail td { border-left:3px solid var(--fail); }
    tr.error td { border-left:3px solid var(--warn); }
    tr[data-target] { cursor:pointer; }
    tr[data-target]:hover { background:#1e2a3a; }
    .badge { font-size:.75rem; padding:.15rem .45rem; border-radius:4px; font-weight:600; }
    .badge.pass { background:#23863633; color:var(--pass); }
    .badge.fail { background:#da363333; color:var(--fail); }
    .badge.error { background:#9e6a0333; color:var(--warn); }
    .case { background:var(--card); border:1px solid var(--border); border-radius:10px; margin-bottom:1.25rem; overflow:hidden; }
    .case-header { padding:1rem 1.25rem; border-bottom:1px solid var(--border); display:flex; justify-content:space-between; align-items:flex-start; gap:1rem; flex-wrap:wrap; }
    .case-header h3 { margin:0; font-size:1rem; }
    .case-body { padding:1rem 1.25rem; }
    .section { margin-bottom:1.25rem; }
    .section h4 { margin:0 0 .5rem; font-size:.85rem; color:var(--muted); text-transform:uppercase; letter-spacing:.04em; }
    pre, code { font-family: Consolas, "Cascadia Mono", monospace; font-size:.8rem; }
    pre { background:var(--bg); border:1px solid var(--border); border-radius:6px; padding:.75rem 1rem; overflow:auto; max-height:320px; white-space:pre-wrap; word-break:break-all; margin:0; }
    .kv { display:grid; grid-template-columns:140px 1fr; gap:.25rem .75rem; font-size:.85rem; }
    .kv dt { color:var(--muted); }
    .assertions { list-style:none; padding:0; margin:0; }
    .assertions li { padding:.35rem 0; border-bottom:1px solid var(--border); font-size:.85rem; }
    .assertions li.pass { color:var(--pass); }
    .assertions li.fail { color:var(--fail); }
    a { color:var(--accent); }
    .file-link { display:inline-flex; align-items:center; gap:.5rem; padding:.5rem .75rem; background:var(--bg); border:1px solid var(--border); border-radius:6px; text-decoration:none; margin-top:.5rem; }
    .preview-note { color:var(--muted); font-size:.8rem; margin-top:.35rem; }
    .copy-btn { font-size:.75rem; padding:.2rem .5rem; cursor:pointer; background:var(--border); border:none; color:var(--text); border-radius:4px; margin-left:.5rem; }
  </style>
</head>
<body>
  <header>
    <h1>${escapeHtml(meta.title)}</h1>
    <div class="meta">
      <div>Thời gian: ${escapeHtml(meta.startedAt)} → ${escapeHtml(meta.finishedAt)} (${formatDuration(meta.durationMs)})</div>
      <div>Collection: ${escapeHtml(meta.collection)} · Environment: ${escapeHtml(meta.environment)}</div>
      <div>Thư mục báo cáo: <code>${escapeHtml(meta.reportDirName)}</code></div>
    </div>
    <div class="summary">
      <div class="stat"><span>Tổng</span><strong>${cases.length}</strong></div>
      <div class="stat pass"><span>Pass</span><strong>${passed}</strong></div>
      <div class="stat fail"><span>Fail / Error</span><strong>${failed}</strong></div>
    </div>
  </header>
  <main>
    <h2>Tổng quan test case</h2>
    <table id="overview">
      <thead><tr><th>#</th><th>Folder</th><th>Request</th><th>Kết quả</th><th>Method</th><th>Status</th><th>Time</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>

    <h2>Chi tiết từng test case</h2>
    ${details}
  </main>
  <script>
    document.querySelectorAll('tr[data-target]').forEach(row => {
      row.addEventListener('click', () => {
        const id = row.getAttribute('data-target');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pre = btn.closest('.section')?.querySelector('pre[data-copy]');
        if (!pre) return;
        navigator.clipboard.writeText(pre.textContent).then(() => {
          btn.textContent = 'Đã copy';
          setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
        });
      });
    });
  </script>
</body>
</html>`;
}

function renderCase(index, c) {
  const status = c.error ? 'error' : c.failedAssertions > 0 ? 'fail' : 'pass';
  const assertions = (c.assertions || [])
    .map((a) => `<li class="${a.error ? 'fail' : 'pass'}">${a.error ? '✗' : '✓'} ${escapeHtml(a.name || a.assertion || 'assertion')}${a.error ? ` — ${escapeHtml(a.error.message || String(a.error))}` : ''}</li>`)
    .join('');

  const reqHeaders = (c.requestHeaders || [])
    .map((h) => `${escapeHtml(h.key)}: ${escapeHtml(h.value)}`)
    .join('\n');

  let responseSection = '';
  if (c.responseSaved?.storage === 'inline') {
    responseSection = `<pre>${escapeHtml(c.responseSaved.body || '')}</pre>`;
  } else if (c.responseSaved?.relativePath) {
    responseSection = `
      <a class="file-link" href="${escapeHtml(c.responseSaved.relativePath)}" target="_blank">📄 ${escapeHtml(c.responseSaved.relativePath)}</a>
      <span class="preview-note">${escapeHtml(c.responseSaved.contentType || '')} · ${c.responseSaved.size} bytes · ${escapeHtml(c.responseSaved.encoding || c.responseSaved.storage)}</span>
      ${c.responseSaved.metaPath ? `<div><a href="${escapeHtml(c.responseSaved.metaPath)}">meta.json</a></div>` : ''}
      ${c.responseSaved.preview ? `<h4 style="margin-top:1rem;font-size:.8rem;color:var(--muted)">Preview (đầu file)</h4><pre>${escapeHtml(c.responseSaved.preview)}</pre>${c.responseSaved.truncated ? '<p class="preview-note">… nội dung đầy đủ trong file đính kèm</p>' : ''}` : ''}`;
  } else {
    responseSection = '<p class="preview-note">Không có response body</p>';
  }

  return `
  <article class="case" id="case-${index}">
    <div class="case-header">
      <div>
        <h3>${index + 1}. [${escapeHtml(c.folder)}] ${escapeHtml(c.name)}</h3>
        <div class="meta">${escapeHtml(c.method)} ${escapeHtml(c.url)}</div>
      </div>
      <span class="badge ${status}">${status.toUpperCase()}</span>
    </div>
    <div class="case-body">
      ${c.error ? `<div class="section"><h4>Lỗi</h4><pre>${escapeHtml(c.error)}</pre></div>` : ''}

      <div class="section">
        <h4>cURL <button type="button" class="copy-btn">Copy</button></h4>
        <p class="preview-note">Authorization / Cookie / password ẩn trong report; Newman đã gửi giá trị thật trên wire. Copy curl không replay được phần đã ẩn.</p>
        <pre data-copy>${escapeHtml(c.curl || '')}</pre>
      </div>

      <div class="section">
        <h4>Request</h4>
        <dl class="kv">
          <dt>Method</dt><dd>${escapeHtml(c.method)}</dd>
          <dt>URL</dt><dd><code>${escapeHtml(c.url)}</code></dd>
          ${c.requestBody ? `<dt>Body</dt><dd><pre>${escapeHtml(c.requestBody)}</pre></dd>` : ''}
        </dl>
        ${reqHeaders ? `<h4 style="margin-top:.75rem;font-size:.8rem;color:var(--muted)">Headers</h4><pre>${reqHeaders}</pre>` : ''}
      </div>

      <div class="section">
        <h4>Response</h4>
        <dl class="kv">
          <dt>Status</dt><dd>${c.responseCode ?? '—'}</dd>
          <dt>Time</dt><dd>${c.responseTime != null ? `${c.responseTime}ms` : '—'}</dd>
          <dt>Content-Type</dt><dd>${escapeHtml(c.responseContentType || '—')}</dd>
          <dt>Size</dt><dd>${c.responseSaved?.size ?? 0} bytes</dd>
        </dl>
        ${responseSection}
      </div>

      <div class="section">
        <h4>Assertions / Test scripts</h4>
        <ul class="assertions">${assertions || '<li class="preview-note">Không có assertion</li>'}</ul>
      </div>
    </div>
  </article>`;
}

function writeReport(reportDir, meta, cases) {
  const html = buildReportHtml(meta, cases);
  const htmlPath = path.join(reportDir, 'test-report.html');
  fs.writeFileSync(htmlPath, html, 'utf8');

  const manifest = {
    ...meta,
    summary: {
      total: cases.length,
      passed: cases.filter((c) => c.failedAssertions === 0 && !c.error).length,
      failed: cases.filter((c) => c.failedAssertions > 0 || c.error).length,
    },
    cases: cases.map(({ curl, requestBody, responseSaved, ...rest }) => ({
      ...rest,
      responseFile: responseSaved?.relativePath || null,
    })),
  };
  fs.writeFileSync(path.join(reportDir, 'test-report.json'), JSON.stringify(manifest, null, 2), 'utf8');

  return htmlPath;
}

module.exports = { writeReport, buildReportHtml };
