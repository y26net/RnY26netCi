import React from 'react';
import {StyleSheet, Text, View, PixelRatio, Image} from 'react-native';

const PixelRatios = () => {
  //   const image = Image.getImage({
  //     width: PixelRatio.getPixelSizeForLayoutSize(200),
  //     height: PixelRatio.getPixelSizeForLayoutSize(100),
  //   });
  React.useEffect(() => {
    console.log(PixelRatio.get());
  }, []);
  return (
    // <View>
    //   <Text>PixelRatio</Text>
    //   <Image source={image} style={{width: 200, height: 100}} />
    // </View>
    // <View style={styles.container}>
    //   <Text style={styles.welcome}>Welcome to React Native!</Text>
    //   <Text style={styles.instructions}>To get started, edit App.js</Text>
    //   <Text style={styles.instructions}>{'instructions'}</Text>
    // </View>
    <View style={styles.flex}>
      <View style={styles.view1}>
        <Image
          style={styles.image1}
          source={require('@assets/img/login.png')}
        />
      </View>
      <View style={styles.view2}>
        <Image
          style={styles.image2}
          source={require('@assets/img/login.png')}
        />
      </View>
    </View>
  );
};

export default PixelRatios;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  view1: {
    marginTop: 50,
    width: 200,
    height: 200,
    borderColor: 'red',
    borderWidth: 5, ///未适配的线宽
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    marginTop: 30,
    width: 200,
    height: 200,
    borderColor: 'red',
    borderWidth: 5 / PixelRatio.get(), ///适配后的线宽
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image1: {
    width: 50, ///未适配的图宽（假设图片的原始宽度）
    height: 60, ///未适配的图高（假设图片的原始高度）
  },
  image2: {
    width: PixelRatio.getPixelSizeForLayoutSize(50), ///适配后的图宽
    height: PixelRatio.getPixelSizeForLayoutSize(60), ///适配后的图高
  },
  container: {
    // height:scaleSizeH(700),
    // fontSize: setSpText(40),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 30,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// 基础概念：
// PPI（pixels per inch）图像分辨率
// DPI（dots per inch）打印精度
// 两者在屏幕适配上来说，可以理解为同一个概念，DPI根据语境不同，会被理解为不同的结果。
// dp（Density-independent pixels）一种基于屏幕密度的抽象单位。在每英寸160点的显示器上，1dp = 1px
// pixel density（像素密度）PixelRatio.get()
// PixelRatio.get() === 1  // mdpi Android devices (160 dpi)
// PixelRatio.get() === 1.5 // hdpi Android devices (240 dpi)
// PixelRatio.get() === 2 // iPhone 4, 4S iPhone 5, 5c, 5s iPhone 6 xhdpi Android devices (320 dpi)
// PixelRatio.get() === 3 // iPhone 6 plus xxhdpi Android devices (480 dpi)
// PixelRatio.get() === 3.5 // Nexus 6
// 结论：
// dp = px / PixelRatio.get()
// ---------------------------------------------------
// 尺寸适配不同屏幕
// 1.当设置的单位是dp时，不需要考虑这个因素，因为系统会根据DPR(设备像素比率)自动将dp转化成相应的像素值
// ?：1dp，在2倍屏上被转化成2px，在3倍屏上被转化成3px
// 2.当设置的单位是px时，要将px转化成dp，因为RN的默认单位是dp，转换方法deviceWidth / 750 * size
// deviceWidth是RN获取到的屏幕宽，单位是dp
// UI搞是基于750px的屏幕进行设计
// size就是设置的px值
// 像素对齐
// 当第一步获取到的像素值是小数时，会导致在GPU渲染时，对没对齐的边缘，需要进行插值计算，这个插值计算的过程会有性能损耗，所以要用到roundToNearestPixel方法
// 实现真正的1px的分割线
// 如果我们设置的单位是1px，走完上诉流程，在1倍2倍3倍屏上分别渲染的真正像素分别是：0.5px, 1px, 1.5px，在1倍屏和3倍屏上并不是我们真正想要的1px像素宽
// 如果我们设置的单位是1dp，走完上诉流程，在1倍2倍3倍屏上分别渲染的真正像素分别是：1px，2px，3px，结果也不是我们想要的。
// 解决方式就是，当想要设置1px的线宽时，直接返回StyleSheet.hairlineWidth
// const function px(size) {
//   if (size == 1) {
//     return StyleSheet.hairlineWidth;
//   }
//   return PixelRatio.roundToNearestPixel(deviceWidth / 750 * size);
// }
// ---------------------------------------------------
//// 获取像素密度;
// static get(): number {
//   return Dimensions.get('window').scale;
// }
// //获取字体比例，目前仅支持安卓，iOS默认还是使用像素密度
// static getFontScale(): number {
//   return Dimensions.get('window').fontScale || PixelRatio.get();
// }
// //获取一个布局元素的真实像素大小，返回值是一个四舍五入的整型
// static getPixelSizeForLayoutSize(layoutSize: number): number {
//   return Math.round(layoutSize * PixelRatio.get());
// }
// //将布局尺寸舍入到与整数像素数相对应的最接近的布局尺寸
// //例如：on a device with a PixelRatioof 3，PixelRatio.roundToNearestPixel(8.4) = 8.33，exactly (8.33 * 3) = 25 pixels
// static roundToNearestPixel(layoutSize: number): number {
//   var ratio = PixelRatio.get();
//   return Math.round(layoutSize * ratio) / ratio;
// }
// //仅支持web，开始检测
// static startDetecting() {}
// =====================================================
// React Native中使用的尺寸单位是dp(一种基于屏幕密度的抽象单位。在每英寸160点的显示器上，1dp = 1px),而设计师使用的是px, 这两种尺寸如何换算呢？官方提供了PixelRatio:
// import {PixelRatio} from 'react-native';
// const dp2px = dp=>PixelRatio.getPixelSizeForLayoutSize(dp);
// const px2dp = px=>PixelRatio.roundToNearestPixel(px);

// 设计师给你一个尺寸，比如100px*200px的View，按照下面的方式可实现设计还原：
// <View style={{width:px2dp(100),height:px2dp(200),backgroundColor:"red"}}/>
// 这个时候，你或许会说，这也太麻烦了，每个有尺寸的地方我都得转么，能不能我直接用px写，当然可以，不过需要整体加个缩放系数
// import {PixelRatio,Dimensions}} from 'react-native';
// const dp2px = dp=>PixelRatio.getPixelSizeForLayoutSize(dp);
// const px2dp = px=>PixelRatio.roundToNearestPixel(px);
// let pxRatio = PixelRatio.get();
// let {win_width,win_height} = Dimensions.get("window");
// let scale = 1/pxRatio;
// let width = dp2px(win_width);
// let height = dp2px(win_height);
// const com = props=>(<View sytle={styles.container}><View style={{width:100,height:200,backgroundColor:"red"}}/></View>)
// const styles={
//   container: {
//         width:width,
//         height:height,
//         transform:[{translateX:-width*.5},{translateY:-height*.5},{scale:scale},{translateX:width*.5},{translateY:height*.5}]
//     },
// }
// 这样处理后，在根节点内，你再也不用考虑dp的问题了，直接使用px即可。
// 不过此时还有另外一个问题，设计尺寸是死的，屏幕大小是活的，得考虑分辨率适配啊，那在不同的分辨率下如何正确的实现设计师的设计呢？
// 我们将使用一种游戏经常会用到得方案，fixedWidth/fixedHeight.
// fixedWidth
// fixedWidth 模式是保持原始宽高比缩放应用程序内容，缩放后应用程序内容在水平和垂直方向都填满播放器窗口，但只保持应用程序内容的原始宽度不变，高度可能会改变,简言之宽度固定，高度自适应。
// fixedHeight
// fixedHeight 模式是保持原始宽高比缩放应用程序内容，缩放后应用程序内容在水平和垂直方向都填满播放器窗口，但只保持应用程序内容的原始高度不变，宽度可能会改变,简言之高度固定，宽度自适应。
// 具体如何应用呢，别急，一步步来。
// 先来看看如何得到屏幕的像素宽高：
// import {Dimensions,PixelRatio} from 'react-native';
// let {width,height} = Dimensions.get("window");
// let w =dp2px(width);
// let h = dp2px(height);
// 假定我们的设计尺寸是
// let designSize = {width:750,height:1336};
// 按照fixedWidth、fixedHeight的定义，我们计算下新的宽高：
//fixedWidth
// let scale = designSize.width/w;
// let winSize = {width:designSize.width,height:h*scale};
//fixedHeight
// let scale = designSize.height/h;
// let winSize = {width:designSize.width*scale,height:designSize.height};
// 这个winsize就是最终实际用来布局的屏幕尺寸,此时我们又会多了一个分辨率适配的缩放系数，还记得我们前一个我们添加的为了使用px的缩放系数么，我们在这里做一个整合：
// import {PixelRatio,Dimensions}} from 'react-native';
// const dp2px = dp=>PixelRatio.getPixelSizeForLayoutSize(dp);
// const px2dp = px=>PixelRatio.roundToNearestPixel(px);
// let designSize = {width:750,height:1336};
// let pxRatio = PixelRatio.get();
// let {win_width,win_height} = Dimensions.get("window");
// let width = dp2px(win_width);
// let height = dp2px(win_height);
// let design_scale = designSize.width/width;
// height = height*design_scale
// let scale = 1/pxRatio/design_scale;
// const com = props=>(
//                 <View sytle={styles.container}>
//                     <View style={{width:100,height:200,backgroundColor:"red"}}/>
//                 </View>)
// const styles={
//   container: {
//         width:width,
//         height:height,
//         transform:[{translateX:-width*.5},
//                     {translateY:-height*.5},
//                     {scale:scale},
//                     {translateX:width*.5},
//                     {translateY:height*.5}]
//     },
// }
// 在后续的开发中将不必再关注适配的问题，只需要按照设计师给的尺寸实现布局即可。
// 最后再附上一个工具类 Resolution.js：
// import React, {Component, PropTypes} from 'react';
// import {
//     Dimensions,
//     PixelRatio,
//     Platform,
//     StatusBar,
//     View
// } from 'react-native';

// let props = {};
// export default class Resolution {
//     static get(useFixWidth = true){
//         return useFixWidth?{...props.fw}:{...props.fh}
//     }

//     static setDesignSize(dwidth=750,dheight=1336,dim="window"){
//         let designSize = {width:dwidth,height:dheight};

//         let navHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 64;
//         let pxRatio = PixelRatio.get(dim);
//         let {width,height} = Dimensions.get(dim);
//         if(dim != "screen")height-=navHeight;
//         let w = PixelRatio.getPixelSizeForLayoutSize(width);
//         let h = PixelRatio.getPixelSizeForLayoutSize(height);

//         let fw_design_scale = designSize.width/w;
//         fw_width = designSize.width;
//         fw_height = h*fw_design_scale;
//         fw_scale = 1/pxRatio/fw_design_scale;

//         let fh_design_scale = designSize.height/h;
//         fh_width = w*fh_design_scale;
//         fh_height = designSize.height;
//         fh_scale = 1/pxRatio/fh_design_scale;

//         props.fw = {width:fw_width,height:fw_height,scale:fw_scale,navHeight};
//         props.fh = {width:fh_width,height:fh_height,scale:fh_scale,navHeight};
//     }

//     static FixWidthView = (p) => {
//         let {width,height,scale,navHeight} = props.fw;
//         return (
//             <View {...p} style={{
//                                             marginTop:navHeight,
//                                             width:width,
//                                             height:height,
//                                             backgroundColor: 'transparent',
//                                             transform:[{translateX:-width*.5},
//                                                         {translateY:-height*.5},
//                                                         {scale:scale},
//                                                         {translateX:width*.5},
//                                                         {translateY:height*.5}]
//                                         }}>
//             </View>
//         );
//     };

//     static FixHeightView = (p) => {
//         let {width,height,scale,navHeight} = props.fh;
//         return (
//             <View {...p} style={{
//                                             marginTop:navHeight,
//                                             width:width,
//                                             height:height,
//                                             backgroundColor: 'transparent',
//                                             transform:[{translateX:-width*.5},
//                                                         {translateY:-height*.5},
//                                                         {scale:scale},
//                                                         {translateX:width*.5},
//                                                         {translateY:height*.5}]
//                                         }}>
//                 {p.children}
//             </View>
//         );
//     };
// };
// //init
// Resolution.setDesignSize();
// ------------------------------------
// How to use:
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   Image,
//   View
// } from 'react-native';
// import Resolution from "./Resolution"
// export default class tets extends Component {
//   render() {
//     return (
//       <Resolution.FixWidthView style={styles.container}>
//         <Image source={require("./assets/bg_day.jpg")} style={{position:"absolute"}}/>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
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
//     backgroundColor:"transparent"
//   },
//   instructions: {
//     backgroundColor:"transparent",
//     textAlign: 'center',
//     color: 0xffff,
//     marginBottom: 5,
//   },
// });
// AppRegistry.registerComponent('rn_resolution', () => tets);
// bg_day.jpg的尺寸是750*1500，上面的程序在所有的分辨率下图片都能正确显示。
// =====================================================
// 分辨率适配的取值范围
// 下面是一段lua代码，分别计算了主流分辨率尺寸下，使用FixWidth/FixHeight后，高度/宽度的取值范围。
// function caculate(design_width,design_height,resolutions)
//     local max = function(arr,key) local result = 0; for i,v in ipairs(arr)do result = math.max(result,key and v[key] or v);end return result end
//     local min = function(arr,key) local result = math.huge; for i,v in ipairs(arr)do result = math.min(result,key and v[key] or v);end return result end
//     if design_width > design_height then design_width,design_height = design_height,design_width;end

//     local fixed_height_results,fixed_width_results = {},{};
//     for i,v in ipairs(resolutions) do
//         local pos_b,pos_e = string.find(v,"*");
//         width,height = tonumber(string.sub(v,pos_e+1)),tonumber(string.sub(v,1,pos_b-1));
//         if width > height then width,height = height,width;end

//         local resolution = width.."*"..height;
//         table.insert(fixed_height_results,{resolution=resolution,w=math.ceil(design_height*width/height),h=design_height});
//         table.insert(fixed_width_results,{resolution=resolution,w= design_width,h = math.ceil(design_width*height/width)});
//     end

//     local result = {};
//     table.insert(result,{"RESOLUSTION","FIXED_WIDTH:"..design_width,"FIXED_HEIGHT:"..design_height})
//     table.insert(result,{"---","---","---"});
//     for i,v in ipairs(fixed_height_results) do
//         local m=fixed_width_results[i];
//         table.insert(result,{v.resolution,m.w.."*"..m.h,v.w.."*"..v.h});
//     end
//     table.insert(result,{"-",
//         string.format(design_width.."*[%s - %s]",min(fixed_width_results,"h"),max(fixed_width_results,"h")),
//         string.format("[%s - %s]*"..design_height,min(fixed_height_results,"w"),max(fixed_height_results,"w")),
//         });

//     for i,v in ipairs(result) do result[i] = table.concat(v," | ");end
//     result = string.gsub(table.concat(result,"\n"),"%*"," * ");
//     print(result);
// end

// local resolutions = {
// --[[android]]"1280*720","1920*1080","854*480","960*540","800*480","1184*720","1776*1080","2560*1440","1812*1080",
// --[[  ios  ]]"1136*640","1334*750","2208*1242","960*640","2048*1536","2001*1125","1024*768","1920*1080","1704*960"
// }
// caculate(640,1136,resolutions)
// 当你选择fixwidth=640后，高度的可选范围[854, 1139],100%可视区域为：(640,<854)，但图片要设计为(640,>1139)才能完美适配到所有的分辨率。
// 当你选择FixHeight=1136后，宽度的可选范围[639, 852],100%可视区域为：(<639,1136)，但图片要设计为(>852,1136)才能完美适配到所有的分辨率。
