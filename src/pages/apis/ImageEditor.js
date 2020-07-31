// import React from 'react';
// import {StyleSheet, Text, View, ImageEditor, Button} from 'react-native';
// // import ImageEditor from '@react-native-community/image-editor';
// // 注意RN版本必须0.62以下
// // cropData = {
// //   offset: {x: number, y: number},
// //   size: {width: number, height: number},
// //   displaySize: {width: number, height: number},
// //   resizeMode: 'contain' | 'cover' | 'stretch',
// // };
// const ImageEditors = () => {
//   const croppedImages = () => {
//     ImageEditor.cropImage(require('@assets/img/login.png'), {
//       offset: {x: 30, y: 10},
//       size: {width: 100, height: 100},
//       displaySize: {width: 50, height: 50},
//       resizeMode: 'stretch',
//     }).then((url) => {
//       console.log('Cropped image uri', url);
//     });
//   };
//   return (
//     <View>
//       <Text>ImageEditor</Text>
//       <Text>Deprecated. Use @react-native-community/image-editor instead.</Text>
//       <Button title="裁切图片" onPress={croppedImages} />
//     </View>
//   );
// };

// export default ImageEditors;

// const styles = StyleSheet.create({});
// -------------------------------
import React from 'react';
import {
  Image,
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const size = 50;
const cat = {
  uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
  width: size,
  height: size,
};

export default ImageEditors = () => (
  <ScrollView style={styles.scrollContainer}>
    <View style={styles.container}>
      <Text>Current Pixel Ratio is:</Text>
      <Text style={styles.value}>{PixelRatio.get()}</Text>
    </View>
    <View style={styles.container}>
      <Text>Current Font Scale is:</Text>
      <Text style={styles.value}>{PixelRatio.getFontScale()}</Text>
    </View>
    <View style={styles.container}>
      <Text>On this device images with a layout width of</Text>
      <Text style={styles.value}>{size} px</Text>
      <Image source={cat} />
    </View>
    <View style={styles.container}>
      <Text>require images with a pixel width of</Text>
      <Text style={styles.value}>
        {PixelRatio.getPixelSizeForLayoutSize(size)} px
      </Text>
      <Image
        source={cat}
        style={{
          width: PixelRatio.getPixelSizeForLayoutSize(size),
          height: PixelRatio.getPixelSizeForLayoutSize(size),
        }}
      />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    // marginTop: '2em',
    // justifyContent: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    fontSize: 24,
    marginBottom: 12,
    marginTop: 4,
  },
});
