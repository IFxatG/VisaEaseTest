# Hướng dẫn đóng góp cho VisaEase

Cảm ơn bạn đã quan tâm đến việc đóng góp cho dự án VisaEase! Dưới đây là một số hướng dẫn để giúp bạn bắt đầu.

## Quy trình đóng góp

1. **Fork dự án**: Tạo một bản sao của dự án trên tài khoản GitHub của bạn.

2. **Clone repository**: Clone repository đã fork về máy local của bạn.
   ```bash
   git clone https://github.com/YOUR_USERNAME/visa-scanner-app.git
   cd visa-scanner-app
   ```

3. **Tạo branch mới**: Tạo một branch mới cho tính năng hoặc sửa lỗi của bạn.
   ```bash
   git checkout -b feature/your-feature-name
   # hoặc
   git checkout -b fix/your-fix-name
   ```

4. **Thực hiện thay đổi**: Thực hiện các thay đổi cần thiết.

5. **Commit thay đổi**: Commit các thay đổi của bạn với thông điệp rõ ràng.
   ```bash
   git commit -m "Add: mô tả ngắn gọn về thay đổi"
   ```

6. **Push lên GitHub**: Đẩy branch của bạn lên GitHub.
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Tạo Pull Request**: Tạo Pull Request từ branch của bạn đến branch `develop` của repository gốc.

## Quy tắc code

- **TypeScript**: Sử dụng TypeScript cho tất cả các file code mới.
- **ESLint**: Tuân thủ các quy tắc ESLint đã cấu hình.
- **Prettier**: Sử dụng Prettier để định dạng code.
- **Testing**: Thêm test cho các tính năng mới.

## Cấu trúc commit

Chúng ta sử dụng cấu trúc commit sau:

- `Add:` - Thêm tính năng mới
- `Fix:` - Sửa lỗi
- `Update:` - Cập nhật tính năng hiện có
- `Refactor:` - Tái cấu trúc code
- `Docs:` - Cập nhật tài liệu
- `Style:` - Thay đổi về style (formatting, etc.)
- `Test:` - Thêm hoặc sửa test
- `Chore:` - Cập nhật build process, auxiliary tools, libraries, etc.

## Báo cáo lỗi

Khi báo cáo lỗi, vui lòng cung cấp thông tin sau:

- Mô tả chi tiết về lỗi
- Các bước để tái hiện lỗi
- Môi trường (hệ điều hành, phiên bản React Native, thiết bị)
- Screenshot (nếu có)

## Liên hệ

Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ qua email: your.email@example.com 