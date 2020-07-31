/* eslint-disable no-alert */
import React from 'react';
import {StyleSheet, Text, View, Keyboard, TextInput} from 'react-native';

class Keyboards extends React.Component {
  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  //显示键盘
  _keyboardDidShow() {
    alert('Keyboard Shown');
  }

  //隐藏键盘
  _keyboardDidHide() {
    alert('Keyboard Hidden');
  }

  render() {
    return (
      <View>
        <Text>Keyboard</Text>
        <TextInput
          onSubmitEditing={Keyboard.dismiss}
          style={{borderWidth: 1, borderColor: '#000'}}
        />
      </View>
    );
  }
}

export default Keyboards;

const styles = StyleSheet.create({});
