/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';

const ImageBackgrounds = () => {
  return (
    <View>
      <ImageBackground
        source={require('@assets/img/login.png')}
        style={{width: '100%', height: '100%'}}
        imageStyle={{opacity: 0.4}}>
        <Text>Inside</Text>
        <Text>设置背景图片</Text>
      </ImageBackground>
    </View>
  );
};

export default ImageBackgrounds;

const styles = StyleSheet.create({});
