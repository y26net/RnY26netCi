/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
// import React, {Component} from 'react';
// import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

// import {RNCamera} from 'react-native-camera';
// class TakePicture extends Component {
//   takePicture = async () => {
//     try {
//       const data = await this.camera.takePictureAsync();
//       console.log('Path to image: ' + data.uri);
//     } catch (err) {
//       console.log('err: ', err);
//     }
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <RNCamera
//           ref={(cam) => {
//             this.camera = cam;
//           }}
//           style={styles.preview}>
//           <View style={styles.captureContainer}>
//             <TouchableOpacity style={styles.capture} onPress={this.takePicture}>
//               {/* <Icon style={styles.iconCamera}>camera</Icon> */}
//               <Text>Take Photo</Text>
//             </TouchableOpacity>
//           </View>
//         </RNCamera>
//         <View style={styles.space} />
//       </View>
//     );
//   }
// }
// export default TakePicture;
// const styles = StyleSheet.create({
//   preview: {},
//   captureContainer: {},
//   capture: {
//     backgroundColor: '#990033',
//     padding: 5,
//   },
//   space: {},
// });
// ------------------------------------------------------
// import React, {PureComponent} from 'react';
// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {RNCamera} from 'react-native-camera';

// export default class ExampleApp extends PureComponent {
//   render() {
//     return (
//       <View style={styles.container}>
//         <RNCamera
//           ref={(ref) => {
//             this.camera = ref;
//           }}
//           style={styles.preview}
//           type={RNCamera.Constants.Type.back}
//           flashMode={RNCamera.Constants.FlashMode.on}
//           androidCameraPermissionOptions={{
//             title: 'Permission to use camera',
//             message: 'We need your permission to use your camera',
//             buttonPositive: 'Ok',
//             buttonNegative: 'Cancel',
//           }}
//           androidRecordAudioPermissionOptions={{
//             title: 'Permission to use audio recording',
//             message: 'We need your permission to use your audio',
//             buttonPositive: 'Ok',
//             buttonNegative: 'Cancel',
//           }}
//           onGoogleVisionBarcodesDetected={({barcodes}) => {
//             console.log(barcodes);
//           }}
//         />
//         <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
//           <TouchableOpacity
//             onPress={this.takePicture.bind(this)}
//             style={styles.capture}>
//             <Text style={{fontSize: 14}}> SNAP </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }

//   takePicture = async () => {
//     if (this.camera) {
//       const options = {quality: 0.5, base64: true};
//       const data = await this.camera.takePictureAsync(options);
//       console.log(data.uri);
//     }
//   };
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: 'black',
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     padding: 15,
//     paddingHorizontal: 20,
//     alignSelf: 'center',
//     margin: 20,
//   },
// });
// ----------------------------------------------------------------------------
import React, {PureComponent} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  //   CameraRoll,
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import {RNCamera} from 'react-native-camera';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>Waiting</Text>
  </View>
);

export default class ExampleApp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imagePath: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}>
          {({camera, status, recordAudioPermissionStatus}) => {
            if (status !== 'READY') {
              return <PendingView />;
            }
            return (
              <View
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => this.takePicture(camera)}
                  style={styles.capture}>
                  <Text style={{fontSize: 14}}> SNAP </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
        {/* file:///data/user/0/com.rny26netci/cache/Camera/66c06be6-b3c2-4408-8067-37a8c88687ec.jpg */}
        {/* 拍照完毕，显示图片到界面上 */}
        <Image
          style={{width: 100, height: 100, marginBottom: 20}}
          source={{
            uri: this.state.imagePath,
          }}
        />
        <Text
          // onPress={this.saveImg.bind(this, this.state.imagePath)}
          onPress={this.saveImgRNFS.bind(this, this.state.imagePath)}
          style={[styles.saveImg]}>
          保存图片到相册
        </Text>
      </View>
    );
  }

  takePicture = async function (camera) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    console.log(data.uri);

    // console.log(CameraRoll.getAlbums);
    CameraRoll.save(data.uri, {type: 'photo', album: 'swxyy'});
    // CameraRoll.saveToCameraRoll(data.uri, 'photo').catch(function () {
    // console.log('Promise Rejected');
    // });

    /*图片本地路径*/
    this.setState({
      imagePath: data.uri,
    });
    /*获取图片大小*/
    Image.getSize(data.uri, (width, height) => {
      console.log(width, height);
    });
  };
  // 授权
  // requestExternalStoragePermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //       {
  //         title: 'My App Storage Permission',
  //         message:
  //           'My App needs access to your storage ' +
  //           'so you can save your photos',
  //       },
  //     );
  //     return granted;
  //   } catch (err) {
  //     console.error('Failed to request permission ', err);
  //     return null;
  //   }
  // };
  //保存图片

  saveImgRNFS(saveImageUrl) {
    const RNFS = require('react-native-fs'); //文件处理
    const storeLocation = `${RNFS.DocumentDirectoryPath}`;
    let pathName = new Date().getTime() + '-拍照.png';
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
  saveImg(img) {
    // var img = 'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=8d3a9ea62c7f9e2f6f351b082f31e962/500fd9f9d72a6059099ccd5a2334349b023bbae5.jpg';
    console.log('saveImg', img);
    // var promise = CameraRoll.saveToCameraRoll(img);
    // CameraRoll.save(img, {type: 'photo'})
    // CameraRoll.save(img)
    const RNFS = require('react-native-fs'); //文件处理
    const storeLocation = `${RNFS.DocumentDirectoryPath}`;
    let pathName = new Date().getTime() + '-拍照.png';
    let downloadDest = `${storeLocation}/${pathName}`;
    console.log(storeLocation);
    CameraRoll.save('file://' + downloadDest)
      .then(function (result) {
        alert('保存成功！地址如下：\n' + result);
      })
      .catch(function (error) {
        alert('保存失败！\n' + error);
      });
    // CameraRoll.getPhotos({
    //   first: 10, // 数值     一次获取多少张照片
    //   assetType: 'Photos', //只获取照片
    // })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 300,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  saveImg: {
    backgroundColor: '#ffff00',
  },
});
