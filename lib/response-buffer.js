function getResponseHeader(response, name) {
  if (!response?.headers) return '';
  if (typeof response.headers.get === 'function') {
    return response.headers.get(name) || response.headers.get(name.toLowerCase()) || '';
  }
  if (Array.isArray(response.headers)) {
    const found = response.headers.find((h) => h.key?.toLowerCase() === name.toLowerCase());
    return found?.value || '';
  }
  const key = Object.keys(response.headers).find(
    (k) => k.toLowerCase() === name.toLowerCase()
  );
  return key ? response.headers[key] : '';
}

function isBinaryContentType(contentType) {
  const ct = (contentType || '').toLowerCase();
  return (
    /^image\//i.test(ct) ||
    /^application\/(pdf|zip|octet-stream)/i.test(ct) ||
    /^audio\//i.test(ct) ||
    /^video\//i.test(ct)
  );
}

function streamToBuffer(stream) {
  if (stream == null) return null;

  if (Buffer.isBuffer(stream)) {
    return stream.length ? stream : null;
  }

  if (stream instanceof ArrayBuffer) {
    return stream.byteLength ? Buffer.from(stream) : null;
  }

  if (ArrayBuffer.isView(stream)) {
    return stream.byteLength
      ? Buffer.from(stream.buffer, stream.byteOffset, stream.byteLength)
      : null;
  }

  if (stream.type === 'Base64' && typeof stream.data === 'string') {
    const buf = Buffer.from(stream.data, 'base64');
    return buf.length ? buf : null;
  }

  if (stream.type === 'Buffer' && Array.isArray(stream.data)) {
    const buf = Buffer.from(stream.data);
    return buf.length ? buf : null;
  }

  try {
    const buf = Buffer.from(stream);
    return buf.length ? buf : null;
  } catch {
    return null;
  }
}

/**
 * Đọc body response dạng Buffer — ưu tiên stream thô, không decode UTF-8 cho binary.
 */
function readRawBuffer(response) {
  if (!response) return null;

  const fromStream = streamToBuffer(response.stream);
  if (fromStream) return fromStream;

  const contentType = getResponseHeader(response, 'Content-Type');
  if (isBinaryContentType(contentType)) {
    return null;
  }

  if (typeof response.text === 'function') {
    try {
      const text = response.text();
      if (text) return Buffer.from(text, 'utf8');
    } catch {
      /* ignore */
    }
  }

  if (typeof response.body === 'string' && response.body) {
    return Buffer.from(response.body, 'utf8');
  }

  return null;
}

function readResponseBody(response) {
  const buffer = readRawBuffer(response) || Buffer.alloc(0);
  let text = '';

  const contentType = getResponseHeader(response, 'Content-Type');
  if (!isBinaryContentType(contentType)) {
    try {
      text = buffer.toString('utf8');
      if (text.includes('\uFFFD') && buffer.length > 64) {
        const head = buffer.slice(0, 128).toString('utf8').trimStart();
        if (!head.startsWith('<?xml') && !head.startsWith('<!DOCTYPE') && !/^<html/i.test(head)) {
          text = '';
        }
      }
    } catch {
      text = '';
    }
  }

  return { buffer, text };
}

module.exports = {
  getResponseHeader,
  isBinaryContentType,
  readRawBuffer,
  readResponseBody,
  streamToBuffer,
};
