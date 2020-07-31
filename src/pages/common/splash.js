/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';

export default function Splash({navigation}) {
  const [num, setNum] = useState(3); // 倒计时数字
  const [isSend, setIsSend] = useState(true); // 是否启用倒计时
  useEffect(() => {
    let timer = 0;
    if (isSend && num !== 0) {
      timer = setInterval(() => {
        // 这时候的num由于闭包的原因，一直是0，所以这里不能用setNum(num-1)
        setNum((n) => {
          if (n === 1) {
            setIsSend(false);
            clearInterval(timer);
            navigation.navigate('Main');
          }
          return n - 1;
        });
      }, 1000);
    }
    return () => {
      // 组件销毁时，清除定时器
      clearInterval(timer);
    };
  }, [isSend]);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          //点击‘跳过’按钮，同样可以实现进入项目的效果
          navigation.navigate('Main');
        }}>
        <Text style={{fontSize: 14, color: 'white'}}>跳过{num}s</Text>
      </TouchableOpacity>
      <Image source={require('../../assets/img/login.png')} />
      <Text style={[styles.logoText]}>税务信用云</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  btn: {
    borderRadius: 20,
    position: 'absolute',
    right: 20,
    top: 20,
    justifyContent: 'center',
    backgroundColor: '#999',
    width: 75,
    height: 40,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 32,
    color: '#000000',
    fontWeight: 'bold',
  },
});

// -===============================================================================
// const useInterval = (callback, delay) => {
//   const savedCallback = useRef();
//   // 保存新回调
//   useEffect(() => {
//     savedCallback.current = callback;
//   });
//   // 建立 interval
//   useEffect(() => {
//     function tick() {
//       savedCallback.current();
//     }
//     if (delay !== null) {
//       let id = setInterval(tick, delay);
//       return () => clearInterval(id);
//     }
//   }, [delay]);
// };
// -===============================================================================
// /**
//  * Created by  on 2020/05/09.
//  * 闪屏页，一般的项目都会带闪屏页
//  * 1.5秒渐变后跳到主页
//  */
// import React, {Component, PropTypes} from 'react';
// import {View, Animated, Image, Dimensions} from 'react-native';
// var WINDOW_WIDTH = Dimensions.get('window').width;

// export default class Splash extends Component {
//   static propTypes = {
//     //图片资源
//     source: Image.source,
//     //动画执行完毕回调
//     animateEnd: PropTypes.func,
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       fadeAnim: new Animated.Value(0.4),
//     };
//   }

//   componentDidMount() {
//     const {animateEnd} = this.props;
//     Animated.timing(this.state.fadeAnim, {
//       toValue: 1,
//       duration: 1500,
//     }).start(() => {
//       //动画执行完毕
//       if (animateEnd) {
//         animateEnd();
//       }
//     });
//   }

//   render() {
//     const {source} = this.props;
//     return (
//       <View style={{flex: 1}}>
//         <Animated.Image
//           style={{
//             flex: 1,
//             width: WINDOW_WIDTH,
//             height: 1,
//             opacity: this.state.fadeAnim,
//           }}
//           source={source}
//         />
//       </View>
//     );
//   }
// }

// // _animateEnd = ()=>{
// //     //动画完成的回调
// // }
// // render() {
// //     return (
// //         <Splash source={require('../res/imgs/splash.png')} animateEnd={this._animateEnd}/>
// //     );
// // }
