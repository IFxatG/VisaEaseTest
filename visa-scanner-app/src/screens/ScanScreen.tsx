import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DocumentScanner from 'react-native-document-scanner-plugin';
import { LoadingOverlay } from '../components/LoadingOverlay';
import { uploadDocument, analyzeDocument } from '../services/api';

export const ScanScreen = () => {
  const navigation = useNavigation();
  const [scanning, setScanning] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');

  const scanDocument = async () => {
    try {
      setScanning(true);
      const { scannedImages } = await DocumentScanner.scanDocument({
        cropperToolbarTitle: 'Căn chỉnh tài liệu',
        letUserAdjustCrop: true,
        maxNumDocuments: 1,
        responseType: 'base64',
      });

      if (scannedImages.length > 0) {
        setLoading(true);
        setLoadingMessage('Đang tải tài liệu lên...');

        // Upload document
        const uploadResult = await uploadDocument(
          scannedImages[0],
          'document.jpg',
          'image/jpeg'
        );

        setLoadingMessage('Đang phân tích tài liệu...');

        // Analyze document
        const analysisResult = await analyzeDocument(uploadResult.documentId);

        setLoading(false);
        navigation.navigate('Review', {
          imageData: scannedImages[0],
          documentId: uploadResult.documentId,
        });
      }
    } catch (error) {
      setScanning(false);
      setLoading(false);
      Alert.alert(
        'Lỗi',
        'Không thể quét tài liệu. Vui lòng thử lại.',
        [{ text: 'OK' }]
      );
    }
  };

  return (
    <View style={styles.container}>
      <LoadingOverlay visible={loading} message={loadingMessage} />
      
      <View style={styles.overlay}>
        <Text style={styles.instruction}>
          Căn chỉnh tài liệu trong khung hình
        </Text>
        <Text style={styles.subInstruction}>
          Đảm bảo tài liệu được đặt phẳng và đủ ánh sáng
        </Text>
      </View>

      <View style={styles.cameraFrame} />

      <TouchableOpacity
        style={[styles.scanButton, scanning && styles.scanningButton]}
        onPress={scanDocument}
        disabled={scanning}
      >
        <Text style={styles.scanButtonText}>
          {scanning ? 'Đang quét...' : 'Bắt đầu quét'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 20,
    alignItems: 'center',
  },
  instruction: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subInstruction: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  cameraFrame: {
    position: 'absolute',
    top: 206,
    left: 37.5,
    width: 300,
    height: 400,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderStyle: 'dashed',
    borderRadius: 12,
  },
  scanButton: {
    position: 'absolute',
    bottom: 40,
    left: 37.5,
    width: 300,
    height: 60,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanningButton: {
    backgroundColor: '#666666',
  },
  scanButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 