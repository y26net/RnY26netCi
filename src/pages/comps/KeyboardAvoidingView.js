/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Textarea,
  Image,
  TextInput,
} from 'react-native';

const KeyboardAvoidingViews = () => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          underlineColorAndroid={'#ffffff'}
          placeholder="这里是一个简单的输入框1"
          style={styles.textInput}
        />
        <TextInput
          underlineColorAndroid={'#ffffff'}
          placeholder="这里是一个简单的输入框2"
          style={styles.textInput}
        />
        <TextInput
          underlineColorAndroid={'#ffffff'}
          placeholder="这里是一个简单的输入框3"
          style={styles.textInput}
        />
        <TextInput
          underlineColorAndroid={'#ffffff'}
          placeholder="这里是一个简单的输入框4"
          style={styles.textInput}
        />
        <TextInput
          underlineColorAndroid={'#ffffff'}
          placeholder="这里是一个简单的输入框5"
          style={styles.textInput}
        />
      </KeyboardAvoidingView>
    </View>
    // <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
    //   <View style={{backgroundColor: '#f4f4f4', flex: 1}}>
    //     <Image
    //       style={styles.style_image}
    //       source={require('@assets/img/login.png')}
    //     />
    //     <TextInput
    //       style={styles.style_user_input}
    //       placeholder="QQ号/手机号/邮箱"
    //       numberOfLines={1}
    //       //   autoFocus={true}
    //       underlineColorAndroid={'transparent'}
    //       textAlign="center"
    //     />
    //     <View style={{height: 1, backgroundColor: '#f4f4f4'}} />
    //     <TextInput
    //       style={styles.style_pwd_input}
    //       placeholder="密码"
    //       numberOfLines={1}
    //       underlineColorAndroid={'transparent'}
    //       secureTextEntry={true}
    //       textAlign="center"
    //     />
    //     <View style={styles.style_view_commit}>
    //       <Text style={{color: '#fff'}}>登录</Text>
    //     </View>

    //     <View
    //       style={{
    //         flex: 1,
    //         flexDirection: 'row',
    //         alignItems: 'flex-end',
    //         bottom: 10,
    //       }}>
    //       <Text style={styles.style_view_unlogin}>无法登录?</Text>
    //       <Text style={styles.style_view_register}>新用户</Text>
    //     </View>
    //   </View>
    // </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingViews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center', //
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    height: 140,
    paddingHorizontal: 10,
  },
  //   container: {},
  //   style_image: {
  //     borderRadius: 40,
  //     height: 70,
  //     width: 70,
  //     marginTop: 40,
  //     alignSelf: 'center',
  //   },
  //   style_user_input: {
  //     backgroundColor: '#fff',
  //     marginTop: 10,
  //     height: 40,
  //   },
  //   style_pwd_input: {
  //     backgroundColor: '#fff',
  //     height: 40,
  //   },
  //   style_view_commit: {
  //     marginTop: 15,
  //     marginLeft: 10,
  //     marginRight: 10,
  //     backgroundColor: '#63bbff',
  //     height: 40,
  //     borderRadius: 5,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   },
  //   style_view_unlogin: {
  //     fontSize: 12,
  //     color: '#63bbff',
  //     marginLeft: 10,
  //   },
  //   style_view_register: {
  //     fontSize: 12,
  //     color: '#63bbff',
  //     marginRight: 10,
  //     alignItems: 'flex-end',
  //     flex: 1,
  //     flexDirection: 'row',
  //     textAlign: 'right',
  //   },
});
