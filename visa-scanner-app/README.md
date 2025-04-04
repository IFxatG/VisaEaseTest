# VisaEase - Ứng dụng quét tài liệu xin visa

Ứng dụng di động giúp người dùng quét và phân tích tài liệu xin visa một cách nhanh chóng và chính xác.

## Tính năng chính

- **Quét tài liệu**: Quét tài liệu từ camera hoặc tải lên từ thư viện
- **Phân tích tài liệu**: Tự động phân tích và đánh giá tài liệu
- **Xác thực người dùng**: Đăng nhập/đăng ký với JWT
- **Lưu trữ an toàn**: Lưu trữ tài liệu với mã hóa end-to-end
- **Giao diện thân thiện**: Thiết kế UI/UX hiện đại, dễ sử dụng

## Công nghệ sử dụng

- **Frontend**: React Native, TypeScript
- **Backend**: Node.js, Express
- **Database**: PostgreSQL, Supabase
- **Authentication**: JWT
- **Storage**: Supabase Storage
- **AI/ML**: Google Document AI, Grok 3 API

## Cài đặt

### Yêu cầu

- Node.js (v14 trở lên)
- npm hoặc yarn
- React Native CLI
- Android Studio (cho Android)
- Xcode (cho iOS, chỉ macOS)

### Cài đặt dependencies

```bash
npm install
```

### Chạy ứng dụng

#### Android

```bash
npm run android
```

#### iOS

```bash
cd ios
pod install
cd ..
npm run ios
```

## Cấu trúc dự án

```
visa-scanner-app/
├── src/
│   ├── components/       # Các component tái sử dụng
│   ├── screens/          # Các màn hình chính
│   ├── services/         # Các service (API, auth)
│   ├── navigation/       # Cấu hình navigation
│   ├── hooks/            # Custom hooks
│   ├── config/           # Cấu hình (Figma, API)
│   └── App.tsx           # Component chính
├── android/              # Code Android native
├── ios/                  # Code iOS native
├── assets/               # Hình ảnh, font
├── package.json          # Dependencies
└── README.md             # Tài liệu dự án
```

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
