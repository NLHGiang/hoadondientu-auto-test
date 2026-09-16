const fs = require('fs');
const path = require('path');
const { readResponseBody: readBodyFromBuffer } = require('./response-buffer');

const INLINE_PREVIEW_MAX = 2048;
const EXTERNAL_THRESHOLD = 4096;

function getHeader(response, name) {
  if (!response?.headers) return '';
  if (typeof response.headers.get === 'function') {
    return response.headers.get(name) || response.headers.get(name.toLowerCase()) || '';
  }
  if (Array.isArray(response.headers)) {
    const found = response.headers.find((h) => h.key?.toLowerCase() === name.toLowerCase());
    return found?.value || '';
  }
  return response.headers[name] || response.headers[name.toLowerCase()] || '';
}

function guessExtension(contentType, bodyText) {
  const ct = (contentType || '').toLowerCase();
  if (ct.includes('jpeg') || ct.includes('jpg')) return '.jpg';
  if (ct.includes('png')) return '.png';
  if (ct.includes('gif')) return '.gif';
  if (ct.includes('pdf')) return '.pdf';
  // HTML/XML/JSON… lưu .txt — mở file:// không chạy window.location / meta refresh
  return '.txt';
}

function isExternalTextBody(contentType, text) {
  const ct = (contentType || '').toLowerCase();
  if (/^text\/html|^application\/xml|^text\/xml|^application\/json/i.test(ct)) return true;
  if (!text) return false;
  const trimmed = text.trimStart();
  return /<!DOCTYPE|<html/i.test(text) || trimmed.startsWith('<?xml');
}

function readResponseBody(response) {
  return readBodyFromBuffer(response);
}

function looksLikeTextPayload(text, buffer) {
  if (text) {
    const trimmed = text.trimStart();
    if (trimmed.startsWith('<?xml') || /<!DOCTYPE|<html/i.test(trimmed)) return true;
  }
  if (buffer?.length) {
    const head = buffer.slice(0, 128).toString('utf8').trimStart();
    if (head.startsWith('<?xml') || head.startsWith('<!DOCTYPE') || /^<html/i.test(head)) return true;
  }
  return false;
}

function isBinaryContent(contentType, buffer, text) {
  if (looksLikeTextPayload(text, buffer)) return false;

  const ct = (contentType || '').toLowerCase();
  if (/^image\//i.test(ct)) return true;
  if (/^application\/(pdf|zip)/i.test(ct)) return true;
  if (/^application\/octet-stream/i.test(ct)) return true;
  if (!buffer || buffer.length === 0) return false;
  const sample = buffer.slice(0, Math.min(buffer.length, 512));
  for (let i = 0; i < sample.length; i++) {
    if (sample[i] === 0) return true;
  }
  return false;
}

/**
 * Lưu response ra file riêng khi lớn / binary / HTML / XML.
 * @returns {{ storage: 'inline'|'file'|'base64', relativePath?, preview?, size, contentType, encoding? }}
 */
function saveResponse(reportDir, baseName, response) {
  const contentType = getHeader(response, 'Content-Type') || 'text/plain';
  const { buffer, text } = readResponseBody(response);
  const size = buffer.length;
  const binary = isBinaryContent(contentType, buffer, text);
  const ext = guessExtension(contentType, text);
  const forceExternal =
    binary ||
    size > EXTERNAL_THRESHOLD ||
    isExternalTextBody(contentType, text);

  const responsesDir = path.join(reportDir, 'responses');
  fs.mkdirSync(responsesDir, { recursive: true });

  if (!forceExternal && size <= EXTERNAL_THRESHOLD) {
    return {
      storage: 'inline',
      size,
      contentType,
      body: text || buffer.toString('utf8'),
      preview: (text || buffer.toString('utf8')).slice(0, INLINE_PREVIEW_MAX),
    };
  }

  const fileName = `${baseName}${binary && !/\.(jpg|png|gif|pdf)$/i.test(ext) ? '.bin' : ext}`;
  const relativePath = `./responses/${fileName}`;
  const absolutePath = path.join(responsesDir, fileName);

  if (binary) {
    fs.writeFileSync(absolutePath, buffer);
    const meta = {
      contentType,
      size,
      encoding: 'binary',
      base64Preview: buffer.slice(0, 256).toString('base64'),
    };
    fs.writeFileSync(`${absolutePath}.meta.json`, JSON.stringify(meta, null, 2));
    return {
      storage: 'base64',
      relativePath,
      metaPath: `${relativePath}.meta.json`,
      size,
      contentType,
      encoding: 'binary',
      preview: `[binary ${size} bytes — xem file đính kèm]`,
    };
  }

  const payload = text || buffer.toString('utf8');
  fs.writeFileSync(absolutePath, payload, 'utf8');
  return {
    storage: 'file',
    relativePath,
    size,
    contentType,
    encoding: 'utf8',
    preview: payload.slice(0, INLINE_PREVIEW_MAX),
    truncated: payload.length > INLINE_PREVIEW_MAX,
  };
}

module.exports = { saveResponse, getHeader, readResponseBody };
