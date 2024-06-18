# Hướng Dẫn Sử Dụng Callbike-client-app

## Giới Thiệu
Dự án này sử dụng các dịch vụ mã nguồn mở như OpenStreetMap, OSRM API, OpenCage API,... thay thế cho các dịch vụ như Google API, Mapbox API.

Callbike-client-app cho phép đặt xe, kết nối hành khách với tài xế. Ứng dụng được triển khai với các chức năng như:

- Đăng nhập
- Đăng ký tài khoản
- Chọn xe
- Tính toán lộ trình
- Thời gian dự kiến
- Nhắn tin thời gian thực với tài xế
- Đánh giá chuyến đi
- Thanh toán trực tuyến (không cập nhật trong bản này)

Mình sử dụng Expo framework để phát triển ứng dụng này. Trong tài liệu này, mình sẽ trình bày cấu trúc thư mục theo định tuyến tệp được Expo gợi ý.

## Bắt Đầu Dự Án

### Yêu Cầu Hệ Thống:
- Node.js (LTS)
- macOS, Windows (Powershell và WSL 2), hoặc Linux
- Expo go SDK 51

### Tải Về Dự Án
1. **Clone Dự Án**
   ```bash
   git clone https://github.com/DcViet/callbike-client.git
   // chuyển sang nhánh client-app
   git checkout client-app
   ```

2. **Cài Đặt Dependencies**
   ```bash
   npm install
   ```

3. **Cấu Hình Biến Môi Trường**
   - Tạo file `.env` trong thư mục gốc và cấu hình các biến môi trường cần thiết như `PORT`, `DATABASE_URL`, `JWT_SECRET`, v.v.

## Khởi Chạy Ứng Dụng

Bạn có thể xem trực tiếp ứng dụng từ thiết bị của bạn thông qua Expo Go.

### 1. Khởi Động Server Phát Triển
Để khởi động server phát triển, chạy lệnh sau:
```bash
npx expo start
```

### 2. Mở Ứng Dụng Trên Thiết Bị
Sau khi chạy lệnh trên, bạn sẽ thấy mã QR xuất hiện trong terminal. Quét mã QR này để mở ứng dụng trên thiết bị của bạn.

- Nếu bạn sử dụng Android Emulator hoặc iOS Simulator, bạn có thể nhấn `a` hoặc `i` để mở ứng dụng.

**Lưu Ý:** Đảm bảo rằng máy tính và thiết bị của bạn đang sử dụng cùng một mạng Wi-Fi. Nếu vẫn không hoạt động, có thể do cấu hình router — điều này thường gặp trên mạng công cộng. Bạn có thể khắc phục bằng cách chọn loại kết nối Tunnel khi khởi động server phát triển, sau đó quét lại mã QR.

```bash
npx expo start --tunnel
```
Sử dụng loại kết nối Tunnel sẽ làm cho ứng dụng tải lại chậm hơn so với LAN hoặc Local. Vì vậy, nên tránh sử dụng Tunnel khi có thể. Bạn có thể cài đặt và sử dụng emulator hoặc simulator để tăng tốc phát triển nếu cần sử dụng Tunnel để truy cập máy tính từ thiết bị khác trên mạng của bạn.

### 3. Thử nghiệm Ứng Dụng

![Cấu trúc thư mục](./folder-structure.png)

## Kết Luận
Với các bước trên, bạn đã có thể bắt đầu phát triển và thử nghiệm Callbike-client-app.

Ứng dụng này mình đã đăng kí các tài khoản cá nhân để có thể sử dụng API, bạn có thể thay đổi các key API theo tài khoản riêng của bạn. Tuy nhiên để hỗ trợ cho bạn trải nghiệm ứng dụng thuận tiện, mình đang dùng các key API của mình, mong bạn có thể học thêm điều gì mới mẻ trên hành trình của bạn.

<a href="https://www.buymeacoffee.com/tranducviez" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/arial-yellow.png" alt="Tặng ly cà phê" style="height: 60px !important;width: 217px !important;" ></a>
