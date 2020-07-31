/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {StyleSheet, Text, View, Animated, Easing, Button} from 'react-native';

const Animateds = ({route, navigation}) => {
  const [fadeAnim, setFadeAnim] = React.useState(new Animated.Value(0));
  React.useEffect(() => {
    // Animated.timing(
    //   // timing方法使动画值随时间变化
    //   fadeAnim, // 要变化的动画值
    //   {
    //     toValue: 300, // 最终的动画值
    //     duration: 4000,
    //     easing: Easing.linear,
    //   },
    // ).start(); // 开始执行动画
    spin();
  }, []);
  const spin = () => {
    // setFadeAnim(0);
    Animated.timing(
      // timing方法使动画值随时间变化
      fadeAnim, // 要变化的动画值
      {
        toValue: 300, // 最终的动画值
        duration: 4000,
        easing: Easing.linear,
      },
    ).start(); // 开始执行动画
  };
  return (
    <View>
      <Text>Animated </Text>
      <Animated.View
        style={[
          {
            width: 10,
            height: 100,
            backgroundColor: '#fff000',
            marginLeft: fadeAnim,
          },
        ]}></Animated.View>
      <Button
        title="手指上下动画cc"
        onPress={() => navigation.navigate('AnimatedDemoHead')}
      />
    </View>
  );
};

export default Animateds;

const styles = StyleSheet.create({});
