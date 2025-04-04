import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LoadingOverlay } from '../components/LoadingOverlay';
import { login } from '../services/auth';
import { useFigma } from '../hooks/useFigma';
import { FIGMA_NODES } from '../config/figma';

export const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { data: figmaData, loading: figmaLoading } = useFigma(FIGMA_NODES.LOGIN_SCREEN);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin');
      return;
    }

    try {
      setLoading(true);
      await login(email, password);
      navigation.replace('Home');
    } catch (error) {
      Alert.alert(
        'Lỗi đăng nhập',
        'Email hoặc mật khẩu không chính xác',
        [{ text: 'OK' }]
      );
    } finally {
      setLoading(false);
    }
  };

  if (figmaLoading) {
    return (
      <View style={styles.container}>
        <LoadingOverlay visible={true} message="Đang tải giao diện..." />
      </View>
    );
  }

  const styles = figmaData ? {
    container: {
      flex: 1,
      backgroundColor: figmaData.styles.container?.backgroundColor || '#FFFFFF',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      padding: figmaData.styles.content?.padding || 20,
    },
    title: {
      fontSize: figmaData.styles.title?.fontSize || 32,
      fontWeight: figmaData.styles.title?.fontWeight || 'bold',
      color: figmaData.styles.title?.color || '#007AFF',
      textAlign: 'center',
      marginBottom: figmaData.styles.title?.margin || 8,
    },
    subtitle: {
      fontSize: figmaData.styles.subtitle?.fontSize || 16,
      color: figmaData.styles.subtitle?.color || '#666666',
      textAlign: 'center',
      marginBottom: figmaData.styles.subtitle?.margin || 32,
    },
    form: {
      gap: figmaData.styles.form?.gap || 16,
    },
    input: {
      backgroundColor: figmaData.styles.input?.backgroundColor || '#F5F5F5',
      borderRadius: figmaData.styles.input?.borderRadius || 10,
      padding: figmaData.styles.input?.padding || 16,
      fontSize: figmaData.styles.input?.fontSize || 16,
    },
    loginButton: {
      backgroundColor: figmaData.styles.loginButton?.backgroundColor || '#007AFF',
      borderRadius: figmaData.styles.loginButton?.borderRadius || 10,
      padding: figmaData.styles.loginButton?.padding || 16,
      alignItems: 'center',
      marginTop: figmaData.styles.loginButton?.margin || 8,
    },
    loginButtonText: {
      color: figmaData.styles.loginButtonText?.color || '#FFFFFF',
      fontSize: figmaData.styles.loginButtonText?.fontSize || 16,
      fontWeight: figmaData.styles.loginButtonText?.fontWeight || 'bold',
    },
  } : defaultStyles;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <LoadingOverlay visible={loading} message="Đang đăng nhập..." />
      
      <View style={styles.content}>
        <Text style={styles.title}>VisaEase</Text>
        <Text style={styles.subtitle}>Đăng nhập để tiếp tục</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007AFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 32,
  },
  form: {
    gap: 16,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 16,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 