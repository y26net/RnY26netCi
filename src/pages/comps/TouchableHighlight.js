import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

const TouchableHighlights = () => {
  const [count, setCount] = React.useState(0);
  const onHideUnderlay = () => {
    console.log('onHideUnderlay...');
  };
  const onShowUnderlay = () => {
    console.log('onShowUnderlay...');
  };
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        // 指定封装的视图在被触摸操作激活时以多少不透明度显示（0到1之间，默认值为0.85）
        activeOpacity={0.1}
        // 有触摸操作时显示出来的底层的颜色。
        underlayColor="#fff000"
        // 底层的颜色被隐藏的时候调用
        onHideUnderlay={onHideUnderlay}
        // 当底层的颜色被显示的时候调用。
        onShowUnderlay={onShowUnderlay}
        onPress={() => setCount(count + 1)}>
        <Text> Touch Here </Text>
      </TouchableHighlight>
      <View style={[styles.countContainer]}>
        <Text style={[styles.countText]}>{count !== 0 ? count : null}</Text>
      </View>
    </View>
  );
};

export default TouchableHighlights;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
});
