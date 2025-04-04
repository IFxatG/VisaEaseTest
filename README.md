# VisaEase - Hệ thống quét tài liệu xin visa

Hệ thống quét và phân tích tài liệu xin visa thông minh, bao gồm ứng dụng di động và API backend.

## Cấu trúc dự án

Dự án được chia thành hai phần chính:

### 1. Ứng dụng di động (visa-scanner-app)

Ứng dụng React Native giúp người dùng quét và phân tích tài liệu xin visa.

- Quét tài liệu từ camera hoặc thư viện
- Phân tích tài liệu tự động
- Xác thực người dùng với JWT
- Lưu trữ tài liệu an toàn
- Giao diện người dùng thân thiện

[Xem chi tiết về ứng dụng di động](./visa-scanner-app/README.md)

### 2. API Backend (visa-scanner-api)

Backend API cung cấp các dịch vụ cho ứng dụng di động.

- Xác thực và phân quyền
- Xử lý và phân tích tài liệu
- Lưu trữ dữ liệu
- Bảo mật end-to-end

[Xem chi tiết về API backend](./visa-scanner-api/README.md)

## Cài đặt

### Yêu cầu

- Node.js (v14 trở lên)
- npm hoặc yarn
- React Native CLI
- Android Studio (cho Android)
- Xcode (cho iOS, chỉ macOS)
- PostgreSQL
- Supabase

### Cài đặt dependencies

```bash
# Cài đặt dependencies cho ứng dụng di động
cd visa-scanner-app
npm install

# Cài đặt dependencies cho API backend
cd ../visa-scanner-api
npm install
```

### Chạy ứng dụng

#### Backend API

```bash
cd visa-scanner-api
npm run dev
```

#### Ứng dụng di động

```bash
cd visa-scanner-app
npm run android  # Cho Android
npm run ios      # Cho iOS
```

## Công nghệ sử dụng

- **Frontend**: React Native, TypeScript
- **Backend**: Node.js, Express
- **Database**: PostgreSQL, Supabase
- **Authentication**: JWT
- **Storage**: Supabase Storage
- **AI/ML**: Google Document AI, Grok 3 API

## Đóng góp

1. Fork dự án
2. Tạo branch mới (`git checkout -b feature/amazing-feature`)
3. Commit thay đổi (`git commit -m 'Add some amazing feature'`)
4. Push lên branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

## Giấy phép

Dự án được phân phối dưới giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.

## Liên hệ

- Email: nghia.hhtn@gmail.com
- Website: https://github.com/hht-nghia/visa-scanner-app
