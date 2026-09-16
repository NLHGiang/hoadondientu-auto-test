# Auto-test healthcheck — hoadondientu.gdt.gov.vn

Newman healthcheck cổng **Hóa đơn điện tử TCT** (`https://hoadondientu.gdt.gov.vn/api`). Folder này nằm ở **root workspace mSMI**, không thuộc repo con.

Lưu response theo pattern [mtax-api/auto-test](../mtax-api/auto-test): mỗi lần chạy tạo `test-report-{timestamp}/` (HTML + JSON + `responses/`).

**Base URL:** `https://hoadondientu.gdt.gov.vn/api` — không dùng `:30000`.

Gọi thẳng TCT (không qua proxy). `npm test` = public. `npm run test:all` = mọi endpoint đang dùng (Excel/XML/TBSS/PITW — cửa sổ 1 ngày, `page_size=50` như worker). Query/header khớp call site Node/C#.

## Cài đặt

```bash
cd hoadondientu-auto-test
npm install
```

## Chạy

```bash
npm test
# hoặc
node run.js --folder 01_PUBLIC

npm run test:login -- --env-var hddt_username=<MST-ql> --env-var hddt_password=<mat-khau>
npm run test:all -- --env-var hddt_username=<MST-ql> --env-var hddt_password=<mat-khau>
npm run test:guest -- --env-var guest_nbmst=... --env-var guest_khhdon=... --env-var guest_shdon=... --env-var guest_khmshdon=1 --env-var guest_hdon=01 --env-var guest_tgtttbso=...
# mẫu 6 (PXK): --env-var guest_khmshdon=6 --env-var guest_hdon=06_01 --env-var guest_tdlap=2026-09-16T00:00:00.000Z
npm run generate
```

Mỗi lần chạy tạo thư mục mới:

```
hoadondientu-auto-test/
└── test-report-YYYYMMDD-HHMMSS/
    ├── test-report.html
    ├── test-report.json
    └── responses/
```

Mở `test-report.html` **trong đúng thư mục** report (link `./responses/...` là tương đối). Không commit `test-report-*`. Không hardcode mật khẩu.

## Folders

| Folder | Lệnh | Endpoints |
|---|---|---|
| `01_PUBLIC` | `npm test` | portal, `/api/captcha`, `/api/category/public/dsdkts/{mst}/manager` |
| `02_LOGIN` | `npm run test:login` | authenticate, profile |
| `03_GUEST` | `npm run test:guest` | `/api/{query\|sco-query}/guest-invoices` |
| `04_EXCEL` | `npm run test:excel` | `/api/{query\|sco-query}/invoices/export-excel`, `export-excel-sold` |
| `05_DETAIL` | `npm run test:detail` | `/api/{query\|sco-query}/invoices/detail` |
| `06_XML` | `npm run test:xml` | `/api/{query\|sco-query}/invoices/export-xml` |
| `07_RELATED` | `npm run test:related` | `/api/{query\|sco-query}/invoices/related`, `relative` |
| `08_TBSS` | `npm run test:tbss` | `/api/explanation/tbssdts/signed-notifications`, `sco-explanation` |
| `09_PITW` | `npm run test:pitw` | `/api/pitw`, `/api/pitw/export-xml` |
| tất cả | `npm run test:all` | public + (login nếu có TK) + 04–09 |

OCR SVG: Newman không gửi được multipart — `run.js` gọi [lib/hddt-ocr-cli.js](lib/hddt-ocr-cli.js) rồi ghi trace vào report.

**Expect theo logic repo** — sai HTTP/body thì FAIL:

| Endpoint | Expect (repo) |
|---|---|
| captcha | 200 + `key` + `content` (`captchaViaProxy`) |
| authenticate | 200 + `token` (`CrawlEInvoiceLoginService`) |
| profile | 200 + `username` (`fetchTaxpayerProfileViaProxy`) |
| guest-invoices | 200 + `ttxly`, hoặc body rỗng = không tồn tại (`CrawlCheckInvoiceService`). JSON `message` không có `ttxly` → FAIL |
| dsdkts/manager | 200 JSON object (`TaxCode.get`) |
| export-excel* | 200 file xlsx (magic `PK`) |
| detail | 200 + `id` (`consume/invoiceDetail`) |
| export-xml | 200 ZIP (`PK`) (`exportXmlViaProxy`) |
| related | 200 + `khhdon` (`purchaseHdtbssrses`) |
| relative | 200 JSON (`getJsonViaProxy`) |
| TBSS | 200 + `datas[]` + `total` (`hdtbssresExcel`). `datas: []` vẫn pass |
| pitw | 200 + `datas[]` (`parseCrawlResult`). `datas: []` không có `message` vẫn pass |
| pitw/export-xml | 200 ZIP hoặc XML (`chung-tu-xml`) |

WAF 403 `Hệ thống phát hiện hành vi không hợp lệ...`, HTML WAF, HTTP 401/4xx/5xx, JSON lỗi `{status,message}` → **FAIL**. Thiếu token / thiếu `inv_*` sẽ fail (đúng vì repo không coi đó là kết quả thành công).

```json
{"status":403,"message":"Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn."}
```

Env thêm: `excel_search` / `excel_search_sco` (`ttxly==8`), `tbss_sort` / `tbss_search` (`ngay=`), `pitw_search` (nlap ISO), `inv_nbmst` / `inv_khhdon` / `inv_shdon` / `inv_khmshdon`, `pitw_hsgoc`, `pitw_cookie`. Bearer lấy từ login (`hddt_token`) nếu có.

### Khớp code (đã sửa)

| Request | Code | Healthcheck |
|---|---|---|
| guest-invoices | FE `hdon` + `tdlap`/`tgtttbso`; backend xóa field theo `khmshdon==6`; C# luôn `hdon` | `hdon`; mẫu 6 chỉ `tdlap`; còn lại chỉ `tgtttbso` |
| export-excel* | Action `Xuất hóa đơn (hóa đơn mua vào)`; sco `ttxly==8`; purchase `type=purchase` | giống Node `crawl-excel.js` |
| detail | Action `Xem hóa đơn (hóa đơn bán ra)` | giống `assets/index.js` |
| export-xml | C# Action `Xuất xml (hóa đơn mua vào)` | giống `CrawlEInvoiceService.cs` |
| related | Action `Xem thông tin liên quan (hóa đơn bán ra)` | giống `routes/invoices` |
| relative | chỉ Bearer | không gửi Action/End-Point thêm |
| TBSS | `sort=ngay:desc,so:desc` `search=ngay=ge/le` `size=50` Action Tìm kiếm | giống `hdtbssrses/sold.js` |
| PITW list | `nlap=ge=...T17:00:00.000Z` size 50 | giống `buildPitwSearch` |
| PITW xml | Action rỗng, Referer TNCN, Cookie nếu có | giống `chung-tu-xml.js` |
| pitw/export-excel | chỉ `excelUrlBase` trong config, không call site | **không gen** |

---

## API đang dùng trong các repo

Repos **có gọi** TCT: `proxy-request-api`, `crawl-data-api`, `msmi-backend`, `msmi-frontend`, `proxy-forwarder-service`.

Repos **không gọi** TCT: `msmibatch-job`, `msmi-pdf-service`, `msmi-header-service`, `crawl-etl-service-gl`, `mtax-api`, `msmi-mtax-api` (dùng `thuedientu` / `dichvucong`).

### Public / guest

| Method | Path | Repo |
|---|---|---|
| GET | `/api/captcha` | crawl-data-api, proxy-request-api, msmi-backend (qua proxy), proxy-forwarder (`DefaultTestUrl`) |
| GET | `/api/query/guest-invoices` | crawl-data-api, msmi-backend |
| GET | `/api/sco-query/guest-invoices` | crawl-data-api, msmi-backend (khi `khhdon[3]==='M'`) |
| GET | `/api/category/public/dsdkts/{mst}/manager` | msmi-frontend (trực tiếp), msmi-backend (qua proxy) |

### Auth

| Method | Path | Repo |
|---|---|---|
| POST | `/api/security-taxpayer/authenticate` | crawl-data-api, proxy-request-api, msmi-backend (qua proxy), msmi-frontend `CaptchaService` |
| GET | `/api/security-taxpayer/profile` | proxy-request-api, msmi-backend check-alive |

### Hóa đơn đã login (Bearer)

| Method | Path | Repo |
|---|---|---|
| GET | `/api/{query\|sco-query}/invoices/export-excel` | crawl-data-api, proxy-request-api, msmi-backend |
| GET | `/api/{query\|sco-query}/invoices/export-excel-sold` | crawl-data-api, proxy-request-api, msmi-backend |
| GET | `/api/{query\|sco-query}/invoices/detail` | crawl-data-api, proxy-request-api, msmi-backend |
| GET | `/api/{query\|sco-query}/invoices/export-xml` | crawl-data-api, proxy-request-api, msmi-backend |

### Chỉ msmi-backend

| Method | Path |
|---|---|
| GET | `/api/{query\|sco-query}/invoices/related` |
| GET | `/api/{query\|sco-query}/invoices/relative` |
| GET | `/api/explanation/tbssdts/signed-notifications` |
| GET | `/api/sco-explanation/tbssdts/signed-notifications` |
| GET | `/api/pitw` |
| GET | `/api/pitw/export-xml` |

`/api/pitw/export-excel` chỉ có `excelUrlBase` trong config, không có call site — healthcheck **không** gọi. Legacy `/api/{query\|sco-query}/invoices/{sold\|purchase}` còn trong `msmi-backend/service/invoices/crawl.js` — worker active dùng `export-excel*`.

Guest: `hdon` bắt buộc (FE `01`/`02`/`06_01`, C# `"0"+Serial[0]`). `khmshdon==6` gửi `tdlap` ISO, không gửi `tgtttbso`. TBSS search field là `ngay`, không phải `tdlap`. PITW `nlap` là ISO (`buildPitwSearch`), không phải `DD/MM/YYYY`.

OCR nội bộ `/api/ocrcaptcha/tax_invoice_gov` **không** phải API TCT.

`CrawlForwardRequestDto.UpStreamBase` giữ origin `https://hoadondientu.gdt.gov.vn` vì `path` đã là `api/...`.
