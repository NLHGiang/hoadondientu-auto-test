# HoaDonDienTu Healthcheck

❌ **19 pass** / **9 fail** / **28 total** · 17.75s

| Field | Value |
|---|---|
| Thời gian | 2026-09-16T06:53:18.898Z → 2026-09-16T06:53:36.647Z |
| Collection | `HoaDonDienTu.healthcheck.postman_collection.json` |
| Environment | `HoaDonDienTu.environment.json` |
| Thư mục báo cáo | `test-report-20260916-135318` |

> Curl khớp header production + `request-id`. Copy vào Postman (Import → Raw text). Host/Connection do HTTP client gắn trên wire. Authorization / Cookie / password **không ẩn** — `last-test-report/` trên git sẽ chứa secret nếu commit.

## Fail / Error

| # | Folder | Request | Status | Assertion |
|---|---|---|---|---|
| 17 | 05_DETAIL | [01 GET /api/query/invoices/detail](#case-17) | 500 | HTTP 200 |
| 18 | 05_DETAIL | [02 GET /api/sco-query/invoices/detail](#case-18) | 500 | HTTP 200 |
| 19 | 06_XML | [01 GET /api/query/invoices/export-xml](#case-19) | 500 | HTTP 200 |
| 20 | 06_XML | [02 GET /api/sco-query/invoices/export-xml](#case-20) | 500 | HTTP 200 |
| 21 | 07_RELATED | [01 GET /api/query/invoices/related](#case-21) | 500 | HTTP 200 |
| 22 | 07_RELATED | [02 GET /api/sco-query/invoices/related](#case-22) | 500 | HTTP 200 |
| 23 | 07_RELATED | [03 GET /api/query/invoices/relative](#case-23) | 500 | HTTP 200 |
| 24 | 07_RELATED | [04 GET /api/sco-query/invoices/relative](#case-24) | 500 | HTTP 200 |
| 28 | 09_PITW | [02 GET /api/pitw/export-xml](#case-28) | 500 | HTTP 200 |

## Tổng quan

| # | Folder | Request | Kết quả | Method | Status | Time |
|---|---|---|---|---|---|---|
| 1 | 01_PUBLIC | [01 GET portal](#case-1) | ✅ PASS | GET | 200 | 198ms |
| 2 | 01_PUBLIC | [02 GET /api/captcha](#case-2) | ✅ PASS | GET | 200 | 39ms |
| 3 | 01_PUBLIC | [03 GET /api/category/public/dsdkts/{mst}/manager](#case-3) | ✅ PASS | GET | 200 | 36ms |
| 4 | 02_LOGIN | [01 GET portal](#case-4) | ✅ PASS | GET | 200 | 54ms |
| 5 | 02_LOGIN | [02 GET /api/captcha](#case-5) | ✅ PASS | GET | 200 | 37ms |
| 6 | 02_LOGIN | [03 OCR tax_invoice_gov](#case-6) | ✅ PASS | POST | 200 | 1523ms |
| 7 | 02_LOGIN | [04 POST /api/security-taxpayer/authenticate](#case-7) | ✅ PASS | POST | 200 | 285ms |
| 8 | 02_LOGIN | [05 GET /api/security-taxpayer/profile](#case-8) | ✅ PASS | GET | 200 | 34ms |
| 9 | 03_GUEST | [01 GET portal](#case-9) | ✅ PASS | GET | 200 | 50ms |
| 10 | 03_GUEST | [02 GET /api/captcha](#case-10) | ✅ PASS | GET | 200 | 36ms |
| 11 | 03_GUEST | [03 OCR tax_invoice_gov](#case-11) | ✅ PASS | POST | 200 | 322ms |
| 12 | 03_GUEST | [04 GET /api/{from}/guest-invoices](#case-12) | ✅ PASS | GET | 200 | 34ms |
| 13 | 04_EXCEL | [01 GET /api/query/invoices/export-excel](#case-13) | ✅ PASS | GET | 200 | 130ms |
| 14 | 04_EXCEL | [02 GET /api/sco-query/invoices/export-excel](#case-14) | ✅ PASS | GET | 200 | 86ms |
| 15 | 04_EXCEL | [03 GET /api/query/invoices/export-excel-sold](#case-15) | ✅ PASS | GET | 200 | 137ms |
| 16 | 04_EXCEL | [04 GET /api/sco-query/invoices/export-excel-sold](#case-16) | ✅ PASS | GET | 200 | 1055ms |
| 17 | 05_DETAIL | [01 GET /api/query/invoices/detail](#case-17) | ❌ FAIL | GET | 500 | 40ms |
| 18 | 05_DETAIL | [02 GET /api/sco-query/invoices/detail](#case-18) | ❌ FAIL | GET | 500 | 707ms |
| 19 | 06_XML | [01 GET /api/query/invoices/export-xml](#case-19) | ❌ FAIL | GET | 500 | 37ms |
| 20 | 06_XML | [02 GET /api/sco-query/invoices/export-xml](#case-20) | ❌ FAIL | GET | 500 | 34ms |
| 21 | 07_RELATED | [01 GET /api/query/invoices/related](#case-21) | ❌ FAIL | GET | 500 | 36ms |
| 22 | 07_RELATED | [02 GET /api/sco-query/invoices/related](#case-22) | ❌ FAIL | GET | 500 | 40ms |
| 23 | 07_RELATED | [03 GET /api/query/invoices/relative](#case-23) | ❌ FAIL | GET | 500 | 31ms |
| 24 | 07_RELATED | [04 GET /api/sco-query/invoices/relative](#case-24) | ❌ FAIL | GET | 500 | 34ms |
| 25 | 08_TBSS | [01 GET /api/explanation/tbssdts/signed-notifications](#case-25) | ✅ PASS | GET | 200 | 110ms |
| 26 | 08_TBSS | [02 GET /api/sco-explanation/tbssdts/signed-notifications](#case-26) | ✅ PASS | GET | 200 | 40ms |
| 27 | 09_PITW | [01 GET /api/pitw](#case-27) | ✅ PASS | GET | 200 | 48ms |
| 28 | 09_PITW | [02 GET /api/pitw/export-xml](#case-28) | ❌ FAIL | GET | 500 | 47ms |

## Chi tiết

<a id="case-1"></a>
### 1. 01_PUBLIC — 01 GET portal

✅ **PASS** · `GET` `https://hoadondientu.gdt.gov.vn/`

#### Assertions

- ✓ Portal HTTP 2xx/3xx

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: vi
request-id: 7f584931-60c7-4849-99f2-40983ff0d7fe
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://hoadondientu.gdt.gov.vn/' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' \
  -H 'Accept-Language: vi' \
  -H 'request-id: 7f584931-60c7-4849-99f2-40983ff0d7fe'
```

#### Response

- Status: `200`
- Time: 198ms
- Content-Type: `text/html; charset=utf-8`
- Size: 3652 bytes
- File: [./responses/001-01-public-01-get-portal.txt](./responses/001-01-public-01-get-portal.txt)

Preview (đầu file):

```
<!DOCTYPE html><html><head><meta charSet="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/><link rel="icon" href="/static/images/logo_login.svg"/><title>Hóa Đơn Điện Tử</title><meta name="next-head-count" content="4"/><link rel="preload" href="/_next/static/css/6833e41ceb453a09.css" as="style"/><link rel="stylesheet" href="/_next/static/css/6833e41ceb453a09.css" data-n-g=""/><noscript data-n-css=""></noscript><script defer="" nomodule="" src="/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js"></script><script src="/_next/static/chunks/webpack-9805f90fdadb91c4.js" defer=""></script><script src="/_next/static/chunks/framework-71f483d8069574c5.js" defer=""></script><script src="/_next/static/chunks/main-faf2f33d47a2d913.js" defer=""></script><script src="/_next/static/chunks/pages/_app-5a7fe34f2ba213d5.js" defer=""></script><script src="/_next/static/chunks/2852872c-b605aca0298c2109.js" defer=""></script><script src="/_next/static/chunks/4a3ea9cd-de9895ae438b8d8f.js" defer=""></script><script src="/_next/static/chunks/7602-ed29276f0923ca35.js" defer=""></script><script src="/_next/static/chunks/7206-82eed7009ca20cf6.js" defer=""></script><script src="/_next/static/chunks/8465-f609d018c452171f.js" defer=""></script><script src="/_next/static/chunks/3393-a3093a8c4434188e.js" defer=""></script><script src="/_next/static/chunks/1892-4f670ac9f6453faa.js" defer=""></script><script src="/_next/static/chunks/191-f834a8803fe8a29b.js" defer=""></script><script src="/_next/static/chunks/6081-a14726fca41c84b2.js" defer=""></script><script src="/_next/static/chunks/4017-b7f6dfe76887b63c.js" defer=""></script><script src="/_next/static/chunks/9822-b57a47f1321ba52d.js" defer=""></script><script src="/_next/static/chunks/466-cc524e1be42cb044.js" defer=""></script><script src="/_next/static/chunks/8870-42684e7cd5c2c4d4.js" defer=""></script><script src="/_next/static/chunks/5257-c1d9c06b9ec49203.js" defer=""></script><script src="/_next/static/chunks/1755-06287b9cc037314b.js" defer=""></script><script 
```

_… nội dung đầy đủ trong file đính kèm_

---

<a id="case-2"></a>
### 2. 01_PUBLIC — 02 GET /api/captcha

✅ **PASS** · `GET` `https://hoadondientu.gdt.gov.vn/api/captcha`

#### Assertions

- ✓ captcha: JSON key + content (proxy-login-client captchaViaProxy)

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/captcha`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
Accept: application/json, text/plain, */*
request-id: 4e4dd68d-a86b-4209-a52b-d6fb84029065
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://hoadondientu.gdt.gov.vn/api/captcha' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'request-id: 4e4dd68d-a86b-4209-a52b-d6fb84029065'
```

#### Response

- Status: `200`
- Time: 39ms
- Content-Type: `application/json`
- Size: 14648 bytes
- File: [./responses/002-01-public-02-get-api-captcha.txt](./responses/002-01-public-02-get-api-captcha.txt)

Preview (đầu file):

```
{"key":"6aaa3ce0f5e4663fb1d1aaf4","content":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"40\" viewBox=\"0,0,200,40\"><path fill=\"#444\" d=\"M53.57 24.09L53.53 24.05L53.63 24.16Q51.80 24.04 50.57 25.47L50.60 25.51L50.46 25.37Q49.37 26.94 49.18 28.84L49.17 28.84L49.15 28.82Q48.96 30.91 50.04 31.88L49.93 31.77L49.99 31.83Q50.95 32.67 53.04 32.56L53.21 32.72L53.21 32.72Q55.15 32.41 56.25 31.73L56.34 31.82L56.41 31.89Q57.51 30.75 57.51 29.18L57.43 29.10L57.39 29.06Q57.38 28.67 57.31 28.29L57.31 28.30L57.44 28.43Q57.43 26.67 56.33 25.32L56.36 25.35L56.39 25.38Q55.24 23.98 53.57 24.09ZM53.21 35.27L53.09 35.16L53.09 35.16Q48.72 35.16 47.31 34.40L47.42 34.50L47.47 34.56Q46.39 33.74 46.20 32.03L46.09 31.92L46.20 32.03Q46.19 31.37 46.22 30.65L46.07 30.49L46.14 30.56Q46.31 29.63 46.31 29.18L46.32 29.18L46.20 29.07Q46.82 26.37 46.98 25.69L46.96 25.67L46.81 25.52Q47.41 23.73 48.25 22.32L48.17 22.24L48.19 22.26Q50.89 17.92 56.83 11.56L56.78 11.51L56.79 11.52Q59.44 11.20 61.65 10.40L61.62 10.37L61.71 10.46Q54.80 17.87 51.61 22.10L51.68 22.17L51.52 22.01Q52.57 21.57 53.86 21.57L53.83 21.54L53.80 21.51Q57.24 21.64 58.77 23.58L58.79 23.61L58.82 23.64Q60.03 25.15 60.37 28.69L60.37 28.69L60.45 28.77Q60.52 29.49 60.52 30.10L60.46 30.03L60.37 29.95Q60.38 33.08 58.17 34.15L58.20 34.18L58.34 34.32Q57.14 34.94 53.26 35.32ZM55.41 37.58L55.41 37.59L55.38 37.56Q56.67 37.52 58.65 37.59L58.74 37.68L58.81 37.75Q60.28 37.67 61.85 36.94L61.87 36.97L61.94 37.04Q62.94 36.14 62.94 34.35L63.08 34.49L63.03 34.44Q63.12 34.03 62.95 33.04L62.87 32.96L62.90 32.99Q62.64 31.91 62.64 31.46L62.65 31.47L62.74 31.55Q61.78 26.75 60.18 24.84L60.28 24.94L60.21 24.87Q60.05 24.68 59.90 24.45L59.94 24.49L59.72 24.35L59.64 24.31L59.66 24.32Q59.29 23.81 58.68 22.86L58.62 22.79L58.69 22.86Q57.78 21.92 55.80 21.46L55.83 21.48L55.85 21.51Q56.89 19.73 59.86 16.04L59.85 16.03L64.22 10.88L64.17 10.83Q62.55 11.65 60.16 12.41L60.13 12.38L60.15 12.40Q61.03 11.38 62.82 9.40L63.00 9.58L62.94 9.53Q60.57 10.61 56.68 11.18L56.71 11.21L56.56 11.06Q50.83 16.94 47
```

_… nội dung đầy đủ trong file đính kèm_

---

<a id="case-3"></a>
### 3. 01_PUBLIC — 03 GET /api/category/public/dsdkts/{mst}/manager

✅ **PASS** · `GET` `https://hoadondientu.gdt.gov.vn/api/category/public/dsdkts/0100109106/manager`

#### Assertions

- ✓ dsdkts/manager: JSON object (TaxCode.get / TaxCodeService.searchTaxCode)

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/category/public/dsdkts/0100109106/manager`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
Accept: application/json, text/plain, */*
request-id: 477b4c38-4ae9-40c8-b524-793c38baa6ce
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://hoadondientu.gdt.gov.vn/api/category/public/dsdkts/0100109106/manager' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'request-id: 477b4c38-4ae9-40c8-b524-793c38baa6ce'
```

#### Response

- Status: `200`
- Time: 36ms
- Content-Type: `application/json`
- Size: 380 bytes
- File: [./responses/003-01-public-03-get-api-category-public-dsdkts-mst-manager.txt](./responses/003-01-public-03-get-api-category-public-dsdkts-mst-manager.txt)

Body:

```
{"mst":"0100109106","macqt":"9901","tencqt":"Chi cục Thuế Doanh nghiệp lớn","tennnt":"TẬP ĐOÀN CÔNG NGHIỆP - VIỄN THÔNG QUÂN ĐỘI","tthai":"00","loainnt":"KHAC","lnnt":"0100","dctsdchi":"Số 5, Phố Nguyễn Hữu An","dctstinh":"TP Hà Nội","dctsthuyen":"","dctstxa":"","dctstinhten":"TP Hà Nội","dctshuyenten":"","dctsxaten":"Phường Cầu Giấy"}
```

---

<a id="case-4"></a>
### 4. 02_LOGIN — 01 GET portal

✅ **PASS** · `GET` `https://hoadondientu.gdt.gov.vn/`

#### Assertions

- ✓ Portal HTTP 2xx/3xx

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: vi
request-id: 7c60d01e-828e-4446-b17b-bd4d1917aaad
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://hoadondientu.gdt.gov.vn/' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' \
  -H 'Accept-Language: vi' \
  -H 'request-id: 7c60d01e-828e-4446-b17b-bd4d1917aaad'
```

#### Response

- Status: `200`
- Time: 54ms
- Content-Type: `text/html; charset=utf-8`
- Size: 3652 bytes
- File: [./responses/004-02-login-01-get-portal.txt](./responses/004-02-login-01-get-portal.txt)

Preview (đầu file):

```
<!DOCTYPE html><html><head><meta charSet="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/><link rel="icon" href="/static/images/logo_login.svg"/><title>Hóa Đơn Điện Tử</title><meta name="next-head-count" content="4"/><link rel="preload" href="/_next/static/css/6833e41ceb453a09.css" as="style"/><link rel="stylesheet" href="/_next/static/css/6833e41ceb453a09.css" data-n-g=""/><noscript data-n-css=""></noscript><script defer="" nomodule="" src="/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js"></script><script src="/_next/static/chunks/webpack-9805f90fdadb91c4.js" defer=""></script><script src="/_next/static/chunks/framework-71f483d8069574c5.js" defer=""></script><script src="/_next/static/chunks/main-faf2f33d47a2d913.js" defer=""></script><script src="/_next/static/chunks/pages/_app-5a7fe34f2ba213d5.js" defer=""></script><script src="/_next/static/chunks/2852872c-b605aca0298c2109.js" defer=""></script><script src="/_next/static/chunks/4a3ea9cd-de9895ae438b8d8f.js" defer=""></script><script src="/_next/static/chunks/7602-ed29276f0923ca35.js" defer=""></script><script src="/_next/static/chunks/7206-82eed7009ca20cf6.js" defer=""></script><script src="/_next/static/chunks/8465-f609d018c452171f.js" defer=""></script><script src="/_next/static/chunks/3393-a3093a8c4434188e.js" defer=""></script><script src="/_next/static/chunks/1892-4f670ac9f6453faa.js" defer=""></script><script src="/_next/static/chunks/191-f834a8803fe8a29b.js" defer=""></script><script src="/_next/static/chunks/6081-a14726fca41c84b2.js" defer=""></script><script src="/_next/static/chunks/4017-b7f6dfe76887b63c.js" defer=""></script><script src="/_next/static/chunks/9822-b57a47f1321ba52d.js" defer=""></script><script src="/_next/static/chunks/466-cc524e1be42cb044.js" defer=""></script><script src="/_next/static/chunks/8870-42684e7cd5c2c4d4.js" defer=""></script><script src="/_next/static/chunks/5257-c1d9c06b9ec49203.js" defer=""></script><script src="/_next/static/chunks/1755-06287b9cc037314b.js" defer=""></script><script 
```

_… nội dung đầy đủ trong file đính kèm_

---

<a id="case-5"></a>
### 5. 02_LOGIN — 02 GET /api/captcha

✅ **PASS** · `GET` `https://hoadondientu.gdt.gov.vn/api/captcha`

#### Assertions

- ✓ captcha: JSON key + content (proxy-login-client captchaViaProxy)

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/captcha`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
Accept: application/json, text/plain, */*
request-id: 01343bdb-f524-48dd-9175-c24f68d94e67
Cookie: df9a7b9f11f13b2b359e1a94557637ae=30d3d96b95bf211a5db19d5eb13f465e; TS0114b13e=011c0ae740899d566de34995cb4957c1c76cacce597065136e9af775c040585f7ea6424b4f98b27d3107df8c04d2052936df7d5ab40d46b612fbbd458f1fba40220dbd814ee29a38afb811a310b408198fec463a17
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://hoadondientu.gdt.gov.vn/api/captcha' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'request-id: 01343bdb-f524-48dd-9175-c24f68d94e67' \
  -H 'Cookie: df9a7b9f11f13b2b359e1a94557637ae=30d3d96b95bf211a5db19d5eb13f465e; TS0114b13e=011c0ae740899d566de34995cb4957c1c76cacce597065136e9af775c040585f7ea6424b4f98b27d3107df8c04d2052936df7d5ab40d46b612fbbd458f1fba40220dbd814ee29a38afb811a310b408198fec463a17'
```

#### Response

- Status: `200`
- Time: 37ms
- Content-Type: `application/json`
- Size: 14052 bytes
- File: [./responses/005-02-login-02-get-api-captcha.txt](./responses/005-02-login-02-get-api-captcha.txt)

Preview (đầu file):

```
{"key":"6aaa3ce1fed74d6863030688","content":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"40\" viewBox=\"0,0,200,40\"><path fill=\"#333\" d=\"M50.89 25.66L50.78 25.55L50.78 25.55Q50.79 25.56 54.17 25.52L54.17 25.52L54.25 25.60Q56.59 25.66 57.66 25.70L57.49 25.52L57.55 25.59Q56.49 22.69 54.05 17.06L54.03 17.04L54.14 17.15Q53.52 18.51 52.47 21.36L52.52 21.41L52.42 21.31Q51.35 24.14 50.78 25.55ZM58.72 28.12L58.71 28.11L58.73 28.14Q56.45 28.10 54.24 28.14L54.29 28.19L54.28 28.18Q51.88 28.06 49.60 28.25L49.62 28.28L49.59 28.25Q48.07 31.68 44.84 35.86L44.98 36.01L44.90 35.93Q42.34 36.56 40.97 37.06L40.98 37.07L40.93 37.02Q46.09 31.41 50.77 18.04L50.85 18.12L50.88 18.15Q52.00 14.59 53.37 11.35L53.29 11.27L53.46 11.45Q53.75 11.43 54.10 11.43L54.09 11.43L54.74 11.36L54.77 11.39Q55.52 12.74 60.35 24.39L60.30 24.34L60.29 24.33Q63.64 32.25 67.64 36.40L67.58 36.34L67.57 36.33Q67.05 36.19 63.16 35.31L63.18 35.33L63.17 35.32Q60.71 32.28 58.73 28.13ZM63.15 35.71L63.14 35.70L63.65 35.72L63.68 35.75Q63.91 35.76 64.22 35.87L64.26 35.91L64.33 35.98Q64.65 36.34 66.48 38.36L66.56 38.44L66.53 38.41Q70.17 39.31 72.57 40.34L72.56 40.33L72.55 40.32Q67.04 35.76 63.04 27.76L63.10 27.82L63.01 27.73Q61.40 24.44 59.95 20.48L59.91 20.44L57.27 13.04L57.16 12.93Q56.98 13.10 56.76 13.10L56.75 13.10L56.13 13.01L56.09 12.97Q55.77 12.34 55.04 10.97L55.03 10.95L55.07 11.00Q54.50 10.96 54.04 10.92L54.06 10.94L54.07 10.96Q53.68 10.98 53.15 10.98L53.03 10.86L53.18 11.01Q51.68 14.84 47.79 25.00L47.75 24.96L47.85 25.06Q44.79 33.08 40.15 37.87L39.99 37.72L40.09 37.82Q41.02 37.30 43.04 36.69L43.14 36.79L43.08 36.74Q42.39 37.68 40.83 39.47L40.73 39.37L40.75 39.40Q42.40 38.68 46.32 37.92L46.43 38.03L46.45 38.05Q49.92 33.75 51.48 30.51L51.38 30.42L51.36 30.39Q53.16 30.33 55.48 30.37L55.47 30.36L55.45 30.34Q58.15 30.34 59.52 30.41L59.60 30.49L59.56 30.45Q60.84 32.83 63.20 35.77ZM55.40 21.00L55.40 21.00L55.50 21.10Q56.37 23.19 57.13 25.28L57.02 25.17L53.75 25.21L53.72 25.18Q54.28 23.73 55.35 20.95Z\"/><path d=\"M3 23 C97 4,94 25,184 6\" stroke
```

_… nội dung đầy đủ trong file đính kèm_

---

<a id="case-6"></a>
### 6. 02_LOGIN — 03 OCR tax_invoice_gov

✅ **PASS** · `POST` `https://postman-echo.com/post`

#### Assertions

- ✓ OCR intercept HTTP 200 (postman-echo trace)

#### Request

- Method: `POST`
- URL: `https://postman-echo.com/post`
- Body:

```
{
  "_trace": "OCR executed by run.js (hddt-ocr-cli) — Newman cannot POST SVG multipart",
  "endpoint": "https://captcha.minvoice.com.vn/api/ocrcaptcha/tax_invoice_gov",
  "field": "Captcha",
  "svg": "_hddt-captcha.svg",
  "ocrText": "PA4J3X",
  "key": "6aaa3ce1fed74d6863030688"
}
```


Headers:

```
Accept: application/json
Content-Type: application/json
request-id: b022ce15-0f32-4706-b7a7-0075e3a5b96f
User-Agent: PostmanRuntime/7.39.1
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://postman-echo.com/post' \
  -X POST \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json' \
  -H 'request-id: b022ce15-0f32-4706-b7a7-0075e3a5b96f' \
  -H 'User-Agent: PostmanRuntime/7.39.1' \
  --data-raw '{
  "_trace": "OCR executed by run.js (hddt-ocr-cli) — Newman cannot POST SVG multipart",
  "endpoint": "https://captcha.minvoice.com.vn/api/ocrcaptcha/tax_invoice_gov",
  "field": "Captcha",
  "svg": "_hddt-captcha.svg",
  "ocrText": "PA4J3X",
  "key": "6aaa3ce1fed74d6863030688"
}'
```

#### Response

- Status: `200`
- Time: 1523ms
- Content-Type: `application/json; charset=utf-8`
- Size: 873 bytes
- File: [./responses/006-02-login-03-ocr-tax-invoice-gov.txt](./responses/006-02-login-03-ocr-tax-invoice-gov.txt)

Body:

```
{"args":{},"data":{"_trace":"OCR executed by run.js (hddt-ocr-cli) — Newman cannot POST SVG multipart","endpoint":"https://captcha.minvoice.com.vn/api/ocrcaptcha/tax_invoice_gov","field":"Captcha","svg":"_hddt-captcha.svg","ocrText":"PA4J3X","key":"6aaa3ce1fed74d6863030688"},"files":{},"form":{},"headers":{"host":"postman-echo.com","accept-encoding":"gzip, br","accept":"application/json","user-agent":"PostmanRuntime/7.39.1","request-id":"b022ce15-0f32-4706-b7a7-0075e3a5b96f","content-length":"284","content-type":"application/json","x-forwarded-proto":"https"},"json":{"_trace":"OCR executed by run.js (hddt-ocr-cli) — Newman cannot POST SVG multipart","endpoint":"https://captcha.minvoice.com.vn/api/ocrcaptcha/tax_invoice_gov","field":"Captcha","svg":"_hddt-captcha.svg","ocrText":"PA4J3X","key":"6aaa3ce1fed74d6863030688"},"url":"https://postman-echo.com/post"}
```

---

<a id="case-7"></a>
### 7. 02_LOGIN — 04 POST /api/security-taxpayer/authenticate

✅ **PASS** · `POST` `https://hoadondientu.gdt.gov.vn/api/security-taxpayer/authenticate`

#### Assertions

- ✓ authenticate: có token (CrawlEInvoiceLoginService / loginOnlyViaProxy)

#### Request

- Method: `POST`
- URL: `https://hoadondientu.gdt.gov.vn/api/security-taxpayer/authenticate`
- Body:

```
{
  "username": "3100785269",
  "password": "%JBgY@z3",
  "ckey": "6aaa3ce1fed74d6863030688",
  "cvalue": "PA4J3X"
}
```


Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
Accept: application/json, text/plain, */*
Content-Type: application/json
request-id: 0c402b6e-f319-45ad-93bf-0e524514dbfb
Cookie: df9a7b9f11f13b2b359e1a94557637ae=30d3d96b95bf211a5db19d5eb13f465e; TS0114b13e=011c0ae740e1b90a175834f67feed8268f479b88907065136e9af775c040585f7ea6424b4f98b27d3107df8c04d2052936df7d5ab40d46b612fbbd458f1fba40220dbd814ec869a539917811578f012c27f432ca7651b69e5b18fb2e31afbd6d6ca836ad09aef9ffa558329448675d9efaa49218c1; e1a565439633aacdd764ec3e73b3cc09=a58975e8c81de77d185c05731d0b9202; d1efc622449bf821db4b4d84c82eafa1=7f52e247f66483f07a6431a087779c4a
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://hoadondientu.gdt.gov.vn/api/security-taxpayer/authenticate' \
  -X POST \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Content-Type: application/json' \
  -H 'request-id: 0c402b6e-f319-45ad-93bf-0e524514dbfb' \
  -H 'Cookie: df9a7b9f11f13b2b359e1a94557637ae=30d3d96b95bf211a5db19d5eb13f465e; TS0114b13e=011c0ae740e1b90a175834f67feed8268f479b88907065136e9af775c040585f7ea6424b4f98b27d3107df8c04d2052936df7d5ab40d46b612fbbd458f1fba40220dbd814ec869a539917811578f012c27f432ca7651b69e5b18fb2e31afbd6d6ca836ad09aef9ffa558329448675d9efaa49218c1; e1a565439633aacdd764ec3e73b3cc09=a58975e8c81de77d185c05731d0b9202; d1efc622449bf821db4b4d84c82eafa1=7f52e247f66483f07a6431a087779c4a' \
  --data-raw '{
  "username": "3100785269",
  "password": "%JBgY@z3",
  "ckey": "6aaa3ce1fed74d6863030688",
  "cvalue": "PA4J3X"
}'
```

#### Response

- Status: `200`
- Time: 285ms
- Content-Type: `application/json`
- Size: 204 bytes
- File: [./responses/007-02-login-04-post-api-security-taxpayer-authenticate.txt](./responses/007-02-login-04-post-api-security-taxpayer-authenticate.txt)

Body:

```
{"token":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA"}
```

---

<a id="case-8"></a>
### 8. 02_LOGIN — 05 GET /api/security-taxpayer/profile

✅ **PASS** · `GET` `https://hoadondientu.gdt.gov.vn/api/security-taxpayer/profile?smiUsername=3100785269`

#### Assertions

- ✓ profile: username (fetchTaxpayerProfileViaProxy)

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/security-taxpayer/profile?smiUsername=3100785269`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
Accept: application/json, text/plain, */*
Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA
request-id: 8b2202a9-e756-4cd7-8278-2047821a1c50
Cookie: df9a7b9f11f13b2b359e1a94557637ae=30d3d96b95bf211a5db19d5eb13f465e; TS0114b13e=011c0ae740e1b90a175834f67feed8268f479b88907065136e9af775c040585f7ea6424b4f98b27d3107df8c04d2052936df7d5ab40d46b612fbbd458f1fba40220dbd814ec869a539917811578f012c27f432ca7651b69e5b18fb2e31afbd6d6ca836ad09aef9ffa558329448675d9efaa49218c1; e1a565439633aacdd764ec3e73b3cc09=a58975e8c81de77d185c05731d0b9202; d1efc622449bf821db4b4d84c82eafa1=7f52e247f66483f07a6431a087779c4a
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://hoadondientu.gdt.gov.vn/api/security-taxpayer/profile?smiUsername=3100785269' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA' \
  -H 'request-id: 8b2202a9-e756-4cd7-8278-2047821a1c50' \
  -H 'Cookie: df9a7b9f11f13b2b359e1a94557637ae=30d3d96b95bf211a5db19d5eb13f465e; TS0114b13e=011c0ae740e1b90a175834f67feed8268f479b88907065136e9af775c040585f7ea6424b4f98b27d3107df8c04d2052936df7d5ab40d46b612fbbd458f1fba40220dbd814ec869a539917811578f012c27f432ca7651b69e5b18fb2e31afbd6d6ca836ad09aef9ffa558329448675d9efaa49218c1; e1a565439633aacdd764ec3e73b3cc09=a58975e8c81de77d185c05731d0b9202; d1efc622449bf821db4b4d84c82eafa1=7f52e247f66483f07a6431a087779c4a'
```

#### Response

- Status: `200`
- Time: 34ms
- Content-Type: `application/json`
- Size: 1630 bytes
- File: [./responses/008-02-login-05-get-api-security-taxpayer-profile.txt](./responses/008-02-login-05-get-api-security-taxpayer-profile.txt)

Body:

```
{"password":"","username":"3100785269","authorities":[{"authority":"BKCKTM/OPS"},{"authority":"DCCTTNCN/OPS"},{"authority":"DCHDTLPS/OPS"},{"authority":"DMHH/OPS"},{"authority":"DMKH/OPS"},{"authority":"DMKHHD/OPS"},{"authority":"LHDMTLPS/OPS"},{"authority":"PDDKUNNNT/OPS"},{"authority":"PDHDTLPS/OPS"},{"authority":"QLBK/OPS"},{"authority":"QLCTTNCN/OPS"},{"authority":"QLDKUNNNT/OPS"},{"authority":"QLDM/OPS"},{"authority":"QLHDTLPS/OPS"},{"authority":"QLHT/OPS"},{"authority":"QLND/OPS"},{"authority":"QLVT/OPS"},{"authority":"TC/OPS"},{"authority":"TCBCTHSDBLNNNT/OPS"},{"authority":"TCBTHCQT/OPS"},{"authority":"TCCTTNCNNNT/OPS"},{"authority":"TCDKUNNNT/OPS"},{"authority":"TCDLETAXCTNNT/OPS"},{"authority":"TCDLETAXNNT/OPS"},{"authority":"TCDNPSNNT/OPS"},{"authority":"TCHDCQT/OPS"},{"authority":"TCHDTLPS/OPS"},{"authority":"TCLTCTTNCN/OPS"},{"authority":"TCTBTCQT/OPS"},{"authority":"TTCTTNCN/OPS"},{"authority":"TTHDTLPS/OPS"},{"authority":"XLCTTNCN/OPS"},{"authority":"XLDKUNNNT/OPS"},{"authority":"XLHDTLPS/OPS"},{"authority":"XLLTCTTNCN/OPS"}],"accountNonExpired":true,"accountNonLocked":true,"credentialsNonExpired":true,"enabled":true,"id":"3100785269","type":2,"groupId":"044076000389","groupIds":"3100785269,044076000389","tinInfoTT86":{"mst":"044076000389","mstUTien":"3100785269","dsMst":["3100785269","044076000389"],"doiUng":true,"groupIds":"3100785269,044076000389","cccd":true},"tcqt":"","name":"NGUYỄN THƯƠNG THUYẾT","capCqt":0,"capUser":2,"roleIds":["35e554c2-de09-4513-8581-16c5af706fb8"],"cdanh":null,"domain":null,"cbo":"","fullName":null,"password_expire":"2026-10-14T02:13:35.927Z","expired":0}
```

---

<a id="case-9"></a>
### 9. 03_GUEST — 01 GET portal

✅ **PASS** · `GET` `https://hoadondientu.gdt.gov.vn/`

#### Assertions

- ✓ Portal HTTP 2xx/3xx

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: vi
request-id: 2fc6a98e-d2fd-46c3-88be-1fde51b942b3
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://hoadondientu.gdt.gov.vn/' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' \
  -H 'Accept-Language: vi' \
  -H 'request-id: 2fc6a98e-d2fd-46c3-88be-1fde51b942b3'
```

#### Response

- Status: `200`
- Time: 50ms
- Content-Type: `text/html; charset=utf-8`
- Size: 3652 bytes
- File: [./responses/009-03-guest-01-get-portal.txt](./responses/009-03-guest-01-get-portal.txt)

Preview (đầu file):

```
<!DOCTYPE html><html><head><meta charSet="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/><link rel="icon" href="/static/images/logo_login.svg"/><title>Hóa Đơn Điện Tử</title><meta name="next-head-count" content="4"/><link rel="preload" href="/_next/static/css/6833e41ceb453a09.css" as="style"/><link rel="stylesheet" href="/_next/static/css/6833e41ceb453a09.css" data-n-g=""/><noscript data-n-css=""></noscript><script defer="" nomodule="" src="/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js"></script><script src="/_next/static/chunks/webpack-9805f90fdadb91c4.js" defer=""></script><script src="/_next/static/chunks/framework-71f483d8069574c5.js" defer=""></script><script src="/_next/static/chunks/main-faf2f33d47a2d913.js" defer=""></script><script src="/_next/static/chunks/pages/_app-5a7fe34f2ba213d5.js" defer=""></script><script src="/_next/static/chunks/2852872c-b605aca0298c2109.js" defer=""></script><script src="/_next/static/chunks/4a3ea9cd-de9895ae438b8d8f.js" defer=""></script><script src="/_next/static/chunks/7602-ed29276f0923ca35.js" defer=""></script><script src="/_next/static/chunks/7206-82eed7009ca20cf6.js" defer=""></script><script src="/_next/static/chunks/8465-f609d018c452171f.js" defer=""></script><script src="/_next/static/chunks/3393-a3093a8c4434188e.js" defer=""></script><script src="/_next/static/chunks/1892-4f670ac9f6453faa.js" defer=""></script><script src="/_next/static/chunks/191-f834a8803fe8a29b.js" defer=""></script><script src="/_next/static/chunks/6081-a14726fca41c84b2.js" defer=""></script><script src="/_next/static/chunks/4017-b7f6dfe76887b63c.js" defer=""></script><script src="/_next/static/chunks/9822-b57a47f1321ba52d.js" defer=""></script><script src="/_next/static/chunks/466-cc524e1be42cb044.js" defer=""></script><script src="/_next/static/chunks/8870-42684e7cd5c2c4d4.js" defer=""></script><script src="/_next/static/chunks/5257-c1d9c06b9ec49203.js" defer=""></script><script src="/_next/static/chunks/1755-06287b9cc037314b.js" defer=""></script><script 
```

_… nội dung đầy đủ trong file đính kèm_

---

<a id="case-10"></a>
### 10. 03_GUEST — 02 GET /api/captcha

✅ **PASS** · `GET` `https://hoadondientu.gdt.gov.vn/api/captcha`

#### Assertions

- ✓ captcha: JSON key + content (proxy-login-client captchaViaProxy)

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/captcha`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
Accept: application/json, text/plain, */*
request-id: 568f5d91-c22e-42f8-9714-72a1fe11ee17
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://hoadondientu.gdt.gov.vn/api/captcha' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'request-id: 568f5d91-c22e-42f8-9714-72a1fe11ee17'
```

#### Response

- Status: `200`
- Time: 36ms
- Content-Type: `application/json`
- Size: 14364 bytes
- File: [./responses/010-03-guest-02-get-api-captcha.txt](./responses/010-03-guest-02-get-api-captcha.txt)

Preview (đầu file):

```
{"key":"6aaa3ce5f5e4663fb1d1ac74","content":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"40\" viewBox=\"0,0,200,40\"><path fill=\"#333\" d=\"M23.33 21.86L23.21 21.74L23.33 21.86Q25.15 22.04 26.98 22.04L26.90 21.97L26.98 22.05Q28.80 22.08 30.63 21.93L30.57 21.86L30.62 21.91Q30.34 22.40 30.34 23.12L30.49 23.27L30.52 24.63L30.48 24.59Q28.11 24.58 23.35 24.69L23.39 24.74L23.23 24.57Q23.31 30.59 22.16 35.58L22.17 35.59L22.10 35.52Q20.01 36.32 18.52 37.12L18.39 36.98L18.45 37.04Q20.80 30.26 20.53 23.14L20.49 23.09L20.43 23.03Q20.35 16.06 17.69 9.40L17.59 9.31L17.59 9.30Q21.26 11.84 26.02 12.06L26.05 12.09L26.04 12.08Q30.70 12.25 34.85 10.50L34.73 10.38L34.77 10.42Q34.47 11.23 34.25 12.03L34.43 12.22L33.94 13.82L33.81 13.69Q31.20 14.88 28.23 15.04L28.25 15.06L28.11 14.92Q25.34 15.23 22.48 14.50L22.43 14.45L22.44 14.46Q23.04 17.76 23.23 21.76ZM35.56 9.88L35.46 9.77L35.48 9.79Q30.94 11.99 26.06 11.69L26.09 11.71L26.10 11.72Q20.63 11.28 16.90 8.42L16.95 8.47L17.00 8.53Q19.77 15.37 20.08 22.98L20.13 23.03L20.11 23.02Q20.52 31.04 18.01 37.82L18.06 37.87L17.97 37.78Q18.66 37.40 20.03 36.75L19.98 36.71L19.96 36.69Q19.78 37.45 19.21 38.98L19.29 39.06L19.21 38.98Q21.53 37.91 24.42 37.42L24.39 37.38L24.52 37.52Q24.95 32.46 25.14 26.75L25.20 26.82L25.27 26.88Q26.96 26.74 28.78 26.74L28.82 26.77L28.91 26.87Q30.59 26.76 32.42 26.95L32.48 27.01L32.41 26.95Q32.28 25.97 32.28 25.06L32.33 25.11L32.43 23.31L32.39 23.27Q31.66 23.41 30.82 23.41L30.81 23.40L30.81 23.40Q30.85 22.57 30.93 21.54L30.74 21.35L30.77 21.38Q29.52 21.69 28.11 21.69L28.12 21.70L28.06 21.64Q26.70 21.68 25.33 21.65L25.35 21.68L25.22 19.41L25.24 19.43Q25.11 18.23 24.99 17.17L24.98 17.15L25.08 17.25Q26.05 17.31 27.04 17.31L27.07 17.34L26.96 17.23Q31.73 17.24 35.35 15.34L35.41 15.39L35.45 15.43Q36.00 13.66 36.91 11.04L36.74 10.86L36.79 10.92Q35.44 11.69 34.64 12.04L34.75 12.15L34.63 12.03Q34.93 11.30 35.42 9.74Z\"/><path fill=\"#222\" d=\"M145.10 23.66L145.07 23.62L139.25 23.77L139.25 23.78Q136.28 23.78 133.35 23.71L133.46 23.82L133.46 23.81Q133.54 30
```

_… nội dung đầy đủ trong file đính kèm_

---

<a id="case-11"></a>
### 11. 03_GUEST — 03 OCR tax_invoice_gov

✅ **PASS** · `POST` `https://postman-echo.com/post`

#### Assertions

- ✓ OCR intercept HTTP 200 (postman-echo trace)

#### Request

- Method: `POST`
- URL: `https://postman-echo.com/post`
- Body:

```
{
  "_trace": "OCR executed by run.js (hddt-ocr-cli) — Newman cannot POST SVG multipart",
  "endpoint": "https://captcha.minvoice.com.vn/api/ocrcaptcha/tax_invoice_gov",
  "field": "Captcha",
  "svg": "_hddt-captcha.svg",
  "ocrText": "F3ZZHC",
  "key": "6aaa3ce5f5e4663fb1d1ac74"
}
```


Headers:

```
Accept: application/json
Content-Type: application/json
request-id: ba666bc5-4bc4-4db5-bcc1-e7b3cd44a6ed
User-Agent: PostmanRuntime/7.39.1
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://postman-echo.com/post' \
  -X POST \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json' \
  -H 'request-id: ba666bc5-4bc4-4db5-bcc1-e7b3cd44a6ed' \
  -H 'User-Agent: PostmanRuntime/7.39.1' \
  --data-raw '{
  "_trace": "OCR executed by run.js (hddt-ocr-cli) — Newman cannot POST SVG multipart",
  "endpoint": "https://captcha.minvoice.com.vn/api/ocrcaptcha/tax_invoice_gov",
  "field": "Captcha",
  "svg": "_hddt-captcha.svg",
  "ocrText": "F3ZZHC",
  "key": "6aaa3ce5f5e4663fb1d1ac74"
}'
```

#### Response

- Status: `200`
- Time: 322ms
- Content-Type: `application/json; charset=utf-8`
- Size: 873 bytes
- File: [./responses/011-03-guest-03-ocr-tax-invoice-gov.txt](./responses/011-03-guest-03-ocr-tax-invoice-gov.txt)

Body:

```
{"args":{},"data":{"_trace":"OCR executed by run.js (hddt-ocr-cli) — Newman cannot POST SVG multipart","endpoint":"https://captcha.minvoice.com.vn/api/ocrcaptcha/tax_invoice_gov","field":"Captcha","svg":"_hddt-captcha.svg","ocrText":"F3ZZHC","key":"6aaa3ce5f5e4663fb1d1ac74"},"files":{},"form":{},"headers":{"host":"postman-echo.com","accept-encoding":"gzip, br","accept":"application/json","user-agent":"PostmanRuntime/7.39.1","request-id":"ba666bc5-4bc4-4db5-bcc1-e7b3cd44a6ed","content-length":"284","content-type":"application/json","x-forwarded-proto":"https"},"json":{"_trace":"OCR executed by run.js (hddt-ocr-cli) — Newman cannot POST SVG multipart","endpoint":"https://captcha.minvoice.com.vn/api/ocrcaptcha/tax_invoice_gov","field":"Captcha","svg":"_hddt-captcha.svg","ocrText":"F3ZZHC","key":"6aaa3ce5f5e4663fb1d1ac74"},"url":"https://postman-echo.com/post"}
```

---

<a id="case-12"></a>
### 12. 03_GUEST — 04 GET /api/{from}/guest-invoices

✅ **PASS** · `GET` `https://hoadondientu.gdt.gov.vn/api/sco-query/guest-invoices?cvalue=F3ZZHC&ckey=6aaa3ce5f5e4663fb1d1ac74&khmshdon=1&hdon=01&nbmst=3603914658&khhdon=C25MDH&shdon=122252&tgtttbso=804339800`

#### Assertions

- ✓ guest-invoices: ttxly hoặc body rỗng (CrawlCheckInvoiceService)

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/sco-query/guest-invoices?cvalue=F3ZZHC&ckey=6aaa3ce5f5e4663fb1d1ac74&khmshdon=1&hdon=01&nbmst=3603914658&khhdon=C25MDH&shdon=122252&tgtttbso=804339800`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
Accept: application/json, text/plain, */*
request-id: f732a5db-ef22-4764-8096-630dad3974a2
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/guest-invoices?cvalue=F3ZZHC&ckey=6aaa3ce5f5e4663fb1d1ac74&khmshdon=1&hdon=01&nbmst=3603914658&khhdon=C25MDH&shdon=122252&tgtttbso=804339800' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'request-id: f732a5db-ef22-4764-8096-630dad3974a2'
```

#### Response

- Status: `200`
- Time: 34ms
- Content-Type: `text/plain`
- Size: 0 bytes
- _Không có response body_

---

<a id="case-13"></a>
### 13. 04_EXCEL — 01 GET /api/query/invoices/export-excel

✅ **PASS** · `GET` `https://hoadondientu.gdt.gov.vn/api/query/invoices/export-excel?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59`

#### Assertions

- ✓ export-excel: xlsx/zip PK (msmi-header-service MapExcel / CrawlEInvoiceService)

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/query/invoices/export-excel?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59`

Headers:

```
authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA
Accept-Encoding: gzip,deflate,br
Accept: */*
Accept-Language: vi
End-Point: /tra-cuu/tra-cuu-hoa-don
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36
Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)
request-id: 0e165a11-3659-4f71-b047-aa8e5eb6678e
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://hoadondientu.gdt.gov.vn/api/query/invoices/export-excel?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59' \
  -H 'authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA' \
  -H 'Accept-Encoding: gzip,deflate,br' \
  -H 'Accept: */*' \
  -H 'Accept-Language: vi' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \
  -H 'Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)' \
  -H 'request-id: 0e165a11-3659-4f71-b047-aa8e5eb6678e'
```

#### Response

- Status: `200`
- Time: 130ms
- Content-Type: `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
- Size: 4249 bytes
- File: [./responses/013-04-excel-01-get-api-query-invoices-export-excel.bin](./responses/013-04-excel-01-get-api-query-invoices-export-excel.bin)

Body:

```
[binary 4249 bytes — xem file đính kèm]
```

---

<a id="case-14"></a>
### 14. 04_EXCEL — 02 GET /api/sco-query/invoices/export-excel

✅ **PASS** · `GET` `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-excel?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59%3Bttxly%3D%3D8`

#### Assertions

- ✓ export-excel: xlsx/zip PK (msmi-header-service MapExcel / CrawlEInvoiceService)

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-excel?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59%3Bttxly%3D%3D8`

Headers:

```
authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA
Accept-Encoding: gzip,deflate,br
Accept: */*
Accept-Language: vi
End-Point: /tra-cuu/tra-cuu-hoa-don
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36
Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)
request-id: b62eca95-41dd-466e-9b3a-b87bd532cb3d
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-excel?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59%3Bttxly%3D%3D8' \
  -H 'authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA' \
  -H 'Accept-Encoding: gzip,deflate,br' \
  -H 'Accept: */*' \
  -H 'Accept-Language: vi' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \
  -H 'Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)' \
  -H 'request-id: b62eca95-41dd-466e-9b3a-b87bd532cb3d'
```

#### Response

- Status: `200`
- Time: 86ms
- Content-Type: `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
- Size: 4241 bytes
- File: [./responses/014-04-excel-02-get-api-sco-query-invoices-export-excel.bin](./responses/014-04-excel-02-get-api-sco-query-invoices-export-excel.bin)

Body:

```
[binary 4241 bytes — xem file đính kèm]
```

---

<a id="case-15"></a>
### 15. 04_EXCEL — 03 GET /api/query/invoices/export-excel-sold

✅ **PASS** · `GET` `https://hoadondientu.gdt.gov.vn/api/query/invoices/export-excel-sold?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59&type=purchase`

#### Assertions

- ✓ export-excel: xlsx/zip PK (msmi-header-service MapExcel / CrawlEInvoiceService)

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/query/invoices/export-excel-sold?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59&type=purchase`

Headers:

```
authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA
Accept-Encoding: gzip,deflate,br
Accept: */*
Accept-Language: vi
End-Point: /tra-cuu/tra-cuu-hoa-don
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36
Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)
request-id: 71477b3b-d170-4971-ba05-1551b9474884
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://hoadondientu.gdt.gov.vn/api/query/invoices/export-excel-sold?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59&type=purchase' \
  -H 'authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA' \
  -H 'Accept-Encoding: gzip,deflate,br' \
  -H 'Accept: */*' \
  -H 'Accept-Language: vi' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \
  -H 'Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)' \
  -H 'request-id: 71477b3b-d170-4971-ba05-1551b9474884'
```

#### Response

- Status: `200`
- Time: 137ms
- Content-Type: `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
- Size: 4249 bytes
- File: [./responses/015-04-excel-03-get-api-query-invoices-export-excel-sold.bin](./responses/015-04-excel-03-get-api-query-invoices-export-excel-sold.bin)

Body:

```
[binary 4249 bytes — xem file đính kèm]
```

---

<a id="case-16"></a>
### 16. 04_EXCEL — 04 GET /api/sco-query/invoices/export-excel-sold

✅ **PASS** · `GET` `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-excel-sold?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59%3Bttxly%3D%3D8&type=purchase`

#### Assertions

- ✓ export-excel: xlsx/zip PK (msmi-header-service MapExcel / CrawlEInvoiceService)

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-excel-sold?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59%3Bttxly%3D%3D8&type=purchase`

Headers:

```
authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA
Accept-Encoding: gzip,deflate,br
Accept: */*
Accept-Language: vi
End-Point: /tra-cuu/tra-cuu-hoa-don
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36
Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)
request-id: 26826d7c-0333-4edb-8dc0-d93452a30cbe
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-excel-sold?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59%3Bttxly%3D%3D8&type=purchase' \
  -H 'authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA' \
  -H 'Accept-Encoding: gzip,deflate,br' \
  -H 'Accept: */*' \
  -H 'Accept-Language: vi' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \
  -H 'Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)' \
  -H 'request-id: 26826d7c-0333-4edb-8dc0-d93452a30cbe'
```

#### Response

- Status: `200`
- Time: 1055ms
- Content-Type: `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
- Size: 4241 bytes
- File: [./responses/016-04-excel-04-get-api-sco-query-invoices-export-excel-sold.bin](./responses/016-04-excel-04-get-api-sco-query-invoices-export-excel-sold.bin)

Body:

```
[binary 4241 bytes — xem file đính kèm]
```

---

<a id="case-17"></a>
### 17. 05_DETAIL — 01 GET /api/query/invoices/detail

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/query/invoices/detail?nbmst=&khhdon=&shdon=&khmshdon=`

#### Assertions

- ✗ HTTP 200 — expected 500 to deeply equal 200

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/query/invoices/detail?nbmst=&khhdon=&shdon=&khmshdon=`

Headers:

```
authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA
Accept: */*
Accept-Language: vi
End-Point: /tra-cuu/tra-cuu-hoa-don
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36
Action: Xem%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)
request-id: 5a0c6801-cb87-4d45-9d54-ed9af24e59de
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://hoadondientu.gdt.gov.vn/api/query/invoices/detail?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA' \
  -H 'Accept: */*' \
  -H 'Accept-Language: vi' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \
  -H 'Action: Xem%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)' \
  -H 'request-id: 5a0c6801-cb87-4d45-9d54-ed9af24e59de'
```

#### Response

- Status: `500`
- Time: 40ms
- Content-Type: `application/json`
- Size: 293 bytes
- File: [./responses/017-05-detail-01-get-api-query-invoices-detail.txt](./responses/017-05-detail-01-get-api-query-invoices-detail.txt)

Body:

```
{"timestamp":"16/09/2026 13:53:30","message":"Failed to convert value of type 'java.lang.String' to required type 'byte'; nested exception is java.lang.NumberFormatException: For input string: \"\"","details":"","path":"uri=/invoices/detail","requestId":"f00f8cc3-e708-4b6e-84fb-b95e0a05e26a"}
```

---

<a id="case-18"></a>
### 18. 05_DETAIL — 02 GET /api/sco-query/invoices/detail

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/detail?nbmst=&khhdon=&shdon=&khmshdon=`

#### Assertions

- ✗ HTTP 200 — expected 500 to deeply equal 200

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/detail?nbmst=&khhdon=&shdon=&khmshdon=`

Headers:

```
authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA
Accept: */*
Accept-Language: vi
End-Point: /tra-cuu/tra-cuu-hoa-don
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36
Action: Xem%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)
request-id: b69eeee5-4d56-4a9e-9e73-d0c5faa3cce1
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/detail?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA' \
  -H 'Accept: */*' \
  -H 'Accept-Language: vi' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \
  -H 'Action: Xem%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)' \
  -H 'request-id: b69eeee5-4d56-4a9e-9e73-d0c5faa3cce1'
```

#### Response

- Status: `500`
- Time: 707ms
- Content-Type: `application/json`
- Size: 242 bytes
- File: [./responses/018-05-detail-02-get-api-sco-query-invoices-detail.txt](./responses/018-05-detail-02-get-api-sco-query-invoices-detail.txt)

Body:

```
{"timestamp":"16/09/2026 13:53:31","message":"Failed to convert value of type 'java.lang.String' to required type 'byte'; nested exception is java.lang.NumberFormatException: For input string: \"\"","details":"","path":"uri=/invoices/detail"}
```

---

<a id="case-19"></a>
### 19. 06_XML — 01 GET /api/query/invoices/export-xml

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/query/invoices/export-xml?nbmst=&khhdon=&shdon=&khmshdon=`

#### Assertions

- ✗ HTTP 200 — expected 500 to deeply equal 200

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/query/invoices/export-xml?nbmst=&khhdon=&shdon=&khmshdon=`

Headers:

```
authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA
Accept-Encoding: gzip,deflate,br
Accept: */*
Accept-Language: vi
End-Point: /tra-cuu/tra-cuu-hoa-don
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36
Action: Xu%E1%BA%A5t%20xml%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)
request-id: 219283bc-52a0-41ed-86bb-86cc2121c845
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://hoadondientu.gdt.gov.vn/api/query/invoices/export-xml?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA' \
  -H 'Accept-Encoding: gzip,deflate,br' \
  -H 'Accept: */*' \
  -H 'Accept-Language: vi' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \
  -H 'Action: Xu%E1%BA%A5t%20xml%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)' \
  -H 'request-id: 219283bc-52a0-41ed-86bb-86cc2121c845'
```

#### Response

- Status: `500`
- Time: 37ms
- Content-Type: `application/json`
- Size: 297 bytes
- File: [./responses/019-06-xml-01-get-api-query-invoices-export-xml.txt](./responses/019-06-xml-01-get-api-query-invoices-export-xml.txt)

Body:

```
{"timestamp":"16/09/2026 13:53:32","message":"Failed to convert value of type 'java.lang.String' to required type 'byte'; nested exception is java.lang.NumberFormatException: For input string: \"\"","details":"","path":"uri=/invoices/export-xml","requestId":"1f347b4d-5cf3-4acc-ac63-a94bf6ac64b3"}
```

---

<a id="case-20"></a>
### 20. 06_XML — 02 GET /api/sco-query/invoices/export-xml

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-xml?nbmst=&khhdon=&shdon=&khmshdon=`

#### Assertions

- ✗ HTTP 200 — expected 500 to deeply equal 200

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-xml?nbmst=&khhdon=&shdon=&khmshdon=`

Headers:

```
authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA
Accept-Encoding: gzip,deflate,br
Accept: */*
Accept-Language: vi
End-Point: /tra-cuu/tra-cuu-hoa-don
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36
Action: Xu%E1%BA%A5t%20xml%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)
request-id: 06a2a946-5918-49c3-980e-b2868bae1857
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-xml?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA' \
  -H 'Accept-Encoding: gzip,deflate,br' \
  -H 'Accept: */*' \
  -H 'Accept-Language: vi' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \
  -H 'Action: Xu%E1%BA%A5t%20xml%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)' \
  -H 'request-id: 06a2a946-5918-49c3-980e-b2868bae1857'
```

#### Response

- Status: `500`
- Time: 34ms
- Content-Type: `application/json`
- Size: 246 bytes
- File: [./responses/020-06-xml-02-get-api-sco-query-invoices-export-xml.txt](./responses/020-06-xml-02-get-api-sco-query-invoices-export-xml.txt)

Body:

```
{"timestamp":"16/09/2026 13:53:32","message":"Failed to convert value of type 'java.lang.String' to required type 'byte'; nested exception is java.lang.NumberFormatException: For input string: \"\"","details":"","path":"uri=/invoices/export-xml"}
```

---

<a id="case-21"></a>
### 21. 07_RELATED — 01 GET /api/query/invoices/related

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/query/invoices/related?nbmst=&khhdon=&shdon=&khmshdon=`

#### Assertions

- ✗ HTTP 200 — expected 500 to deeply equal 200

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/query/invoices/related?nbmst=&khhdon=&shdon=&khmshdon=`

Headers:

```
Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA
Action: Xem%20th%C3%B4ng%20tin%20li%C3%AAn%20quan%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)
End-Point: /tra-cuu/tra-cuu-hoa-don
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
Accept: application/json, text/plain, */*
request-id: b440aaf4-64bc-474e-8806-0658d8d98926
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://hoadondientu.gdt.gov.vn/api/query/invoices/related?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA' \
  -H 'Action: Xem%20th%C3%B4ng%20tin%20li%C3%AAn%20quan%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'request-id: b440aaf4-64bc-474e-8806-0658d8d98926'
```

#### Response

- Status: `500`
- Time: 36ms
- Content-Type: `application/json`
- Size: 294 bytes
- File: [./responses/021-07-related-01-get-api-query-invoices-related.txt](./responses/021-07-related-01-get-api-query-invoices-related.txt)

Body:

```
{"timestamp":"16/09/2026 13:53:33","message":"Failed to convert value of type 'java.lang.String' to required type 'byte'; nested exception is java.lang.NumberFormatException: For input string: \"\"","details":"","path":"uri=/invoices/related","requestId":"c2e1d6b1-440f-4256-9eec-75b019d685f4"}
```

---

<a id="case-22"></a>
### 22. 07_RELATED — 02 GET /api/sco-query/invoices/related

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/related?nbmst=&khhdon=&shdon=&khmshdon=`

#### Assertions

- ✗ HTTP 200 — expected 500 to deeply equal 200

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/related?nbmst=&khhdon=&shdon=&khmshdon=`

Headers:

```
Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA
Action: Xem%20th%C3%B4ng%20tin%20li%C3%AAn%20quan%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)
End-Point: /tra-cuu/tra-cuu-hoa-don
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
Accept: application/json, text/plain, */*
request-id: 7123f69f-8e56-453b-801b-56d6f9516fb2
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/related?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA' \
  -H 'Action: Xem%20th%C3%B4ng%20tin%20li%C3%AAn%20quan%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'request-id: 7123f69f-8e56-453b-801b-56d6f9516fb2'
```

#### Response

- Status: `500`
- Time: 40ms
- Content-Type: `application/json`
- Size: 243 bytes
- File: [./responses/022-07-related-02-get-api-sco-query-invoices-related.txt](./responses/022-07-related-02-get-api-sco-query-invoices-related.txt)

Body:

```
{"timestamp":"16/09/2026 13:53:33","message":"Failed to convert value of type 'java.lang.String' to required type 'byte'; nested exception is java.lang.NumberFormatException: For input string: \"\"","details":"","path":"uri=/invoices/related"}
```

---

<a id="case-23"></a>
### 23. 07_RELATED — 03 GET /api/query/invoices/relative

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/query/invoices/relative?nbmst=&khhdon=&shdon=&khmshdon=`

#### Assertions

- ✗ HTTP 200 — expected 500 to deeply equal 200

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/query/invoices/relative?nbmst=&khhdon=&shdon=&khmshdon=`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
Accept: application/json, text/plain, */*
Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA
request-id: bc4dedd6-6002-4e90-88df-265859012463
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://hoadondientu.gdt.gov.vn/api/query/invoices/relative?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA' \
  -H 'request-id: bc4dedd6-6002-4e90-88df-265859012463'
```

#### Response

- Status: `500`
- Time: 31ms
- Content-Type: `application/json`
- Size: 295 bytes
- File: [./responses/023-07-related-03-get-api-query-invoices-relative.txt](./responses/023-07-related-03-get-api-query-invoices-relative.txt)

Body:

```
{"timestamp":"16/09/2026 13:53:34","message":"Failed to convert value of type 'java.lang.String' to required type 'byte'; nested exception is java.lang.NumberFormatException: For input string: \"\"","details":"","path":"uri=/invoices/relative","requestId":"387a777e-3a43-4c46-83ee-74d2d1d72bb8"}
```

---

<a id="case-24"></a>
### 24. 07_RELATED — 04 GET /api/sco-query/invoices/relative

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/relative?nbmst=&khhdon=&shdon=&khmshdon=`

#### Assertions

- ✗ HTTP 200 — expected 500 to deeply equal 200

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/relative?nbmst=&khhdon=&shdon=&khmshdon=`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
Accept: application/json, text/plain, */*
Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA
request-id: 75c133ef-84d4-4db2-84d0-275e55054295
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/relative?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA' \
  -H 'request-id: 75c133ef-84d4-4db2-84d0-275e55054295'
```

#### Response

- Status: `500`
- Time: 34ms
- Content-Type: `application/json`
- Size: 244 bytes
- File: [./responses/024-07-related-04-get-api-sco-query-invoices-relative.txt](./responses/024-07-related-04-get-api-sco-query-invoices-relative.txt)

Body:

```
{"timestamp":"16/09/2026 13:53:34","message":"Failed to convert value of type 'java.lang.String' to required type 'byte'; nested exception is java.lang.NumberFormatException: For input string: \"\"","details":"","path":"uri=/invoices/relative"}
```

---

<a id="case-25"></a>
### 25. 08_TBSS — 01 GET /api/explanation/tbssdts/signed-notifications

✅ **PASS** · `GET` `https://hoadondientu.gdt.gov.vn/api/explanation/tbssdts/signed-notifications?sort=ngay%3Adesc%2Cso%3Adesc&search=ngay%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Bngay%3Dle%3D16%2F09%2F2026T23%3A59%3A59&size=50`

#### Assertions

- ✓ TBSS: datas[] + total (consume/hdtbssresExcel)

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/explanation/tbssdts/signed-notifications?sort=ngay%3Adesc%2Cso%3Adesc&search=ngay%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Bngay%3Dle%3D16%2F09%2F2026T23%3A59%3A59&size=50`

Headers:

```
authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA
Accept: application/json, text/plain, */*
Accept-Language: vi
End-Point: /tra-cuu/tra-cuu-hoa-don
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36
Action: T%C3%ACm%20ki%E1%BA%BFm
request-id: 0bef7ab8-6aa6-417b-87d6-aa6c7a759440
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://hoadondientu.gdt.gov.vn/api/explanation/tbssdts/signed-notifications?sort=ngay%3Adesc%2Cso%3Adesc&search=ngay%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Bngay%3Dle%3D16%2F09%2F2026T23%3A59%3A59&size=50' \
  -H 'authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \
  -H 'Action: T%C3%ACm%20ki%E1%BA%BFm' \
  -H 'request-id: 0bef7ab8-6aa6-417b-87d6-aa6c7a759440'
```

#### Response

- Status: `200`
- Time: 110ms
- Content-Type: `application/json`
- Size: 45 bytes
- File: [./responses/025-08-tbss-01-get-api-explanation-tbssdts-signed-notifications.txt](./responses/025-08-tbss-01-get-api-explanation-tbssdts-signed-notifications.txt)

Body:

```
{"datas":[],"total":0,"state":null,"time":67}
```

---

<a id="case-26"></a>
### 26. 08_TBSS — 02 GET /api/sco-explanation/tbssdts/signed-notifications

✅ **PASS** · `GET` `https://hoadondientu.gdt.gov.vn/api/sco-explanation/tbssdts/signed-notifications?sort=ngay%3Adesc%2Cso%3Adesc&search=ngay%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Bngay%3Dle%3D16%2F09%2F2026T23%3A59%3A59&size=50`

#### Assertions

- ✓ TBSS: datas[] + total (consume/hdtbssresExcel)

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/sco-explanation/tbssdts/signed-notifications?sort=ngay%3Adesc%2Cso%3Adesc&search=ngay%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Bngay%3Dle%3D16%2F09%2F2026T23%3A59%3A59&size=50`

Headers:

```
authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA
Accept: application/json, text/plain, */*
Accept-Language: vi
End-Point: /tra-cuu/tra-cuu-hoa-don
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36
Action: T%C3%ACm%20ki%E1%BA%BFm
request-id: 2916e39d-cd2b-47ae-84ef-7546722efbce
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-explanation/tbssdts/signed-notifications?sort=ngay%3Adesc%2Cso%3Adesc&search=ngay%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Bngay%3Dle%3D16%2F09%2F2026T23%3A59%3A59&size=50' \
  -H 'authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \
  -H 'Action: T%C3%ACm%20ki%E1%BA%BFm' \
  -H 'request-id: 2916e39d-cd2b-47ae-84ef-7546722efbce'
```

#### Response

- Status: `200`
- Time: 40ms
- Content-Type: `application/json`
- Size: 44 bytes
- File: [./responses/026-08-tbss-02-get-api-sco-explanation-tbssdts-signed-notifications.txt](./responses/026-08-tbss-02-get-api-sco-explanation-tbssdts-signed-notifications.txt)

Body:

```
{"datas":[],"total":0,"state":null,"time":4}
```

---

<a id="case-27"></a>
### 27. 09_PITW — 01 GET /api/pitw

✅ **PASS** · `GET` `https://hoadondientu.gdt.gov.vn/api/pitw?size=50&search=nlap%3Dge%3D2026-09-15T17%3A00%3A00.000Z%3Bnlap%3Dle%3D2026-09-16T16%3A59%3A59.999Z&sort=nlap%3Adesc`

#### Assertions

- ✓ pitw: datas[] (parseCrawlResult / chungTuTncnHeader)

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/pitw?size=50&search=nlap%3Dge%3D2026-09-15T17%3A00%3A00.000Z%3Bnlap%3Dle%3D2026-09-16T16%3A59%3A59.999Z&sort=nlap%3Adesc`

Headers:

```
authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA
Accept: application/json, text/plain, */*
Accept-Language: vi
Accept-Encoding: gzip, deflate, br
End-Point: /tra-cuu/tra-cuu-chung-tu-tncn
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/tra-cuu/tra-cuu-chung-tu-tncn
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36 Edg/150.0.0.0
Action: T%C3%ACm%20ki%E1%BA%BFm
request-id: 8ca86f2a-24b8-4d36-9aa3-6cabb94447d3
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://hoadondientu.gdt.gov.vn/api/pitw?size=50&search=nlap%3Dge%3D2026-09-15T17%3A00%3A00.000Z%3Bnlap%3Dle%3D2026-09-16T16%3A59%3A59.999Z&sort=nlap%3Adesc' \
  -H 'authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'End-Point: /tra-cuu/tra-cuu-chung-tu-tncn' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/tra-cuu/tra-cuu-chung-tu-tncn' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36 Edg/150.0.0.0' \
  -H 'Action: T%C3%ACm%20ki%E1%BA%BFm' \
  -H 'request-id: 8ca86f2a-24b8-4d36-9aa3-6cabb94447d3'
```

#### Response

- Status: `200`
- Time: 48ms
- Content-Type: `application/json`
- Size: 44 bytes
- File: [./responses/027-09-pitw-01-get-api-pitw.txt](./responses/027-09-pitw-01-get-api-pitw.txt)

Body:

```
{"datas":[],"state":null,"size":0,"total":0}
```

---

<a id="case-28"></a>
### 28. 09_PITW — 02 GET /api/pitw/export-xml

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/pitw/export-xml?hsgoc=`

#### Assertions

- ✗ HTTP 200 — expected 500 to deeply equal 200

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/pitw/export-xml?hsgoc=`

Headers:

```
authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA
Accept: application/json, text/plain, */*
Accept-Language: vi
Accept-Encoding: gzip, deflate, br
End-Point: /tra-cuu/tra-cuu-chung-tu-tncn
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/tra-cuu/tra-cuu-chung-tu-tncn
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36 Edg/150.0.0.0
Action: 
request-id: 79f3ba6d-b053-4f0a-842d-0b1c66628a3c
```

cURL (copy vào Postman — token/cookie/password hiện nguyên):

```
curl 'https://hoadondientu.gdt.gov.vn/api/pitw/export-xml?hsgoc=' \
  -H 'authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjI4MDA0LCJpYXQiOjE3ODk1NDE2MDR9.sJq4lm8jTO1-2jyQNwyzbI_lp6PMawJj4B1t9B6yBQbbj53-d_lvIJYAp_N98wfNtJUjGU50ruUtRxgBIpXGiA' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'End-Point: /tra-cuu/tra-cuu-chung-tu-tncn' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/tra-cuu/tra-cuu-chung-tu-tncn' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36 Edg/150.0.0.0' \
  -H 'Action: ' \
  -H 'request-id: 79f3ba6d-b053-4f0a-842d-0b1c66628a3c'
```

#### Response

- Status: `500`
- Time: 47ms
- Content-Type: `application/json`
- Size: 184 bytes
- File: [./responses/028-09-pitw-02-get-api-pitw-export-xml.txt](./responses/028-09-pitw-02-get-api-pitw-export-xml.txt)

Body:

```
{"timestamp":"16/09/2026 13:53:36","message":"Required request parameter 'hsgoc' for method parameter type UUID is present but converted to null","details":"","path":"uri=/export-xml"}
```

