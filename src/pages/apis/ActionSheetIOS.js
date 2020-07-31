import React from 'react';
import {StyleSheet, Text, View, ActionSheetIOS, Platform} from 'react-native';

const ActionSheetIOSS = () => {
  //   React.useEffect(() => {
  //     ActionSheetIOS.showActionSheetWithOptions(
  //       {
  //         options: ['取消', '删除'],
  //         destructiveButtonIndex: 1,
  //         cancelButtonIndex: 0,
  //       },
  //       (buttonIndex) => {
  //         if (buttonIndex === 1) {
  //           /* 当接收到的索引为1，即点击了删除按钮时，执行对应操作 */
  //         }
  //       },
  //     );
  //   }, []);
  const onPressSheet = () => {
    // showShareActionSheetWithOptions
    if (Platform.OS === 'android') {
      alert('很抱歉只适用于IOS');
    } else {
      ActionSheetIOS.showShareActionSheetWithOptions(
        {
          url: 'http://www.baidu.com',
          message: '分享百度格尼',
          subject: '信息公告',
        },
        (failureCallback) => {
          console.log('failureCallback');
        },
        (successCallback) => {
          console.log('successCallback');
        },
      );
    }
  };
  const onPress = () => {
    if (Platform.OS === 'android') {
      //如果是android平台
      alert('很抱歉只适用于IOS');
    } else {
      console.log(123);
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['取消', '删除'],
          destructiveButtonIndex: 1,
          cancelButtonIndex: 0,
        },
        (buttonIndex) => {
          if (buttonIndex === 1) {
            alert('点击了删除按钮');
            /* 当接收到的索引为1，即点击了删除按钮时，执行对应操作 */
          }
        },
      );
    }
  };
  return (
    <View>
      <Text onPress={onPress}>ActionSheetIOS</Text>
      <Text onPress={onPressSheet}>showShareActionSheetWithOptions</Text>

      <Text>
        在 iOS 设备上显示一个 ActionSheet
        弹出框，其中options参数为一个对象，其属性必须包含以下一项或多项：
      </Text>
      <Text>options （字符串数组） - 一组按钮的文字（必选）</Text>
      <Text>
        cancelButtonIndex （整型） - 取消性质的按钮在options中的位置（索引）
      </Text>
      <Text>
        destructiveButtonIndex （整型） -
        删除性质的按钮在options中的位置（索引）
      </Text>
      <Text>title （字符串） - 弹出框顶部的标题</Text>
      <Text>message （字符串） - 弹出框顶部标题下方的信息</Text>
      <Text>
        anchor (number) - the node to which the action sheet should be anchored
        (used for iPad)
      </Text>
      <Text>tintColor (字符串) - 指定删除性质的按钮的文字的颜色</Text>
      <Text>'callback'函数则仅接受一个参数，即所点击按钮的索引。</Text>
    </View>
  );
};

export default ActionSheetIOSS;

const styles = StyleSheet.create({});
