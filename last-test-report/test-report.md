# HoaDonDienTu Healthcheck

❌ **14 pass** / **14 fail** / **28 total** · 15.51s

| Field | Value |
|---|---|
| Thời gian | 2026-09-16T03:51:05.467Z → 2026-09-16T03:51:20.981Z |
| Collection | `HoaDonDienTu.healthcheck.postman_collection.json` |
| Environment | `HoaDonDienTu.environment.json` |
| Thư mục báo cáo | `test-report-20260916-105105` |

> Authorization / Cookie / password hiện `[đã gửi N ký tự — ẩn trong report]`. Newman đã gửi giá trị thật. Copy curl từ report **không replay** được phần đã ẩn.

## Fail / Error

| # | Folder | Request | Status | Assertion |
|---|---|---|---|---|
| 12 | 03_GUEST | [04 GET /api/{from}/guest-invoices](#case-12) | 200 | FAIL: HTML WAF / Request Rejected |
| 13 | 04_EXCEL | [01 GET /api/query/invoices/export-excel](#case-13) | 200 | FAIL: HTML WAF / Request Rejected |
| 14 | 04_EXCEL | [02 GET /api/sco-query/invoices/export-excel](#case-14) | 200 | FAIL: HTML WAF / Request Rejected |
| 15 | 04_EXCEL | [03 GET /api/query/invoices/export-excel-sold](#case-15) | 200 | FAIL: HTML WAF / Request Rejected |
| 16 | 04_EXCEL | [04 GET /api/sco-query/invoices/export-excel-sold](#case-16) | 200 | FAIL: HTML WAF / Request Rejected |
| 17 | 05_DETAIL | [01 GET /api/query/invoices/detail](#case-17) | 200 | FAIL: HTML WAF / Request Rejected |
| 18 | 05_DETAIL | [02 GET /api/sco-query/invoices/detail](#case-18) | 200 | FAIL: HTML WAF / Request Rejected |
| 19 | 06_XML | [01 GET /api/query/invoices/export-xml](#case-19) | 200 | FAIL: HTML WAF / Request Rejected |
| 20 | 06_XML | [02 GET /api/sco-query/invoices/export-xml](#case-20) | 500 | HTTP 200 |
| 21 | 07_RELATED | [01 GET /api/query/invoices/related](#case-21) | 200 | FAIL: HTML WAF / Request Rejected |
| 22 | 07_RELATED | [02 GET /api/sco-query/invoices/related](#case-22) | 200 | FAIL: HTML WAF / Request Rejected |
| 23 | 07_RELATED | [03 GET /api/query/invoices/relative](#case-23) | 500 | HTTP 200 |
| 24 | 07_RELATED | [04 GET /api/sco-query/invoices/relative](#case-24) | 500 | HTTP 200 |
| 28 | 09_PITW | [02 GET /api/pitw/export-xml](#case-28) | 500 | HTTP 200 |

## Tổng quan

| # | Folder | Request | Kết quả | Method | Status | Time |
|---|---|---|---|---|---|---|
| 1 | 01_PUBLIC | [01 GET portal](#case-1) | ✅ PASS | GET | 200 | 209ms |
| 2 | 01_PUBLIC | [02 GET /api/captcha](#case-2) | ✅ PASS | GET | 200 | 47ms |
| 3 | 01_PUBLIC | [03 GET /api/category/public/dsdkts/{mst}/manager](#case-3) | ✅ PASS | GET | 200 | 51ms |
| 4 | 02_LOGIN | [01 GET portal](#case-4) | ✅ PASS | GET | 200 | 56ms |
| 5 | 02_LOGIN | [02 GET /api/captcha](#case-5) | ✅ PASS | GET | 200 | 37ms |
| 6 | 02_LOGIN | [03 OCR tax_invoice_gov](#case-6) | ✅ PASS | POST | 200 | 534ms |
| 7 | 02_LOGIN | [04 POST /api/security-taxpayer/authenticate](#case-7) | ✅ PASS | POST | 200 | 72ms |
| 8 | 02_LOGIN | [05 GET /api/security-taxpayer/profile](#case-8) | ✅ PASS | GET | 200 | 35ms |
| 9 | 03_GUEST | [01 GET portal](#case-9) | ✅ PASS | GET | 200 | 50ms |
| 10 | 03_GUEST | [02 GET /api/captcha](#case-10) | ✅ PASS | GET | 200 | 256ms |
| 11 | 03_GUEST | [03 OCR tax_invoice_gov](#case-11) | ✅ PASS | POST | 200 | 327ms |
| 12 | 03_GUEST | [04 GET /api/{from}/guest-invoices](#case-12) | ❌ FAIL | GET | 200 | 55ms |
| 13 | 04_EXCEL | [01 GET /api/query/invoices/export-excel](#case-13) | ❌ FAIL | GET | 200 | 77ms |
| 14 | 04_EXCEL | [02 GET /api/sco-query/invoices/export-excel](#case-14) | ❌ FAIL | GET | 200 | 70ms |
| 15 | 04_EXCEL | [03 GET /api/query/invoices/export-excel-sold](#case-15) | ❌ FAIL | GET | 200 | 72ms |
| 16 | 04_EXCEL | [04 GET /api/sco-query/invoices/export-excel-sold](#case-16) | ❌ FAIL | GET | 200 | 67ms |
| 17 | 05_DETAIL | [01 GET /api/query/invoices/detail](#case-17) | ❌ FAIL | GET | 200 | 111ms |
| 18 | 05_DETAIL | [02 GET /api/sco-query/invoices/detail](#case-18) | ❌ FAIL | GET | 200 | 96ms |
| 19 | 06_XML | [01 GET /api/query/invoices/export-xml](#case-19) | ❌ FAIL | GET | 200 | 64ms |
| 20 | 06_XML | [02 GET /api/sco-query/invoices/export-xml](#case-20) | ❌ FAIL | GET | 500 | 83ms |
| 21 | 07_RELATED | [01 GET /api/query/invoices/related](#case-21) | ❌ FAIL | GET | 200 | 45ms |
| 22 | 07_RELATED | [02 GET /api/sco-query/invoices/related](#case-22) | ❌ FAIL | GET | 200 | 74ms |
| 23 | 07_RELATED | [03 GET /api/query/invoices/relative](#case-23) | ❌ FAIL | GET | 500 | 69ms |
| 24 | 07_RELATED | [04 GET /api/sco-query/invoices/relative](#case-24) | ❌ FAIL | GET | 500 | 39ms |
| 25 | 08_TBSS | [01 GET /api/explanation/tbssdts/signed-notifications](#case-25) | ✅ PASS | GET | 200 | 93ms |
| 26 | 08_TBSS | [02 GET /api/sco-explanation/tbssdts/signed-notifications](#case-26) | ✅ PASS | GET | 200 | 48ms |
| 27 | 09_PITW | [01 GET /api/pitw](#case-27) | ✅ PASS | GET | 200 | 47ms |
| 28 | 09_PITW | [02 GET /api/pitw/export-xml](#case-28) | ❌ FAIL | GET | 500 | 42ms |

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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: vi
request-id: fab03c62-69b5-461e-abf4-036e19a7c122
Cache-Control: no-cache
Postman-Token: 3d220cf1-3af6-471e-8aaa-6135023641e6
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' \
  -H 'Accept-Language: vi' \
  -H 'request-id: fab03c62-69b5-461e-abf4-036e19a7c122' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 3d220cf1-3af6-471e-8aaa-6135023641e6' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive'
```

#### Response

- Status: `200`
- Time: 209ms
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept: application/json, text/plain, */*
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
request-id: 7e779c63-6e21-46ae-a02d-c4bf0eebbae8
Cache-Control: no-cache
Postman-Token: 3a82cf77-7833-4b54-8ed6-e8092f012f84
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 248 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/captcha' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'request-id: 7e779c63-6e21-46ae-a02d-c4bf0eebbae8' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 3a82cf77-7833-4b54-8ed6-e8092f012f84' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 248 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 47ms
- Content-Type: `application/json`
- Size: 14808 bytes
- File: [./responses/002-01-public-02-get-api-captcha.txt](./responses/002-01-public-02-get-api-captcha.txt)

Preview (đầu file):

```
{"key":"6aaa122a3ea3b029a85c3c2b","content":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"40\" viewBox=\"0,0,200,40\"><path fill=\"#333\" d=\"M110.41 14.64L110.39 14.62L110.47 14.70Q108.38 14.71 107.43 14.86L107.56 14.99L107.55 14.97Q105.81 15.11 104.59 15.64L104.66 15.71L104.74 15.79Q101.14 17.14 101.03 21.82L101.03 21.82L101.03 21.82Q101.04 24.57 101.68 27.50L101.64 27.46L101.62 27.43Q102.50 31.47 106.11 32.65L106.18 32.72L106.04 32.58Q108.10 33.30 109.54 33.15L109.54 33.15L109.78 32.93L109.92 33.07Q110.06 33.02 110.25 33.06L110.23 33.04L110.26 33.07Q110.45 33.11 110.60 33.07L110.62 33.08L110.64 33.11Q113.16 32.73 114.53 32.16L114.48 32.11L110.95 28.62L110.91 28.58Q111.24 28.26 111.85 27.65L111.95 27.75L112.85 26.82L112.92 26.90Q114.66 28.86 116.64 30.92L116.65 30.93L116.62 30.90Q119.06 29.19 119.33 23.83L119.26 23.76L119.13 23.63Q119.39 22.90 119.39 21.99L119.25 21.84L119.39 21.98Q119.40 16.32 114.34 15.22L114.27 15.15L114.31 15.19Q112.89 14.76 110.38 14.61ZM123.20 36.72L123.25 36.77L123.27 36.79Q122.62 37.16 121.44 38.04L121.35 37.95L117.11 34.43L116.99 34.31Q114.53 35.55 110.26 35.58L110.19 35.51L110.28 35.60Q103.73 35.71 100.91 33.47L100.84 33.40L100.91 33.46Q99.05 31.60 98.59 28.63L98.59 28.63L98.74 28.78Q98.50 26.95 98.12 23.37L98.16 23.40L98.10 23.35Q98.07 22.59 97.95 20.84L97.98 20.87L98.01 20.90Q97.78 19.26 97.82 18.38L97.79 18.35L97.96 18.52Q98.06 15.46 99.81 13.90L99.69 13.78L99.76 13.85Q101.28 12.51 104.47 12.02L104.50 12.04L104.41 11.96Q106.99 11.67 109.88 11.75L109.80 11.67L109.82 11.69Q117.40 11.88 120.52 14.24L120.50 14.22L120.44 14.16Q122.56 16.24 122.29 21.15L122.26 21.12L122.42 21.29Q122.17 24.88 121.98 26.21L122.00 26.23L121.93 26.16Q121.26 30.63 118.93 32.95L119.04 33.05L118.94 32.96Q120.47 34.25 123.21 36.73ZM118.30 12.40L118.26 12.37L118.45 12.55Q116.42 11.82 109.91 11.32L109.80 11.21L109.84 11.25Q108.45 11.28 105.67 11.39L105.75 11.47L105.64 11.35Q101.41 11.58 99.17 13.56L99.18 13.57L99.31 13.70Q97.62 15.14 97.62 18.30L97.56 18.23L97.58 18.25Q97.62 19.13 97.77 20.84L9
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept: application/json, text/plain, */*
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
request-id: 6eb6c505-3dfc-475d-99d0-8255a79cb8d9
Cache-Control: no-cache
Postman-Token: 416dc5f5-b75c-48fd-b93b-40ed684ef667
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 446 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/category/public/dsdkts/0100109106/manager' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'request-id: 6eb6c505-3dfc-475d-99d0-8255a79cb8d9' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 416dc5f5-b75c-48fd-b93b-40ed684ef667' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 51ms
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
request-id: 41c8a754-4f91-4b88-915b-45893187fd7a
Cache-Control: no-cache
Postman-Token: 1026ce77-e25a-4d99-acee-b9225225312f
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 446 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' \
  -H 'request-id: 41c8a754-4f91-4b88-915b-45893187fd7a' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 1026ce77-e25a-4d99-acee-b9225225312f' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 56ms
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept: application/json, text/plain, */*
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
request-id: 07b26039-d512-4bcd-b04f-ea21535c75f9
Cache-Control: no-cache
Postman-Token: a24d3f97-8cb2-410f-b509-1141a9feb598
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 446 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/captcha' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'request-id: 07b26039-d512-4bcd-b04f-ea21535c75f9' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: a24d3f97-8cb2-410f-b509-1141a9feb598' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 37ms
- Content-Type: `application/json`
- Size: 15557 bytes
- File: [./responses/005-02-login-02-get-api-captcha.txt](./responses/005-02-login-02-get-api-captcha.txt)

Preview (đầu file):

```
{"key":"6aaa122cfed74d6863f88401","content":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"40\" viewBox=\"0,0,200,40\"><path fill=\"#111\" d=\"M133.82 14.24L133.85 14.26L133.66 14.08Q134.99 18.76 135.15 21.96L135.13 21.94L135.03 21.85Q135.61 21.97 139.99 22.08L139.85 21.95L139.98 22.07Q142.52 22.10 142.90 18.64L142.89 18.63L142.79 18.52Q143.13 16.92 142.22 16.01L142.14 15.94L142.13 15.93Q140.84 15.01 138.86 14.86L138.92 14.92L138.80 14.80Q135.59 14.60 133.72 14.14ZM135.18 23.82L135.15 23.79L135.21 23.85Q135.44 29.90 133.65 35.84L133.53 35.72L133.63 35.82Q132.35 36.10 129.76 37.13L129.71 37.08L129.80 37.17Q132.63 30.67 132.28 23.21L132.12 23.04L132.16 23.08Q131.97 15.85 128.66 9.34L128.55 9.23L128.53 9.22Q133.42 12.04 140.38 12.04L140.36 12.03L140.50 12.17Q145.99 12.02 146.26 15.56L146.25 15.55L146.22 15.52Q146.44 16.27 146.36 16.88L146.38 16.90L146.26 18.00L146.26 18.00Q145.42 21.92 143.29 23.63L143.26 23.60L143.36 23.70Q142.38 24.21 141.35 24.21L141.39 24.25L138.90 24.34L138.76 24.21Q144.50 31.58 149.03 36.14L149.03 36.15L148.90 36.02Q146.76 35.32 143.82 34.98L143.87 35.02L143.92 35.08Q140.04 31.01 135.13 23.77ZM143.71 35.35L143.72 35.36L143.99 35.33L145.38 36.73L145.21 36.55Q145.76 37.07 146.41 37.68L146.49 37.76L146.56 37.83Q150.02 38.36 153.60 40.22L153.64 40.27L153.59 40.22Q146.68 33.50 141.28 26.57L141.24 26.54L143.06 26.60L143.04 26.58Q146.18 26.63 147.51 22.10L147.51 22.10L147.40 22.00Q148.18 19.88 148.18 17.18L148.11 17.11L148.14 17.13Q148.05 14.77 146.34 14.12L146.50 14.27L146.53 14.31Q146.37 13.88 145.80 13.20L145.82 13.21L145.81 13.20Q144.13 11.76 140.48 11.68L140.51 11.72L140.45 11.65Q132.60 11.53 127.92 8.53L127.95 8.55L127.94 8.55Q131.54 15.23 131.88 22.92L132.03 23.07L132.01 23.05Q132.23 30.89 129.11 37.74L129.22 37.85L129.15 37.78Q130.36 37.16 131.15 36.85L131.19 36.89L130.17 39.14L130.22 39.19Q132.86 38.06 135.53 37.57L135.60 37.64L135.61 37.65Q136.84 32.49 137.03 27.27L136.98 27.22L137.15 27.39Q140.62 32.30 143.78 35.43ZM142.57 17.55L142.42 17.39L142.46 17.44Q142.61 17.81 142
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
  "ocrText": "WSDZRQ",
  "key": "6aaa122cfed74d6863f88401"
}
```


Headers:

```
Accept: application/json
Content-Type: application/json
request-id: 77dd38ca-2b25-4b3f-b519-10893f72779c
User-Agent: PostmanRuntime/7.39.1
Cache-Control: no-cache
Postman-Token: 571fcbb7-f662-45ed-9a9d-e03f9d8ff4b0
Host: postman-echo.com
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 284
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://postman-echo.com/post' \
  -X POST \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json' \
  -H 'request-id: 77dd38ca-2b25-4b3f-b519-10893f72779c' \
  -H 'User-Agent: PostmanRuntime/7.39.1' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 571fcbb7-f662-45ed-9a9d-e03f9d8ff4b0' \
  -H 'Host: postman-echo.com' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  --data-raw '{
  "_trace": "OCR executed by run.js (hddt-ocr-cli) — Newman cannot POST SVG multipart",
  "endpoint": "https://captcha.minvoice.com.vn/api/ocrcaptcha/tax_invoice_gov",
  "field": "Captcha",
  "svg": "_hddt-captcha.svg",
  "ocrText": "WSDZRQ",
  "key": "6aaa122cfed74d6863f88401"
}'
```

#### Response

- Status: `200`
- Time: 534ms
- Content-Type: `application/json; charset=utf-8`
- Size: 955 bytes
- File: [./responses/006-02-login-03-ocr-tax-invoice-gov.txt](./responses/006-02-login-03-ocr-tax-invoice-gov.txt)

Body:

```
{"args":{},"data":{"_trace":"OCR executed by run.js (hddt-ocr-cli) — Newman cannot POST SVG multipart","endpoint":"https://captcha.minvoice.com.vn/api/ocrcaptcha/tax_invoice_gov","field":"Captcha","svg":"_hddt-captcha.svg","ocrText":"WSDZRQ","key":"6aaa122cfed74d6863f88401"},"files":{},"form":{},"headers":{"host":"postman-echo.com","request-id":"77dd38ca-2b25-4b3f-b519-10893f72779c","user-agent":"PostmanRuntime/7.39.1","accept-encoding":"gzip, br","postman-token":"571fcbb7-f662-45ed-9a9d-e03f9d8ff4b0","x-forwarded-proto":"https","cache-control":"no-cache","content-length":"284","accept":"application/json","content-type":"application/json"},"json":{"_trace":"OCR executed by run.js (hddt-ocr-cli) — Newman cannot POST SVG multipart","endpoint":"https://captcha.minvoice.com.vn/api/ocrcaptcha/tax_invoice_gov","field":"Captcha","svg":"_hddt-captcha.svg","ocrText":"WSDZRQ","key":"6aaa122cfed74d6863f88401"},"url":"https://postman-echo.com/post"}
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
  "password":"***",
  "ckey": "6aaa122cfed74d6863f88401",
  "cvalue": "WSDZRQ"
}
```


Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept: application/json, text/plain, */*
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
request-id: 10909def-2a5c-4819-a5fd-ef8c1d1e9857
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 44ff69dd-c24f-4376-807d-b392fdbad328
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 116
Cookie: [đã gửi 446 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/security-taxpayer/authenticate' \
  -X POST \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'request-id: 10909def-2a5c-4819-a5fd-ef8c1d1e9857' \
  -H 'Content-Type: application/json' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 44ff69dd-c24f-4376-807d-b392fdbad328' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]' \
  --data-raw '{
  "username": "3100785269",
  "password":"***",
  "ckey": "6aaa122cfed74d6863f88401",
  "cvalue": "WSDZRQ"
}'
```

#### Response

- Status: `200`
- Time: 72ms
- Content-Type: `application/json`
- Size: 204 bytes
- File: [./responses/007-02-login-04-post-api-security-taxpayer-authenticate.txt](./responses/007-02-login-04-post-api-security-taxpayer-authenticate.txt)

Body:

```
{"token":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjE3MDY5LCJpYXQiOjE3ODk1MzA2Njl9.z2JJgby3gGM-unSgA8v7lFT93u7XXgUQUz4C-xqp31Szt25g9pBXVXfTGUtnTBiBC7LOIA3AthxyAt7_bQaOWA"}
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept: application/json, text/plain, */*
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
request-id: de3e1c71-4199-4373-9751-43e55943b7c8
Authorization: [đã gửi 199 ký tự — ẩn trong report]
Cache-Control: no-cache
Postman-Token: 6b74239c-bcc0-4a00-8f0e-72876474b236
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 446 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/security-taxpayer/profile?smiUsername=3100785269' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'request-id: de3e1c71-4199-4373-9751-43e55943b7c8' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 6b74239c-bcc0-4a00-8f0e-72876474b236' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 35ms
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
request-id: 4b01add5-b9e6-4181-8b59-374d83375090
Cache-Control: no-cache
Postman-Token: 2ab530fa-8dfd-46e4-aaf5-ba298f9938ab
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 523 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' \
  -H 'request-id: 4b01add5-b9e6-4181-8b59-374d83375090' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 2ab530fa-8dfd-46e4-aaf5-ba298f9938ab' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 523 ký tự — ẩn trong report]'
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept: application/json, text/plain, */*
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
request-id: 75efea31-c895-4c5a-8800-d5b77b5e43ff
Cache-Control: no-cache
Postman-Token: d31d187b-7016-475e-8ab0-37c233676bc0
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 523 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/captcha' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'request-id: 75efea31-c895-4c5a-8800-d5b77b5e43ff' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: d31d187b-7016-475e-8ab0-37c233676bc0' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 523 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 256ms
- Content-Type: `application/json`
- Size: 12398 bytes
- File: [./responses/010-03-guest-02-get-api-captcha.txt](./responses/010-03-guest-02-get-api-captcha.txt)

Preview (đầu file):

```
{"key":"6aaa122f3ea3b029a85c3d9d","content":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"40\" viewBox=\"0,0,200,40\"><path fill=\"#111\" d=\"M82.88 25.44L82.84 25.40L82.79 25.36Q79.44 31.83 76.01 35.78L75.92 35.70L76.03 35.80Q74.05 36.11 71.61 36.98L71.69 37.06L71.70 37.07Q76.54 31.40 81.30 22.99L81.29 22.98L81.39 23.08Q76.66 15.99 70.68 9.59L70.68 9.59L70.78 9.69Q73.72 10.92 76.00 11.41L75.99 11.40L75.94 11.35Q80.68 16.67 83.12 20.62L83.07 20.57L83.05 20.55Q85.46 16.04 89.38 11.62L89.38 11.62L89.46 11.69Q91.01 11.35 94.21 10.58L94.34 10.71L94.28 10.65Q88.15 17.05 84.69 22.99L84.68 22.98L84.65 22.95Q89.81 31.62 94.19 36.19L94.18 36.17L94.36 36.35Q91.72 35.50 89.62 35.27L89.57 35.22L89.50 35.15Q86.89 32.35 82.97 25.53ZM89.48 35.55L89.44 35.51L89.53 35.60Q89.83 35.63 90.28 35.74L90.35 35.81L90.34 35.80Q91.08 36.50 92.60 38.10L92.49 37.98L92.59 38.08Q95.88 38.82 98.92 40.19L99.03 40.31L98.95 40.22Q91.91 33.71 86.81 24.96L86.70 24.85L86.77 24.92Q90.50 18.26 96.40 11.41L96.31 11.31L96.39 11.39Q94.97 12.07 92.80 12.60L92.86 12.66L92.70 12.50Q93.60 11.62 95.36 9.83L95.36 9.84L95.47 9.94Q93.03 10.77 89.34 11.35L89.28 11.29L89.25 11.26Q85.95 15.19 83.36 19.49L83.38 19.51L83.34 19.48Q82.41 17.85 81.23 16.37L81.19 16.33L78.89 13.38L78.62 13.49L78.48 13.36Q78.38 13.41 78.16 13.34L78.17 13.35L78.11 13.29Q77.42 12.45 75.94 10.89L75.91 10.86L76.02 10.97Q72.21 10.09 69.62 8.72L69.66 8.76L69.51 8.61Q76.41 16.05 80.98 23.09L80.87 22.98L80.89 23.00Q76.50 31.28 70.75 37.87L70.68 37.80L70.63 37.76Q71.89 37.04 74.03 36.47L74.11 36.55L72.80 37.98L72.91 38.09Q72.89 38.07 71.55 39.40L71.45 39.29L71.42 39.26Q74.56 38.33 77.72 37.84L77.63 37.74L77.61 37.73Q81.73 33.31 84.31 28.56L84.35 28.59L84.27 28.51Q86.74 32.65 89.44 35.51Z\"/><path fill=\"#111\" d=\"M166.95 35.21L166.90 35.15L164.45 28.25L164.54 28.34Q160.14 15.71 154.20 9.32L154.30 9.42L154.24 9.36Q156.24 10.41 158.83 11.02L158.88 11.06L158.91 11.10Q164.02 17.35 168.36 30.10L168.24 29.98L168.22 29.97Q171.36 21.95 172.05 20.36L172.04 20.35L171.95 20.26Q174.38 14.6
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
  "ocrText": "H6XDRV",
  "key": "6aaa122f3ea3b029a85c3d9d"
}
```


Headers:

```
Accept: application/json
Content-Type: application/json
request-id: f2960ecf-baf9-44c1-9ef6-617f4c92e969
User-Agent: PostmanRuntime/7.39.1
Cache-Control: no-cache
Postman-Token: 1c27bf4e-ceff-4aef-86b7-5381f38986d1
Host: postman-echo.com
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 284
Cookie: [đã gửi 421 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://postman-echo.com/post' \
  -X POST \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json' \
  -H 'request-id: f2960ecf-baf9-44c1-9ef6-617f4c92e969' \
  -H 'User-Agent: PostmanRuntime/7.39.1' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 1c27bf4e-ceff-4aef-86b7-5381f38986d1' \
  -H 'Host: postman-echo.com' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 421 ký tự — ẩn trong report]' \
  --data-raw '{
  "_trace": "OCR executed by run.js (hddt-ocr-cli) — Newman cannot POST SVG multipart",
  "endpoint": "https://captcha.minvoice.com.vn/api/ocrcaptcha/tax_invoice_gov",
  "field": "Captcha",
  "svg": "_hddt-captcha.svg",
  "ocrText": "H6XDRV",
  "key": "6aaa122f3ea3b029a85c3d9d"
}'
```

#### Response

- Status: `200`
- Time: 327ms
- Content-Type: `application/json; charset=utf-8`
- Size: 1388 bytes
- File: [./responses/011-03-guest-03-ocr-tax-invoice-gov.txt](./responses/011-03-guest-03-ocr-tax-invoice-gov.txt)

Body:

```
{"args":{},"data":{"_trace":"OCR executed by run.js (hddt-ocr-cli) — Newman cannot POST SVG multipart","endpoint":"https://captcha.minvoice.com.vn/api/ocrcaptcha/tax_invoice_gov","field":"Captcha","svg":"_hddt-captcha.svg","ocrText":"H6XDRV","key":"6aaa122f3ea3b029a85c3d9d"},"files":{},"form":{},"headers":{"host":"postman-echo.com","user-agent":"PostmanRuntime/7.39.1","cache-control":"no-cache","accept-encoding":"gzip, br","x-forwarded-proto":"https","postman-token":"1c27bf4e-ceff-4aef-86b7-5381f38986d1","content-length":"284","accept":"application/json","content-type":"application/json","request-id":"f2960ecf-baf9-44c1-9ef6-617f4c92e969","cookie":"sails.sid=s%3AInbuDtizmm3ICYayXza0_2a_fMumCDrY.K6MqqRYTOUkjoxPHQtzR0gnyt32IQUiU40hE8Cexcy4; __cf_bm=1FX5vFk3y5i_FXKD0_GDMyl2BM7gqgUP.JxR3dsCAp8-1789530669.185098-1.0.1.1-kr03dV0h89.LrjY0Cyo3uOQlizcK8bXC0Gg_dijOCOATDcxkE8Iww5IkPBeHCeQISz5.3jOseP3ql.eHRDJhZx0pgDMl1LQb_Y2zdeLwxgjbznduqBY7KEWgMZaNnM3Z; _cfuvid=MrZhbwLmePsT2BbO9TZOfU8b0dVawFQ6OF3MoG9ECPE-1789530669.185098-1.0.1.1-hRiFHbbloMyfDuuMIwRDRp8oZWGZGkFJz4PMQq10sGs"},"json":{"_trace":"OCR executed by run.js (hddt-ocr-cli) — Newman cannot POST SVG multipart","endpoint":"https://captcha.minvoice.com.vn/api/ocrcaptcha/tax_invoice_gov","field":"Captcha","svg":"_hddt-captcha.svg","ocrText":"H6XDRV","key":"6aaa122f3ea3b029a85c3d9d"},"url":"https://postman-echo.com/post"}
```

---

<a id="case-12"></a>
### 12. 03_GUEST — 04 GET /api/{from}/guest-invoices

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/sco-query/guest-invoices?cvalue=H6XDRV&ckey=6aaa122f3ea3b029a85c3d9d&khmshdon=1&hdon=01&nbmst=3603914658&khhdon=C25MDH&shdon=122252&tgtttbso=804339800`

#### Assertions

- ✗ FAIL: HTML WAF / Request Rejected — CQT trả HTML thay vì payload repo expect

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/sco-query/guest-invoices?cvalue=H6XDRV&ckey=6aaa122f3ea3b029a85c3d9d&khmshdon=1&hdon=01&nbmst=3603914658&khhdon=C25MDH&shdon=122252&tgtttbso=804339800`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept: application/json, text/plain, */*
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
request-id: 14f377d4-16a9-4ec4-a50f-cd59a18b1d2f
Cache-Control: no-cache
Postman-Token: a9cb85a1-eb6b-4ba2-96ec-454b70234372
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 523 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/guest-invoices?cvalue=H6XDRV&ckey=6aaa122f3ea3b029a85c3d9d&khmshdon=1&hdon=01&nbmst=3603914658&khhdon=C25MDH&shdon=122252&tgtttbso=804339800' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'request-id: 14f377d4-16a9-4ec4-a50f-cd59a18b1d2f' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: a9cb85a1-eb6b-4ba2-96ec-454b70234372' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 523 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 55ms
- Content-Type: `text/html; charset=UTF-8`
- Size: 746 bytes
- File: [./responses/012-03-guest-04-get-api-from-guest-invoices.txt](./responses/012-03-guest-04-get-api-from-guest-invoices.txt)

Body:

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><META HTTP-EQUIV="CONTENT-TYPE" CONTENT="TEXT/HTML; CHARSET=utf-8"/><title>Error</title></head><body><H2>Error</H2><table summary="Error" border="0" bgcolor="#FEEE7A" cellpadding="0" cellspacing="0" width="400"><tr><td><table summary="Error" border="0" cellpadding="3" cellspacing="1"><tr valign="top" bgcolor="#FBFFDF" align="left"><td><STRONG>Error</STRONG></td></tr><tr valign="top" bgcolor="#FFFFFF"><td>This page can't be displayed. Contact support for additional information.<br/>The incident ID is: 3258386972179795981.</td></tr></table></td></tr></table></body></html>
```

---

<a id="case-13"></a>
### 13. 04_EXCEL — 01 GET /api/query/invoices/export-excel

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/query/invoices/export-excel?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59`

#### Assertions

- ✗ FAIL: HTML WAF / Request Rejected — CQT trả HTML thay vì payload repo expect

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/query/invoices/export-excel?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
request-id: d39abae2-deb1-4f08-8b1e-2a3a8cfc1de4
Authorization: [đã gửi 199 ký tự — ẩn trong report]
Accept: */*
Accept-Encoding: gzip,deflate,br
Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)
End-Point: /tra-cuu/tra-cuu-hoa-don
Cache-Control: no-cache
Postman-Token: de196d9b-fcd8-47c7-8129-4008feaefcbb
Host: hoadondientu.gdt.gov.vn
Connection: keep-alive
Cookie: [đã gửi 523 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/query/invoices/export-excel?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'request-id: d39abae2-deb1-4f08-8b1e-2a3a8cfc1de4' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip,deflate,br' \
  -H 'Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: de196d9b-fcd8-47c7-8129-4008feaefcbb' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 523 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 77ms
- Content-Type: `text/html; charset=UTF-8`
- Size: 746 bytes
- File: [./responses/013-04-excel-01-get-api-query-invoices-export-excel.txt](./responses/013-04-excel-01-get-api-query-invoices-export-excel.txt)

Body:

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><META HTTP-EQUIV="CONTENT-TYPE" CONTENT="TEXT/HTML; CHARSET=utf-8"/><title>Error</title></head><body><H2>Error</H2><table summary="Error" border="0" bgcolor="#FEEE7A" cellpadding="0" cellspacing="0" width="400"><tr><td><table summary="Error" border="0" cellpadding="3" cellspacing="1"><tr valign="top" bgcolor="#FBFFDF" align="left"><td><STRONG>Error</STRONG></td></tr><tr valign="top" bgcolor="#FFFFFF"><td>This page can't be displayed. Contact support for additional information.<br/>The incident ID is: 3258386972179795981.</td></tr></table></td></tr></table></body></html>
```

---

<a id="case-14"></a>
### 14. 04_EXCEL — 02 GET /api/sco-query/invoices/export-excel

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-excel?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59%3Bttxly%3D%3D8`

#### Assertions

- ✗ FAIL: HTML WAF / Request Rejected — CQT trả HTML thay vì payload repo expect

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-excel?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59%3Bttxly%3D%3D8`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
request-id: 15f3f9f3-4a24-4126-a99a-bebe38be9090
Authorization: [đã gửi 199 ký tự — ẩn trong report]
Accept: */*
Accept-Encoding: gzip,deflate,br
Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)
End-Point: /tra-cuu/tra-cuu-hoa-don
Cache-Control: no-cache
Postman-Token: dc82da80-9669-404e-a994-0bb83f95e8df
Host: hoadondientu.gdt.gov.vn
Connection: keep-alive
Cookie: [đã gửi 523 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-excel?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59%3Bttxly%3D%3D8' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'request-id: 15f3f9f3-4a24-4126-a99a-bebe38be9090' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip,deflate,br' \
  -H 'Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: dc82da80-9669-404e-a994-0bb83f95e8df' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 523 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 70ms
- Content-Type: `text/html; charset=UTF-8`
- Size: 746 bytes
- File: [./responses/014-04-excel-02-get-api-sco-query-invoices-export-excel.txt](./responses/014-04-excel-02-get-api-sco-query-invoices-export-excel.txt)

Body:

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><META HTTP-EQUIV="CONTENT-TYPE" CONTENT="TEXT/HTML; CHARSET=utf-8"/><title>Error</title></head><body><H2>Error</H2><table summary="Error" border="0" bgcolor="#FEEE7A" cellpadding="0" cellspacing="0" width="400"><tr><td><table summary="Error" border="0" cellpadding="3" cellspacing="1"><tr valign="top" bgcolor="#FBFFDF" align="left"><td><STRONG>Error</STRONG></td></tr><tr valign="top" bgcolor="#FFFFFF"><td>This page can't be displayed. Contact support for additional information.<br/>The incident ID is: 3258386972179795981.</td></tr></table></td></tr></table></body></html>
```

---

<a id="case-15"></a>
### 15. 04_EXCEL — 03 GET /api/query/invoices/export-excel-sold

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/query/invoices/export-excel-sold?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59&type=purchase`

#### Assertions

- ✗ FAIL: HTML WAF / Request Rejected — CQT trả HTML thay vì payload repo expect

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/query/invoices/export-excel-sold?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59&type=purchase`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
request-id: 95ac5d51-5b9b-4142-81d8-1d1b350c43ae
Authorization: [đã gửi 199 ký tự — ẩn trong report]
Accept: */*
Accept-Encoding: gzip,deflate,br
Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)
End-Point: /tra-cuu/tra-cuu-hoa-don
Cache-Control: no-cache
Postman-Token: 9405d14c-6d95-4afe-81b2-3c0aa6bf36a1
Host: hoadondientu.gdt.gov.vn
Connection: keep-alive
Cookie: [đã gửi 523 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/query/invoices/export-excel-sold?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59&type=purchase' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'request-id: 95ac5d51-5b9b-4142-81d8-1d1b350c43ae' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip,deflate,br' \
  -H 'Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 9405d14c-6d95-4afe-81b2-3c0aa6bf36a1' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 523 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 72ms
- Content-Type: `text/html; charset=UTF-8`
- Size: 746 bytes
- File: [./responses/015-04-excel-03-get-api-query-invoices-export-excel-sold.txt](./responses/015-04-excel-03-get-api-query-invoices-export-excel-sold.txt)

Body:

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><META HTTP-EQUIV="CONTENT-TYPE" CONTENT="TEXT/HTML; CHARSET=utf-8"/><title>Error</title></head><body><H2>Error</H2><table summary="Error" border="0" bgcolor="#FEEE7A" cellpadding="0" cellspacing="0" width="400"><tr><td><table summary="Error" border="0" cellpadding="3" cellspacing="1"><tr valign="top" bgcolor="#FBFFDF" align="left"><td><STRONG>Error</STRONG></td></tr><tr valign="top" bgcolor="#FFFFFF"><td>This page can't be displayed. Contact support for additional information.<br/>The incident ID is: 3258386972179795981.</td></tr></table></td></tr></table></body></html>
```

---

<a id="case-16"></a>
### 16. 04_EXCEL — 04 GET /api/sco-query/invoices/export-excel-sold

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-excel-sold?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59%3Bttxly%3D%3D8&type=purchase`

#### Assertions

- ✗ FAIL: HTML WAF / Request Rejected — CQT trả HTML thay vì payload repo expect

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-excel-sold?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59%3Bttxly%3D%3D8&type=purchase`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
request-id: cf07c220-262e-4561-9235-00dda18b87da
Authorization: [đã gửi 199 ký tự — ẩn trong report]
Accept: */*
Accept-Encoding: gzip,deflate,br
Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)
End-Point: /tra-cuu/tra-cuu-hoa-don
Cache-Control: no-cache
Postman-Token: 72959184-cdb8-4c67-86c5-4a42aca9332f
Host: hoadondientu.gdt.gov.vn
Connection: keep-alive
Cookie: [đã gửi 523 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-excel-sold?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59%3Bttxly%3D%3D8&type=purchase' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'request-id: cf07c220-262e-4561-9235-00dda18b87da' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip,deflate,br' \
  -H 'Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 72959184-cdb8-4c67-86c5-4a42aca9332f' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 523 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 67ms
- Content-Type: `text/html; charset=UTF-8`
- Size: 746 bytes
- File: [./responses/016-04-excel-04-get-api-sco-query-invoices-export-excel-sold.txt](./responses/016-04-excel-04-get-api-sco-query-invoices-export-excel-sold.txt)

Body:

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><META HTTP-EQUIV="CONTENT-TYPE" CONTENT="TEXT/HTML; CHARSET=utf-8"/><title>Error</title></head><body><H2>Error</H2><table summary="Error" border="0" bgcolor="#FEEE7A" cellpadding="0" cellspacing="0" width="400"><tr><td><table summary="Error" border="0" cellpadding="3" cellspacing="1"><tr valign="top" bgcolor="#FBFFDF" align="left"><td><STRONG>Error</STRONG></td></tr><tr valign="top" bgcolor="#FFFFFF"><td>This page can't be displayed. Contact support for additional information.<br/>The incident ID is: 3258386972179795981.</td></tr></table></td></tr></table></body></html>
```

---

<a id="case-17"></a>
### 17. 05_DETAIL — 01 GET /api/query/invoices/detail

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/query/invoices/detail?nbmst=&khhdon=&shdon=&khmshdon=`

#### Assertions

- ✗ FAIL: HTML WAF / Request Rejected — CQT trả HTML thay vì payload repo expect

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/query/invoices/detail?nbmst=&khhdon=&shdon=&khmshdon=`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
request-id: 58d056a4-c02c-429d-ab2b-24bc09ff2fa6
Authorization: [đã gửi 199 ký tự — ẩn trong report]
Accept: */*
Action: Xem%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)
End-Point: /tra-cuu/tra-cuu-hoa-don
Cache-Control: no-cache
Postman-Token: 273aa2c0-b773-4037-9aa1-74c9fd717eff
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 523 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/query/invoices/detail?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'request-id: 58d056a4-c02c-429d-ab2b-24bc09ff2fa6' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'Accept: */*' \
  -H 'Action: Xem%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 273aa2c0-b773-4037-9aa1-74c9fd717eff' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 523 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 111ms
- Content-Type: `text/html; charset=UTF-8`
- Size: 746 bytes
- File: [./responses/017-05-detail-01-get-api-query-invoices-detail.txt](./responses/017-05-detail-01-get-api-query-invoices-detail.txt)

Body:

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><META HTTP-EQUIV="CONTENT-TYPE" CONTENT="TEXT/HTML; CHARSET=utf-8"/><title>Error</title></head><body><H2>Error</H2><table summary="Error" border="0" bgcolor="#FEEE7A" cellpadding="0" cellspacing="0" width="400"><tr><td><table summary="Error" border="0" cellpadding="3" cellspacing="1"><tr valign="top" bgcolor="#FBFFDF" align="left"><td><STRONG>Error</STRONG></td></tr><tr valign="top" bgcolor="#FFFFFF"><td>This page can't be displayed. Contact support for additional information.<br/>The incident ID is: 3258386972179795981.</td></tr></table></td></tr></table></body></html>
```

---

<a id="case-18"></a>
### 18. 05_DETAIL — 02 GET /api/sco-query/invoices/detail

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/detail?nbmst=&khhdon=&shdon=&khmshdon=`

#### Assertions

- ✗ FAIL: HTML WAF / Request Rejected — CQT trả HTML thay vì payload repo expect

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/detail?nbmst=&khhdon=&shdon=&khmshdon=`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
request-id: 8c1193e7-6bec-465a-9e2e-b552403a5a28
Authorization: [đã gửi 199 ký tự — ẩn trong report]
Accept: */*
Action: Xem%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)
End-Point: /tra-cuu/tra-cuu-hoa-don
Cache-Control: no-cache
Postman-Token: ac4e3548-6244-4378-8676-17f74e8de315
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 523 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/detail?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'request-id: 8c1193e7-6bec-465a-9e2e-b552403a5a28' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'Accept: */*' \
  -H 'Action: Xem%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: ac4e3548-6244-4378-8676-17f74e8de315' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 523 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 96ms
- Content-Type: `text/html; charset=UTF-8`
- Size: 746 bytes
- File: [./responses/018-05-detail-02-get-api-sco-query-invoices-detail.txt](./responses/018-05-detail-02-get-api-sco-query-invoices-detail.txt)

Body:

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><META HTTP-EQUIV="CONTENT-TYPE" CONTENT="TEXT/HTML; CHARSET=utf-8"/><title>Error</title></head><body><H2>Error</H2><table summary="Error" border="0" bgcolor="#FEEE7A" cellpadding="0" cellspacing="0" width="400"><tr><td><table summary="Error" border="0" cellpadding="3" cellspacing="1"><tr valign="top" bgcolor="#FBFFDF" align="left"><td><STRONG>Error</STRONG></td></tr><tr valign="top" bgcolor="#FFFFFF"><td>This page can't be displayed. Contact support for additional information.<br/>The incident ID is: 3258386972179795981.</td></tr></table></td></tr></table></body></html>
```

---

<a id="case-19"></a>
### 19. 06_XML — 01 GET /api/query/invoices/export-xml

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/query/invoices/export-xml?nbmst=&khhdon=&shdon=&khmshdon=`

#### Assertions

- ✗ FAIL: HTML WAF / Request Rejected — CQT trả HTML thay vì payload repo expect

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/query/invoices/export-xml?nbmst=&khhdon=&shdon=&khmshdon=`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
request-id: 88cc897e-e62a-44d5-8c93-865d497fe531
Authorization: [đã gửi 199 ký tự — ẩn trong report]
Accept: */*
Action: Xu%E1%BA%A5t%20xml%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)
End-Point: /tra-cuu/tra-cuu-hoa-don
Cache-Control: no-cache
Postman-Token: e98eef00-66f5-4bd6-8354-f7546c40bc20
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 523 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/query/invoices/export-xml?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'request-id: 88cc897e-e62a-44d5-8c93-865d497fe531' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'Accept: */*' \
  -H 'Action: Xu%E1%BA%A5t%20xml%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: e98eef00-66f5-4bd6-8354-f7546c40bc20' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 523 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 64ms
- Content-Type: `text/html; charset=UTF-8`
- Size: 746 bytes
- File: [./responses/019-06-xml-01-get-api-query-invoices-export-xml.txt](./responses/019-06-xml-01-get-api-query-invoices-export-xml.txt)

Body:

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><META HTTP-EQUIV="CONTENT-TYPE" CONTENT="TEXT/HTML; CHARSET=utf-8"/><title>Error</title></head><body><H2>Error</H2><table summary="Error" border="0" bgcolor="#FEEE7A" cellpadding="0" cellspacing="0" width="400"><tr><td><table summary="Error" border="0" cellpadding="3" cellspacing="1"><tr valign="top" bgcolor="#FBFFDF" align="left"><td><STRONG>Error</STRONG></td></tr><tr valign="top" bgcolor="#FFFFFF"><td>This page can't be displayed. Contact support for additional information.<br/>The incident ID is: 3258386972179795981.</td></tr></table></td></tr></table></body></html>
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
request-id: 141cfc0c-cd08-4113-9c0c-8f5a0c38ec81
Authorization: [đã gửi 199 ký tự — ẩn trong report]
Accept: */*
Action: Xu%E1%BA%A5t%20xml%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)
End-Point: /tra-cuu/tra-cuu-hoa-don
Cache-Control: no-cache
Postman-Token: 73e3622f-8951-4c17-8d82-7a568a75e100
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 523 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-xml?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'request-id: 141cfc0c-cd08-4113-9c0c-8f5a0c38ec81' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'Accept: */*' \
  -H 'Action: Xu%E1%BA%A5t%20xml%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 73e3622f-8951-4c17-8d82-7a568a75e100' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 523 ký tự — ẩn trong report]'
```

#### Response

- Status: `500`
- Time: 83ms
- Content-Type: `application/json`
- Size: 246 bytes
- File: [./responses/020-06-xml-02-get-api-sco-query-invoices-export-xml.txt](./responses/020-06-xml-02-get-api-sco-query-invoices-export-xml.txt)

Body:

```
{"timestamp":"16/09/2026 10:51:16","message":"Failed to convert value of type 'java.lang.String' to required type 'byte'; nested exception is java.lang.NumberFormatException: For input string: \"\"","details":"","path":"uri=/invoices/export-xml"}
```

---

<a id="case-21"></a>
### 21. 07_RELATED — 01 GET /api/query/invoices/related

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/query/invoices/related?nbmst=&khhdon=&shdon=&khmshdon=`

#### Assertions

- ✗ FAIL: HTML WAF / Request Rejected — CQT trả HTML thay vì payload repo expect

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/query/invoices/related?nbmst=&khhdon=&shdon=&khmshdon=`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept: application/json, text/plain, */*
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
request-id: 64e171a3-5640-4f1b-95f4-7e4b92c3c9f6
Authorization: [đã gửi 199 ký tự — ẩn trong report]
Action: Xem%20th%C3%B4ng%20tin%20li%C3%AAn%20quan%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)
End-Point: /tra-cuu/tra-cuu-hoa-don
Cache-Control: no-cache
Postman-Token: d58c4266-7f3c-4f80-a1c7-fc3de3fbec14
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 523 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/query/invoices/related?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'request-id: 64e171a3-5640-4f1b-95f4-7e4b92c3c9f6' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'Action: Xem%20th%C3%B4ng%20tin%20li%C3%AAn%20quan%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: d58c4266-7f3c-4f80-a1c7-fc3de3fbec14' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 523 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 45ms
- Content-Type: `text/html; charset=UTF-8`
- Size: 746 bytes
- File: [./responses/021-07-related-01-get-api-query-invoices-related.txt](./responses/021-07-related-01-get-api-query-invoices-related.txt)

Body:

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><META HTTP-EQUIV="CONTENT-TYPE" CONTENT="TEXT/HTML; CHARSET=utf-8"/><title>Error</title></head><body><H2>Error</H2><table summary="Error" border="0" bgcolor="#FEEE7A" cellpadding="0" cellspacing="0" width="400"><tr><td><table summary="Error" border="0" cellpadding="3" cellspacing="1"><tr valign="top" bgcolor="#FBFFDF" align="left"><td><STRONG>Error</STRONG></td></tr><tr valign="top" bgcolor="#FFFFFF"><td>This page can't be displayed. Contact support for additional information.<br/>The incident ID is: 3258386972179795981.</td></tr></table></td></tr></table></body></html>
```

---

<a id="case-22"></a>
### 22. 07_RELATED — 02 GET /api/sco-query/invoices/related

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/related?nbmst=&khhdon=&shdon=&khmshdon=`

#### Assertions

- ✗ FAIL: HTML WAF / Request Rejected — CQT trả HTML thay vì payload repo expect

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/related?nbmst=&khhdon=&shdon=&khmshdon=`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept: application/json, text/plain, */*
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
request-id: 5954702e-b5fd-469e-9857-1a3f16e98895
Authorization: [đã gửi 199 ký tự — ẩn trong report]
Action: Xem%20th%C3%B4ng%20tin%20li%C3%AAn%20quan%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)
End-Point: /tra-cuu/tra-cuu-hoa-don
Cache-Control: no-cache
Postman-Token: c7971f4d-1394-4288-b052-58f394ca7c26
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 523 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/related?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'request-id: 5954702e-b5fd-469e-9857-1a3f16e98895' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'Action: Xem%20th%C3%B4ng%20tin%20li%C3%AAn%20quan%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: c7971f4d-1394-4288-b052-58f394ca7c26' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 523 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 74ms
- Content-Type: `text/html; charset=UTF-8`
- Size: 746 bytes
- File: [./responses/022-07-related-02-get-api-sco-query-invoices-related.txt](./responses/022-07-related-02-get-api-sco-query-invoices-related.txt)

Body:

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><META HTTP-EQUIV="CONTENT-TYPE" CONTENT="TEXT/HTML; CHARSET=utf-8"/><title>Error</title></head><body><H2>Error</H2><table summary="Error" border="0" bgcolor="#FEEE7A" cellpadding="0" cellspacing="0" width="400"><tr><td><table summary="Error" border="0" cellpadding="3" cellspacing="1"><tr valign="top" bgcolor="#FBFFDF" align="left"><td><STRONG>Error</STRONG></td></tr><tr valign="top" bgcolor="#FFFFFF"><td>This page can't be displayed. Contact support for additional information.<br/>The incident ID is: 3258386972179795981.</td></tr></table></td></tr></table></body></html>
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept: application/json, text/plain, */*
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
request-id: 48310f31-3661-4aac-b056-369b3681c2ae
Authorization: [đã gửi 199 ký tự — ẩn trong report]
Cache-Control: no-cache
Postman-Token: 272e5fa0-3e46-45a8-adfe-05835b2217c8
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 523 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/query/invoices/relative?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'request-id: 48310f31-3661-4aac-b056-369b3681c2ae' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 272e5fa0-3e46-45a8-adfe-05835b2217c8' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 523 ký tự — ẩn trong report]'
```

#### Response

- Status: `500`
- Time: 69ms
- Content-Type: `application/json`
- Size: 295 bytes
- File: [./responses/023-07-related-03-get-api-query-invoices-relative.txt](./responses/023-07-related-03-get-api-query-invoices-relative.txt)

Body:

```
{"timestamp":"16/09/2026 10:51:18","message":"Failed to convert value of type 'java.lang.String' to required type 'byte'; nested exception is java.lang.NumberFormatException: For input string: \"\"","details":"","path":"uri=/invoices/relative","requestId":"4f017399-20c5-457c-85f0-f9b8cb031ad0"}
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept: application/json, text/plain, */*
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
request-id: 40394e53-bc30-47da-9f77-d86d6b03a52d
Authorization: [đã gửi 199 ký tự — ẩn trong report]
Cache-Control: no-cache
Postman-Token: 44d3aed0-826f-47b5-a533-84e7d43e7c5c
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 523 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/relative?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'request-id: 40394e53-bc30-47da-9f77-d86d6b03a52d' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 44d3aed0-826f-47b5-a533-84e7d43e7c5c' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 523 ký tự — ẩn trong report]'
```

#### Response

- Status: `500`
- Time: 39ms
- Content-Type: `application/json`
- Size: 244 bytes
- File: [./responses/024-07-related-04-get-api-sco-query-invoices-relative.txt](./responses/024-07-related-04-get-api-sco-query-invoices-relative.txt)

Body:

```
{"timestamp":"16/09/2026 10:51:18","message":"Failed to convert value of type 'java.lang.String' to required type 'byte'; nested exception is java.lang.NumberFormatException: For input string: \"\"","details":"","path":"uri=/invoices/relative"}
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept: application/json, text/plain, */*
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
request-id: 980e5cc9-da0f-4481-8696-c4315162f45c
Authorization: [đã gửi 199 ký tự — ẩn trong report]
Action: T%C3%ACm%20ki%E1%BA%BFm
End-Point: /tra-cuu/tra-cuu-hoa-don
Cache-Control: no-cache
Postman-Token: c62a6d2e-6e64-485f-9376-762418128bf6
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 523 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/explanation/tbssdts/signed-notifications?sort=ngay%3Adesc%2Cso%3Adesc&search=ngay%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Bngay%3Dle%3D16%2F09%2F2026T23%3A59%3A59&size=50' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'request-id: 980e5cc9-da0f-4481-8696-c4315162f45c' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'Action: T%C3%ACm%20ki%E1%BA%BFm' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: c62a6d2e-6e64-485f-9376-762418128bf6' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 523 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 93ms
- Content-Type: `application/json`
- Size: 45 bytes
- File: [./responses/025-08-tbss-01-get-api-explanation-tbssdts-signed-notifications.txt](./responses/025-08-tbss-01-get-api-explanation-tbssdts-signed-notifications.txt)

Body:

```
{"datas":[],"total":0,"state":null,"time":46}
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept: application/json, text/plain, */*
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
request-id: 09e248ef-97cc-4975-9da2-af225f632aa8
Authorization: [đã gửi 199 ký tự — ẩn trong report]
Action: T%C3%ACm%20ki%E1%BA%BFm
End-Point: /tra-cuu/tra-cuu-hoa-don
Cache-Control: no-cache
Postman-Token: ab37bac6-76ad-47c6-b941-91942d8cb705
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 523 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-explanation/tbssdts/signed-notifications?sort=ngay%3Adesc%2Cso%3Adesc&search=ngay%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Bngay%3Dle%3D16%2F09%2F2026T23%3A59%3A59&size=50' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'request-id: 09e248ef-97cc-4975-9da2-af225f632aa8' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'Action: T%C3%ACm%20ki%E1%BA%BFm' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: ab37bac6-76ad-47c6-b941-91942d8cb705' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 523 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 48ms
- Content-Type: `application/json`
- Size: 44 bytes
- File: [./responses/026-08-tbss-02-get-api-sco-explanation-tbssdts-signed-notifications.txt](./responses/026-08-tbss-02-get-api-sco-explanation-tbssdts-signed-notifications.txt)

Body:

```
{"datas":[],"total":0,"state":null,"time":5}
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept: application/json, text/plain, */*
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
request-id: 727b0fcb-1134-43a4-ace5-ae8b787884fb
Authorization: [đã gửi 199 ký tự — ẩn trong report]
Accept-Encoding: gzip, deflate, br
Action: T%C3%ACm%20ki%E1%BA%BFm
End-Point: /tra-cuu/tra-cuu-chung-tu-tncn
Referer: https://hoadondientu.gdt.gov.vn/tra-cuu/tra-cuu-chung-tu-tncn
Cache-Control: no-cache
Postman-Token: 03eb52d8-2b7f-4216-bc21-1ca683909574
Host: hoadondientu.gdt.gov.vn
Connection: keep-alive
Cookie: [đã gửi 523 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/pitw?size=50&search=nlap%3Dge%3D2026-09-15T17%3A00%3A00.000Z%3Bnlap%3Dle%3D2026-09-16T16%3A59%3A59.999Z&sort=nlap%3Adesc' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'request-id: 727b0fcb-1134-43a4-ace5-ae8b787884fb' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Action: T%C3%ACm%20ki%E1%BA%BFm' \
  -H 'End-Point: /tra-cuu/tra-cuu-chung-tu-tncn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/tra-cuu/tra-cuu-chung-tu-tncn' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 03eb52d8-2b7f-4216-bc21-1ca683909574' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 523 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 47ms
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept: application/json, text/plain, */*
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
request-id: c94cb068-4955-43ee-ace6-edd9c390f250
Authorization: [đã gửi 199 ký tự — ẩn trong report]
Accept-Encoding: gzip, deflate, br
Action: 
End-Point: /tra-cuu/tra-cuu-chung-tu-tncn
Referer: https://hoadondientu.gdt.gov.vn/tra-cuu/tra-cuu-chung-tu-tncn
Cache-Control: no-cache
Postman-Token: 3b63d332-3fa1-4159-8263-17114288990b
Host: hoadondientu.gdt.gov.vn
Connection: keep-alive
Cookie: [đã gửi 523 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/pitw/export-xml?hsgoc=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'request-id: c94cb068-4955-43ee-ace6-edd9c390f250' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Action: ' \
  -H 'End-Point: /tra-cuu/tra-cuu-chung-tu-tncn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/tra-cuu/tra-cuu-chung-tu-tncn' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 3b63d332-3fa1-4159-8263-17114288990b' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 523 ký tự — ẩn trong report]'
```

#### Response

- Status: `500`
- Time: 42ms
- Content-Type: `application/json`
- Size: 184 bytes
- File: [./responses/028-09-pitw-02-get-api-pitw-export-xml.txt](./responses/028-09-pitw-02-get-api-pitw-export-xml.txt)

Body:

```
{"timestamp":"16/09/2026 10:51:20","message":"Required request parameter 'hsgoc' for method parameter type UUID is present but converted to null","details":"","path":"uri=/export-xml"}
```

