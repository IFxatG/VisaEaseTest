import axios from 'axios';
import { Alert } from 'react-native';

const API_URL = 'https://your-api-url.com/api';

const api = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export interface UploadResponse {
  documentId: string;
  fileUrl: string;
  status: string;
}

export interface AnalysisResponse {
  documentId: string;
  analysisResult: {
    clarity: number;
    accuracy: number;
    reliability: number;
  };
  status: string;
}

export const uploadDocument = async (
  fileUri: string,
  fileName: string,
  fileType: string
): Promise<UploadResponse> => {
  try {
    const formData = new FormData();
    formData.append('file', {
      uri: fileUri,
      type: fileType,
      name: fileName,
    });

    const response = await api.post<UploadResponse>('/upload', formData);
    return response.data;
  } catch (error) {
    Alert.alert(
      'Lỗi',
      'Không thể tải tài liệu lên. Vui lòng thử lại.',
      [{ text: 'OK' }]
    );
    throw error;
  }
};

export const analyzeDocument = async (
  documentId: string
): Promise<AnalysisResponse> => {
  try {
    const response = await api.post<AnalysisResponse>('/analyze', {
      documentId,
    });
    return response.data;
  } catch (error) {
    Alert.alert(
      'Lỗi',
      'Không thể phân tích tài liệu. Vui lòng thử lại.',
      [{ text: 'OK' }]
    );
    throw error;
  }
};

export const getAnalysisResult = async (
  documentId: string
): Promise<AnalysisResponse> => {
  try {
    const response = await api.get<AnalysisResponse>(`/getResult/${documentId}`);
    return response.data;
  } catch (error) {
    Alert.alert(
      'Lỗi',
      'Không thể lấy kết quả phân tích. Vui lòng thử lại.',
      [{ text: 'OK' }]
    );
    throw error;
  }
}; 