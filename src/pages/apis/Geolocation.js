import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ToastAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
const Geolocations = () => {
  const [Location, setLocation] = useState({});
  useEffect(() => {
    // 请求使用中授权
    // Geolocation.requestAuthorization();
    Geolocation.getCurrentPosition((info) => {
      setLocation(info);
      console.log(info);
    });
    // 每当位置更改时，调用成功回调
    // Geolocation.watchPosition((info) => {
    //   console.log(info);
    // });
    // 停止观察设备位置更改
    // Geolocation.stopObserving()
  }, []);
  return (
    <View>
      <Text>Geolocation定位信息</Text>
      <Text>longitude(经度):{Location?.coords?.longitude}</Text>
      <Text>latitude（纬度）:{Location?.coords?.latitude}</Text>
    </View>
  );
};

export default Geolocations;

const styles = StyleSheet.create({
  test: {},
});

// const RealLocal = (x, y, callback) => {
//   let url = `http://api.map.baidu.com/ag/coord/convert?from=0&to=4&x=${x}&y=${y}`;
//   fetch(url)
//     .then((response) => response.json())
//     .then((responseBody) => {
//       if (responseBody == 0) {
//         let x = decodeBase64(responseBody.x);
//         let y = decodeBase64(responseBody.y);
//       } else {
//         ToastAndroid.fail('地理位置转码失败');
//       }
//     })
//     .catch((error) => {
//       ToastAndroid.fail('地理位置转码失败');
//       console.log('定位转换失败', error);
//     });
// };
