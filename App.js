import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import TelaLogin from './TelaLogin';

export default function App() {
  return (
    <View style={styles.container}>
      <TelaLogin />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

