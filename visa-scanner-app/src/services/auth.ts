import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const API_URL = 'https://your-api-url.com/api';

interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

const TOKEN_KEY = '@visa_ease_token';

// Tạo axios instance với interceptor
const api = axios.create({
  baseURL: API_URL,
  timeout: 30000,
});

// Thêm token vào header cho mọi request
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Xử lý lỗi 401 (Unauthorized)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      await logout();
    }
    return Promise.reject(error);
  }
);

export const login = async (email: string, password: string): Promise<void> => {
  try {
    // Bypass authentication for testing
    const mockToken = 'test-token-123';
    await AsyncStorage.setItem(TOKEN_KEY, mockToken);
  } catch (error) {
    throw error;
  }
};

export const logout = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    console.error('Error logging out:', error);
  }
};

export const getToken = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(TOKEN_KEY);
  } catch (error) {
    console.error('Error getting token:', error);
    return null;
  }
};

export const isAuthenticated = async (): Promise<boolean> => {
  const token = await getToken();
  return !!token;
}; 