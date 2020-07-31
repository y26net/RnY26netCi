/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, Text, View, Animated, Easing} from 'react-native';

export default class HandIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.startAnimated();
  }

  startAnimated = () => {
    const animationSlider = Animated.sequence([
      Animated.timing(this.state.offset, {
        toValue: 30,
        duration: 300,
        delay: 0,
        easing: Easing.bezier(0.79, 0.01, 0.33, 1.01),
      }),
      Animated.timing(this.state.offset, {
        toValue: 0,
        duration: 300,
        delay: 0,
        easing: Easing.bezier(0.79, 0.01, 0.33, 1.01),
      }),
    ]);
    Animated.loop(animationSlider).start();
  };

  render() {
    return (
      <View
        pointerEvents={'none'}
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          ...this.props.style,
        }}>
        <Animated.Image
          source={require('@assets/img/login.png')}
          style={{
            width: 120,
            height: 168,
            transform: [
              {
                translateY: this.state.offset,
              },
            ],
          }}></Animated.Image>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '900',
            color: '#FFFFFF',
          }}>
          点击有惊喜～
        </Text>
      </View>
    );
  }
}
