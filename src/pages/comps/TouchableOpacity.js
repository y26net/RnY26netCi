import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const TouchableOpacitys = () => {
  const [count, setCount] = React.useState(0);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count + 1)}>
        <Text> Touch Here </Text>
      </TouchableOpacity>
      <View style={[styles.countContainer]}>
        <Text style={[styles.countText]}>{count !== 0 ? count : null}</Text>
      </View>
    </View>
  );
};

export default TouchableOpacitys;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
});
