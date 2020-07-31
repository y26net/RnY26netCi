/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, ScrollView, Button, View, Text} from 'react-native';
import {RNButton} from '../../components';
const Apis = ({route, navigation}) => {
  const list = [
    {
      title: 'AccessibilityInfo 读屏应用',
      screenName: 'AccessibilityInfo',
    },
    {
      title: 'ActionSheetIOS 弹出窗',
      screenName: 'ActionSheetIOS',
    },
    {
      title: 'Alert 弹窗',
      screenName: 'Alert',
    },
    {
      title: 'Animated 动画',
      screenName: 'Animated',
    },
    {
      title: 'AppState 前后台运行',
      screenName: 'AppState',
    },
    {
      title: 'AsyncStorages 持久化存储',
      screenName: 'AsyncStorages',
    },
    {
      title: 'Clipboard 粘贴板',
      screenName: 'Clipboard',
    },
    {
      title: 'DateTimePicker 日期时间组件',
      screenName: 'DateTimePicker',
    },
    {
      title: 'Dimensions 设备屏幕宽高',
      screenName: 'Dimensions',
    },
    {
      title: 'Geolocation 定位',
      screenName: 'Geolocation',
    },
    {
      title: 'ImageEditor 图片编辑',
      screenName: 'ImageEditor',
    },
    {
      title: 'Keyboard 键盘事件',
      screenName: 'Keyboard',
    },
    {
      title: 'Linking 链接交互',
      screenName: 'Linking',
    },
    {
      title: 'PixelRatio 像素密度',
      screenName: 'PixelRatio',
    },
    {
      title: 'Adv 设备',
      screenName: 'Adv',
    },
    {
      title: 'Share 分享',
      screenName: 'Share',
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        {list.map((params, index) => (
          <View key={index}>
            <RNButton {...params} />
            <View style={{padding: 5}} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Apis;
