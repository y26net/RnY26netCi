import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

const StatusBars = ({route}) => {
  return (
    <View>
      {/* animated：指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden */}
      {/* barStyle:设置状态栏文本的颜色=>'default', 'light-content', 'dark-content' */}
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <View>
        <StatusBar hidden={route.statusBarHidden} />
        <Text>控制应用状态栏的组件。</Text>
        <Text>和导航器一起使用的注意事项</Text>
        <Text>
          由于StatusBar可以在任意视图中加载，可以放置多个且后加载的会覆盖先加载的。因此在配合导航器使用时，请务必考虑清楚StatusBar的放置顺序。
        </Text>
      </View>
    </View>
  );
};

export default StatusBars;

// StatusBar.setBackgroundColor({color: 'red'});

const styles = StyleSheet.create({});
