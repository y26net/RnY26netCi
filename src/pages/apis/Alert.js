import React from 'react';
import {StyleSheet, Text, View, Alert, Button} from 'react-native';

const Alerts = () => {
  const onPress = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };
  return (
    <View>
      {/* <Text onPress={onPress}>Alert</Text> */}
      <Button onPress={onPress} title="Alert" />
      <Text>启动一个提示对话框，包含对应的标题和信息。</Text>
      <Text>
        你还可以指定一系列的按钮，点击对应的按钮会调用对应的 onPress
        回调并且关闭提示框。默认情况下，对话框会仅有一个'确定'按钮。
      </Text>
      <Text>
        本接口可以在 iOS 和 Android
        上显示一个静态的提示框。如果要在显示提示框的同时接受用户输入一些信息，那你可能需要AlertIOS。
      </Text>
      <Text>
        在 Android
        上最多能指定三个按钮，这三个按钮分别具有“稍候再说”、“取消”和“确定”的概念：
      </Text>
    </View>
  );
};

export default Alerts;

const styles = StyleSheet.create({});
