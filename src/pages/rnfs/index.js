/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, ScrollView, Button, View, Text} from 'react-native';
import {RNButton} from '../../components';
const Rnfs = ({route, navigation}) => {
  const list = [
    {
      title: '基础 Demo',
      screenName: 'Demo',
    },
    {
      title: 'Basic',
      screenName: 'Basic',
    },
    {
      title: 'File creation',
      screenName: 'fileCreate',
    },
    {
      title: 'File deletion',
      screenName: 'fileDeletion',
    },
    {
      title: 'File upload (Android and IOS only)',
      screenName: 'fileUpload',
    },
    {
      title: 'Rnfs Api测试',
      screenName: 'RnfsApi',
    },
    {
      title: 'react-native-cameraroll',
      screenName: 'cameraroll',
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

export default Rnfs;
