import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 TextInput,
 View,
 Text,
 Keyboard
} from 'react-native';
 
class Main extends Component {
 
  constructor(props){
    super(props);
    this.keyboardDidShowListener = null;
    this.keyboardDidHideListener = null;
    this.state = { KeyboardShown: false};
  }
 
  componentWillMount() {
    //监听键盘弹出事件
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',
      this.keyboardDidShowHandler.bind(this));
    //监听键盘隐藏事件
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',
      this.keyboardDidHideHandler.bind(this));
  }
 
  componentWillUnmount() {
    //卸载键盘弹出事件监听
    if(this.keyboardDidShowListener != null) {
      this.keyboardDidShowListener.remove();
    }
    //卸载键盘隐藏事件监听
    if(this.keyboardDidHideListener != null) {
      this.keyboardDidHideListener.remove();
    }
  }
 
  //键盘弹出事件响应
  keyboardDidShowHandler(event) {
    this.setState({KeyboardShown: true});
    console.log(event.endCoordinates.height);
  }
 
  //键盘隐藏事件响应
  keyboardDidHideHandler(event) {
    this.setState({KeyboardShown: false});
  }
 
  //强制隐藏键盘
  dissmissKeyboard() {
    Keyboard.dismiss();
    console.log("输入框当前焦点状态：" + this.refs.bottomInput.isFocused());
  }
 
  render() {
   return (
    <View style={[styles.container]}>
      <View style={[styles.flexDirection, styles.inputHeight]}>
        <TextInput style={styles.textInputStyle} ref="bottomInput" />
        <Text style={styles.buttonStyle}
          onPress={this.dissmissKeyboard.bind(this)}>
          收起键盘
        </Text>
      </View>
      <Text>
        当前键盘状态：{this.state.KeyboardShown ? "打开" : "关闭"}
      </Text>
    </View>
   );
  }
}
 
const styles = StyleSheet.create({
  container:{
     flex:1,
     paddingTop:15
  },
  flexDirection:{
   flexDirection:'row'
  },
  inputHeight:{
   height:35,
   alignItems: 'center'
  },
  textInputStyle:{
    flex:1,
    height:35,
    fontSize:18,
  },
  buttonStyle:{
    fontSize:20,
    color:'white',
    width:100,
    textAlign:'center',
    backgroundColor:'#4CA300'
  },
});
 
AppRegistry.registerComponent('HelloWorld', () => Main);

// 一、Keyboard API 提供的方法
// Keyboard API 提供如下的静态函数供开发者使用。

// 1，addListener(eventName, callback)
// （1）这个函数用来加载一个指定事件的事件监听器，函数中的 eventName 可以是如下值：
// keyboardWillShow：软键盘将要显示
// keyboardDidShow：软键盘显示完毕
// keyboardWillHide：软键盘将要收起
// keyboardDidHide：软键盘收起完毕
// keyboardWillChangeFrame：软件盘的 frame 将要改变
// keyboardDidChangeFrame：软件盘的 frame 改变完毕

// （2）这个函数返回一个对象。我们可以保存这个对象，在需要释放事件监听器时，调用这个对象的 remove 方法。

// 2，removeListener(eventName, callback)
// 这个函数用来释放一个特定的键盘事件监听器。

// 3，removeAllListener(eventName)
// 这个函数用来释放一个指定键盘事件的所有事件监听器。

// 4，dissmiss()
// 这个方法让操作系统收起软键盘。
