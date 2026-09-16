# HoaDonDienTu Healthcheck

❌ **19 pass** / **9 fail** / **28 total** · 16.25s

| Field | Value |
|---|---|
| Thời gian | 2026-09-16T04:18:38.464Z → 2026-09-16T04:18:54.711Z |
| Collection | `HoaDonDienTu.healthcheck.postman_collection.json` |
| Environment | `HoaDonDienTu.environment.json` |
| Thư mục báo cáo | `test-report-20260916-111838` |

> Curl = header production + `request-id` (không Postman-Token / Cache-Control). Host/Connection do HTTP client gắn trên wire. Authorization / Cookie / password hiện `[đã gửi N ký tự — ẩn trong report]`. Copy curl từ report **không replay** được phần đã ẩn.

## Fail / Error

| # | Folder | Request | Status | Assertion |
|---|---|---|---|---|
| 17 | 05_DETAIL | [01 GET /api/query/invoices/detail](#case-17) | 500 | HTTP 200 |
| 18 | 05_DETAIL | [02 GET /api/sco-query/invoices/detail](#case-18) | 500 | HTTP 200 |
| 19 | 06_XML | [01 GET /api/query/invoices/export-xml](#case-19) | 500 | HTTP 200 |
| 20 | 06_XML | [02 GET /api/sco-query/invoices/export-xml](#case-20) | 500 | HTTP 200 |
| 21 | 07_RELATED | [01 GET /api/query/invoices/related](#case-21) | 500 | HTTP 200 |
| 22 | 07_RELATED | [02 GET /api/sco-query/invoices/related](#case-22) | 200 | FAIL: HTML WAF / Request Rejected |
| 23 | 07_RELATED | [03 GET /api/query/invoices/relative](#case-23) | 200 | FAIL: HTML WAF / Request Rejected |
| 24 | 07_RELATED | [04 GET /api/sco-query/invoices/relative](#case-24) | 500 | HTTP 200 |
| 28 | 09_PITW | [02 GET /api/pitw/export-xml](#case-28) | 500 | HTTP 200 |

## Tổng quan

| # | Folder | Request | Kết quả | Method | Status | Time |
|---|---|---|---|---|---|---|
| 1 | 01_PUBLIC | [01 GET portal](#case-1) | ✅ PASS | GET | 200 | 208ms |
| 2 | 01_PUBLIC | [02 GET /api/captcha](#case-2) | ✅ PASS | GET | 200 | 39ms |
| 3 | 01_PUBLIC | [03 GET /api/category/public/dsdkts/{mst}/manager](#case-3) | ✅ PASS | GET | 200 | 33ms |
| 4 | 02_LOGIN | [01 GET portal](#case-4) | ✅ PASS | GET | 200 | 52ms |
| 5 | 02_LOGIN | [02 GET /api/captcha](#case-5) | ✅ PASS | GET | 200 | 47ms |
| 6 | 02_LOGIN | [03 OCR tax_invoice_gov](#case-6) | ✅ PASS | POST | 200 | 541ms |
| 7 | 02_LOGIN | [04 POST /api/security-taxpayer/authenticate](#case-7) | ✅ PASS | POST | 200 | 76ms |
| 8 | 02_LOGIN | [05 GET /api/security-taxpayer/profile](#case-8) | ✅ PASS | GET | 200 | 36ms |
| 9 | 03_GUEST | [01 GET portal](#case-9) | ✅ PASS | GET | 200 | 49ms |
| 10 | 03_GUEST | [02 GET /api/captcha](#case-10) | ✅ PASS | GET | 200 | 707ms |
| 11 | 03_GUEST | [03 OCR tax_invoice_gov](#case-11) | ✅ PASS | POST | 200 | 331ms |
| 12 | 03_GUEST | [04 GET /api/{from}/guest-invoices](#case-12) | ✅ PASS | GET | 200 | 39ms |
| 13 | 04_EXCEL | [01 GET /api/query/invoices/export-excel](#case-13) | ✅ PASS | GET | 200 | 97ms |
| 14 | 04_EXCEL | [02 GET /api/sco-query/invoices/export-excel](#case-14) | ✅ PASS | GET | 200 | 93ms |
| 15 | 04_EXCEL | [03 GET /api/query/invoices/export-excel-sold](#case-15) | ✅ PASS | GET | 200 | 120ms |
| 16 | 04_EXCEL | [04 GET /api/sco-query/invoices/export-excel-sold](#case-16) | ✅ PASS | GET | 200 | 98ms |
| 17 | 05_DETAIL | [01 GET /api/query/invoices/detail](#case-17) | ❌ FAIL | GET | 500 | 58ms |
| 18 | 05_DETAIL | [02 GET /api/sco-query/invoices/detail](#case-18) | ❌ FAIL | GET | 500 | 39ms |
| 19 | 06_XML | [01 GET /api/query/invoices/export-xml](#case-19) | ❌ FAIL | GET | 500 | 41ms |
| 20 | 06_XML | [02 GET /api/sco-query/invoices/export-xml](#case-20) | ❌ FAIL | GET | 500 | 43ms |
| 21 | 07_RELATED | [01 GET /api/query/invoices/related](#case-21) | ❌ FAIL | GET | 500 | 41ms |
| 22 | 07_RELATED | [02 GET /api/sco-query/invoices/related](#case-22) | ❌ FAIL | GET | 200 | 153ms |
| 23 | 07_RELATED | [03 GET /api/query/invoices/relative](#case-23) | ❌ FAIL | GET | 200 | 209ms |
| 24 | 07_RELATED | [04 GET /api/sco-query/invoices/relative](#case-24) | ❌ FAIL | GET | 500 | 131ms |
| 25 | 08_TBSS | [01 GET /api/explanation/tbssdts/signed-notifications](#case-25) | ✅ PASS | GET | 200 | 134ms |
| 26 | 08_TBSS | [02 GET /api/sco-explanation/tbssdts/signed-notifications](#case-26) | ✅ PASS | GET | 200 | 54ms |
| 27 | 09_PITW | [01 GET /api/pitw](#case-27) | ✅ PASS | GET | 200 | 66ms |
| 28 | 09_PITW | [02 GET /api/pitw/export-xml](#case-28) | ❌ FAIL | GET | 500 | 37ms |

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
request-id: a3437dfe-4a28-45ad-a848-3ac09ec32d66
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://hoadondientu.gdt.gov.vn/' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' \
  -H 'Accept-Language: vi' \
  -H 'request-id: a3437dfe-4a28-45ad-a848-3ac09ec32d66'
```

#### Response

- Status: `200`
- Time: 208ms
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
request-id: 6c164040-caa6-4732-bf3e-fb3faffa621e
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://hoadondientu.gdt.gov.vn/api/captcha' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'request-id: 6c164040-caa6-4732-bf3e-fb3faffa621e'
```

#### Response

- Status: `200`
- Time: 39ms
- Content-Type: `application/json`
- Size: 12833 bytes
- File: [./responses/002-01-public-02-get-api-captcha.txt](./responses/002-01-public-02-get-api-captcha.txt)

Preview (đầu file):

```
{"key":"6aaa189f3ea3b029a85e3314","content":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"40\" viewBox=\"0,0,200,40\"><path d=\"M4 28 C95 26,80 34,196 19\" stroke=\"#555\" fill=\"none\"/><path fill=\"#111\" d=\"M110.02 35.28L109.95 35.21L109.87 35.13Q106.55 35.39 104.91 34.86L104.92 34.87L104.94 34.89Q102.84 34.12 102.53 30.73L102.63 30.83L104.07 29.75L104.06 29.74Q104.83 29.25 105.59 28.76L105.53 28.70L105.46 28.63Q105.19 30.52 106.78 31.74L106.89 31.85L106.85 31.81Q108.05 32.74 110.18 32.55L110.24 32.61L110.18 32.55Q114.67 32.25 114.48 28.71L114.50 28.72L114.44 28.66Q114.36 26.49 111.73 25.27L111.67 25.21L111.74 25.28Q108.90 24.22 106.54 23.01L106.46 22.93L106.44 22.91Q103.87 21.56 102.88 16.88L102.84 16.83L102.95 16.95Q102.83 16.48 102.72 15.72L102.71 15.72L102.69 15.70Q102.61 14.93 102.68 14.36L102.66 14.33L102.64 14.31Q102.94 12.86 104.19 12.40L104.15 12.35L104.03 12.24Q106.51 11.44 110.50 11.63L110.56 11.69L110.52 11.65Q112.41 11.83 113.21 11.90L113.15 11.84L113.20 11.90Q114.63 12.03 115.70 12.49L115.72 12.51L115.65 12.44Q117.81 12.96 118.04 15.43L117.99 15.39L118.09 15.49Q116.91 16.05 114.70 17.39L114.70 17.38L114.68 17.37Q114.27 14.37 109.89 14.37L110.03 14.51L110.01 14.49Q108.15 14.53 107.16 15.22L106.99 15.04L107.02 15.08Q105.86 15.59 106.09 17.38L106.14 17.43L106.11 17.40Q106.35 19.58 109.32 21.11L109.43 21.22L109.29 21.07Q109.82 21.30 114.31 22.94L114.46 23.09L114.42 23.05Q117.10 24.58 117.52 28.96L117.51 28.96L117.45 28.89Q117.50 29.09 117.57 30.35L117.53 30.30L117.59 30.37Q117.63 33.11 116.07 34.22L115.97 34.11L115.92 34.07Q114.18 35.14 109.99 35.25ZM112.31 37.65L112.32 37.66L112.33 37.67Q113.79 37.76 115.77 37.76L115.67 37.66L115.70 37.69Q117.87 37.77 119.13 37.35L119.02 37.24L119.14 37.36Q120.25 36.41 120.17 34.63L120.30 34.75L120.17 34.62Q120.08 33.58 119.70 31.52L119.76 31.59L119.81 31.64Q118.80 26.86 116.71 24.99L116.84 25.13L116.84 25.12Q116.07 23.56 114.74 22.83L114.59 22.68L109.36 20.69L109.30 20.63Q109.14 20.62 108.68 20.39L108.69 20.40L108.42 19.86L108.51 19.61L108.53 1
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
request-id: a8e2d8f6-3411-4343-8a00-90ec1da8e14c
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://hoadondientu.gdt.gov.vn/api/category/public/dsdkts/0100109106/manager' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'request-id: a8e2d8f6-3411-4343-8a00-90ec1da8e14c'
```

#### Response

- Status: `200`
- Time: 33ms
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
request-id: 83343e58-10a0-4f1c-a1a0-b27aa536ea88
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://hoadondientu.gdt.gov.vn/' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' \
  -H 'Accept-Language: vi' \
  -H 'request-id: 83343e58-10a0-4f1c-a1a0-b27aa536ea88'
```

#### Response

- Status: `200`
- Time: 52ms
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
Cookie: [đã gửi 248 ký tự — ẩn trong report]
request-id: 414d0ba0-2263-457e-8978-ee500116b2c1
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://hoadondientu.gdt.gov.vn/api/captcha' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Cookie: [đã gửi 248 ký tự — ẩn trong report]' \
  -H 'request-id: 414d0ba0-2263-457e-8978-ee500116b2c1'
```

#### Response

- Status: `200`
- Time: 47ms
- Content-Type: `application/json`
- Size: 16289 bytes
- File: [./responses/005-02-login-02-get-api-captcha.txt](./responses/005-02-login-02-get-api-captcha.txt)

Preview (đầu file):

```
{"key":"6aaa18a1fed74d6863fa7adf","content":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"40\" viewBox=\"0,0,200,40\"><path fill=\"#333\" d=\"M147.07 35.31L147.14 35.38L147.23 35.47Q144.13 31.46 141.50 22.82L141.64 22.95L141.51 22.82Q140.82 20.64 140.02 18.51L140.05 18.54L137.27 27.41L137.17 27.32Q135.36 32.24 132.96 35.48L133.02 35.54L133.07 35.59Q132.14 35.57 130.50 35.72L130.51 35.73L130.41 35.63Q130.57 34.50 130.57 33.24L130.67 33.34L130.57 33.24Q130.58 27.24 127.84 21.11L127.79 21.06L127.81 21.08Q124.83 14.33 118.97 9.34L118.82 9.19L118.88 9.25Q120.98 9.91 123.35 10.44L123.32 10.42L123.42 10.52Q132.11 18.98 133.40 29.94L133.36 29.90L133.44 29.98Q134.96 26.55 136.40 21.18L136.40 21.18L136.43 21.21Q138.43 13.73 138.93 12.32L138.87 12.26L141.08 12.23L141.17 12.32Q141.84 14.32 142.49 16.64L142.51 16.67L143.81 21.16L143.65 21.01Q145.36 26.60 146.77 29.84L146.68 29.75L146.62 29.69Q148.47 18.25 156.39 10.90L156.34 10.86L156.25 10.76Q157.81 10.46 160.78 9.81L160.77 9.80L160.76 9.79Q155.40 14.06 152.35 20.19L152.45 20.29L152.36 20.19Q149.27 26.43 149.27 33.21L149.36 33.30L149.31 33.25Q149.36 34.40 149.44 35.55L149.39 35.50L148.24 35.38L148.35 35.48Q147.77 35.44 147.20 35.44ZM153.48 38.37L153.40 38.29L153.31 38.20Q152.09 34.66 152.21 30.78L152.28 30.85L152.20 30.77Q152.56 19.26 161.93 10.99L162.04 11.11L162.02 11.09Q160.94 11.19 159.00 11.72L159.00 11.72L158.97 11.69Q160.09 11.02 161.99 9.23L161.89 9.13L161.86 9.10Q159.26 9.93 156.33 10.42L156.23 10.32L156.35 10.45Q148.77 17.48 146.87 26.96L146.95 27.05L147.01 27.10Q146.43 25.45 143.57 14.00L143.41 13.83L143.39 13.82Q142.97 13.89 142.02 13.89L142.13 14.00L141.75 12.86L141.77 12.88Q141.79 12.48 141.56 11.99L141.56 11.98L138.64 11.96L138.56 11.88Q137.75 14.35 136.48 19.47L136.39 19.37L136.44 19.43Q135.27 24.65 134.28 27.12L134.26 27.11L134.11 26.95Q132.59 19.12 127.04 12.80L127.11 12.88L127.13 12.90Q126.57 12.75 125.62 12.56L125.66 12.61L125.54 12.48Q124.87 11.71 123.31 10.07L123.25 10.01L123.33 10.08Q119.98 9.33 117.81 8.53L117.73 8.45L117.85 8.57Q1
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
  "ocrText": "73QWWX",
  "key": "6aaa18a1fed74d6863fa7adf"
}
```


Headers:

```
User-Agent: PostmanRuntime/7.39.1
Accept: application/json
Content-Type: application/json
request-id: 48f1920c-4d1a-4d6e-8a91-2be64fa1d918
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://postman-echo.com/post' \
  -X POST \
  -H 'User-Agent: PostmanRuntime/7.39.1' \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json' \
  -H 'request-id: 48f1920c-4d1a-4d6e-8a91-2be64fa1d918' \
  --data-raw '{
  "_trace": "OCR executed by run.js (hddt-ocr-cli) — Newman cannot POST SVG multipart",
  "endpoint": "https://captcha.minvoice.com.vn/api/ocrcaptcha/tax_invoice_gov",
  "field": "Captcha",
  "svg": "_hddt-captcha.svg",
  "ocrText": "73QWWX",
  "key": "6aaa18a1fed74d6863fa7adf"
}'
```

#### Response

- Status: `200`
- Time: 541ms
- Content-Type: `application/json; charset=utf-8`
- Size: 873 bytes
- File: [./responses/006-02-login-03-ocr-tax-invoice-gov.txt](./responses/006-02-login-03-ocr-tax-invoice-gov.txt)

Body:

```
{"args":{},"data":{"_trace":"OCR executed by run.js (hddt-ocr-cli) — Newman cannot POST SVG multipart","endpoint":"https://captcha.minvoice.com.vn/api/ocrcaptcha/tax_invoice_gov","field":"Captcha","svg":"_hddt-captcha.svg","ocrText":"73QWWX","key":"6aaa18a1fed74d6863fa7adf"},"files":{},"form":{},"headers":{"host":"postman-echo.com","accept-encoding":"gzip, br","accept":"application/json","user-agent":"PostmanRuntime/7.39.1","request-id":"48f1920c-4d1a-4d6e-8a91-2be64fa1d918","content-length":"284","content-type":"application/json","x-forwarded-proto":"https"},"json":{"_trace":"OCR executed by run.js (hddt-ocr-cli) — Newman cannot POST SVG multipart","endpoint":"https://captcha.minvoice.com.vn/api/ocrcaptcha/tax_invoice_gov","field":"Captcha","svg":"_hddt-captcha.svg","ocrText":"73QWWX","key":"6aaa18a1fed74d6863fa7adf"},"url":"https://postman-echo.com/post"}
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
  "ckey": "6aaa18a1fed74d6863fa7adf",
  "cvalue": "73QWWX"
}
```


Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
Accept: application/json, text/plain, */*
Cookie: [đã gửi 446 ký tự — ẩn trong report]
Content-Type: application/json
request-id: b05590b2-2ce7-431c-8e28-3fc0bac8b23f
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://hoadondientu.gdt.gov.vn/api/security-taxpayer/authenticate' \
  -X POST \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]' \
  -H 'Content-Type: application/json' \
  -H 'request-id: b05590b2-2ce7-431c-8e28-3fc0bac8b23f' \
  --data-raw '{
  "username": "3100785269",
  "password":"***",
  "ckey": "6aaa18a1fed74d6863fa7adf",
  "cvalue": "73QWWX"
}'
```

#### Response

- Status: `200`
- Time: 76ms
- Content-Type: `application/json`
- Size: 204 bytes
- File: [./responses/007-02-login-04-post-api-security-taxpayer-authenticate.txt](./responses/007-02-login-04-post-api-security-taxpayer-authenticate.txt)

Body:

```
{"token":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTAwNzg1MjY5IiwidHlwZSI6MiwiZXhwIjoxNzg5NjE4NzIyLCJpYXQiOjE3ODk1MzIzMjJ9.1K0ekWWQQzEmgrkBTz6Erk-fGH94qipTxTBKcrJUJVnkfRxzcPhCOjs742yzgGNvpJXA44qWN-BgH6j5cAyzcg"}
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
Authorization: [đã gửi 199 ký tự — ẩn trong report]
Cookie: [đã gửi 446 ký tự — ẩn trong report]
request-id: 7f1ae94f-ac71-43a3-ae6d-16f8c37f9770
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://hoadondientu.gdt.gov.vn/api/security-taxpayer/profile?smiUsername=3100785269' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'Cookie: [đã gửi 446 ký tự — ẩn trong report]' \
  -H 'request-id: 7f1ae94f-ac71-43a3-ae6d-16f8c37f9770'
```

#### Response

- Status: `200`
- Time: 36ms
- Content-Type: `application/json`
- Size: 1630 bytes
- File: [./responses/008-02-login-05-get-api-security-taxpayer-profile.txt](./responses/008-02-login-05-get-api-security-taxpayer-profile.txt)

Body:

```
{"password":"","username":"3100785269","authorities":[{"authority":"BKCKTM/OPS"},{"authority":"DCCTTNCN/OPS"},{"authority":"DCHDTLPS/OPS"},{"authority":"DMHH/OPS"},{"authority":"DMKH/OPS"},{"authority":"DMKHHD/OPS"},{"authority":"LHDMTLPS/OPS"},{"authority":"PDDKUNNNT/OPS"},{"authority":"PDHDTLPS/OPS"},{"authority":"QLBK/OPS"},{"authority":"QLCTTNCN/OPS"},{"authority":"QLDKUNNNT/OPS"},{"authority":"QLDM/OPS"},{"authority":"QLHDTLPS/OPS"},{"authority":"QLHT/OPS"},{"authority":"QLND/OPS"},{"authority":"QLVT/OPS"},{"authority":"TC/OPS"},{"authority":"TCBCTHSDBLNNNT/OPS"},{"authority":"TCBTHCQT/OPS"},{"authority":"TCCTTNCNNNT/OPS"},{"authority":"TCDKUNNNT/OPS"},{"authority":"TCDLETAXCTNNT/OPS"},{"authority":"TCDLETAXNNT/OPS"},{"authority":"TCDNPSNNT/OPS"},{"authority":"TCHDCQT/OPS"},{"authority":"TCHDTLPS/OPS"},{"authority":"TCLTCTTNCN/OPS"},{"authority":"TCTBTCQT/OPS"},{"authority":"TTCTTNCN/OPS"},{"authority":"TTHDTLPS/OPS"},{"authority":"XLCTTNCN/OPS"},{"authority":"XLDKUNNNT/OPS"},{"authority":"XLHDTLPS/OPS"},{"authority":"XLLTCTTNCN/OPS"}],"accountNonExpired":true,"accountNonLocked":true,"credentialsNonExpired":true,"enabled":true,"id":"3100785269","type":2,"groupId":"044076000389","groupIds":"3100785269,044076000389","tinInfoTT86":{"mst":"044076000389","mstUTien":"3100785269","dsMst":["3100785269","044076000389"],"doiUng":true,"cccd":true,"groupIds":"3100785269,044076000389"},"tcqt":"","name":"NGUYỄN THƯƠNG THUYẾT","capCqt":0,"capUser":2,"roleIds":["35e554c2-de09-4513-8581-16c5af706fb8"],"cdanh":null,"domain":null,"cbo":"","fullName":null,"password_expire":"2026-10-14T02:13:35.927Z","expired":0}
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
request-id: ee793de0-d559-4b39-815c-0fd698f64704
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://hoadondientu.gdt.gov.vn/' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' \
  -H 'Accept-Language: vi' \
  -H 'request-id: ee793de0-d559-4b39-815c-0fd698f64704'
```

#### Response

- Status: `200`
- Time: 49ms
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
request-id: 58087e4e-e82d-4a53-9069-f2767a508898
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://hoadondientu.gdt.gov.vn/api/captcha' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'request-id: 58087e4e-e82d-4a53-9069-f2767a508898'
```

#### Response

- Status: `200`
- Time: 707ms
- Content-Type: `application/json`
- Size: 14963 bytes
- File: [./responses/010-03-guest-02-get-api-captcha.txt](./responses/010-03-guest-02-get-api-captcha.txt)

Preview (đầu file):

```
{"key":"6aaa18a4f5e4663fb1c920db","content":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"40\" viewBox=\"0,0,200,40\"><path fill=\"#333\" d=\"M22.82 24.66L22.83 24.67L22.87 24.71Q22.80 28.90 22.08 33.05L22.01 32.99L22.14 33.11Q24.32 32.48 27.40 32.36L27.51 32.47L27.38 32.34Q28.71 32.53 29.78 31.53L29.84 31.58L29.83 31.57Q30.79 30.46 30.79 29.13L30.88 29.22L30.94 29.28Q30.85 28.88 30.81 28.61L30.87 28.67L30.91 28.71Q30.65 25.68 28.41 24.84L28.48 24.91L28.34 24.77Q27.64 24.53 26.95 24.61L27.03 24.68L27.09 24.74Q26.01 24.65 24.98 24.69L24.92 24.63L24.92 24.63Q23.77 24.59 22.75 24.59ZM21.61 14.24L21.67 14.30L21.49 14.12Q22.36 17.43 22.63 21.80L22.69 21.87L22.82 22.00Q24.12 21.96 26.78 22.00L26.86 22.08L26.90 22.12Q29.73 22.06 30.08 18.52L30.04 18.48L30.17 18.61Q30.29 16.60 28.88 15.76L28.83 15.71L28.97 15.85Q27.93 15.19 23.51 14.54L23.55 14.57L23.63 14.66Q22.48 14.42 21.56 14.19ZM18.00 37.17L17.92 37.08L17.98 37.14Q20.33 30.35 20.06 22.97L20.10 23.01L20.07 22.98Q19.78 15.68 16.85 9.21L16.85 9.22L16.96 9.32Q20.80 11.91 27.03 12.16L26.96 12.09L26.85 11.98Q33.06 12.21 33.41 15.11L33.53 15.23L33.57 15.27Q33.93 18.07 32.52 20.73L32.43 20.64L32.42 20.64Q31.76 22.22 30.16 22.91L30.11 22.86L29.99 22.73Q33.75 23.53 33.98 28.89L34.01 28.92L33.86 28.77Q34.04 29.98 33.97 31.39L33.94 31.36L33.94 31.36Q33.83 32.63 32.90 33.56L33.00 33.66L33.06 33.72Q32.13 34.66 30.80 34.81L30.80 34.81L30.76 34.77Q29.29 34.87 28.23 34.87L28.13 34.77L28.28 34.92Q22.52 34.87 17.99 37.16ZM30.72 37.40L30.73 37.41L30.64 37.32Q31.77 37.57 33.64 37.69L33.62 37.67L33.52 37.57Q34.90 37.57 36.00 36.70L36.08 36.78L36.10 36.80Q36.79 35.77 36.67 34.21L36.69 34.23L36.71 34.25Q36.76 33.42 36.03 29.96L35.97 29.89L36.04 29.96Q35.35 26.72 33.49 25.24L33.38 25.13L33.03 24.36L32.91 24.25Q34.70 22.95 35.28 19.19L35.24 19.15L35.19 19.10Q35.46 18.07 35.38 16.66L35.28 16.56L35.26 16.54Q35.21 15.24 34.11 14.40L34.19 14.48L34.23 14.52Q33.84 14.25 33.72 14.21L33.67 14.15L33.67 14.15Q33.47 13.68 32.63 12.88L32.60 12.85L32.62 12.87Q31.05 11.76 26.82 11.57L2
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
  "ocrText": "BE7EWR",
  "key": "6aaa18a4f5e4663fb1c920db"
}
```


Headers:

```
User-Agent: PostmanRuntime/7.39.1
Accept: application/json
Content-Type: application/json
request-id: fc165bf8-ff6a-4e4c-9125-0b6321b26087
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://postman-echo.com/post' \
  -X POST \
  -H 'User-Agent: PostmanRuntime/7.39.1' \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json' \
  -H 'request-id: fc165bf8-ff6a-4e4c-9125-0b6321b26087' \
  --data-raw '{
  "_trace": "OCR executed by run.js (hddt-ocr-cli) — Newman cannot POST SVG multipart",
  "endpoint": "https://captcha.minvoice.com.vn/api/ocrcaptcha/tax_invoice_gov",
  "field": "Captcha",
  "svg": "_hddt-captcha.svg",
  "ocrText": "BE7EWR",
  "key": "6aaa18a4f5e4663fb1c920db"
}'
```

#### Response

- Status: `200`
- Time: 331ms
- Content-Type: `application/json; charset=utf-8`
- Size: 873 bytes
- File: [./responses/011-03-guest-03-ocr-tax-invoice-gov.txt](./responses/011-03-guest-03-ocr-tax-invoice-gov.txt)

Body:

```
{"args":{},"data":{"_trace":"OCR executed by run.js (hddt-ocr-cli) — Newman cannot POST SVG multipart","endpoint":"https://captcha.minvoice.com.vn/api/ocrcaptcha/tax_invoice_gov","field":"Captcha","svg":"_hddt-captcha.svg","ocrText":"BE7EWR","key":"6aaa18a4f5e4663fb1c920db"},"files":{},"form":{},"headers":{"host":"postman-echo.com","accept-encoding":"gzip, br","accept":"application/json","user-agent":"PostmanRuntime/7.39.1","request-id":"fc165bf8-ff6a-4e4c-9125-0b6321b26087","content-length":"284","content-type":"application/json","x-forwarded-proto":"https"},"json":{"_trace":"OCR executed by run.js (hddt-ocr-cli) — Newman cannot POST SVG multipart","endpoint":"https://captcha.minvoice.com.vn/api/ocrcaptcha/tax_invoice_gov","field":"Captcha","svg":"_hddt-captcha.svg","ocrText":"BE7EWR","key":"6aaa18a4f5e4663fb1c920db"},"url":"https://postman-echo.com/post"}
```

---

<a id="case-12"></a>
### 12. 03_GUEST — 04 GET /api/{from}/guest-invoices

✅ **PASS** · `GET` `https://hoadondientu.gdt.gov.vn/api/sco-query/guest-invoices?cvalue=BE7EWR&ckey=6aaa18a4f5e4663fb1c920db&khmshdon=1&hdon=01&nbmst=3603914658&khhdon=C25MDH&shdon=122252&tgtttbso=804339800`

#### Assertions

- ✓ guest-invoices: ttxly hoặc body rỗng (CrawlCheckInvoiceService)

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/sco-query/guest-invoices?cvalue=BE7EWR&ckey=6aaa18a4f5e4663fb1c920db&khmshdon=1&hdon=01&nbmst=3603914658&khhdon=C25MDH&shdon=122252&tgtttbso=804339800`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
Accept: application/json, text/plain, */*
request-id: 6f2a17ea-e1d0-4573-b06b-e9dd2465b260
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/guest-invoices?cvalue=BE7EWR&ckey=6aaa18a4f5e4663fb1c920db&khmshdon=1&hdon=01&nbmst=3603914658&khhdon=C25MDH&shdon=122252&tgtttbso=804339800' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'request-id: 6f2a17ea-e1d0-4573-b06b-e9dd2465b260'
```

#### Response

- Status: `200`
- Time: 39ms
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36
Accept: */*
Accept-Language: vi
Accept-Encoding: gzip,deflate,br
Authorization: [đã gửi 199 ký tự — ẩn trong report]
End-Point: /tra-cuu/tra-cuu-hoa-don
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)
request-id: 3c8a7f28-75d3-40e1-a940-53a5ca6dab2f
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://hoadondientu.gdt.gov.vn/api/query/invoices/export-excel?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \
  -H 'Accept: */*' \
  -H 'Accept-Language: vi' \
  -H 'Accept-Encoding: gzip,deflate,br' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)' \
  -H 'request-id: 3c8a7f28-75d3-40e1-a940-53a5ca6dab2f'
```

#### Response

- Status: `200`
- Time: 97ms
- Content-Type: `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
- Size: 4250 bytes
- File: [./responses/013-04-excel-01-get-api-query-invoices-export-excel.bin](./responses/013-04-excel-01-get-api-query-invoices-export-excel.bin)

Body:

```
[binary 4250 bytes — xem file đính kèm]
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36
Accept: */*
Accept-Language: vi
Accept-Encoding: gzip,deflate,br
Authorization: [đã gửi 199 ký tự — ẩn trong report]
End-Point: /tra-cuu/tra-cuu-hoa-don
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)
request-id: cdb8d6a5-918b-47d0-aaba-fd242bd7cc3d
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-excel?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59%3Bttxly%3D%3D8' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \
  -H 'Accept: */*' \
  -H 'Accept-Language: vi' \
  -H 'Accept-Encoding: gzip,deflate,br' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)' \
  -H 'request-id: cdb8d6a5-918b-47d0-aaba-fd242bd7cc3d'
```

#### Response

- Status: `200`
- Time: 93ms
- Content-Type: `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
- Size: 4242 bytes
- File: [./responses/014-04-excel-02-get-api-sco-query-invoices-export-excel.bin](./responses/014-04-excel-02-get-api-sco-query-invoices-export-excel.bin)

Body:

```
[binary 4242 bytes — xem file đính kèm]
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36
Accept: */*
Accept-Language: vi
Accept-Encoding: gzip,deflate,br
Authorization: [đã gửi 199 ký tự — ẩn trong report]
End-Point: /tra-cuu/tra-cuu-hoa-don
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)
request-id: 54493c93-2ad8-4661-b5a1-915947ce859a
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://hoadondientu.gdt.gov.vn/api/query/invoices/export-excel-sold?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59&type=purchase' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \
  -H 'Accept: */*' \
  -H 'Accept-Language: vi' \
  -H 'Accept-Encoding: gzip,deflate,br' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)' \
  -H 'request-id: 54493c93-2ad8-4661-b5a1-915947ce859a'
```

#### Response

- Status: `200`
- Time: 120ms
- Content-Type: `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
- Size: 4250 bytes
- File: [./responses/015-04-excel-03-get-api-query-invoices-export-excel-sold.bin](./responses/015-04-excel-03-get-api-query-invoices-export-excel-sold.bin)

Body:

```
[binary 4250 bytes — xem file đính kèm]
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36
Accept: */*
Accept-Language: vi
Accept-Encoding: gzip,deflate,br
Authorization: [đã gửi 199 ký tự — ẩn trong report]
End-Point: /tra-cuu/tra-cuu-hoa-don
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)
request-id: ba6d8587-d9eb-4a17-99f0-d32fce68e3c3
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-excel-sold?sort=tdlap%3Adesc%2Ckhmshdon%3Aasc%2Cshdon%3Adesc&search=tdlap%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Btdlap%3Dle%3D16%2F09%2F2026T23%3A59%3A59%3Bttxly%3D%3D8&type=purchase' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \
  -H 'Accept: */*' \
  -H 'Accept-Language: vi' \
  -H 'Accept-Encoding: gzip,deflate,br' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Action: Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)' \
  -H 'request-id: ba6d8587-d9eb-4a17-99f0-d32fce68e3c3'
```

#### Response

- Status: `200`
- Time: 98ms
- Content-Type: `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
- Size: 4242 bytes
- File: [./responses/016-04-excel-04-get-api-sco-query-invoices-export-excel-sold.bin](./responses/016-04-excel-04-get-api-sco-query-invoices-export-excel-sold.bin)

Body:

```
[binary 4242 bytes — xem file đính kèm]
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36
Accept: */*
Accept-Language: vi
Authorization: [đã gửi 199 ký tự — ẩn trong report]
End-Point: /tra-cuu/tra-cuu-hoa-don
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
Action: Xem%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)
request-id: ff07c561-856c-41d6-ad81-20de965b3bc1
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://hoadondientu.gdt.gov.vn/api/query/invoices/detail?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \
  -H 'Accept: */*' \
  -H 'Accept-Language: vi' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Action: Xem%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)' \
  -H 'request-id: ff07c561-856c-41d6-ad81-20de965b3bc1'
```

#### Response

- Status: `500`
- Time: 58ms
- Content-Type: `application/json`
- Size: 293 bytes
- File: [./responses/017-05-detail-01-get-api-query-invoices-detail.txt](./responses/017-05-detail-01-get-api-query-invoices-detail.txt)

Body:

```
{"timestamp":"16/09/2026 11:18:49","message":"Failed to convert value of type 'java.lang.String' to required type 'byte'; nested exception is java.lang.NumberFormatException: For input string: \"\"","details":"","path":"uri=/invoices/detail","requestId":"ac7c8e50-b169-4e81-891d-346a6f274671"}
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36
Accept: */*
Accept-Language: vi
Authorization: [đã gửi 199 ký tự — ẩn trong report]
End-Point: /tra-cuu/tra-cuu-hoa-don
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
Action: Xem%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)
request-id: d1a3843c-aca4-4bc5-9f37-4ee3bbe5f5f5
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/detail?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \
  -H 'Accept: */*' \
  -H 'Accept-Language: vi' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Action: Xem%20h%C3%B3a%20%C4%91%C6%A1n%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)' \
  -H 'request-id: d1a3843c-aca4-4bc5-9f37-4ee3bbe5f5f5'
```

#### Response

- Status: `500`
- Time: 39ms
- Content-Type: `application/json`
- Size: 242 bytes
- File: [./responses/018-05-detail-02-get-api-sco-query-invoices-detail.txt](./responses/018-05-detail-02-get-api-sco-query-invoices-detail.txt)

Body:

```
{"timestamp":"16/09/2026 11:18:49","message":"Failed to convert value of type 'java.lang.String' to required type 'byte'; nested exception is java.lang.NumberFormatException: For input string: \"\"","details":"","path":"uri=/invoices/detail"}
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36
Accept: */*
Accept-Language: vi
Authorization: [đã gửi 199 ký tự — ẩn trong report]
End-Point: /tra-cuu/tra-cuu-hoa-don
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
Action: Xu%E1%BA%A5t%20xml%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)
request-id: 6f7bcf9b-bee3-461e-8d89-0034181ccdcb
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://hoadondientu.gdt.gov.vn/api/query/invoices/export-xml?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \
  -H 'Accept: */*' \
  -H 'Accept-Language: vi' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Action: Xu%E1%BA%A5t%20xml%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)' \
  -H 'request-id: 6f7bcf9b-bee3-461e-8d89-0034181ccdcb'
```

#### Response

- Status: `500`
- Time: 41ms
- Content-Type: `application/json`
- Size: 297 bytes
- File: [./responses/019-06-xml-01-get-api-query-invoices-export-xml.txt](./responses/019-06-xml-01-get-api-query-invoices-export-xml.txt)

Body:

```
{"timestamp":"16/09/2026 11:18:49","message":"Failed to convert value of type 'java.lang.String' to required type 'byte'; nested exception is java.lang.NumberFormatException: For input string: \"\"","details":"","path":"uri=/invoices/export-xml","requestId":"53ae3bfe-4359-4c0e-8f9b-ffdec6299294"}
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36
Accept: */*
Accept-Language: vi
Authorization: [đã gửi 199 ký tự — ẩn trong report]
End-Point: /tra-cuu/tra-cuu-hoa-don
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
Action: Xu%E1%BA%A5t%20xml%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)
request-id: ad139538-68a6-4249-b7a1-1e905f4a74bd
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/export-xml?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \
  -H 'Accept: */*' \
  -H 'Accept-Language: vi' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Action: Xu%E1%BA%A5t%20xml%20(h%C3%B3a%20%C4%91%C6%A1n%20mua%20v%C3%A0o)' \
  -H 'request-id: ad139538-68a6-4249-b7a1-1e905f4a74bd'
```

#### Response

- Status: `500`
- Time: 43ms
- Content-Type: `application/json`
- Size: 246 bytes
- File: [./responses/020-06-xml-02-get-api-sco-query-invoices-export-xml.txt](./responses/020-06-xml-02-get-api-sco-query-invoices-export-xml.txt)

Body:

```
{"timestamp":"16/09/2026 11:18:50","message":"Failed to convert value of type 'java.lang.String' to required type 'byte'; nested exception is java.lang.NumberFormatException: For input string: \"\"","details":"","path":"uri=/invoices/export-xml"}
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36
Accept: application/json, text/plain, */*
Accept-Language: vi
Authorization: [đã gửi 199 ký tự — ẩn trong report]
End-Point: /tra-cuu/tra-cuu-hoa-don
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
Action: Xem%20th%C3%B4ng%20tin%20li%C3%AAn%20quan%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)
request-id: 7dd8d0fe-efd3-46dd-aa97-2ff18cd11649
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://hoadondientu.gdt.gov.vn/api/query/invoices/related?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Action: Xem%20th%C3%B4ng%20tin%20li%C3%AAn%20quan%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)' \
  -H 'request-id: 7dd8d0fe-efd3-46dd-aa97-2ff18cd11649'
```

#### Response

- Status: `500`
- Time: 41ms
- Content-Type: `application/json`
- Size: 294 bytes
- File: [./responses/021-07-related-01-get-api-query-invoices-related.txt](./responses/021-07-related-01-get-api-query-invoices-related.txt)

Body:

```
{"timestamp":"16/09/2026 11:18:50","message":"Failed to convert value of type 'java.lang.String' to required type 'byte'; nested exception is java.lang.NumberFormatException: For input string: \"\"","details":"","path":"uri=/invoices/related","requestId":"71633a96-d30b-4df2-8545-c48f24ab01d7"}
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36
Accept: application/json, text/plain, */*
Accept-Language: vi
Authorization: [đã gửi 199 ký tự — ẩn trong report]
End-Point: /tra-cuu/tra-cuu-hoa-don
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
Action: Xem%20th%C3%B4ng%20tin%20li%C3%AAn%20quan%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)
request-id: 8525c518-2e88-43f9-8c2d-73fb5bbbb9db
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/related?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Action: Xem%20th%C3%B4ng%20tin%20li%C3%AAn%20quan%20(h%C3%B3a%20%C4%91%C6%A1n%20b%C3%A1n%20ra)' \
  -H 'request-id: 8525c518-2e88-43f9-8c2d-73fb5bbbb9db'
```

#### Response

- Status: `200`
- Time: 153ms
- Content-Type: `text/html; charset=UTF-8`
- Size: 730 bytes
- File: [./responses/022-07-related-02-get-api-sco-query-invoices-related.txt](./responses/022-07-related-02-get-api-sco-query-invoices-related.txt)

Body:

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><META HTTP-EQUIV="CONTENT-TYPE" CONTENT="TEXT/HTML; CHARSET=utf-8"/><title>Error</title></head><body><H2>Error</H2><table summary="Error" border="0" bgcolor="#FEEE7A" cellpadding="0" cellspacing="0" width="400"><tr><td><table summary="Error" border="0" cellpadding="3" cellspacing="1"><tr valign="top" bgcolor="#FBFFDF" align="left"><td><STRONG>Error</STRONG></td></tr><tr valign="top" bgcolor="#FFFFFF"><td>This page can't be displayed. Contact support for additional information.<br/>The incident ID is: N/A.</td></tr></table></td></tr></table></body></html>
```

---

<a id="case-23"></a>
### 23. 07_RELATED — 03 GET /api/query/invoices/relative

❌ **FAIL** · `GET` `https://hoadondientu.gdt.gov.vn/api/query/invoices/relative?nbmst=&khhdon=&shdon=&khmshdon=`

#### Assertions

- ✗ FAIL: HTML WAF / Request Rejected — CQT trả HTML thay vì payload repo expect

#### Request

- Method: `GET`
- URL: `https://hoadondientu.gdt.gov.vn/api/query/invoices/relative?nbmst=&khhdon=&shdon=&khmshdon=`

Headers:

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
Accept: application/json, text/plain, */*
Authorization: [đã gửi 199 ký tự — ẩn trong report]
request-id: 2c7e2596-764a-4c63-8097-5414c3648783
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://hoadondientu.gdt.gov.vn/api/query/invoices/relative?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'request-id: 2c7e2596-764a-4c63-8097-5414c3648783'
```

#### Response

- Status: `200`
- Time: 209ms
- Content-Type: `text/html; charset=UTF-8`
- Size: 730 bytes
- File: [./responses/023-07-related-03-get-api-query-invoices-relative.txt](./responses/023-07-related-03-get-api-query-invoices-relative.txt)

Body:

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><META HTTP-EQUIV="CONTENT-TYPE" CONTENT="TEXT/HTML; CHARSET=utf-8"/><title>Error</title></head><body><H2>Error</H2><table summary="Error" border="0" bgcolor="#FEEE7A" cellpadding="0" cellspacing="0" width="400"><tr><td><table summary="Error" border="0" cellpadding="3" cellspacing="1"><tr valign="top" bgcolor="#FBFFDF" align="left"><td><STRONG>Error</STRONG></td></tr><tr valign="top" bgcolor="#FFFFFF"><td>This page can't be displayed. Contact support for additional information.<br/>The incident ID is: N/A.</td></tr></table></td></tr></table></body></html>
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
Authorization: [đã gửi 199 ký tự — ẩn trong report]
request-id: 56fc467f-2a7f-4c11-8fa1-af378b1f616a
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-query/invoices/relative?nbmst=&khhdon=&shdon=&khmshdon=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'request-id: 56fc467f-2a7f-4c11-8fa1-af378b1f616a'
```

#### Response

- Status: `500`
- Time: 131ms
- Content-Type: `application/json`
- Size: 244 bytes
- File: [./responses/024-07-related-04-get-api-sco-query-invoices-relative.txt](./responses/024-07-related-04-get-api-sco-query-invoices-relative.txt)

Body:

```
{"timestamp":"16/09/2026 11:18:52","message":"Failed to convert value of type 'java.lang.String' to required type 'byte'; nested exception is java.lang.NumberFormatException: For input string: \"\"","details":"","path":"uri=/invoices/relative"}
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36
Accept: application/json, text/plain, */*
Accept-Language: vi
Authorization: [đã gửi 199 ký tự — ẩn trong report]
End-Point: /tra-cuu/tra-cuu-hoa-don
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
Action: T%C3%ACm%20ki%E1%BA%BFm
request-id: 887f0deb-915d-4521-b4d3-472d5164fcc7
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://hoadondientu.gdt.gov.vn/api/explanation/tbssdts/signed-notifications?sort=ngay%3Adesc%2Cso%3Adesc&search=ngay%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Bngay%3Dle%3D16%2F09%2F2026T23%3A59%3A59&size=50' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Action: T%C3%ACm%20ki%E1%BA%BFm' \
  -H 'request-id: 887f0deb-915d-4521-b4d3-472d5164fcc7'
```

#### Response

- Status: `200`
- Time: 134ms
- Content-Type: `application/json`
- Size: 45 bytes
- File: [./responses/025-08-tbss-01-get-api-explanation-tbssdts-signed-notifications.txt](./responses/025-08-tbss-01-get-api-explanation-tbssdts-signed-notifications.txt)

Body:

```
{"datas":[],"total":0,"state":null,"time":94}
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36
Accept: application/json, text/plain, */*
Accept-Language: vi
Authorization: [đã gửi 199 ký tự — ẩn trong report]
End-Point: /tra-cuu/tra-cuu-hoa-don
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/
Action: T%C3%ACm%20ki%E1%BA%BFm
request-id: c344a1a0-4786-41df-b65e-463fb09f5d90
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://hoadondientu.gdt.gov.vn/api/sco-explanation/tbssdts/signed-notifications?sort=ngay%3Adesc%2Cso%3Adesc&search=ngay%3Dge%3D16%2F09%2F2026T00%3A00%3A00%3Bngay%3Dle%3D16%2F09%2F2026T23%3A59%3A59&size=50' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'End-Point: /tra-cuu/tra-cuu-hoa-don' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/' \
  -H 'Action: T%C3%ACm%20ki%E1%BA%BFm' \
  -H 'request-id: c344a1a0-4786-41df-b65e-463fb09f5d90'
```

#### Response

- Status: `200`
- Time: 54ms
- Content-Type: `application/json`
- Size: 45 bytes
- File: [./responses/026-08-tbss-02-get-api-sco-explanation-tbssdts-signed-notifications.txt](./responses/026-08-tbss-02-get-api-sco-explanation-tbssdts-signed-notifications.txt)

Body:

```
{"datas":[],"total":0,"state":null,"time":14}
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36 Edg/150.0.0.0
Accept: application/json, text/plain, */*
Accept-Language: vi
Accept-Encoding: gzip, deflate, br
Authorization: [đã gửi 199 ký tự — ẩn trong report]
End-Point: /tra-cuu/tra-cuu-chung-tu-tncn
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/tra-cuu/tra-cuu-chung-tu-tncn
Action: T%C3%ACm%20ki%E1%BA%BFm
request-id: 1f3bdb36-e04d-42dd-9947-a381d6e385af
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://hoadondientu.gdt.gov.vn/api/pitw?size=50&search=nlap%3Dge%3D2026-09-15T17%3A00%3A00.000Z%3Bnlap%3Dle%3D2026-09-16T16%3A59%3A59.999Z&sort=nlap%3Adesc' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36 Edg/150.0.0.0' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'End-Point: /tra-cuu/tra-cuu-chung-tu-tncn' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/tra-cuu/tra-cuu-chung-tu-tncn' \
  -H 'Action: T%C3%ACm%20ki%E1%BA%BFm' \
  -H 'request-id: 1f3bdb36-e04d-42dd-9947-a381d6e385af'
```

#### Response

- Status: `200`
- Time: 66ms
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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36 Edg/150.0.0.0
Accept: application/json, text/plain, */*
Accept-Language: vi
Accept-Encoding: gzip, deflate, br
Authorization: [đã gửi 199 ký tự — ẩn trong report]
End-Point: /tra-cuu/tra-cuu-chung-tu-tncn
Origin: https://hoadondientu.gdt.gov.vn
Referer: https://hoadondientu.gdt.gov.vn/tra-cuu/tra-cuu-chung-tu-tncn
Action: 
request-id: 15cca0fc-0dc2-4a73-9423-4f96ba049142
```

cURL (header production + request-id; Authorization / Cookie / password ẩn):

```
curl 'https://hoadondientu.gdt.gov.vn/api/pitw/export-xml?hsgoc=' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36 Edg/150.0.0.0' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: vi' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Authorization: [đã gửi 199 ký tự — ẩn trong report]' \
  -H 'End-Point: /tra-cuu/tra-cuu-chung-tu-tncn' \
  -H 'Origin: https://hoadondientu.gdt.gov.vn' \
  -H 'Referer: https://hoadondientu.gdt.gov.vn/tra-cuu/tra-cuu-chung-tu-tncn' \
  -H 'Action: ' \
  -H 'request-id: 15cca0fc-0dc2-4a73-9423-4f96ba049142'
```

#### Response

- Status: `500`
- Time: 37ms
- Content-Type: `application/json`
- Size: 184 bytes
- File: [./responses/028-09-pitw-02-get-api-pitw-export-xml.txt](./responses/028-09-pitw-02-get-api-pitw-export-xml.txt)

Body:

```
{"timestamp":"16/09/2026 11:18:54","message":"Required request parameter 'hsgoc' for method parameter type UUID is present but converted to null","details":"","path":"uri=/export-xml"}
```

