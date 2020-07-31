/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import {RNCamera} from 'react-native-camera';

class RNCameras extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moveAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation = () => {
    this.state.moveAnim.setValue(0);
    Animated.timing(this.state.moveAnim, {
      toValue: -200,
      duration: 1500,
      easing: Easing.linear,
    }).start(() => this.startAnimation());
  };
  //  识别二维码
  onBarCodeRead = (result) => {
    const {navigate} = this.props.navigation;
    const {data} = result;
    navigate('RNCameraSale', {
      url: data,
    });
    console.log(data);
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          onBarCodeRead={this.onBarCodeRead}>
          <View style={styles.rectangleContainer}>
            <View style={styles.rectangle} />
            <Animated.View
              style={[
                styles.border,
                {transform: [{translateY: this.state.moveAnim}]},
              ]}
            />
            <Text style={styles.rectangleText}>
              将二维码放入框内，即可自动扫描=
            </Text>
          </View>
        </RNCamera>
      </View>
    );
  }
}

export default RNCameras;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  rectangle: {
    height: 200,
    width: 200,
    borderWidth: 1,
    borderColor: '#00FF00',
    backgroundColor: 'transparent',
  },
  rectangleText: {
    flex: 0,
    color: '#fff',
    marginTop: 10,
  },
  border: {
    flex: 0,
    width: 200,
    height: 2,
    backgroundColor: '#00FF00',
  },
});

// ========================================================
// import React, {PureComponent} from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import {RNCamera} from 'react-native-camera';

// class ExampleApp extends PureComponent {
//   render() {
//     return (
//       <View style={styles.container}>
//         <RNCamera
//           ref={(ref) => {
//             this.camera = ref;
//           }}
//           style={styles.preview}
//           ExampleApp
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
//           {/* <Image
//             style={{width: 200, height: 200}}
//             source={{uri: this.state.photo}}
//           /> */}
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

// export default ExampleApp;
// --------------------------------------------------------------
// if(Platform.OS === 'android'){
//   PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
//       .then(res => {
//           if(res !== 'granted') {
//               Alert.alert('相机权限没打开', '请在手机的“设置”选项中,允许访问您的摄像头和麦克风')
//           }
//           else this.openTheCamera();
//       });
// } else {
//   if(Camera){
//       Camera.checkDeviceAuthorizationStatus()
//           .then(access => {
//               if(!access) {
//                   Alert.alert('相机权限没打开', '请在iPhone的“设置-隐私”选项中,允许访问您的摄像头和麦克风')
//               }
//               else this.openTheCamera();
//           });
//   }
// }
// ----------------------------------------------------------
// requestExternalStoragePermission = async () => {
//   try {
//       const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//           {
//               title: 'My App Storage Permission',
//               message: 'My App needs access to your storage ' +
//                   'so you can save your photos',
//           },
//       );
//       return granted;
//   } catch (err) {
//       console.error('Failed to request permission ', err);
//       return null;
//   }
// };
// -------------------------------------------------------------
// async function requestCameraPermission() {
//   try {
//    const granted = await PermissionsAndroid.request(
//     PermissionsAndroid.PERMISSIONS.CAMERA,
//     {
//      'title': 'Cool Photo App Camera Permission',
//      'message': 'Cool Photo App needs access to your camera ' +
//            'so you can take awesome pictures.'
//     }
//    )
//    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//     console.log("You can use the camera")
//    } else {
//     console.log("Camera permission denied")
//    }
//   } catch (err) {
//    console.warn(err)
//   }
//  }
// -------------------------------------------------------------
