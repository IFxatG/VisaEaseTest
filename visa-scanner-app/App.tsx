import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }} testID="app-root">
        <StatusBar barStyle="dark-content" />
        <View style={{ flex: 1 }}>
          {/* Add your navigation stack or main content here */}
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App; 