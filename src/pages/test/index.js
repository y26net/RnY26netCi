/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, ScrollView, Button, View, Text} from 'react-native';
import {RNButton} from '../../components';
const Test = ({route, navigation}) => {
  const list = [
    {
      title: 'Flex 布局',
      screenName: 'Flex',
    },
    {
      title: 'FlexDirection 布局',
      screenName: 'FlexDirection',
    },
    {
      title: 'JustifyContent 布局',
      screenName: 'JustifyContent',
    },
    {
      title: 'AlignContent 布局',
      screenName: 'AlignContent',
    },
    {
      title: 'flexWrap 布局',
      screenName: 'flexWrap',
    },
    {
      title: 'AlignItem 布局',
      screenName: 'AlignItem',
    },
    {
      title: 'AlignSelf 布局',
      screenName: 'AlignSelf',
    },
    {
      title: 'RNCamera 相机',
      screenName: 'RNCamera',
    },
    {
      title: 'RNCameraSale 相机',
      screenName: 'RNCameraSale',
    },
    {
      title: 'MYAnimated 动画',
      screenName: 'MYAnimated',
    },
    {
      title: 'CameraRoute 相机',
      screenName: 'CameraRoute',
    },
    {
      title: 'TakePicture 相机',
      screenName: 'TakePicture',
    },
    {
      title: 'ZoomView 相机',
      screenName: 'ZoomView',
    },
    {
      title: 'ReactNativeDemo 相机',
      screenName: 'ReactNativeDemo',
    },
    {
      title: 'cameraRecordScreen 摄像',
      screenName: 'cameraRecordScreen',
    },
    {
      title: 'CameraRollSaveImg 图片保存',
      screenName: 'CameraRollSaveImg',
    },
    {
      title: 'WebSockets wss',
      screenName: 'WebSockets',
    },
    {
      title: 'myLibrary 原生组件',
      screenName: 'myLibrary',
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Button title="Flex start ======================" />
        <View style={{flex: 2}}>
          <Text>xxxxxxxxxx</Text>
        </View>
        <Button title="Flex end ======================" /> */}
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

export default Test;
