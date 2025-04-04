import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const newsData = [
  {
    id: '1',
    title: 'Thay đổi quy định xin visa du lịch Mỹ',
    description: 'Chính phủ Mỹ vừa thông báo những thay đổi mới trong quy trình xin visa du lịch...',
    date: '2024-02-15',
    image: 'https://example.com/news1.jpg',
  },
  {
    id: '2',
    title: 'Hướng dẫn mới về hồ sơ xin visa Schengen',
    description: 'Các quốc gia Schengen đã cập nhật yêu cầu về hồ sơ xin visa...',
    date: '2024-02-14',
    image: 'https://example.com/news2.jpg',
  },
  {
    id: '3',
    title: 'Tăng cường bảo mật thông tin visa',
    description: 'Các quốc gia đang triển khai các biện pháp mới để bảo vệ thông tin visa...',
    date: '2024-02-13',
    image: 'https://example.com/news3.jpg',
  },
];

const renderNewsItem = ({ item }) => (
  <TouchableOpacity style={styles.newsItem}>
    <Image
      source={{ uri: item.image }}
      style={styles.newsImage}
      defaultSource={require('../assets/placeholder.png')}
    />
    <View style={styles.newsContent}>
      <Text style={styles.newsTitle}>{item.title}</Text>
      <Text style={styles.newsDescription} numberOfLines={2}>
        {item.description}
      </Text>
      <Text style={styles.newsDate}>{item.date}</Text>
    </View>
  </TouchableOpacity>
);

export const NewsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tin tức</Text>
        <Text style={styles.subtitle}>Cập nhật mới nhất về visa</Text>
      </View>

      <FlatList
        data={newsData}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  listContainer: {
    padding: 10,
  },
  newsItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    padding: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  newsImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  newsContent: {
    flex: 1,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  newsDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  newsDate: {
    fontSize: 12,
    color: '#999',
  },
}); 