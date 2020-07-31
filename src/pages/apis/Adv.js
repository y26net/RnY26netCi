/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  PixelRatio,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import Resolution from '@assets/js/Resolution';

const Adv = () => {
  const dp2px = (dp) => PixelRatio.getPixelSizeForLayoutSize(dp);
  const px2dp = (px) => PixelRatio.roundToNearestPixel(px);
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);
  let pixelRatio = PixelRatio.get();
  function scaleSizeW(size) {
    // var scaleWidth = (size * screenWidth) / 750;
    // size = Math.round(scaleWidth / pixelRatio + 0.5);
    // return size;
    // return (size * screenWidth) / 750 / pixelRatio;
    // return PixelRatio.roundToNearestPixel((screenWidth / 750) * size);
    // return size;
    return (size * screenWidth) / 750;
  }
  React.useEffect(() => {
    console.log(PixelRatio.get(), PixelRatio);
  }, []);
  return (
    // <SafeAreaView>
    //   <ScrollView>
    <Resolution.FixWidthView
      style={{flex: 0, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Text>Adv</Text>
        <Text>screenWidth:{screenWidth}</Text>
        <Text>screenHeight:{screenHeight}</Text>
        <View
          style={{
            width: 750,
            height: 100,
            backgroundColor: '#009933',
          }}
        />
        <View
          style={{
            width: scaleSizeW(700),
            height: 100,
            backgroundColor: '#ff0000',
          }}
        />
        <Image
          source={require('@assets/img/750.jpg')}
          // resizeMode="stretch"
          //   style={{width: scaleSizeW(750)}}
        />
      </View>
    </Resolution.FixWidthView>
    //   </ScrollView>
    // </SafeAreaView>
  );
};

export default Adv;

const styles = StyleSheet.create({});
