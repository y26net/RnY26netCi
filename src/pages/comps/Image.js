/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Images = () => {
  return (
    <View>
      {/* resizeMode=>决定当组件尺寸和图片尺寸不成比例的时候如何调整图片的大小。默认值为cover。 */}
      {/* // 'cover', 'contain', 'stretch', 'repeat', 'center' */}
      {/* cover: 在保持图片宽高比的前提下缩放图片，直到宽度和高度都大于等于容器视图的尺寸（如果容器有 padding 内衬的话，则相应减去）。译注：这样图片完全覆盖甚至超出容器，容器中不留任何空白。
        contain: 在保持图片宽高比的前提下缩放图片，直到宽度和高度都小于等于容器视图的尺寸（如果容器有 padding 内衬的话，则相应减去）。译注：这样图片完全被包裹在容器中，容器中可能留有空白。
        stretch: 拉伸图片且不维持宽高比，直到宽高都刚好填满容器。
        repeat: 重复平铺图片直到填满容器。图片会维持原始尺寸，但是当尺寸超过容器时会在保持宽高比的前提下缩放到能被容器包裹。
        center: 居中不拉伸。 */}
      <Image
        style={{width: 100, height: 100}}
        resizeMode="stretch"
        accessibilityLabel="这是一张图片"
        source={require('@assets/img/login.png')}
        // 在读取图片时默认显示的图片
        // defaultSource={}
      />
      <Image
        style={{width: 100, height: 100}}
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
        }}
      />
      <Image
        style={{width: 100, height: 100}}
        source={{
          uri:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
      <Image style={styles.stretch} source={require('@assets/img/login.png')} />
    </View>
  );
};

export default Images;

const styles = StyleSheet.create({
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
});

// 在 Android 上支持 GIF 和 WebP 格式图片
// 默认情况下 Android 是不支持 GIF 和 WebP 格式的。你需要在android/app/build.gradle文件中根据需要手动添加以下模块：
// dependencies {
//   // 如果你需要支持Android4.0(API level 14)之前的版本
//   implementation 'com.facebook.fresco:animated-base-support:1.3.0'
//   // 如果你需要支持GIF动图
//   implementation 'com.facebook.fresco:animated-gif:2.0.0'
//   // 如果你需要支持WebP格式，包括WebP动图
//   implementation 'com.facebook.fresco:animated-webp:2.1.0'
//   implementation 'com.facebook.fresco:webpsupport:2.0.0'
//   // 如果只需要支持WebP格式而不需要动图
//   implementation 'com.facebook.fresco:webpsupport:2.0.0'
// }
