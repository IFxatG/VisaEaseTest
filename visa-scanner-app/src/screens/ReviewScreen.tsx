import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export const ReviewScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { imageData } = route.params;
  const [formData, setFormData] = useState({
    fullName: '',
    passportNumber: '',
  });

  const handleSubmit = () => {
    if (!formData.fullName || !formData.passportNumber) {
      Alert.alert('Lỗi', 'Vui lòng điền đầy đủ thông tin');
      return;
    }

    navigation.navigate('Result', {
      imageData,
      formData,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: `data:image/jpeg;base64,${imageData}` }}
          style={styles.image}
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Họ và tên</Text>
        <TextInput
          style={styles.input}
          value={formData.fullName}
          onChangeText={(text) => setFormData({ ...formData, fullName: text })}
          placeholder="Nhập họ và tên"
          placeholderTextColor="#666"
        />

        <Text style={styles.label}>Số hộ chiếu</Text>
        <TextInput
          style={styles.input}
          value={formData.passportNumber}
          onChangeText={(text) => setFormData({ ...formData, passportNumber: text })}
          placeholder="Nhập số hộ chiếu"
          placeholderTextColor="#666"
          keyboardType="default"
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Xác nhận</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '100%',
    height: 300,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  formContainer: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 