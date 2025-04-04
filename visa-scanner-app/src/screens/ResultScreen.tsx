import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useRoute } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

export const ResultScreen = () => {
  const route = useRoute();
  const { formData } = route.params;

  // Mock data for demonstration
  const chartData = {
    labels: ['Độ rõ', 'Độ chính xác', 'Độ tin cậy'],
    datasets: [
      {
        data: [85, 92, 88],
      },
    ],
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return '#4CAF50';
    if (score >= 70) return '#FFC107';
    return '#F44336';
  };

  const getScoreStatus = (score: number) => {
    if (score >= 90) return 'Tốt';
    if (score >= 70) return 'Trung bình';
    return 'Kém';
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Kết quả phân tích</Text>
        <Text style={styles.subtitle}>Họ tên: {formData.fullName}</Text>
        <Text style={styles.subtitle}>Số hộ chiếu: {formData.passportNumber}</Text>
      </View>

      <View style={styles.chartContainer}>
        <LineChart
          data={chartData}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={styles.chart}
        />
      </View>

      <View style={styles.scoreContainer}>
        <Text style={styles.scoreTitle}>Điểm số tổng hợp</Text>
        <View style={styles.scoreBox}>
          <Text style={[styles.score, { color: getScoreColor(88) }]}>88</Text>
          <Text style={[styles.scoreStatus, { color: getScoreColor(88) }]}>
            {getScoreStatus(88)}
          </Text>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Chi tiết phân tích</Text>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Độ rõ của ảnh:</Text>
          <Text style={[styles.detailValue, { color: getScoreColor(85) }]}>
            85%
          </Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Độ chính xác:</Text>
          <Text style={[styles.detailValue, { color: getScoreColor(92) }]}>
            92%
          </Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Độ tin cậy:</Text>
          <Text style={[styles.detailValue, { color: getScoreColor(88) }]}>
            88%
          </Text>
        </View>
      </View>
    </ScrollView>
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  chartContainer: {
    padding: 20,
    alignItems: 'center',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  scoreContainer: {
    padding: 20,
    alignItems: 'center',
  },
  scoreTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  scoreBox: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#f5f5f5',
    width: '80%',
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  scoreStatus: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  detailsContainer: {
    padding: 20,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  detailLabel: {
    fontSize: 16,
    color: '#666',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 