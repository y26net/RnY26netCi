import React from 'react';
import {StyleSheet, Text, View, ProgressBarAndroid} from 'react-native';

const ProgressBarAndroids = () => {
  return (
    <View style={styles.container}>
      <ProgressBarAndroid />
      <ProgressBarAndroid styleAttr="Horizontal" />
      <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
      <ProgressBarAndroid
        styleAttr="Horizontal"
        indeterminate={false}
        progress={0.5}
      />
      <ProgressBarAndroid
        //   是否显示进度条（默认为true显示）
        // animating={true}
        // 进度条的颜色
        color="#993300"
        // 决定进度条是否要显示一个不确定的进度(注意这个在styleAttr是Horizontal的时候必须是false，并且需要设置progress值。)
        indeterminate={false}
        // 进度条的样式:'Horizontal', 'Normal', 'Small', 'Large', 'Inverse', 'SmallInverse', 'LargeInverse'
        styleAttr="Horizontal"
        progress={0.3}
      />
      <Text>
        Deprecated. Use @react-native-community/progress-bar-android instead.
      </Text>
      <Text>
        封装了Android平台上的ProgressBar的React组件。这个组件可以用来表示应用正在加载或者有些事情正在进行中。
        (IOS可参考ProgressViewIOS)
      </Text>
    </View>
  );
};

export default ProgressBarAndroids;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 10,
  },
});
