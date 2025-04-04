import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

const embassyLocations = [
  {
    id: '1',
    title: 'Đại sứ quán Mỹ',
    coordinate: {
      latitude: 21.0285,
      longitude: 105.8542,
    },
    description: '170 Ngọc Khánh, Ba Đình, Hà Nội',
  },
  {
    id: '2',
    title: 'Đại sứ quán Anh',
    coordinate: {
      latitude: 21.0333,
      longitude: 105.8167,
    },
    description: 'Central Building, 31 Hai Ba Trung, Hoan Kiem, Hanoi',
  },
  {
    id: '3',
    title: 'Đại sứ quán Pháp',
    coordinate: {
      latitude: 21.0333,
      longitude: 105.8167,
    },
    description: '57 Tran Hung Dao, Hoan Kiem, Hanoi',
  },
];

export const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 21.0285,
          longitude: 105.8542,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation
        showsMyLocationButton
        showsBuildings
        showsTraffic
        showsIndoors
      >
        {embassyLocations.map((location) => (
          <Marker
            key={location.id}
            coordinate={location.coordinate}
            title={location.title}
            description={location.description}
          >
            <View style={styles.markerContainer}>
              <Icon name="location-on" size={40} color="#007AFF" />
            </View>
          </Marker>
        ))}
      </MapView>

      <View style={styles.overlay}>
        <Text style={styles.title}>Đại sứ quán</Text>
        <Text style={styles.subtitle}>Tìm đường đến đại sứ quán</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton}>
          <Icon name="my-location" size={24} color="#007AFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Icon name="layers" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width,
    height,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
  controls: {
    position: 'absolute',
    right: 20,
    bottom: 40,
  },
  controlButton: {
    backgroundColor: '#fff',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  markerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 