/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Button,
  View,
  Text,
  //   Animated,
  //   Easing,
  //   TouchableWithoutFeedback,
} from 'react-native';

const RNCameraSale = ({route, navigation}) => {
  //   console.log(route, navigation);
  const {url} = route.params;
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>dddddddddddddddd=>{url}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
    //   let opacity = new Animated.Value(0);
    //   useEffect(() => {
    //     Animated.timing(opacity, {
    //       toValue: 1,
    //       easing: Easing.linear,
    //       duration: 3000,
    //     }).start();
    //   }, []);
    //   return (
    //     <SafeAreaView>
    //       <ScrollView>
    //         <View>
    //           <Text>测试RNCameraSale</Text>
    //         </View>
    //         <TouchableWithoutFeedback>
    //           <Animated.View style={[{opacity: opacity}]}>
    //             <Text
    //               style={{fontSize: 16, backgroundColor: 'red', marginTop: 200}}>
    //               渐变text
    //             </Text>
    //           </Animated.View>
    //         </TouchableWithoutFeedback>
    //       </ScrollView>
    //     </SafeAreaView>
  );
};

export default RNCameraSale;
