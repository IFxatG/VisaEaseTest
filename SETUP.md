# Hướng Dẫn Cài Đặt VisaEase

## 1. Cài Đặt Môi Trường Phát Triển

### 1.1. Cài đặt Node.js
1. Truy cập [Node.js Official Website](https://nodejs.org/)
2. Tải và cài đặt phiên bản LTS mới nhất (v18.x trở lên)
3. Kiểm tra cài đặt:
```bash
node --version
npm --version
```

### 1.2. Cài đặt React Native CLI
```bash
npm install -g react-native-cli
```

### 1.3. Cài đặt Android Studio (cho phát triển Android)
1. Tải và cài đặt [Android Studio](https://developer.android.com/studio)
2. Trong Android Studio, cài đặt:
   - Android SDK
   - Android SDK Platform
   - Android Virtual Device
3. Thêm các biến môi trường:
```bash
# Windows
setx ANDROID_HOME "%LOCALAPPDATA%\Android\Sdk"
setx PATH "%PATH%;%LOCALAPPDATA%\Android\Sdk\platform-tools"

# macOS/Linux
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### 1.4. Cài đặt Xcode (cho phát triển iOS, chỉ macOS)
1. Tải và cài đặt [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) từ App Store
2. Cài đặt Command Line Tools:
```bash
xcode-select --install
```

## 2. Cài Đặt Frontend (visa-scanner-app)

### 2.1. Khởi tạo dự án
```bash
# Tạo dự án mới
npx react-native init visa-scanner-app --template react-native-template-typescript

# Di chuyển vào thư mục dự án
cd visa-scanner-app
```

### 2.2. Cài đặt dependencies
```bash
# Cài đặt các thư viện cần thiết
npm install react-native-document-scanner-plugin
npm install @react-native-async-storage/async-storage
npm install axios
npm install @react-navigation/native
npm install @react-navigation/stack
npm install react-native-gesture-handler
npm install react-native-safe-area-context
npm install react-native-screens
```

### 2.3. Cấu hình Android
1. Mở file `android/app/build.gradle` và thêm:
```gradle
android {
    defaultConfig {
        minSdkVersion 21
        targetSdkVersion 33
    }
}
```

2. Thêm quyền camera trong `android/app/src/main/AndroidManifest.xml`:
```xml
<uses-permission android:name="android.permission.CAMERA" />
```

### 2.4. Cấu hình iOS
1. Thêm quyền camera trong `ios/visa-scanner-app/Info.plist`:
```xml
<key>NSCameraUsageDescription</key>
<string>Ứng dụng cần quyền truy cập camera để quét tài liệu</string>
```

## 3. Cài Đặt Backend (visa-scanner-api)

### 3.1. Khởi tạo dự án
```bash
# Tạo thư mục backend
mkdir visa-scanner-api
cd visa-scanner-api

# Khởi tạo dự án Node.js
npm init -y
```

### 3.2. Cài đặt dependencies
```bash
# Cài đặt các thư viện cần thiết
npm install express cors dotenv @google-cloud/documentai multer axios helmet express-rate-limit
npm install -D typescript @types/node @types/express @types/cors @types/multer ts-node nodemon
```

### 3.3. Cấu hình TypeScript
Tạo file `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "es2018",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## 4. Cấu Hình Google Document AI SDK

### 4.1. Tạo Google Cloud Project
1. Truy cập [Google Cloud Console](https://console.cloud.google.com/)
2. Tạo project mới hoặc chọn project hiện có
3. Kích hoạt Document AI API
4. Tạo service account và tải file credentials JSON

### 4.2. Cấu hình credentials
1. Tạo file `visa-scanner-api/src/config/google-cloud.json` và copy nội dung credentials vào
2. Thêm file credentials vào `.gitignore`:
```
src/config/google-cloud.json
```

### 4.3. Tạo file cấu hình Google Cloud
```typescript
// visa-scanner-api/src/config/google-cloud.ts
import { DocumentProcessorServiceClient } from '@google-cloud/documentai';

const credentials = require('./google-cloud.json');

export const documentAI = new DocumentProcessorServiceClient({
  credentials,
  projectId: credentials.project_id,
  location: 'us', // hoặc region phù hợp
});

export const processorName = `projects/${credentials.project_id}/locations/us/processors/your-processor-id`;
```

## 5. Cấu Hình Grok 3 API

### 5.1. Tạo file cấu hình Grok API
```typescript
// visa-scanner-api/src/config/grok-api.ts
import axios from 'axios';

const GROK_API_KEY = process.env.GROK_API_KEY;
const GROK_API_URL = 'https://api.grok.ai/v1';

export const grokAPI = axios.create({
  baseURL: GROK_API_URL,
  headers: {
    'Authorization': `Bearer ${GROK_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export const analyzeDocument = async (documentData: any) => {
  try {
    const response = await grokAPI.post('/analyze', documentData);
    return response.data;
  } catch (error) {
    console.error('Error analyzing document:', error);
    throw error;
  }
};
```

### 5.2. Cấu hình biến môi trường
Tạo file `.env` trong thư mục `visa-scanner-api`:
```env
GROK_API_KEY=your-grok-api-key
GOOGLE_CLOUD_PROJECT_ID=your-project-id
GOOGLE_CLOUD_LOCATION=us
GOOGLE_CLOUD_PROCESSOR_ID=your-processor-id
```

## 6. Kiểm Tra Cài Đặt

### 6.1. Chạy Frontend
```bash
cd visa-scanner-app

# Cho Android
npm run android

# Cho iOS
cd ios && pod install && cd ..
npm run ios
```

### 6.2. Chạy Backend
```bash
cd visa-scanner-api
npm run dev
```

## Lưu ý Bảo Mật
- Không bao giờ commit file credentials hoặc .env lên git
- Sử dụng biến môi trường cho các thông tin nhạy cảm
- Thường xuyên rotate API keys
- Kiểm tra quyền truy cập của service account

## Xử Lý Lỗi Thường Gặp
1. Nếu gặp lỗi khi cài đặt dependencies:
```bash
npm cache clean --force
rm -rf node_modules
npm install
```

2. Nếu gặp lỗi với React Native CLI:
```bash
npm uninstall -g react-native-cli
npm install -g @react-native-community/cli
```

3. Nếu gặp lỗi với iOS pods:
```bash
cd ios
pod deintegrate
pod install
cd ..
``` 