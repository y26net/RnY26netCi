/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
import React, {Component, PropTypes} from 'react';
import {Dimensions, PixelRatio, Platform, StatusBar, View} from 'react-native';

let props = {};
export default class Resolution {
  static get(useFixWidth = true) {
    return useFixWidth ? {...props.fw} : {...props.fh};
  }

  static setDesignSize(dwidth = 750, dheight = 1336, dim = 'window') {
    let designSize = {width: dwidth, height: dheight};

    let navHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 64;
    let pxRatio = PixelRatio.get(dim);
    let {width, height} = Dimensions.get(dim);
    if (dim !== 'screen') {
      height -= navHeight;
    }
    let w = PixelRatio.getPixelSizeForLayoutSize(width);
    let h = PixelRatio.getPixelSizeForLayoutSize(height);

    let fw_design_scale = designSize.width / w;
    fw_width = designSize.width;
    fw_height = h * fw_design_scale;
    fw_scale = 1 / pxRatio / fw_design_scale;

    let fh_design_scale = designSize.height / h;
    fh_width = w * fh_design_scale;
    fh_height = designSize.height;
    fh_scale = 1 / pxRatio / fh_design_scale;

    props.fw = {width: fw_width, height: fw_height, scale: fw_scale, navHeight};
    props.fh = {width: fh_width, height: fh_height, scale: fh_scale, navHeight};
  }

  static FixWidthView = (p) => {
    let {width, height, scale, navHeight} = props.fw;
    return (
      <View
        {...p}
        style={{
          marginTop: navHeight,
          width: width,
          height: height,
          backgroundColor: 'transparent',
          transform: [
            {translateX: -width * 0.5},
            {translateY: -height * 0.5},
            {scale: scale},
            {translateX: width * 0.5},
            {translateY: height * 0.5},
          ],
        }}
      />
    );
  };

  static FixHeightView = (p) => {
    let {width, height, scale, navHeight} = props.fh;
    return (
      <View
        {...p}
        style={{
          marginTop: navHeight,
          width: width,
          height: height,
          backgroundColor: 'transparent',
          transform: [
            {translateX: -width * 0.5},
            {translateY: -height * 0.5},
            {scale: scale},
            {translateX: width * 0.5},
            {translateY: height * 0.5},
          ],
        }}>
        {p.children}
      </View>
    );
  };
}
//init
Resolution.setDesignSize();
// 0---------------------------------------------------
// import React, {Component} from 'react';
// import {AppRegistry, StyleSheet, Text, Image, View} from 'react-native';
// import Resolution from './Resolution';
// export default class tets extends Component {
//   render() {
//     return (
//       <Resolution.FixWidthView style={styles.container}>
//         <Image
//           source={require('./assets/bg_day.jpg')}
//           style={{position: 'absolute'}}
//         />
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </Resolution.FixWidthView>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // backgroundColor: '#ff0000',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     backgroundColor: 'transparent',
//   },
//   instructions: {
//     backgroundColor: 'transparent',
//     textAlign: 'center',
//     color: 0xffff,
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('rn_resolution', () => tets);
