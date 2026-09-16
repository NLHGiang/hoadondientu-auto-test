function shellQuote(value) {
  if (value == null) return "''";
  return `'${String(value).replace(/'/g, `'\\''`)}'`;
}

function resolveUrl(url) {
  if (!url) return '';
  if (typeof url.toString === 'function') {
    const s = url.toString();
    if (s && s !== '[object Object]') return s;
  }
  if (typeof url === 'string') return url;
  if (url.raw) return url.raw;
  const protocol = url.protocol || 'https';
  const host = Array.isArray(url.host) ? url.host.join('.') : url.host || '';
  const pathPart = Array.isArray(url.path) ? `/${url.path.join('/')}` : url.path || '';
  const query =
    Array.isArray(url.query) && url.query.length
      ? `?${url.query.map((q) => `${encodeURIComponent(q.key)}=${encodeURIComponent(q.value ?? '')}`).join('&')}`
      : '';
  return `${protocol}://${host}${pathPart}${query}`;
}

function headersToList(headers) {
  if (!headers) return [];
  if (headers.members) return headers.members.map((h) => ({ key: h.key, value: h.value }));
  if (Array.isArray(headers)) return headers.map((h) => ({ key: h.key, value: h.value }));
  if (typeof headers === 'object') return Object.entries(headers).map(([key, value]) => ({ key, value }));
  return [];
}

function bodyToString(body) {
  if (!body) return '';
  if (typeof body === 'string') return body;
  if (body.mode === 'urlencoded' && Array.isArray(body.urlencoded)) {
    return body.urlencoded
      .filter((f) => f.key && !f.disabled)
      .map((f) => `${encodeURIComponent(f.key)}=${encodeURIComponent(f.value ?? '')}`)
      .join('&');
  }
  if (body.mode === 'raw' && body.raw) return body.raw;
  if (body.mode === 'formdata' && Array.isArray(body.formdata)) {
    return body.formdata.map((f) => `${f.key}=${f.value ?? ''}`).join('&');
  }
  return '';
}

function urlencodedFields(body) {
  if (!body || body.mode !== 'urlencoded') return null;
  const fields = Array.isArray(body.urlencoded)
    ? body.urlencoded
    : body.urlencoded?.members || null;
  if (!fields) return null;
  return fields.filter((f) => f.key && !f.disabled);
}

function isSecretHeader(key) {
  const k = String(key || '');
  return /^(cookie|set-cookie|authorization)$/i.test(k) || /password/i.test(k);
}

function isFingerprintHeader(key) {
  return /^(postman-token|cache-control|host|connection|content-length)$/i.test(String(key || ''));
}

function filterFingerprintHeaders(headers) {
  return (headers || []).filter((h) => h && h.key && !h.disabled && !isFingerprintHeader(h.key));
}

function maskHeaderValue(key, value) {
  const raw = value == null ? '' : String(value);
  if (!raw) return '';
  return `[đã gửi ${raw.length} ký tự — ẩn trong report]`;
}

function maskSecrets(headers, body) {
  const maskedHeaders = headers.map((h) =>
    isSecretHeader(h.key) ? { ...h, value: maskHeaderValue(h.key, h.value) } : h
  );
  let maskedBody = body;
  if (typeof body === 'string' && /(password|hddt_password|"token")/i.test(body)) {
    maskedBody = body
      .replace(/(_password|_verifyCode|password)=[^&]*/gi, '$1=***')
      .replace(/"(password|hddt_password|token)"\s*:\s*"[^"]*"/gi, '"$1":"***"');
  }
  return { headers: maskedHeaders, body: maskedBody };
}

function buildCurl(request, options = {}) {
  const mask = options.mask === true;
  const json = typeof request.toJSON === 'function' ? request.toJSON() : request;
  const method = (json.method || 'GET').toUpperCase();
  const url = resolveUrl(json.url);
  let headers = filterFingerprintHeaders(headersToList(json.header));
  let body = bodyToString(json.body);
  const fields = urlencodedFields(json.body);

  if (mask) {
    ({ headers, body } = maskSecrets(headers, body));
  }

  const lines = [`curl ${shellQuote(url)}`];
  if (method !== 'GET') {
    lines.push(`  -X ${method}`);
  }

  for (const h of headers) {
    if (!h.key) continue;
    lines.push(`  -H ${shellQuote(`${h.key}: ${h.value}`)}`);
  }

  if (fields && fields.length && method !== 'GET' && method !== 'HEAD') {
    for (const f of fields) {
      let val = f.value ?? '';
      if (mask && /matKhau|password|captcha/i.test(f.key)) val = '***';
      lines.push(`  --data-urlencode ${shellQuote(`${f.key}=${val}`)}`);
    }
  } else if (body && method !== 'GET' && method !== 'HEAD') {
    lines.push(`  --data-raw ${shellQuote(body)}`);
  }

  return lines.join(' \\\n');
}

module.exports = {
  buildCurl,
  resolveUrl,
  headersToList,
  bodyToString,
  maskSecrets,
  filterFingerprintHeaders,
  filterAndSortHeaders: filterFingerprintHeaders,
  isFingerprintHeader,
};
