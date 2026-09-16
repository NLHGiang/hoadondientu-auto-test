# HoaDonDienTu Healthcheck

❌ **7 pass** / **21 fail** / **28 total** · 16.03s

| Field | Value |
|---|---|
| Thời gian | 2026-09-16T03:28:06.360Z → 2026-09-16T03:28:22.392Z |
| Collection | `HoaDonDienTu.healthcheck.postman_collection.json` |
| Environment | `HoaDonDienTu.environment.json` |
| Thư mục báo cáo | `test-report-20260916-102806` |

> Authorization / Cookie / password hiện `[đã gửi N ký tự — ẩn trong report]`. Newman đã gửi giá trị thật. Copy curl từ report **không replay** được phần đã ẩn.

## Fail / Error

| # | Folder | Request | Status | Assertion |
|---|---|---|---|---|
| 3 | 01_PUBLIC | [03 GET /api/category/public/dsdkts/{mst}/manager](#case-3) | 403 | FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. |
| 7 | 02_LOGIN | [04 POST /api/security-taxpayer/authenticate](#case-7) | 200 | FAIL: HTML WAF / Request Rejected |
| 8 | 02_LOGIN | [05 GET /api/security-taxpayer/profile](#case-8) | 403 | FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. |
| 10 | 03_GUEST | [02 GET /api/captcha](#case-10) | 200 | FAIL: HTML WAF / Request Rejected |
| 12 | 03_GUEST | [04 GET /api/{from}/guest-invoices](#case-12) | 200 | FAIL: HTML WAF / Request Rejected |
| 13 | 04_EXCEL | [01 GET /api/query/invoices/export-excel](#case-13) | 403 | FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. |
| 14 | 04_EXCEL | [02 GET /api/sco-query/invoices/export-excel](#case-14) | 403 | FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. |
| 15 | 04_EXCEL | [03 GET /api/query/invoices/export-excel-sold](#case-15) | 403 | FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. |
| 16 | 04_EXCEL | [04 GET /api/sco-query/invoices/export-excel-sold](#case-16) | 403 | FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. |
| 17 | 05_DETAIL | [01 GET /api/query/invoices/detail](#case-17) | 403 | FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. |
| 18 | 05_DETAIL | [02 GET /api/sco-query/invoices/detail](#case-18) | 403 | FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. |
| 19 | 06_XML | [01 GET /api/query/invoices/export-xml](#case-19) | 403 | FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. |
| 20 | 06_XML | [02 GET /api/sco-query/invoices/export-xml](#case-20) | 403 | FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. |
| 21 | 07_RELATED | [01 GET /api/query/invoices/related](#case-21) | 403 | FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. |
| 22 | 07_RELATED | [02 GET /api/sco-query/invoices/related](#case-22) | 403 | FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. |
| 23 | 07_RELATED | [03 GET /api/query/invoices/relative](#case-23) | 403 | FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. |
| 24 | 07_RELATED | [04 GET /api/sco-query/invoices/relative](#case-24) | 403 | FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. |
| 25 | 08_TBSS | [01 GET /api/explanation/tbssdts/signed-notifications](#case-25) | 403 | FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. |
| 26 | 08_TBSS | [02 GET /api/sco-explanation/tbssdts/signed-notifications](#case-26) | 403 | FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. |
| 27 | 09_PITW | [01 GET /api/pitw](#case-27) | 403 | FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. |
| 28 | 09_PITW | [02 GET /api/pitw/export-xml](#case-28) | 403 | FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. |

## Tổng quan

| # | Folder | Request | Kết quả | Method | Status | Time |
|---|---|---|---|---|---|---|
| 1 | 01_PUBLIC | [01 GET portal](#case-1) | ✅ PASS | GET | 200 | 247ms |
| 2 | 01_PUBLIC | [02 GET /api/captcha](#case-2) | ✅ PASS | GET | 200 | 51ms |
| 3 | 01_PUBLIC | [03 GET /api/category/public/dsdkts/{mst}/manager](#case-3) | ❌ FAIL | GET | 403 | 35ms |
| 4 | 02_LOGIN | [01 GET portal](#case-4) | ✅ PASS | GET | 200 | 47ms |
| 5 | 02_LOGIN | [02 GET /api/captcha](#case-5) | ✅ PASS | GET | 200 | 41ms |
| 6 | 02_LOGIN | [03 OCR tax_invoice_gov](#case-6) | ✅ PASS | POST | 200 | 533ms |
| 7 | 02_LOGIN | [04 POST /api/security-taxpayer/authenticate](#case-7) | ❌ FAIL | POST | 200 | 42ms |
| 8 | 02_LOGIN | [05 GET /api/security-taxpayer/profile](#case-8) | ❌ FAIL | GET | 403 | 67ms |
| 9 | 03_GUEST | [01 GET portal](#case-9) | ✅ PASS | GET | 200 | 48ms |
| 10 | 03_GUEST | [02 GET /api/captcha](#case-10) | ❌ FAIL | GET | 200 | 39ms |
| 11 | 03_GUEST | [03 OCR tax_invoice_gov](#case-11) | ✅ PASS | POST | 200 | 351ms |
| 12 | 03_GUEST | [04 GET /api/{from}/guest-invoices](#case-12) | ❌ FAIL | GET | 200 | 317ms |
| 13 | 04_EXCEL | [01 GET /api/query/invoices/export-excel](#case-13) | ❌ FAIL | GET | 403 | 90ms |
| 14 | 04_EXCEL | [02 GET /api/sco-query/invoices/export-excel](#case-14) | ❌ FAIL | GET | 403 | 43ms |
| 15 | 04_EXCEL | [03 GET /api/query/invoices/export-excel-sold](#case-15) | ❌ FAIL | GET | 403 | 32ms |
| 16 | 04_EXCEL | [04 GET /api/sco-query/invoices/export-excel-sold](#case-16) | ❌ FAIL | GET | 403 | 31ms |
| 17 | 05_DETAIL | [01 GET /api/query/invoices/detail](#case-17) | ❌ FAIL | GET | 403 | 34ms |
| 18 | 05_DETAIL | [02 GET /api/sco-query/invoices/detail](#case-18) | ❌ FAIL | GET | 403 | 31ms |
| 19 | 06_XML | [01 GET /api/query/invoices/export-xml](#case-19) | ❌ FAIL | GET | 403 | 28ms |
| 20 | 06_XML | [02 GET /api/sco-query/invoices/export-xml](#case-20) | ❌ FAIL | GET | 403 | 25ms |
| 21 | 07_RELATED | [01 GET /api/query/invoices/related](#case-21) | ❌ FAIL | GET | 403 | 32ms |
| 22 | 07_RELATED | [02 GET /api/sco-query/invoices/related](#case-22) | ❌ FAIL | GET | 403 | 30ms |
| 23 | 07_RELATED | [03 GET /api/query/invoices/relative](#case-23) | ❌ FAIL | GET | 403 | 28ms |
| 24 | 07_RELATED | [04 GET /api/sco-query/invoices/relative](#case-24) | ❌ FAIL | GET | 403 | 27ms |
| 25 | 08_TBSS | [01 GET /api/explanation/tbssdts/signed-notifications](#case-25) | ❌ FAIL | GET | 403 | 27ms |
| 26 | 08_TBSS | [02 GET /api/sco-explanation/tbssdts/signed-notifications](#case-26) | ❌ FAIL | GET | 403 | 1033ms |
| 27 | 09_PITW | [01 GET /api/pitw](#case-27) | ❌ FAIL | GET | 403 | 35ms |
| 28 | 09_PITW | [02 GET /api/pitw/export-xml](#case-28) | ❌ FAIL | GET | 403 | 26ms |

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
Cache-Control: no-cache
Postman-Token: b25663f3-a047-48f6-8742-79579aef4514
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
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: b25663f3-a047-48f6-8742-79579aef4514' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive'
```

#### Response

- Status: `200`
- Time: 247ms
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
Cache-Control: no-cache
Postman-Token: 354b6d4a-f2a0-4bb6-9092-0a4271cc37c7
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
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 354b6d4a-f2a0-4bb6-9092-0a4271cc37c7' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 248 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 51ms
- Content-Type: `application/json`
- Size: 13631 bytes
- File: [./responses/002-01-public-02-get-api-captcha.txt](./responses/002-01-public-02-get-api-captcha.txt)

Preview (đầu file):

```
{"key":"6aaa0cc7f5e4663fb1c578b7","content":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"40\" viewBox=\"0,0,200,40\"><path fill=\"#333\" d=\"M84.47 27.24L75.18 17.19L75.17 17.19Q75.93 20.80 75.93 24.53L76.06 24.67L75.93 24.53Q75.94 30.52 73.88 36.07L73.94 36.13L73.90 36.09Q72.78 36.30 70.53 37.06L70.60 37.13L70.52 37.05Q73.43 31.36 73.43 24.65L73.38 24.61L73.37 24.60Q73.51 16.10 69.02 8.67L68.95 8.60L68.96 8.61Q69.35 8.74 70.03 9.15L70.07 9.19L69.96 9.08Q82.10 20.35 89.95 29.60L89.89 29.54L90.00 29.65Q89.64 27.17 89.64 24.73L89.64 24.72L89.74 24.82Q89.60 17.45 92.11 11.25L92.18 11.31L92.20 11.33Q94.59 10.87 96.19 10.19L96.06 10.05L96.11 10.10Q92.88 16.35 92.58 23.51L92.41 23.34L92.59 23.53Q92.09 30.68 95.06 36.85L95.25 37.03L95.06 36.84Q94.66 36.95 94.25 36.76L94.21 36.72L94.23 36.74Q89.65 32.76 84.43 27.21L84.33 27.11ZM97.79 40.14L97.76 40.12L97.71 40.07Q98.22 40.27 98.63 40.46L98.59 40.41L99.55 40.88L99.50 40.83Q94.28 33.82 94.28 24.46L94.32 24.49L94.33 24.50Q94.42 17.36 97.73 11.12L97.67 11.05L97.57 10.96Q97.09 11.35 95.68 11.96L95.68 11.96L95.53 11.81Q95.94 11.00 96.78 9.44L96.78 9.44L96.83 9.49Q94.35 10.36 91.91 10.93L91.84 10.86L92.01 11.03Q89.37 17.49 89.37 24.91L89.24 24.78L89.28 24.82Q89.24 26.65 89.43 28.63L89.54 28.74L89.46 28.65Q84.84 23.01 80.08 18.40L80.08 18.40L70.07 8.78L69.92 8.62Q69.52 8.49 68.30 7.91L68.17 7.78L68.15 7.76Q72.98 15.45 72.98 24.55L73.15 24.72L73.00 24.57Q73.02 31.71 69.93 37.72L70.05 37.84L70.02 37.80Q70.34 37.71 71.98 37.10L71.99 37.12L71.93 37.06Q71.67 37.90 70.83 39.38L70.79 39.34L70.83 39.38Q72.07 38.75 75.54 37.96L75.50 37.92L75.61 38.03Q77.93 31.90 77.93 24.71L77.92 24.69L77.88 24.65Q77.98 22.66 77.75 20.53L77.61 20.38L77.64 20.42Q89.19 33.30 97.80 40.15Z\"/><path fill=\"#222\" d=\"M166.97 35.22L166.88 35.14L164.61 28.41L164.45 28.25Q160.13 15.70 154.19 9.31L154.23 9.35L154.19 9.31Q156.17 10.34 158.75 10.94L158.78 10.97L158.81 11.00Q163.92 17.25 168.26 30.01L168.39 30.14L168.33 30.08Q171.38 21.97 172.07 20.38L172.13 20.43L172.06 20.36Q174.40 14.71 177.2
```

_… nội dung đầy đủ trong file đính kèm_

---

<a id="case-3"></a>
### 3. 01_PUBLIC — 03 GET /api/category/public/dsdkts/{mst}/manager

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/category/public/dsdkts/0100109106/manager`

#### Assertions

- ✗ FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn.

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
Cache-Control: no-cache
Postman-Token: 5078d29b-5abe-416d-bb1b-c400e7ab88d2
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
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 5078d29b-5abe-416d-bb1b-c400e7ab88d2' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `403`
- Time: 35ms
- Content-Type: `application/json;charset=UTF-8`
- Size: 109 bytes
- File: [./responses/003-01-public-03-get-api-category-public-dsdkts-mst-manager.txt](./responses/003-01-public-03-get-api-category-public-dsdkts-mst-manager.txt)

Body:

```
{"status":403,"message":"Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn."}
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
Cache-Control: no-cache
Postman-Token: fae8c2ab-4341-462a-9bbd-957d4982fa97
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
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: fae8c2ab-4341-462a-9bbd-957d4982fa97' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 47ms
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
Cache-Control: no-cache
Postman-Token: a3680e68-e3d7-4a15-a98c-a2ef033a6162
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
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: a3680e68-e3d7-4a15-a98c-a2ef033a6162' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 41ms
- Content-Type: `application/json`
- Size: 13422 bytes
- File: [./responses/005-02-login-02-get-api-captcha.txt](./responses/005-02-login-02-get-api-captcha.txt)

Preview (đầu file):

```
{"key":"6aaa0cc93ea3b029a85a8d2d","content":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"40\" viewBox=\"0,0,200,40\"><path fill=\"#222\" d=\"M90.51 35.32L90.62 35.43L90.61 35.42Q87.64 31.53 85.01 22.89L84.93 22.82L84.95 22.83Q84.30 20.70 83.50 18.57L83.59 18.65L80.65 27.36L80.57 27.29Q78.74 32.19 76.34 35.43L76.46 35.55L76.35 35.44Q75.54 35.54 73.90 35.69L73.95 35.74L73.90 35.69Q74.05 34.55 74.05 33.29L73.98 33.22L74.07 33.31Q74.12 27.35 71.38 21.22L71.31 21.15L71.21 21.05Q68.15 14.22 62.29 9.24L62.35 9.29L62.34 9.29Q64.38 9.88 66.74 10.41L66.79 10.46L66.91 10.58Q75.52 18.96 76.82 29.93L76.88 29.99L76.76 29.87Q78.40 26.56 79.85 21.20L79.93 21.28L79.79 21.14Q81.88 13.75 82.37 12.34L82.30 12.26L84.60 12.32L84.49 12.21Q85.25 14.30 85.89 16.62L86.00 16.72L87.19 21.12L87.18 21.11Q88.83 26.64 90.24 29.87L90.19 29.82L90.17 29.81Q91.87 18.22 99.79 10.87L99.73 10.82L99.68 10.76Q101.20 10.42 104.17 9.77L104.26 9.86L104.27 9.87Q98.96 14.19 95.92 20.32L95.86 20.27L95.88 20.29Q92.71 26.44 92.71 33.22L92.74 33.25L92.72 33.23Q92.73 34.35 92.81 35.49L92.81 35.49L91.74 35.45L91.75 35.45Q91.12 35.36 90.54 35.36ZM96.89 38.35L96.81 38.27L96.73 38.19Q95.64 34.78 95.75 30.90L95.59 30.74L95.62 30.76Q95.98 19.25 105.35 10.99L105.30 10.94L105.46 11.10Q104.46 11.28 102.52 11.81L102.48 11.77L102.57 11.87Q103.53 11.03 105.43 9.24L105.41 9.22L105.31 9.12Q102.58 9.82 99.65 10.31L99.82 10.49L99.83 10.50Q92.22 17.51 90.32 26.99L90.42 27.08L90.31 26.97Q89.69 25.29 86.83 13.83L86.92 13.92L86.91 13.91Q86.49 13.98 85.53 13.98L85.48 13.93L85.29 12.97L85.21 12.89Q85.16 12.42 84.93 11.93L84.87 11.87L82.01 11.90L81.98 11.87Q81.16 14.33 79.89 19.45L79.84 19.40L79.90 19.46Q78.56 24.52 77.57 26.99L77.69 27.11L77.64 27.06Q76.09 19.19 70.53 12.87L70.46 12.79L70.44 12.78Q70.09 12.84 69.13 12.65L69.05 12.57L69.04 12.55Q68.36 11.76 66.80 10.12L66.73 10.06L66.81 10.14Q63.45 9.37 61.28 8.57L61.28 8.57L61.14 8.42Q66.91 13.21 70.18 19.41L70.10 19.33L70.23 19.45Q73.65 26.04 73.65 33.05L73.67 33.06L73.63 33.03Q73.72 34.68 73.53 36.28L73.48 36.22
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

Headers:

```
Accept: application/json
Content-Type: application/json
User-Agent: PostmanRuntime/7.39.1
Cache-Control: no-cache
Postman-Token: a63b1d6b-96f6-4f9b-9799-d4b41ab9e8e7
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
  -H 'User-Agent: PostmanRuntime/7.39.1' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: a63b1d6b-96f6-4f9b-9799-d4b41ab9e8e7' \
  -H 'Host: postman-echo.com' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive'
```

#### Response

- Status: `200`
- Time: 533ms
- Content-Type: `application/json; charset=utf-8`
- Size: 903 bytes
- File: [./responses/006-02-login-03-ocr-tax-invoice-gov.txt](./responses/006-02-login-03-ocr-tax-invoice-gov.txt)

Body:

```
{"args":{},"data":{"_trace":"OCR executed by run.js (hddt-ocr-cli) — Newman cannot POST SVG multipart","endpoint":"https://captcha.minvoice.com.vn/api/ocrcaptcha/tax_invoice_gov","field":"Captcha","svg":"_hddt-captcha.svg","ocrText":"8HWDTT","key":"6aaa0cc93ea3b029a85a8d2d"},"files":{},"form":{},"headers":{"host":"postman-echo.com","content-type":"application/json","user-agent":"PostmanRuntime/7.39.1","accept-encoding":"gzip, br","postman-token":"a63b1d6b-96f6-4f9b-9799-d4b41ab9e8e7","x-forwarded-proto":"https","cache-control":"no-cache","content-length":"284","accept":"application/json"},"json":{"_trace":"OCR executed by run.js (hddt-ocr-cli) — Newman cannot POST SVG multipart","endpoint":"https://captcha.minvoice.com.vn/api/ocrcaptcha/tax_invoice_gov","field":"Captcha","svg":"_hddt-captcha.svg","ocrText":"8HWDTT","key":"6aaa0cc93ea3b029a85a8d2d"},"url":"https://postman-echo.com/post"}
```

---

<a id="case-7"></a>
### 7. 02_LOGIN — 04 POST /api/security-taxpayer/authenticate

❌ **FAIL** · `POST` `https://hoadondientu.gdt.gov.vn/api/security-taxpayer/authenticate`

#### Assertions

- ✗ FAIL: HTML WAF / Request Rejected — CQT trả HTML thay vì payload repo expect

#### Request

- Method: `POST`
- URL: `https://hoadondientu.gdt.gov.vn/api/security-taxpayer/authenticate`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept: application/json, text/plain, */*
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: c21cd68b-a89e-4455-9160-876df47acc79
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
  -H 'Content-Type: application/json' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: c21cd68b-a89e-4455-9160-876df47acc79' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 42ms
- Content-Type: `text/html; charset=UTF-8`
- Size: 730 bytes
- File: [./responses/007-02-login-04-post-api-security-taxpayer-authenticate.txt](./responses/007-02-login-04-post-api-security-taxpayer-authenticate.txt)

Body:

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><META HTTP-EQUIV="CONTENT-TYPE" CONTENT="TEXT/HTML; CHARSET=utf-8"/><title>Error</title></head><body><H2>Error</H2><table summary="Error" border="0" bgcolor="#FEEE7A" cellpadding="0" cellspacing="0" width="400"><tr><td><table summary="Error" border="0" cellpadding="3" cellspacing="1"><tr valign="top" bgcolor="#FBFFDF" align="left"><td><STRONG>Error</STRONG></td></tr><tr valign="top" bgcolor="#FFFFFF"><td>This page can't be displayed. Contact support for additional information.<br/>The incident ID is: N/A.</td></tr></table></td></tr></table></body></html>
```

---

<a id="case-8"></a>
### 8. 02_LOGIN — 05 GET /api/security-taxpayer/profile

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/security-taxpayer/profile?smiUsername=3100785269`

#### Assertions

- ✗ FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn.

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
Authorization: [đã gửi 7 ký tự — ẩn trong report]
Cache-Control: no-cache
Postman-Token: 3c69135e-6c84-4c12-bc74-ced072bcc055
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
  -H 'Authorization: [đã gửi 7 ký tự — ẩn trong report]' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 3c69135e-6c84-4c12-bc74-ced072bcc055' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `403`
- Time: 67ms
- Content-Type: `application/json;charset=UTF-8`
- Size: 109 bytes
- File: [./responses/008-02-login-05-get-api-security-taxpayer-profile.txt](./responses/008-02-login-05-get-api-security-taxpayer-profile.txt)

Body:

```
{"status":403,"message":"Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn."}
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
Cache-Control: no-cache
Postman-Token: 229e534c-9d3f-4c81-a65c-756da611d6cf
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
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 229e534c-9d3f-4c81-a65c-756da611d6cf' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 48ms
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

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/captcha`

#### Assertions

- ✗ FAIL: HTML WAF / Request Rejected — CQT trả HTML thay vì payload repo expect

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
Cache-Control: no-cache
Postman-Token: ca2e2e28-2b0b-4bc4-957c-86894b04ab27
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
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: ca2e2e28-2b0b-4bc4-957c-86894b04ab27' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 39ms
- Content-Type: `text/html; charset=UTF-8`
- Size: 730 bytes
- File: [./responses/010-03-guest-02-get-api-captcha.txt](./responses/010-03-guest-02-get-api-captcha.txt)

Body:

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><META HTTP-EQUIV="CONTENT-TYPE" CONTENT="TEXT/HTML; CHARSET=utf-8"/><title>Error</title></head><body><H2>Error</H2><table summary="Error" border="0" bgcolor="#FEEE7A" cellpadding="0" cellspacing="0" width="400"><tr><td><table summary="Error" border="0" cellpadding="3" cellspacing="1"><tr valign="top" bgcolor="#FBFFDF" align="left"><td><STRONG>Error</STRONG></td></tr><tr valign="top" bgcolor="#FFFFFF"><td>This page can't be displayed. Contact support for additional information.<br/>The incident ID is: N/A.</td></tr></table></td></tr></table></body></html>
```

---

<a id="case-11"></a>
### 11. 03_GUEST — 03 OCR tax_invoice_gov

✅ **PASS** · `POST` `https://postman-echo.com/post`

#### Assertions

- ✓ OCR intercept HTTP 200 (postman-echo trace)

#### Request

- Method: `POST`
- URL: `https://postman-echo.com/post`

Headers:

```
Accept: application/json
Content-Type: application/json
User-Agent: PostmanRuntime/7.39.1
Cache-Control: no-cache
Postman-Token: f0b0ece9-96d6-44af-8eb4-27a76336839f
Host: postman-echo.com
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 284
Cookie: [đã gửi 433 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://postman-echo.com/post' \
  -X POST \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json' \
  -H 'User-Agent: PostmanRuntime/7.39.1' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: f0b0ece9-96d6-44af-8eb4-27a76336839f' \
  -H 'Host: postman-echo.com' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 433 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 351ms
- Content-Type: `application/json; charset=utf-8`
- Size: 1348 bytes
- File: [./responses/011-03-guest-03-ocr-tax-invoice-gov.txt](./responses/011-03-guest-03-ocr-tax-invoice-gov.txt)

Body:

```
{"args":{},"data":{"_trace":"OCR executed by run.js (hddt-ocr-cli) — Newman cannot POST SVG multipart","endpoint":"https://captcha.minvoice.com.vn/api/ocrcaptcha/tax_invoice_gov","field":"Captcha","svg":"_hddt-captcha.svg","ocrText":"8HWDTT","key":"6aaa0cc93ea3b029a85a8d2d"},"files":{},"form":{},"headers":{"host":"postman-echo.com","user-agent":"PostmanRuntime/7.39.1","cache-control":"no-cache","accept-encoding":"gzip, br","x-forwarded-proto":"https","postman-token":"f0b0ece9-96d6-44af-8eb4-27a76336839f","content-length":"284","accept":"application/json","content-type":"application/json","cookie":"sails.sid=s%3Aq_mAXcWhIciT6Q32CK1rauuX3m0Zfaru.HF%2Biagv%2BPd3AI6qA9J1A50%2FRT0S%2FqkJJK0AEN%2BXSFhI; __cf_bm=mpVw1gzg9U4CsR23GufD3bPE8WhNBwt7XsensRi8K30-1789529290.0445292-1.0.1.1-FhGHtwhbf4GM2mLUCLoKbaCvjBIeP.OOF0Az4Du2IsjiahSkjKhLNl98F_U1eFzJeu_SiaWz_9GV8D7y0ehJC4vAjnN5Sk0Ut4zFnOsdQeyITyGHJ1e6B674g3LB.0G3; _cfuvid=.W48KD7J9reR4UOI8dYxxhDrWTP6R8_cIZ_5SfabH.k-1789529290.0445292-1.0.1.1-.N81fJ9ViiaCAQJOUsy4jUzrRPPcZoeDWR6SjkDntnE"},"json":{"_trace":"OCR executed by run.js (hddt-ocr-cli) — Newman cannot POST SVG multipart","endpoint":"https://captcha.minvoice.com.vn/api/ocrcaptcha/tax_invoice_gov","field":"Captcha","svg":"_hddt-captcha.svg","ocrText":"8HWDTT","key":"6aaa0cc93ea3b029a85a8d2d"},"url":"https://postman-echo.com/post"}
```

---

<a id="case-12"></a>
### 12. 03_GUEST — 04 GET /api/{from}/guest-invoices

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/sco-query/guest-invoices?cvalue=8HWDTT&ckey=6aaa0cc93ea3b029a85a8d2d&khmshdon=1&hdon=01&nbmst=3603914658&khhdon=C25MDH&shdon=122252&tgtttbso=804339800`

#### Assertions

- ✗ FAIL: HTML WAF / Request Rejected — CQT trả HTML thay vì payload repo expect

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/sco-query/guest-invoices?cvalue=8HWDTT&ckey=6aaa0cc93ea3b029a85a8d2d&khmshdon=1&hdon=01&nbmst=3603914658&khhdon=C25MDH&shdon=122252&tgtttbso=804339800`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept: application/json, text/plain, */*
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
Cache-Control: no-cache
Postman-Token: 72ea0511-9e4b-453d-92b1-e8e77077b1a6
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 446 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/guest-invoices?cvalue=8HWDTT&ckey=6aaa0cc93ea3b029a85a8d2d&khmshdon=1&hdon=01&nbmst=3603914658&khhdon=C25MDH&shdon=122252&tgtttbso=804339800' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 72ea0511-9e4b-453d-92b1-e8e77077b1a6' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `200`
- Time: 317ms
- Content-Type: `text/html; charset=UTF-8`
- Size: 730 bytes
- File: [./responses/012-03-guest-04-get-api-from-guest-invoices.txt](./responses/012-03-guest-04-get-api-from-guest-invoices.txt)

Body:

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><META HTTP-EQUIV="CONTENT-TYPE" CONTENT="TEXT/HTML; CHARSET=utf-8"/><title>Error</title></head><body><H2>Error</H2><table summary="Error" border="0" bgcolor="#FEEE7A" cellpadding="0" cellspacing="0" width="400"><tr><td><table summary="Error" border="0" cellpadding="3" cellspacing="1"><tr valign="top" bgcolor="#FBFFDF" align="left"><td><STRONG>Error</STRONG></td></tr><tr valign="top" bgcolor="#FFFFFF"><td>This page can't be displayed. Contact support for additional information.<br/>The incident ID is: N/A.</td></tr></table></td></tr></table></body></html>
```

---

<a id="case-13"></a>
### 13. 04_EXCEL — 01 GET /api/query/invoices/export-excel

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/query/invoices/export-excel?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59`

#### Assertions

- ✗ FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn.

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/query/invoices/export-excel?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
Authorization: [đã gửi 7 ký tự — ẩn trong report]
Accept: */*
Accept-Encoding: gzip,deflate,br
Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)
End-Point: /tra-cuu/tra-cuu-hoa-don
Cache-Control: no-cache
Postman-Token: 0f4245dd-8012-48d2-a5ba-bc09e3781869
Host: hoadondientu.gdt.gov.vn
Connection: keep-alive
Cookie: [đã gửi 446 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/query/invoices/export-excel?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Authorization: [đã gửi 7 ký tự — ẩn trong report]' \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip,deflate,br' \
  -H 'Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 0f4245dd-8012-48d2-a5ba-bc09e3781869' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `403`
- Time: 90ms
- Content-Type: `application/json;charset=UTF-8`
- Size: 109 bytes
- File: [./responses/013-04-excel-01-get-api-query-invoices-export-excel.txt](./responses/013-04-excel-01-get-api-query-invoices-export-excel.txt)

Body:

```
{"status":403,"message":"Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn."}
```

---

<a id="case-14"></a>
### 14. 04_EXCEL — 02 GET /api/sco-query/invoices/export-excel

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-excel?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59%3Bttxly%3D%3D8`

#### Assertions

- ✗ FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn.

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-excel?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59%3Bttxly%3D%3D8`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
Authorization: [đã gửi 7 ký tự — ẩn trong report]
Accept: */*
Accept-Encoding: gzip,deflate,br
Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)
End-Point: /tra-cuu/tra-cuu-hoa-don
Cache-Control: no-cache
Postman-Token: 6c2d011c-4a85-4f78-b163-8928cd40e70b
Host: hoadondientu.gdt.gov.vn
Connection: keep-alive
Cookie: [đã gửi 446 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-excel?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59%3Bttxly%3D%3D8' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Authorization: [đã gửi 7 ký tự — ẩn trong report]' \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip,deflate,br' \
  -H 'Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 6c2d011c-4a85-4f78-b163-8928cd40e70b' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `403`
- Time: 43ms
- Content-Type: `application/json;charset=UTF-8`
- Size: 109 bytes
- File: [./responses/014-04-excel-02-get-api-sco-query-invoices-export-excel.txt](./responses/014-04-excel-02-get-api-sco-query-invoices-export-excel.txt)

Body:

```
{"status":403,"message":"Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn."}
```

---

<a id="case-15"></a>
### 15. 04_EXCEL — 03 GET /api/query/invoices/export-excel-sold

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/query/invoices/export-excel-sold?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59&type=purchase`

#### Assertions

- ✗ FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn.

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/query/invoices/export-excel-sold?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59&type=purchase`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
Authorization: [đã gửi 7 ký tự — ẩn trong report]
Accept: */*
Accept-Encoding: gzip,deflate,br
Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)
End-Point: /tra-cuu/tra-cuu-hoa-don
Cache-Control: no-cache
Postman-Token: a7b216a2-9775-4863-9c62-c7ce912a9bf8
Host: hoadondientu.gdt.gov.vn
Connection: keep-alive
Cookie: [đã gửi 446 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/query/invoices/export-excel-sold?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59&type=purchase' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Authorization: [đã gửi 7 ký tự — ẩn trong report]' \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip,deflate,br' \
  -H 'Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: a7b216a2-9775-4863-9c62-c7ce912a9bf8' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `403`
- Time: 32ms
- Content-Type: `application/json;charset=UTF-8`
- Size: 109 bytes
- File: [./responses/015-04-excel-03-get-api-query-invoices-export-excel-sold.txt](./responses/015-04-excel-03-get-api-query-invoices-export-excel-sold.txt)

Body:

```
{"status":403,"message":"Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn."}
```

---

<a id="case-16"></a>
### 16. 04_EXCEL — 04 GET /api/sco-query/invoices/export-excel-sold

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-excel-sold?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59%3Bttxly%3D%3D8&type=purchase`

#### Assertions

- ✗ FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn.

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-excel-sold?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59%3Bttxly%3D%3D8&type=purchase`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
Authorization: [đã gửi 7 ký tự — ẩn trong report]
Accept: */*
Accept-Encoding: gzip,deflate,br
Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)
End-Point: /tra-cuu/tra-cuu-hoa-don
Cache-Control: no-cache
Postman-Token: 9e046237-a851-4845-9712-b6ceb2f34adf
Host: hoadondientu.gdt.gov.vn
Connection: keep-alive
Cookie: [đã gửi 446 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-excel-sold?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59%3Bttxly%3D%3D8&type=purchase' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Authorization: [đã gửi 7 ký tự — ẩn trong report]' \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip,deflate,br' \
  -H 'Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 9e046237-a851-4845-9712-b6ceb2f34adf' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `403`
- Time: 31ms
- Content-Type: `application/json;charset=UTF-8`
- Size: 109 bytes
- File: [./responses/016-04-excel-04-get-api-sco-query-invoices-export-excel-sold.txt](./responses/016-04-excel-04-get-api-sco-query-invoices-export-excel-sold.txt)

Body:

```
{"status":403,"message":"Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn."}
```

---

<a id="case-17"></a>
### 17. 05_DETAIL — 01 GET /api/query/invoices/detail

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/query/invoices/detail?nbmst=&khhdon=&shdon=&khmshdon=`

#### Assertions

- ✗ FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn.

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/query/invoices/detail?nbmst=&khhdon=&shdon=&khmshdon=`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
Authorization: [đã gửi 7 ký tự — ẩn trong report]
Accept: */*
Action: Xem%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)
End-Point: /tra-cuu/tra-cuu-hoa-don
Cache-Control: no-cache
Postman-Token: b6d70dd7-11f6-4de8-ad67-a72b6acef0aa
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 446 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/query/invoices/detail?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Authorization: [đã gửi 7 ký tự — ẩn trong report]' \
  -H 'Accept: */*' \
  -H 'Action: Xem%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: b6d70dd7-11f6-4de8-ad67-a72b6acef0aa' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `403`
- Time: 34ms
- Content-Type: `application/json;charset=UTF-8`
- Size: 109 bytes
- File: [./responses/017-05-detail-01-get-api-query-invoices-detail.txt](./responses/017-05-detail-01-get-api-query-invoices-detail.txt)

Body:

```
{"status":403,"message":"Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn."}
```

---

<a id="case-18"></a>
### 18. 05_DETAIL — 02 GET /api/sco-query/invoices/detail

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/detail?nbmst=&khhdon=&shdon=&khmshdon=`

#### Assertions

- ✗ FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn.

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/detail?nbmst=&khhdon=&shdon=&khmshdon=`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
Authorization: [đã gửi 7 ký tự — ẩn trong report]
Accept: */*
Action: Xem%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)
End-Point: /tra-cuu/tra-cuu-hoa-don
Cache-Control: no-cache
Postman-Token: 4cfea7cf-6591-40f6-aa22-aa8fec16b587
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 446 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/detail?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Authorization: [đã gửi 7 ký tự — ẩn trong report]' \
  -H 'Accept: */*' \
  -H 'Action: Xem%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 4cfea7cf-6591-40f6-aa22-aa8fec16b587' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `403`
- Time: 31ms
- Content-Type: `application/json;charset=UTF-8`
- Size: 109 bytes
- File: [./responses/018-05-detail-02-get-api-sco-query-invoices-detail.txt](./responses/018-05-detail-02-get-api-sco-query-invoices-detail.txt)

Body:

```
{"status":403,"message":"Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn."}
```

---

<a id="case-19"></a>
### 19. 06_XML — 01 GET /api/query/invoices/export-xml

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/query/invoices/export-xml?nbmst=&khhdon=&shdon=&khmshdon=`

#### Assertions

- ✗ FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn.

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/query/invoices/export-xml?nbmst=&khhdon=&shdon=&khmshdon=`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
Authorization: [đã gửi 7 ký tự — ẩn trong report]
Accept: */*
Action: Xu%E1%BA%A5t%20xml%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)
End-Point: /tra-cuu/tra-cuu-hoa-don
Cache-Control: no-cache
Postman-Token: 0f35227f-55b0-4538-a07a-81eb21de48d0
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 446 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/query/invoices/export-xml?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Authorization: [đã gửi 7 ký tự — ẩn trong report]' \
  -H 'Accept: */*' \
  -H 'Action: Xu%E1%BA%A5t%20xml%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 0f35227f-55b0-4538-a07a-81eb21de48d0' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `403`
- Time: 28ms
- Content-Type: `application/json;charset=UTF-8`
- Size: 109 bytes
- File: [./responses/019-06-xml-01-get-api-query-invoices-export-xml.txt](./responses/019-06-xml-01-get-api-query-invoices-export-xml.txt)

Body:

```
{"status":403,"message":"Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn."}
```

---

<a id="case-20"></a>
### 20. 06_XML — 02 GET /api/sco-query/invoices/export-xml

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-xml?nbmst=&khhdon=&shdon=&khmshdon=`

#### Assertions

- ✗ FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn.

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-xml?nbmst=&khhdon=&shdon=&khmshdon=`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
Authorization: [đã gửi 7 ký tự — ẩn trong report]
Accept: */*
Action: Xu%E1%BA%A5t%20xml%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)
End-Point: /tra-cuu/tra-cuu-hoa-don
Cache-Control: no-cache
Postman-Token: a7532c25-ac5c-49ff-8188-5d5598afd9da
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 446 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-xml?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Authorization: [đã gửi 7 ký tự — ẩn trong report]' \
  -H 'Accept: */*' \
  -H 'Action: Xu%E1%BA%A5t%20xml%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: a7532c25-ac5c-49ff-8188-5d5598afd9da' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `403`
- Time: 25ms
- Content-Type: `application/json;charset=UTF-8`
- Size: 109 bytes
- File: [./responses/020-06-xml-02-get-api-sco-query-invoices-export-xml.txt](./responses/020-06-xml-02-get-api-sco-query-invoices-export-xml.txt)

Body:

```
{"status":403,"message":"Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn."}
```

---

<a id="case-21"></a>
### 21. 07_RELATED — 01 GET /api/query/invoices/related

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/query/invoices/related?nbmst=&khhdon=&shdon=&khmshdon=`

#### Assertions

- ✗ FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn.

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
Authorization: [đã gửi 7 ký tự — ẩn trong report]
Action: Xem%20th%C3%B4ng%20tin%20li%C3%AAn%20quan%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)
End-Point: /tra-cuu/tra-cuu-hoa-don
Cache-Control: no-cache
Postman-Token: 2226ddbe-1831-43e8-b57c-b8d0506790ff
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 446 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/query/invoices/related?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Authorization: [đã gửi 7 ký tự — ẩn trong report]' \
  -H 'Action: Xem%20th%C3%B4ng%20tin%20li%C3%AAn%20quan%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 2226ddbe-1831-43e8-b57c-b8d0506790ff' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `403`
- Time: 32ms
- Content-Type: `application/json;charset=UTF-8`
- Size: 109 bytes
- File: [./responses/021-07-related-01-get-api-query-invoices-related.txt](./responses/021-07-related-01-get-api-query-invoices-related.txt)

Body:

```
{"status":403,"message":"Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn."}
```

---

<a id="case-22"></a>
### 22. 07_RELATED — 02 GET /api/sco-query/invoices/related

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/related?nbmst=&khhdon=&shdon=&khmshdon=`

#### Assertions

- ✗ FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn.

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
Authorization: [đã gửi 7 ký tự — ẩn trong report]
Action: Xem%20th%C3%B4ng%20tin%20li%C3%AAn%20quan%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)
End-Point: /tra-cuu/tra-cuu-hoa-don
Cache-Control: no-cache
Postman-Token: 69da01e5-6724-4a9b-b15e-9c437f21f25c
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 446 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/related?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Authorization: [đã gửi 7 ký tự — ẩn trong report]' \
  -H 'Action: Xem%20th%C3%B4ng%20tin%20li%C3%AAn%20quan%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 69da01e5-6724-4a9b-b15e-9c437f21f25c' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `403`
- Time: 30ms
- Content-Type: `application/json;charset=UTF-8`
- Size: 109 bytes
- File: [./responses/022-07-related-02-get-api-sco-query-invoices-related.txt](./responses/022-07-related-02-get-api-sco-query-invoices-related.txt)

Body:

```
{"status":403,"message":"Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn."}
```

---

<a id="case-23"></a>
### 23. 07_RELATED — 03 GET /api/query/invoices/relative

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/query/invoices/relative?nbmst=&khhdon=&shdon=&khmshdon=`

#### Assertions

- ✗ FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn.

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
Authorization: [đã gửi 7 ký tự — ẩn trong report]
Cache-Control: no-cache
Postman-Token: 6b61212a-5947-4b24-821d-e281e6f7daef
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 446 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/query/invoices/relative?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Authorization: [đã gửi 7 ký tự — ẩn trong report]' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 6b61212a-5947-4b24-821d-e281e6f7daef' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `403`
- Time: 28ms
- Content-Type: `application/json;charset=UTF-8`
- Size: 109 bytes
- File: [./responses/023-07-related-03-get-api-query-invoices-relative.txt](./responses/023-07-related-03-get-api-query-invoices-relative.txt)

Body:

```
{"status":403,"message":"Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn."}
```

---

<a id="case-24"></a>
### 24. 07_RELATED — 04 GET /api/sco-query/invoices/relative

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/relative?nbmst=&khhdon=&shdon=&khmshdon=`

#### Assertions

- ✗ FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn.

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
Authorization: [đã gửi 7 ký tự — ẩn trong report]
Cache-Control: no-cache
Postman-Token: a544fb8e-d3fd-414e-8e10-bb72a0c4b352
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 446 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/relative?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Authorization: [đã gửi 7 ký tự — ẩn trong report]' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: a544fb8e-d3fd-414e-8e10-bb72a0c4b352' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `403`
- Time: 27ms
- Content-Type: `application/json;charset=UTF-8`
- Size: 109 bytes
- File: [./responses/024-07-related-04-get-api-sco-query-invoices-relative.txt](./responses/024-07-related-04-get-api-sco-query-invoices-relative.txt)

Body:

```
{"status":403,"message":"Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn."}
```

---

<a id="case-25"></a>
### 25. 08_TBSS — 01 GET /api/explanation/tbssdts/signed-notifications

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/explanation/tbssdts/signed-notifications?sort=ngay%3Adesc%2Cso%3Adesc&search=ngay%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Bngay%3Dle%3D16%2F09%2F2026T23%3A59%3A59&size=50`

#### Assertions

- ✗ FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn.

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
Authorization: [đã gửi 7 ký tự — ẩn trong report]
Action: T%C3%ACm%20ki%E1%BA%BFm
End-Point: /tra-cuu/tra-cuu-hoa-don
Cache-Control: no-cache
Postman-Token: eec74823-5704-4500-93bf-fc63a6da5a8f
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 446 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/explanation/tbssdts/signed-notifications?sort=ngay%3Adesc%2Cso%3Adesc&search=ngay%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Bngay%3Dle%3D16%2F09%2F2026T23%3A59%3A59&size=50' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Authorization: [đã gửi 7 ký tự — ẩn trong report]' \
  -H 'Action: T%C3%ACm%20ki%E1%BA%BFm' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: eec74823-5704-4500-93bf-fc63a6da5a8f' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `403`
- Time: 27ms
- Content-Type: `application/json;charset=UTF-8`
- Size: 109 bytes
- File: [./responses/025-08-tbss-01-get-api-explanation-tbssdts-signed-notifications.txt](./responses/025-08-tbss-01-get-api-explanation-tbssdts-signed-notifications.txt)

Body:

```
{"status":403,"message":"Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn."}
```

---

<a id="case-26"></a>
### 26. 08_TBSS — 02 GET /api/sco-explanation/tbssdts/signed-notifications

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/sco-explanation/tbssdts/signed-notifications?sort=ngay%3Adesc%2Cso%3Adesc&search=ngay%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Bngay%3Dle%3D16%2F09%2F2026T23%3A59%3A59&size=50`

#### Assertions

- ✗ FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn.

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
Authorization: [đã gửi 7 ký tự — ẩn trong report]
Action: T%C3%ACm%20ki%E1%BA%BFm
End-Point: /tra-cuu/tra-cuu-hoa-don
Cache-Control: no-cache
Postman-Token: 537d7be2-2307-4b43-8295-f7bb8e8d308d
Host: hoadondientu.gdt.gov.vn
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: [đã gửi 446 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-explanation/tbssdts/signed-notifications?sort=ngay%3Adesc%2Cso%3Adesc&search=ngay%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Bngay%3Dle%3D16%2F09%2F2026T23%3A59%3A59&size=50' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Authorization: [đã gửi 7 ký tự — ẩn trong report]' \
  -H 'Action: T%C3%ACm%20ki%E1%BA%BFm' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 537d7be2-2307-4b43-8295-f7bb8e8d308d' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `403`
- Time: 1033ms
- Content-Type: `application/json;charset=UTF-8`
- Size: 109 bytes
- File: [./responses/026-08-tbss-02-get-api-sco-explanation-tbssdts-signed-notifications.txt](./responses/026-08-tbss-02-get-api-sco-explanation-tbssdts-signed-notifications.txt)

Body:

```
{"status":403,"message":"Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn."}
```

---

<a id="case-27"></a>
### 27. 09_PITW — 01 GET /api/pitw

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/pitw?size=50&search=nlap%3Dge%3D2026-09-15T17%3A00%3A00.000Z%3Bnlap%3Dle%3D2026-09-16T16%3A59%3A59.999Z&sort=nlap%3Adesc`

#### Assertions

- ✗ FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn.

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/pitw?size=50&search=nlap%3Dge%3D2026-09-15T17%3A00%3A00.000Z%3Bnlap%3Dle%3D2026-09-16T16%3A59%3A59.999Z&sort=nlap%3Adesc`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept: application/json, text/plain, */*
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Authorization: [đã gửi 7 ký tự — ẩn trong report]
Accept-Encoding: gzip, deflate, br
Action: T%C3%ACm%20ki%E1%BA%BFm
End-Point: /tra-cuu/tra-cuu-chung-tu-tncn
Referer: https://hoadondientu.gdt.gov.vn/tra-cuu/tra-cuu-chung-tu-tncn
Cache-Control: no-cache
Postman-Token: b54ae56a-ba07-4b50-aec1-31f4751d6097
Host: hoadondientu.gdt.gov.vn
Connection: keep-alive
Cookie: [đã gửi 446 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/pitw?size=50&search=nlap%3Dge%3D2026-09-15T17%3A00%3A00.000Z%3Bnlap%3Dle%3D2026-09-16T16%3A59%3A59.999Z&sort=nlap%3Adesc' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Authorization: [đã gửi 7 ký tự — ẩn trong report]' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Action: T%C3%ACm%20ki%E1%BA%BFm' \
  -H 'End-Point: /tra-cuu/tra-cuu-chung-tu-tncn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/tra-cuu/tra-cuu-chung-tu-tncn' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: b54ae56a-ba07-4b50-aec1-31f4751d6097' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `403`
- Time: 35ms
- Content-Type: `application/json;charset=UTF-8`
- Size: 109 bytes
- File: [./responses/027-09-pitw-01-get-api-pitw.txt](./responses/027-09-pitw-01-get-api-pitw.txt)

Body:

```
{"status":403,"message":"Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn."}
```

---

<a id="case-28"></a>
### 28. 09_PITW — 02 GET /api/pitw/export-xml

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/pitw/export-xml?hsgoc=`

#### Assertions

- ✗ FAIL: WAF 403 — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn. — Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn.

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/pitw/export-xml?hsgoc=`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0
Accept: application/json, text/plain, */*
Accept-Language: vi
Origin: https://hoadondientu.gdt.gov.vn
Authorization: [đã gửi 7 ký tự — ẩn trong report]
Accept-Encoding: gzip, deflate, br
Action: 
End-Point: /tra-cuu/tra-cuu-chung-tu-tncn
Referer: https://hoadondientu.gdt.gov.vn/tra-cuu/tra-cuu-chung-tu-tncn
Cache-Control: no-cache
Postman-Token: 766467fe-72a8-41d1-b414-e021f7d52730
Host: hoadondientu.gdt.gov.vn
Connection: keep-alive
Cookie: [đã gửi 446 ký tự — ẩn trong report]
```

cURL (Authorization / Cookie / password ẩn trong report):

```
curl 'https://hoadondientu.gdt.gov.vn/api/pitw/export-xml?hsgoc=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Authorization: [đã gửi 7 ký tự — ẩn trong report]' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Action: ' \
  -H 'End-Point: /tra-cuu/tra-cuu-chung-tu-tncn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/tra-cuu/tra-cuu-chung-tu-tncn' \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 766467fe-72a8-41d1-b414-e021f7d52730' \
  -H 'Host: hoadondientu.gdt.gov.vn' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]'
```

#### Response

- Status: `403`
- Time: 26ms
- Content-Type: `application/json;charset=UTF-8`
- Size: 109 bytes
- File: [./responses/028-09-pitw-02-get-api-pitw-export-xml.txt](./responses/028-09-pitw-02-get-api-pitw-export-xml.txt)

Body:

```
{"status":403,"message":"Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn."}
```

