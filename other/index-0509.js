/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = ({route, navigation}) => {
  return (
    <SafeAreaView style={[styles.container]}>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#2bcddd" /> */}
      {/* <StatusBar
        animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
        hidden={false} //是否隐藏状态栏。
        backgroundColor={'green'} //状态栏的背景色
        translucent={true} //指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
        barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')
      ></StatusBar> */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="#2bcddd"
        // hidden={true}
        // translucent={true}
      />
      <ImageBackground
        style={{flex: 1, width: 1000}}
        source={require('../../assets/img/login.png')}>
        <Image
          source={require('../../assets/img/login.png')}
          style={styles.backgroundImage}
        />
        <ScrollView>
          <View>
            <Text>测试Home</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2bcddd',
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: null,
    height: null,
    //不加这句，就是按照屏幕高度自适应
    //加上这几，就是按照屏幕自适应
    //resizeMode:Image.resizeMode.contain,
    //祛除内部元素的白色背景
    backgroundColor: 'rgba(0,0,0,0)',
  },
});
