/* eslint-disable react-native/no-inline-styles */
// CameraRollSaveImg.js
import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  PermissionsAndroid,
  ScrollView,
  Button,
} from 'react-native';
// import { CameraRoll } from "react-native";
import CameraRoll from '@react-native-community/cameraroll';
// var RNFS = require('react-native-fs');
//网络图片地址

var imgURL = 'https://facebook.github.io/react-native/img/tiny_logo.png';

//默认应用的容器组件
export default class CameraRollSaveImgApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  //渲染
  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: '申请摄像头权限',
          message:
            '一个很牛逼的应用想借用你的摄像头，' +
            '然后你就可以拍出酷炫的皂片啦。',
          buttonNeutral: '等会再问我',
          buttonNegative: '不行',
          buttonPositive: '好吧',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('现在你获得摄像头权限了');
      } else {
        console.log('用户并不屌你');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  //获取读写权限
  requestReadPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: '获取读写权限',
          message: '没权限我不能工作，请授权读写权限',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('你已获取了读写权限');
      } else {
        console.log('获取读写权限失败');
      }
    } catch (err) {
      console.log(err.toString());
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            style={styles.img}
            source={{uri: imgURL}}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text
            // onPress={this.saveImg.bind(this, imgURL)}
            onPress={this.saveImgRNFS.bind(this, imgURL)}
            style={[styles.saveImg]}>
            保存图片到相册
          </Text>
        </View>
        <Button title="Load Images" onPress={this._handleButtonPress} />
        <ScrollView>
          {this.state.photos.map((p, i) => {
            return (
              <Image
                key={i}
                style={{
                  width: 300,
                  height: 100,
                }}
                source={{uri: p.node.image.uri}}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
  _handleButtonPress = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
    })
      .then((r) => {
        this.setState({photos: r.edges});
      })
      .catch((err) => {
        //Error Loading Images
      });
  };
  //保存图片
  saveImg(img) {
    // this.requestReadPermission();
    // var promise = CameraRoll.saveToCameraRoll(img);
    var promise = CameraRoll.save(img);
    promise
      .then(function (result) {
        alert('保存成功！地址如下：\n' + result);
      })
      .catch(function (error) {
        // requestReadPermission();
        alert('保存失败！\n' + error);
      });
  }

  saveImgRNFS(saveImageUrl) {
    const RNFS = require('react-native-fs'); //文件处理
    const storeLocation = `${RNFS.DocumentDirectoryPath}`;
    let pathName = new Date().getTime() + '文件名.png';
    let downloadDest = `${storeLocation}/${pathName}`;
    const ret = RNFS.downloadFile({
      fromUrl: saveImageUrl,
      toFile: downloadDest,
    });
    ret.promise.then((res) => {
      if (res && res.statusCode === 200) {
        // var promise = CameraRoll.saveToCameraRoll('file://' + downloadDest);
        var promise = CameraRoll.save('file://' + downloadDest);
        promise
          .then(function (result) {
            console.log('图片已保存至相册');
          })
          .catch(function (error) {
            console.log('保存失败');
          });
      }
    });
  }
}

//样式定义

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
  },
  image: {
    borderWidth: 1,
    width: 300,
    height: 100,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  img: {
    height: 98,
    width: 300,
  },
  saveImg: {
    height: 30,
    padding: 6,
    textAlign: 'center',
    backgroundColor: '#3BC1FF',
    color: '#FFF',
    marginTop: 10,
  },
});
// --------------------------------------------------------------------------
// import DeviceInfo from 'react-native-device-info';
//  _requestCameraPermission = async () => {
//         try {
//             const granted = await PermissionsAndroid.request(
//                 PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
//                 {
//                     'title': `${DeviceInfo.getApplicationName()}需要通讯录权限`,
//                     'message': `是否允许${DeviceInfo.getApplicationName()}访问你的通讯录?`
//                 }
//             );
//             if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//                 console.log('Camera permission allowed');
//                 this._getAndroidContactList();
//             } else {
//                 console.log("Camera permission denied");
//                 NativeModules.NaviModule.openSettings();
//             }
//         } catch (err) {
//             console.warn(err);
//         }
//     };
//     hasCameraPermission = async () => {
//         try {
//             return await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_CONTACTS);
//         } catch (err) {
//             console.warn(err, 'PERMISSION CHECK');
//         }
//     };

//     _checkCameraPermissionAndOpen = () => {
//         this.hasCameraPermission().then((hasCameraPermission) => {
//             console.log('hasCameraPermission result is ' + hasCameraPermission);
//             if (hasCameraPermission) {
//                 console.log('Opening OCR directly');
//                this._getAndroidContactList();
//             } else {
//                 this._requestCameraPermission();
//             }
//         });
//     };
// 在需要添加权限的地方 使用 this.__checkCameraPermissionAndOpen() 以上是通讯录 其他关于相机 sd卡存储 制作相应修改就可以
// 网上说了好多  方案都tm 扯淡 只有这种方式 才是正宗 解决一切手机权限 相关
