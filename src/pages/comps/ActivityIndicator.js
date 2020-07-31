import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export default App = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#0000ff" />
    <ActivityIndicator size="small" color="#00ff00" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
