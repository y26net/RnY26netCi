import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

const Dimensionss = () => {
  // {"fontScale": 1, "height": 776, "scale": 3, "width": 392}
  //   const {height, width} = Dimensions.get('window');
  const {height, width} = Dimensions.get('screen');
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);
  console.log(Dimensions.get('screen'));
  return (
    <View>
      <Text>Dimensions</Text>
      <Text>
        width:{screenWidth}=>{width}
      </Text>
      <Text>
        height:{screenHeight}=>{height}
      </Text>
    </View>
  );
};

export default Dimensionss;

const styles = StyleSheet.create({});
