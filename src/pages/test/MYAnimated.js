/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */

// Animated 提供了4个可动画的组件:
// Animated.View
// Animated.Text
// Animated.Image
// Animated.ScrollView
// 渐变效果(opacity)========================================================
// import React from 'react';

// import {
//   StyleSheet,
//   Animated,
//   Easing,
//   TouchableWithoutFeedback,
//   Text,
// } from 'react-native';

// export default class MYAnimated extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.opacity = new Animated.Value(0);
//   }

//   componentDidMount() {
//     Animated.timing(this.opacity, {
//       toValue: 1,
//       easing: Easing.linear,
//       duration: 3000,
//     }).start();
//   }

//   render() {
//     return (
//       <TouchableWithoutFeedback>
//         <Animated.View style={[styles.contain, {opacity: this.opacity}]}>
//           <Text style={{fontSize: 16, backgroundColor: 'red', marginTop: 200}}>
//             渐变text
//           </Text>
//         </Animated.View>
//       </TouchableWithoutFeedback>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   contain: {},
// });

// 平移效果(translate)========================================
// import React from 'react';

// import {
//   StyleSheet,
//   Animated,
//   Easing,
//   TouchableWithoutFeedback,
//   Text,
// } from 'react-native';

// export default class MYAnimated extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.xPosition = new Animated.Value(0);
//   }

//   componentDidMount() {
//     Animated.timing(this.xPosition, {
//       toValue: 1,
//       easing: Easing.linear,
//       duration: 3000,
//     }).start();
//   }

//   render() {
//     return (
//       <TouchableWithoutFeedback>
//         <Animated.View
//           style={[
//             styles.contain,
//             {
//               transform: [
//                 {
//                   // 偏移效果
//                   translateY: this.xPosition.interpolate({
//                     inputRange: [0, 1],
//                     outputRange: [50, 0],
//                   }),
//                 },
//               ],
//             },
//           ]}>
//           <Text style={{fontSize: 16, backgroundColor: 'red', marginTop: 200}}>text</Text>
//         </Animated.View>
//       </TouchableWithoutFeedback>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   contain: {},
// });

// 旋转效果(transform)============================================
// import React from 'react';

// import {
//   StyleSheet,
//   Animated,
//   Easing,
//   TouchableWithoutFeedback,
//   Text,
// } from 'react-native';

// export default class MYAnimated extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.xPosition = new Animated.Value(0);
//   }

//   componentDidMount() {
//     Animated.timing(this.xPosition, {
//       toValue: 1,
//       easing: Easing.linear,
//       duration: 3000,
//     }).start();
//   }

//   render() {
//     return (
//       <TouchableWithoutFeedback>
//         <Animated.View
//           style={[
//             styles.contain,
//             {
//               transform: [
//                 {
//                   // 旋转效果
//                   rotate: this.xPosition.interpolate({
//                     inputRange: [0, 1], //[0, 0.5, 1]
//                     outputRange: ['0deg', '360deg'], // ['0deg', '360deg','0deg']
//                   }),
//                 },
//               ],
//             },
//           ]}>
//           <Text style={{fontSize: 16, backgroundColor: 'red', marginTop: 200}}>
//             text
//           </Text>
//         </Animated.View>
//       </TouchableWithoutFeedback>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   contain: {},
// });

// style效果(fontSize、marginTop...)==================================
// import React from 'react';

// import {
//   StyleSheet,
//   Animated,
//   Easing,
//   TouchableWithoutFeedback,
//   Text,
// } from 'react-native';

// export default class MYAnimated extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.fontsize = new Animated.Value(0);
//   }

//   componentDidMount() {
//     Animated.timing(this.fontsize, {
//       toValue: 1,
//       easing: Easing.linear,
//       duration: 3000,
//     }).start();
//   }

//   render() {
//     return (
//       <TouchableWithoutFeedback>
//         <Animated.Text
//           style={[
//             styles.contain,
//             {
//               fontSize: this.fontsize.interpolate({
//                 inputRange: [0, 1],
//                 outputRange: [18, 36],
//               }),
//             },
//           ]}>
//           text
//         </Animated.Text>
//       </TouchableWithoutFeedback>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   contain: {},
// });

// 一个简单的Moving动画==========================
// import React, {Component, useState} from 'react';
// import {TouchableOpacity, Animated, Easing, View, Text} from 'react-native';
// export default class MoveViewTestComponent extends Component {
//   toValue = 0;
//   constructor(props) {
//     super(props);
//     this.state = {
//       moveValue: new Animated.Value(0),
//     };
//   }

//   pressView = () => {
//     this.toValue = this.toValue === 0 ? 1 : 0;
//     Animated.timing(
//       this.state.moveValue, // 初始化从0开始
//       {
//         toValue: this.toValue, // 目标值
//         duration: 1000, // 时间间隔
//         easing: Easing.bounce, // 缓动函数
//       },
//     ).start();
//   };

//   render() {
//     let {moveValue} = this.state;

//     let toValue = moveValue.interpolate({
//       inputRange: [0, 1],
//       outputRange: ['10%', '60%'],
//     });
//     return (
//       <TouchableOpacity onPress={this.pressView}>
//         <Animated.View // 使用专门的可动画化的View组件
//           style={{
//             width: 100,
//             height: 50,
//             backgroundColor: 'red',
//             left: toValue,
//           }}>
//           <Text style={{color: '#fff'}}> Tap Me Move </Text>
//         </Animated.View>
//       </TouchableOpacity>
//     );
//   }
// }
// export default function NYAnimated() {
//   const [animateonValue, setanimateonValue] = useState(0);
//   const pressView = () => {
//     //     this.toValue = this.toValue === 0 ? 1 : 0;
//     Animated.timing(
//       animateonValue, // 初始化从0开始
//       {
//         toValue: 100, // 目标值
//         duration: 1000, // 时间间隔
//         easing: Easing.bounce, // 缓动函数
//       },
//     ).start();
//   };
//   return (
//     <TouchableOpacity onPress={pressView}>
//       <View
//         style={{
//           height: 20,
//           flexDirection: 'row-reverse',
//           justifyContent: 'center',
//         }}>
//         <Animated.View
//           style={{
//             height: 100,
//             width: 100,
//             borderWidth: 10,
//             borderColor: '#ff000',
//             borderTopColor: '#444444',
//             borderRadius: animateonValue,
//           }}
//         />
//       </View>
//     </TouchableOpacity>
//   );
// }

// 使用Easing函数指定相关的动画效果==============================================
// import React, {Component} from 'react';
// // import MoveView from './MoveView'
// import {Animated, Easing, Text, TouchableOpacity, View} from 'react-native';

// export default class TestMoveView extends Component {
//   animatedKey = [
//     'linear',
//     'quad',
//     'cubic',
//     'sin',
//     'exp',
//     'bounce',
//     'poly-5',
//     'elastic-2',
//     'back-2',
//     'bezier',
//   ];

//   animatedEasingType = [
//     Easing.linear,
//     Easing.quad,
//     Easing.cubic,
//     Easing.sin,
//     Easing.exp,
//     Easing.bounce,
//     Easing.poly(5),
//     Easing.elastic(2),
//     Easing.back(2),
//     Easing.bezier(0, 1.6, 1, -0.67),
//   ];

//   click = () => {
//     for (let i = 0; i < this.animatedKey.length; i++) {
//       this.refs[this.animatedKey[i]].pressView();
//     }
//   };

//   item = (title, easing) => {
//     return (
//       <MoveView easing={easing} ref={title}>
//         <Text style={{fontSize: 17, textAlign: 'center'}}>{title}</Text>
//       </MoveView>
//     );
//   };

//   createItems = () => {
//     let items = [];
//     for (let i = 0; i < this.animatedKey.length; i++) {
//       items.push(this.item(this.animatedKey[i], this.animatedEasingType[i]));
//     }
//     return items;
//   };

//   render() {
//     console.log('lizelu');
//     return (
//       <View style={{flex: 1, justifyContent: 'center'}}>
//         <TouchableOpacity onPress={this.click}>
//           <Text>Tap Me</Text>
//         </TouchableOpacity>
//         {this.createItems()}
//       </View>
//     );
//   }
// }

// // MoveView

// // type MoveViewProps = {
// //   easing?: (value: number) => number,
// // };

// class MoveView extends Component {
//   toValue = 0;
//   state = {
//     moveValue: new Animated.Value(0),
//   };

//   pressView = () => {
//     this.toValue = this.toValue === 0 ? 1 : 0;
//     Animated.timing(
//       this.state.moveValue, // 初始化从0开始
//       {
//         toValue: this.toValue, // 目标值
//         duration: 1000, // 时间间隔
//         easing: this.props.easing, // 动画效果
//       },
//     ).start();
//   };

//   render() {
//     let {moveValue} = this.state;
//     let toValue = moveValue.interpolate({
//       inputRange: [0, 1],
//       outputRange: ['10%', '70%'],
//     });
//     return (
//       <TouchableOpacity onPress={this.pressView}>
//         <Animated.View // 使用专门的可动画化的View组件
//           style={[
//             {
//               width: 80,
//               height: 30,
//               backgroundColor: 'powderblue',
//               margin: 2,
//               left: toValue, // 动画的目标值
//             },
//           ]}>
//           {this.props.children}
//         </Animated.View>
//       </TouchableOpacity>
//     );
//   }
// }

// 动画的插值函数及transform==================================
import React, {Component, useEffect, useState} from 'react';
import {Animated, Easing, Text, View} from 'react-native';
export default function mya() {
  //   let [aniVal, setaniVal] = useState(new Animated.Value(0));
  let aniVal = new Animated.Value(0);
  useEffect(() => {
    //启动动画
    startAnim();
  }, []);
  startAnim = () => {
    // 循环函数
    Animated.loop(
      Animated.timing(aniVal, {
        toValue: 1,
        duration: 2000,
        //动画效果
        easing: Easing.circle,
      }),
    ).start();
    // 启动
  };
  let totateZVal = aniVal.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <Animated.View
      style={[
        {
          transform: [
            {
              rotateZ: totateZVal,
            },
          ],
        },
      ]}>
      <Text style={{fontSize: 16, backgroundColor: 'blue', marginTop: 200}}>
        text
      </Text>
    </Animated.View>
  );
}

// export default function MYA() {
//   let aniVal = new Animated.Value(0);
//   useEffect(() => {
//     //启动动画
//     startAnim();
//   }, []);
//   startAnim = () => {
//     // 循环函数
//     Animated.loop(
//       Animated.timing(aniVal, {
//         toValue: 1,
//         duration: 2000,
//         //动画效果
//         easing: Easing.circle,
//       }),
//     ).start();
//     // 启动
//   };
//   //移动
//   let trV = aniVal.interpolate({
//     inputRange: [0, 1],
//     outputRange: [0, 50],
//   });
//   //   缩放
//   let scV = aniVal.interpolate({
//     inputRange: [0, 1],
//     outputRange: [0, 4],
//   });
//   //   旋转
//   let roV = aniVal.interpolate({
//     inputRange: [0, 0.5, 1],
//     outputRange: ['0deg', '240deg', '360deg'],
//   });
//   //   <View style={{height: 150, marginTop: 10}}>
//   return (
//     <Animated.View
//       style={[
//         {height: 100, width: 100, backgroundColor: 'red', marginLeft: 20},
//         {
//           transform: [{translateX: trV}, {scale: scV}, {rotateZ: roV}],
//         },
//       ]}>
//       <Text style={{fontSize: 16, backgroundColor: 'blue', marginTop: 200}}>
//         text
//       </Text>
//     </Animated.View>
//   );
//   //   </View>
// }
