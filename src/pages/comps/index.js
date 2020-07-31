/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, ScrollView, Button, View, Text} from 'react-native';
import {RNButton} from '../../components';
const Comps = ({route, navigation}) => {
  const list = [
    {
      title: 'ActivityIndicator',
      screenName: 'ActivityIndicator',
    },
    {
      title: 'Button 按钮',
      screenName: 'Button',
    },
    {
      title: 'DatePickerIOS 时间选择组件（IOS）',
      screenName: 'DatePickerIOS',
    },
    {
      title: 'DrawerLayoutAndroid 抽屉组件（Android）',
      screenName: 'DrawerLayoutAndroid',
    },
    {
      title: 'FlatList 高性能的简单列表组件',
      screenName: 'FlatList',
    },
    {
      title: 'Image 图片组件',
      screenName: 'Image',
    },
    {
      title: 'ImageBackground 图片背景组件',
      screenName: 'ImageBackground',
    },
    {
      title: 'KeyboardAvoidingView 自动根据键盘的位置',
      screenName: 'KeyboardAvoidingView',
    },
    {
      title: 'MaskedViewIOS 渲染一个带蒙版的视图',
      screenName: 'MaskedViewIOS',
    },
    {
      title: 'Modal 模态框',
      screenName: 'Modal',
    },
    {
      title: 'Picker 选择器',
      screenName: 'Picker',
    },
    {
      title: 'PickerIOS 选择器(IOS)',
      screenName: 'PickerIOS',
    },
    {
      title: 'ProgressBarAndroid 进度条(Android)',
      screenName: 'ProgressBarAndroid',
    },
    {
      title: 'RefreshControl 下拉刷新',
      screenName: 'RefreshControl',
    },
    {
      title: 'SafeAreaView “安全”的可视区域内渲染内容',
      screenName: 'SafeAreaView',
    },
    {
      title: 'SectionList 高性能的分组(section)列表组件',
      screenName: 'SectionList',
    },
    {
      title: 'Slider 用于选择一个范围值的组件',
      screenName: 'Slider',
    },
    {
      title: 'StatusBar 控制应用状态栏的组件',
      screenName: 'StatusBar',
    },
    {
      title: 'StyleSheet 跨平台通用的“开关”组件',
      screenName: 'StyleSheet',
    },
    {
      title: 'Switch 选择',
      screenName: 'Switch',
    },
    {
      title: 'Text 文本',
      screenName: 'Text',
    },
    {
      title: 'TextInput 文本输入框',
      screenName: 'TextInput',
    },
    {
      title: 'TouchableHighlight 触摸操作',
      screenName: 'TouchableHighlight',
    },
    {
      title: 'TouchableOpacity 触摸操作',
      screenName: 'TouchableOpacity',
    },
    {
      title: 'notifications 消息推送',
      screenName: 'Notifics',
    },
    {
      title: '极光 消息推送',
      screenName: 'Jgpush',
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

export default Comps;
