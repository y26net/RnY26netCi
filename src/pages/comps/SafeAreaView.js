/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';

const SafeAreaViews = () => {
  const onContentSizeChange = () => {
    console.log('onContentSizeChange....');
  };
  const onMomentumScrollBegin = () => {
    console.log('onMomentumScrollBegin....');
  };
  //   滚动动画结束时调用此函数
  const onMomentumScrollEnd = () => {
    console.log('onMomentumScrollEnd....');
  };
  const onScrollBeginDrag = () => {
    console.log('onScrollBeginDrag....');
  };
  const onScrollEndDrag = () => {
    console.log('onScrollEndDrag....');
  };
  const onScroll = (e) => {
    console.log('onScroll....');
    log(e);
  };
  const log = (e) => {
    console.log(Object.keys(e).map((v, i) => v));
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        //   此函数会在ScrollView内部可滚动内容的视图发生变化时调用=> 调用参数为内容视图的宽和高: (contentWidth, contentHeight)。
        onContentSizeChange={onContentSizeChange}
        // 滚动动画开始时调用此函数
        onMomentumScrollBegin={onMomentumScrollBegin}
        // 在滚动的过程中，每帧最多调用一次此回调函数。调用的频率可以用scrollEventThrottle属性来控制
        onScroll={onScroll}
        // 当用户开始拖动此视图时调用此函数
        onScrollBeginDrag={onScrollBeginDrag}
        // 当用户停止拖动此视图时调用此函数
        onScrollEndDrag={onScrollEndDrag}
        // 滚动动画结束时调用此函数。
        onMomentumScrollEnd={onMomentumScrollEnd}>
        <View style={{flex: 1}}>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World谢谢谢谢!</Text>
          <Text>Hello World谢谢谢谢!</Text>
          <Text>Hello World谢谢谢谢!</Text>
          <Text>Hello World谢谢谢谢!</Text>
          <Text>Hello World谢谢谢谢!</Text>
          <Text>Hello World谢谢谢谢!</Text>
          <Text>Hello World谢谢谢谢!</Text>
          <Text>Hello World谢谢谢谢!</Text>
          <Text>Hello World谢谢谢谢!</Text>
          <Text>Hello World谢谢谢谢!</Text>
          <Text>Hello World谢谢谢谢!</Text>
          <Text>ScrollView（滚动视图）的组件</Text>
          <Text>
            ScrollView和FlatList应该如何选择？ScrollView会简单粗暴地把所有子元素一次性全部渲染出来。其原理浅显易懂，使用上自然也最简单。然而这样简单的渲染逻辑自然带来了性能上的不足。想象一下你有一个特别长的列表需要显示，可能有好几屏的高度。创建和渲染那些屏幕以外的JS组件和原生视图，显然对于渲染性能和内存占用都是一种极大的拖累和浪费。
          </Text>
          <Text>
            这就是为什么我们还有专门的FlatList组件。FlatList会惰性渲染子元素，只在它们将要出现在屏幕中时开始渲染。这种惰性渲染逻辑要复杂很多，因而API在使用上也更为繁琐。除非你要渲染的数据特别少，否则你都应该尽量使用FlatList，哪怕它们用起来更麻烦。
          </Text>
          <Text>
            此外FlatList还可以方便地渲染行间分隔线，支持多列布局，无限滚动加载等等。
          </Text>
          <Text>更多见：https://reactnative.cn/docs/scrollview</Text>
          <TextInput
            underlineColorAndroid={'#ffffff'}
            placeholder="这里是一个简单的输入框1"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SafeAreaViews;

const styles = StyleSheet.create({});
