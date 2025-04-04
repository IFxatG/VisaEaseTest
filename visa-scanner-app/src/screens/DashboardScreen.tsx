import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const summaryData = [
  {
    id: '1',
    title: 'Tổng số tài liệu',
    value: '12',
    icon: 'description',
    color: '#007AFF',
  },
  {
    id: '2',
    title: 'Đã xử lý',
    value: '8',
    icon: 'check-circle',
    color: '#4CAF50',
  },
  {
    id: '3',
    title: 'Đang xử lý',
    value: '3',
    icon: 'hourglass-empty',
    color: '#FFC107',
  },
  {
    id: '4',
    title: 'Lỗi',
    value: '1',
    icon: 'error',
    color: '#F44336',
  },
];

const renderSummaryCard = ({ item }) => (
  <View style={[styles.card, { backgroundColor: item.color + '20' }]}>
    <Icon name={item.icon} size={32} color={item.color} />
    <Text style={styles.cardValue}>{item.value}</Text>
    <Text style={styles.cardTitle}>{item.title}</Text>
  </View>
);

export const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Thống kê</Text>
        <Text style={styles.subtitle}>Tổng quan về tài liệu của bạn</Text>
      </View>

      <FlatList
        data={summaryData}
        renderItem={renderSummaryCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
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
  card: {
    width: (width - 40) / 2,
    margin: 5,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 8,
  },
  cardTitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
}); 