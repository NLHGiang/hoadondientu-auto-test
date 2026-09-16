# hoadondientu-auto-test

Newman auto-test các API **Hóa đơn điện tử TCT** mà hệ thống mSMI đang gọi:

`https://hoadondientu.gdt.gov.vn/api`

Gọi thẳng TCT (không qua proxy). Base path là `/api`, không dùng `:30000`.

Query, header (đúng call site production) và **expect response** khớp logic xử lý trong `msmi-backend`, `crawl-data-api`, `proxy-request-api`, `msmi-frontend`. Mọi request thêm `request-id` UUID v4. Curl trong report = header production + `request-id` (không in `Postman-Token` / `Cache-Control`; `Host`/`Connection` do HTTP client tự gắn trên wire, không lặp trong curl). Cookie jar Newman tắt trên crawler; Cookie chỉ PITW khi có `pitw_cookie`. `last-test-report/` không tự commit — cần commit/push sau lần chạy.

## Cài đặt

Node.js 18+.

```bash
npm install
```

Collection: `HoaDonDienTu.healthcheck.postman_collection.json`  
Env: `HoaDonDienTu.environment.json`

Sau khi sửa `generate-collection.js`:

```bash
npm run generate
```

Không ghi mật khẩu / token / cookie vào file env. Truyền lúc chạy bằng `--env-var`.

## Chạy

```bash
# Chỉ public (portal, captcha, tra MST)
npm test

# Login TCT (bắt buộc username + password)
npm run test:login -- --env-var hddt_username=<MST-ql> --env-var hddt_password=<mat-khau>

# Guest tra cứu HĐ (bắt buộc nbmst, khhdon, shdon, khmshdon)
npm run test:guest -- --env-var guest_nbmst=... --env-var guest_khhdon=... --env-var guest_shdon=... --env-var guest_khmshdon=1 --env-var guest_hdon=01 --env-var guest_tgtttbso=...

# Mẫu 6 (phiếu xuất kho): tdlap ISO, không gửi tgtttbso
npm run test:guest -- --env-var guest_nbmst=... --env-var guest_khhdon=... --env-var guest_shdon=... --env-var guest_khmshdon=6 --env-var guest_hdon=06_01 --env-var guest_tdlap=2026-09-16T00:00:00.000Z

# Toàn bộ folder đang dùng
npm run test:all -- --env-var hddt_username=<MST-ql> --env-var hddt_password=<mat-khau>
```

`npm run test:all` (không `--folder`):

| Có đủ biến | Folder |
|---|---|
| luôn | `01_PUBLIC`, `04_EXCEL` … `09_PITW` |
| `hddt_username` + `hddt_password` | thêm `02_LOGIN` (Bearer cho 04–09) |
| `guest_nbmst` + `guest_khhdon` + `guest_shdon` + `guest_khmshdon` | thêm `03_GUEST` |

Thiếu token / thiếu `inv_*` / thiếu `pitw_hsgoc` → request vẫn chạy và **FAIL** (repo không coi 401/JSON lỗi là thành công).

Từng folder: `npm run test:excel` | `test:detail` | `test:xml` | `test:related` | `test:tbss` | `test:pitw`.

Collection tắt `Postman-Token` / `Cache-Control`. **Không** tắt `Host`/`Connection` — lần chạy 111323 503 OpenShift "The host doesn't exist" vì thiếu Host trên wire. Curl report vẫn không in Host/Connection (curl lấy host từ URL). Tắt cookie jar trên crawler HĐ / guest / public / PITW. `run.js` gắn `request-id` UUID v4 mỗi request (ví dụ `559cadfe-0773-4847-8172-7432eec52498`). Cookie `09_PITW` chỉ khi `--env-var pitw_cookie=...`. OCR captcha SVG: Newman không POST multipart được — `run.js` gọi `lib/hddt-ocr-cli.js` (endpoint nội bộ `captcha.minvoice.com.vn`, **không** phải API TCT).

## Folder

| Folder | Lệnh | Request |
|---|---|---|
| `01_PUBLIC` | `npm test` | `GET /`, `GET /api/captcha`, `GET /api/category/public/dsdkts/{mst}/manager` |
| `02_LOGIN` | `npm run test:login` | captcha → OCR → `POST /api/security-taxpayer/authenticate` → `GET /api/security-taxpayer/profile?smiUsername=` |
| `03_GUEST` | `npm run test:guest` | captcha → OCR → `GET /api/{query\|sco-query}/guest-invoices` (`sco-query` khi `khhdon[3]==='M'`) |
| `04_EXCEL` | `npm run test:excel` | `export-excel`, `export-excel-sold` (query + sco-query) |
| `05_DETAIL` | `npm run test:detail` | `invoices/detail` |
| `06_XML` | `npm run test:xml` | `invoices/export-xml` |
| `07_RELATED` | `npm run test:related` | `invoices/related`, `invoices/relative` |
| `08_TBSS` | `npm run test:tbss` | `/api/explanation/tbssdts/signed-notifications`, `sco-explanation` |
| `09_PITW` | `npm run test:pitw` | `GET /api/pitw`, `GET /api/pitw/export-xml?hsgoc=` |

Không gen `/api/pitw/export-excel` (chỉ có `excelUrlBase` trong config, không có call site).

## Report

Mỗi lần chạy:

```
test-report-YYYYMMDD-HHMMSS/   # lịch sử local, gitignore
last-test-report/              # lần chạy cuối — commit/push git
  SOURCE.txt                   # tên thư mục timestamp nguồn
  test-report.md               # xem trên git (GitHub/GitLab render)
  test-report.html
  test-report.json
  responses/
```

Mở `test-report.md` trên git để xem summary + từng case. Mở `test-report.html` **trong đúng thư mục** đó (link `./responses/...` là tương đối).

Curl report khớp header production + `request-id`. Không in `Postman-Token` / `Cache-Control`. `Host` và `Connection` được gửi trên wire (Node HTTP), không lặp trong curl. `Authorization` / `Cookie` / password hiện `[đã gửi N ký tự — ẩn trong report]`. Copy curl từ report **không replay** được phần đã ẩn.

## Expect — sai thì FAIL

HTTP phải **200** (portal: 2xx/3xx). Body phải đúng shape repo đang xử lý.

| Request | Pass khi |
|---|---|
| Portal | HTTP &lt; 400 |
| captcha | JSON `key` + `content` |
| authenticate | JSON `token` |
| profile | JSON `username` (string khác rỗng) |
| guest-invoices | `ttxly` có mặt, **hoặc** body rỗng (C# = không tồn tại). JSON `message` không có `ttxly` → FAIL |
| dsdkts/manager | JSON object, không phải lỗi CQT |
| export-excel* | file xlsx (magic `PK`) |
| detail | JSON `id` |
| export-xml hóa đơn | ZIP (`PK`) |
| related | JSON `khhdon` |
| relative | JSON parse được, không phải payload lỗi CQT |
| TBSS | `datas` (array) + `total` (number). `datas: []` vẫn pass |
| pitw | `datas` hoặc `content` (array). Mảng rỗng, không `message` → pass. HTML login redirect (`dang-nhap` / `/login`) → FAIL (phiên CQT chết) |
| pitw/export-xml | ZIP (`PK`) hoặc XML (`<`) |

Luôn **FAIL**:

```json
{"status":403,"message":"Hệ thống phát hiện hành vi không hợp lệ. Yêu cầu đã bị chặn."}
```

HTML WAF (`This page can't be displayed` / `Request Rejected`), HTTP 401/4xx/5xx, JSON `{status, message}` lỗi.

## Request khớp production

Họ **proxy** (Chrome/120, `Accept: application/json, text/plain, */*`): captcha, authenticate, profile, dsdkts, guest, relative.

Họ **crawler HĐ** (Chrome/106, `Accept-Language: vi`, Origin/Referer portal, `End-Point: /tra-cuu/tra-cuu-hoa-don`, Bearer): excel, detail, xml, related, TBSS. Không Cookie.

Họ **PITW** (Chrome/150 Edg, Referer `/tra-cuu/tra-cuu-chung-tu-tncn`).

Mọi request: `request-id: <uuid>`.

| API | Query / header |
|---|---|
| guest-invoices | `hdon` (`01` / `02` / `06_01`…). `khmshdon==6` → `tdlap` ISO, xóa `tgtttbso`; ngược lại giữ `tgtttbso`, xóa `tdlap`. Header proxy, không Origin/Referer |
| export-excel (sold) | `sort=tdlap:desc,khmshdon:asc,shdon:desc`, `search=tdlap=ge/le`; **không** `type` |
| export-excel-sold (purchase) | như trên + `type=purchase` |
| sco-query excel | thêm `ttxly==8` (Node `crawl-excel.js`) |
| Excel | `Accept: */*`, `Accept-Encoding: gzip,deflate,br`, Action `Xuất hóa đơn (hóa đơn mua vào)` |
| detail Action | `Xem hóa đơn (hóa đơn bán ra)` |
| XML Action | `Xuất xml (hóa đơn mua vào)` (C#) |
| related Action | `Xem thông tin liên quan (hóa đơn bán ra)` |
| relative | Bearer + UA/Accept proxy only, không `Action`/`End-Point`/Origin |
| TBSS | `sort=ngay:desc,so:desc`, `search=ngay=ge/le`, `size=50`, Action `Tìm kiếm` |
| PITW list | `nlap=ge=...T17:00:00.000Z` (00:00 VN) / `le=...T16:59:59.999Z`, `size=50`, Action `Tìm kiếm` |
| PITW xml | Action rỗng, Referer `/tra-cuu/tra-cuu-chung-tu-tncn`; Cookie nếu có `pitw_cookie` |

## Biến môi trường

Ghi trong `HoaDonDienTu.environment.json` hoặc `--env-var key=value` (CLI thắng file).

| Key | Ý nghĩa |
|---|---|
| `userAgentProxy` / `userAgentCrawl` / `userAgentPitw` | UA Chrome/120 (proxy), Chrome/106 (crawler HĐ), Chrome/150 Edg (PITW) |
| `hddt_username` / `hddt_password` | Login TCT |
| `hddt_token` | Bearer sẵn (nếu không login trong lần chạy) |
| `test_mst` | MST public category (mặc định `0100109106`) |
| `guest_nbmst`, `guest_khhdon`, `guest_shdon`, `guest_khmshdon`, `guest_hdon` | Tra cứu guest |
| `guest_tgtttbso` | Tổng tiền (không mẫu 6) |
| `guest_tdlap` | Ngày lập ISO (mẫu 6) |
| `guest_from` | `query` hoặc `sco-query` (tự `sco-query` nếu `khhdon[3]==='M'`) |
| `excel_sort`, `excel_search`, `excel_search_sco` | Cửa sổ excel (1 ngày, format `DD/MM/YYYYTHH:mm:ss`) |
| `tbss_sort`, `tbss_search` | Field `ngay`, không `tdlap` |
| `pitw_search` | `nlap` ISO |
| `page_size` | Mặc định `50` (giống worker) |
| `inv_nbmst`, `inv_khhdon`, `inv_shdon`, `inv_khmshdon` | detail / xml / related / relative |
| `pitw_hsgoc` | XML chứng từ TNCN |
| `pitw_cookie` | Cookie session CQT cho `/api/pitw` |

## File

| File | Vai trò |
|---|---|
| `run.js` | Newman runner, OCR, inject captcha/token/guest, report |
| `generate-collection.js` | Sinh Postman collection v2.1 |
| `HoaDonDienTu.environment.json` | Env mặc định (secret để trống) |
| `lib/hddt-ocr-cli.js` | OCR SVG `tax_invoice_gov` |
| `lib/build-report.js` | HTML + Markdown + JSON report |
| `last-test-report/` | Report lần chạy cuối (git) |

## API TCT đang dùng (mSMI)

Có gọi: `msmi-backend`, `crawl-data-api`, `proxy-request-api`, `msmi-frontend`, `proxy-forwarder-service`.

Không gọi TCT HĐĐT: `msmibatch-job`, `msmi-pdf-service`, `msmi-header-service` (parse excel, không HTTP TCT), `mtax-api` / `msmi-mtax-api` (thuedientu / dichvucong).
