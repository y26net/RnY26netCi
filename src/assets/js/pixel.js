// import {Dimensions, PixelRatio} from 'react-native';
// const defaultPixel = 2;
// const wDp = Math.round(750 / defaultPixel);
// const hDp = Math.round(1334 / defaultPixel);
// const deviceWidthDp = Dimensions.get('window').width; // 设备屏幕宽度
// const deviceHeightDp = Dimensions.get('window').height; // 设备屏幕高度
// const fontScale = PixelRatio.getFontScale(); // 字体大小缩放比例
// const pixelRatio = PixelRatio.get(); // 设备像素密度
// const scale = Math.min(deviceHeightDp / hDp, deviceWidthDp / wDp); // 获取缩放比例
// export const scaleFont = (size) => {
//   return Math.round((size * scale) / fontScale / defaultPixel);
// };
// export const scaleSize = (size) => {
//   return Math.round((size * scale) / defaultPixel);
// };
// export const scaleDp = (size) => {
//   return Math.round((size * pixelRatio) / defaultPixel);
// };
// --------------------------------------------------------------------------
// 'use strict';
// import React from 'react';
// import {Dimensions, PixelRatio, Platform} from 'react-native';

// var uiWidth = 375;
// var uiHeight = 667; //这里的值，是设计稿中的高度iphone6
// var pixel = 1 / PixelRatio.get();
// var screenWidth = Dimensions.get('window').width;
// var screenHeight = Dimensions.get('window').height;
// var pixelRatio = PixelRatio.get();
// var fontScale = PixelRatio.getFontScale();
// var scale = Math.min(
//   Dimensions.get('window').height / 667,
//   Dimensions.get('window').width / 375,
// );

// var utils = {
//   /*宽度适配，例如我的设计稿某个样式宽度是50pt，那么使用就是：utils.yWidth(50)*/
//   yWidth(value) {
//     let getValue = (Dimensions.get('window').width * value) / uiWidth;
//     if (getValue <= 1 && getValue > 0) {
//       getValue = 1;
//     }
//     return getValue;
//   },
//   /*高度适配，例如我的设计稿某个样式高度是50pt，那么使用就是：utils.yHeight(50)*/
//   yHeight(value) {
//     let getValue = (Dimensions.get('window').height * value) / uiHeight;
//     if (getValue <= 1 && getValue > 0) {
//       getValue = 1;
//     }
//     return getValue;
//   },
//   /*字体大小适配，例如我的设计稿字体大小是17pt，那么使用就是：utils.yFont(17)*/
//   yFont(value) {
//     if (Platform.OS === 'android') {
//       value = Math.round(((value * scale + 0.5) * pixelRatio) / fontScale);
//       return value / pixelRatio;
//     } else {
//       let deviceWidth = screenWidth;
//       let deviceHeight = screenHeight;
//       let deviceRatio = pixelRatio;
//       let fontSize = value;
//       // console.log('deviceScreen_'+deviceRatio+'_'+deviceWidth+'_'+deviceHeight);
//       if (deviceRatio === 2) {
//         // iphone 5s and older Androids
//         if (deviceWidth < 360) {
//           return fontSize * 0.95;
//         }
//         // iphone 5
//         if (deviceHeight < 667) {
//           return fontSize;
//         }
//         // iphone 6-6s
//         if (deviceHeight <= 735) {
//           return fontSize * 1.15;
//         }
//         // older phablets
//         return fontSize * 1.25;
//       }
//       if (deviceRatio === 3) {
//         // catch larger devices
//         // ie iphone 6s plus / 7 plus / mi note 等等 原1.27
//         //x
//         if (deviceHeight == 812) {
//           return fontSize * 1.2;
//         } else {
//           //p
//           return fontSize * 1.21;
//         }
//       }
//     }
//   },
// };

// module.exports = utils;

// --------------------------------------------------------------------------
/**
 * Created by qianxin on 17/6/1.
 * 屏幕工具类
 * ui设计基准,iphone 6
 * width:750
 * height:1334
 */
let ReactNative = require('react-native');
// 获取屏幕的dp
let Dimensions = require('Dimensions');
let screenW = Dimensions.get('window').width;
let screenH = Dimensions.get('window').height;
let fontScale = ReactNative.PixelRatio.getFontScale();
let pixelRatio = ReactNative.PixelRatio.get();
// 高保真的宽度和告诉(设计稿)
const designWidth = 750.0;
const designHeight = 1334.0;

// 根据dp获取屏幕的px
let screenPxW = ReactNative.PixelRatio.getPixelSizeForLayoutSize(screenW);
let screenPxH = ReactNative.PixelRatio.getPixelSizeForLayoutSize(screenH);

/**
 * 设置text
 * @param size  px
 * @returns {Number} dp
 */
export function setSpText(size) {
  console.log('screenW======' + screenW);
  console.log('screenPxW======' + screenPxW);
  var scaleWidth = screenW / designWidth;
  var scaleHeight = screenH / designHeight;
  var scale = Math.min(scaleWidth, scaleHeight);
  size = Math.round((size * scale) / fontScale + 0.5);
  return size;
}

/**
 * 设置高度
 * @param size  px
 * @returns {Number} dp
 */
export function scaleSizeH(size) {
  var scaleHeight = (size * screenPxH) / designHeight;
  size = Math.round(scaleHeight / pixelRatio + 0.5);
  return size;
}

/**
 * 设置宽度
 * @param size  px
 * @returns {Number} dp
 */
export function scaleSizeW(size) {
  var scaleWidth = (size * screenPxW) / designWidth;
  size = Math.round(scaleWidth / pixelRatio + 0.5);
  return size;
}
