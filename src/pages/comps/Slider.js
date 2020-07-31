import React from 'react';
import {StyleSheet, Text, View, Slider} from 'react-native';

const Sliders = () => {
  const onSlidingComplete = (v) => {
    console.log('onSlidingComplete。。。。', v);
  };
  const onValueChange = () => {
    console.log('onValueChange。。。。');
  };
  return (
    <View>
      <Text>Slider 用于选择一个范围值的组件</Text>
      <Text>Deprecated. Use @react-native-community/slider instead.</Text>
      <Slider
        style={{height: 30, backgroundColor: '#ffff00'}}
        // 如果为true，用户就不能移动滑块。默认为false
        disabled={false}
        // 滑块的最大值（当滑块滑到最右端时表示的值）。默认为1。
        maximumValue={100}
        // 滑块左侧轨道的颜色。在iOS上默认为一个蓝色的渐变色。
        minimumTrackTintColor="blue"
        // 滑块右侧轨道的颜色。在iOS上默认为一个灰色的渐变色。
        maximumTrackTintColor="red"
        // 滑块的最小值（当滑块滑到最左端时表示的值）。默认为0。
        minimumValue={18}
        // 用户松开滑块的时候调用此回调，无论值是否变化。回调值为当前值。
        onSlidingComplete={onSlidingComplete}
        // 在用户拖动滑块的过程中不断调用此回调
        onValueChange={onValueChange}
        // 滑块的步长（拖动变化的最小单元）。这个值应该在0到(maximumValue - minimumValue)之间。默认值为0。
        step={10}
        // 滑块的初始值。这个值应该在最小值和最大值之间。默认值是0。
        value={50}
      />
    </View>
  );
};

export default Sliders;

const styles = StyleSheet.create({});
