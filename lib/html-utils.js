function escapeHtml(text) {
  return String(text ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatDuration(ms) {
  if (ms == null) return '—';
  if (ms < 1000) return `${ms}ms`;
  return `${(ms / 1000).toFixed(2)}s`;
}

function statusClass(code) {
  if (!code) return '';
  if (code >= 200 && code < 300) return 'pass';
  if (code >= 400) return 'fail';
  return '';
}

module.exports = { escapeHtml, formatDuration, statusClass };
