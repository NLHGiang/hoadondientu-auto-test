/** Tạo slug an toàn cho tên file từ tên request/folder. */
function slugify(text) {
  return String(text || 'request')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80) || 'request';
}

module.exports = { slugify };
