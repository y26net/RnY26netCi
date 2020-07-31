/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

import {AppRegistry, StyleSheet, Text, TouchableHighlight} from 'react-native';

import {RNCamera, TakePictureResponse} from 'react-native-camera';

export default class ReactNativeDemo extends Component {
  //设置当前摄像头为后置摄像头
  state = {cameraType: RNCamera.Constants.Type.back};

  //扫描二维码
  _onBarCodeRead(e) {
    //data: string;
    //rawData?: string;
    //type: keyof BarCodeType;
    //bounds:
    //For iOS use `{ origin: Point<string>, size: Size<string> }`
    //For Android use `{ width: number, height: number, origin: Array<Point<string>> }`
    console.log(e);
  }

  //切换摄像头方向     undefined is not an object (evaluating 'state.cameraType')
  _switchCamera() {
    this.setState({
      cameraType:
        this.state.cameraType === RNCamera.Constants.Type.back
          ? RNCamera.Constants.Type.front
          : RNCamera.Constants.Type.back,
    });
    // let state = this.state;
    // state.cameraType = (state.cameraType === RNCamera.Constants.Type.back) ?
    //     RNCamera.Constants.Type.front : RNCamera.Constants.Type.back;
    // this.setState(state);
  }

  //拍摄照片
  _takePicture() {
    this.refs.camera
      .takePictureAsync()
      .then((response) => {
        console.log('response.uri:' + response.uri);
      })
      .catch((error) => {
        console.log('error:' + error);
      });
  }

  render() {
    return (
      <RNCamera
        ref="camera"
        style={styles.container}
        onBarCodeRead={this._onBarCodeRead.bind(this)}
        type={this.state.cameraType}>
        <TouchableHighlight onPress={this._switchCamera.bind(this)}>
          <Text style={styles.switch}>切换相机</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this._takePicture.bind(this)}>
          <Text style={styles.picture}>拍照</Text>
        </TouchableHighlight>
      </RNCamera>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  switch: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 30,
    color: 'red',
  },
  picture: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 30,
    color: 'red',
  },
});
