# VisaEase - Hệ thống quét tài liệu xin visa

Hệ thống quét và phân tích tài liệu xin visa thông minh, bao gồm ứng dụng di động và API backend.

## Tính Năng Mới

- Hệ thống logging toàn diện với Winston
- Giám sát lỗi với Sentry
- Rate limiting cho API
- Sao lưu tự động với AWS S3
- CI/CD pipeline với GitHub Actions
- Testing đầy đủ với Jest
- Bảo mật nâng cao

## Cài Đặt Nhanh

```bash
# Clone repository
git clone https://github.com/hht-nghia/visa-scanner-app.git
cd visa-scanner-app

# Chạy script cài đặt
./setup.sh
```

## Cấu Hình Môi Trường

1. Sao chép file môi trường mẫu:
```bash
cp visa-scanner-api/.env.example visa-scanner-api/.env
```

2. Cập nhật các biến môi trường trong file `.env`:
- Cấu hình Supabase
- Cấu hình JWT
- Cấu hình Google Document AI
- Cấu hình AWS S3
- Cấu hình Sentry
- Các cấu hình khác

## Khởi Chạy Ứng Dụng

### Backend API

```bash
cd visa-scanner-api
npm run dev
```

### Ứng Dụng Di Động

```bash
cd visa-scanner-app
# Cho Android
npm run android
# Cho iOS
npm run ios
```

## Testing

```bash
# Test Backend
cd visa-scanner-api
npm test

# Test Frontend
cd visa-scanner-app
npm test
```

## Monitoring và Logging

- Logs được lưu trong thư mục `visa-scanner-api/logs`
- Xem lỗi trong Sentry Dashboard
- Kiểm tra metrics trong AWS CloudWatch

## Backup

Backup tự động chạy hàng ngày và lưu trữ trong AWS S3. Để chạy backup thủ công:

```bash
cd visa-scanner-api
npm run backup
```

## CI/CD

- Push vào nhánh `develop` để trigger test
- Push vào nhánh `main` để trigger build và deploy

## Đóng Góp

1. Fork dự án
2. Tạo branch mới (`git checkout -b feature/amazing-feature`)
3. Commit thay đổi (`git commit -m 'Add some amazing feature'`)
4. Push lên branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

## Giấy Phép

Dự án được phân phối dưới giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.

## Liên Hệ

- Email: nghia.hhtn@gmail.com
- Website: https://github.com/hht-nghia/visa-scanner-app
