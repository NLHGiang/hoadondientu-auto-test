/**
 * CLI: node lib/hddt-ocr-cli.js <svgPath> [captchaBaseUrl]
 * POST SVG → /api/ocrcaptcha/tax_invoice_gov, print OCR text to stdout.
 */
const fs = require('fs');
const http = require('http');
const https = require('https');
const { URL } = require('url');

const svgPath = process.argv[2];
const endpoint = (process.argv[3] || 'https://captcha.minvoice.com.vn').replace(/\/$/, '');
if (!svgPath || !fs.existsSync(svgPath)) {
  console.error('Usage: node hddt-ocr-cli.js <svgPath> [captchaBaseUrl]');
  process.exit(2);
}

const svg = fs.readFileSync(svgPath);
const boundary = `----HddtOcr${Date.now()}`;
const body = Buffer.concat([
  Buffer.from(
    `--${boundary}\r\nContent-Disposition: form-data; name="Captcha"; filename="filename.svg"\r\nContent-Type: image/svg+xml\r\n\r\n`,
    'utf8'
  ),
  svg,
  Buffer.from(`\r\n--${boundary}--\r\n`, 'utf8'),
]);

const url = new URL(`${endpoint}/api/ocrcaptcha/tax_invoice_gov`);
const transport = url.protocol === 'https:' ? https : http;

const req = transport.request(
  {
    hostname: url.hostname,
    port: url.port || (url.protocol === 'https:' ? 443 : 80),
    path: url.pathname,
    method: 'POST',
    headers: {
      'Content-Type': `multipart/form-data; boundary=${boundary}`,
      'Content-Length': body.length,
      Accept: '*/*',
    },
  },
  (res) => {
    const chunks = [];
    res.on('data', (c) => chunks.push(c));
    res.on('end', () => {
      const text = Buffer.concat(chunks).toString('utf8').trim().replace(/^"|"$/g, '');
      if (res.statusCode >= 400 || !text || text.includes('ERROR_')) {
        console.error(`OCR HTTP ${res.statusCode}: ${text.slice(0, 300)}`);
        process.exit(1);
      }
      process.stdout.write(text);
    });
  }
);
req.on('error', (e) => {
  console.error(e.message);
  process.exit(1);
});
req.write(body);
req.end();
