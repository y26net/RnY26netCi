/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {MaskedViewIOS, StyleSheet, Text, View} from 'react-native';

const MaskedViewIOSs = () => {
  return (
    // 决定蒙版的形状
    <MaskedViewIOS
      style={{flex: 1, flexDirection: 'row', height: '100%'}}
      maskElement={
        <View
          style={{
            // 蒙版的效果与其本身透明度相反。先设置整个背景透明，表示完全盖住蒙版底下的元素，不显示出来。
            backgroundColor: 'transparent',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 60,
              // 文字不透明，表示文字部分盖住的元素会显示出来。
              color: 'black',
              fontWeight: 'bold',
            }}>
            Basic Mask
          </Text>
        </View>
      }>
      {/* 被盖在蒙版之下的元素。可以放置任意元素，例如图片等。 */}
      <View style={{flex: 1, height: '100%', backgroundColor: '#324376'}} />
      <View style={{flex: 1, height: '100%', backgroundColor: '#F5DD90'}} />
      <View style={{flex: 1, height: '100%', backgroundColor: '#F76C5E'}} />
    </MaskedViewIOS>
  );
};

export default MaskedViewIOSs;

const styles = StyleSheet.create({});

// Deprecated. Use react-native-community/react-native-masked-view instead.
// 渲染一个带蒙版的视图。蒙版元素在maskElement这个 prop 中指定。
