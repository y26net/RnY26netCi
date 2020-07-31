/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import RNFS from 'react-native-fs';

// MainBundlePath（String）主包目录的绝对路径（Android上不可用）
// CachesDirectoryPath（String）高速缓存目录的绝对路径
// DocumentDirectoryPath （String）文档目录的绝对路径
// TemporaryDirectoryPath（String）临时目录的绝对路径（回到Android上的Caching-Directory）
// LibraryDirectoryPath（String）NSLibraryDirectory的绝对路径（仅适用于iOS）
// ExternalDirectoryPath（String）外部文件，共享目录的绝对路径（仅限android）
// ExternalStorageDirectoryPath（String）外部存储的绝对路径，共享目录（仅限android）
// let dirs = Platform.OS === 'ios' ? RNFS.LibraryDirectoryPath : RNFS.ExternalDirectoryPath; //外部文件，共享目录的绝对路径（仅限android）
// const downloadDest = `${dirs}/${((Math.random() * 10000000) | 0)}.jpg`;

const cameraroll = () => {
  const [Txts, setTxts] = useState('');
  const [progressNum, setprogressNum] = useState(0);
  const [photos, setphotos] = useState({});
  //读取目录
  const readDir = () => {
    const RNFSDIR =
      Platform.OS === 'android'
        ? RNFS.DocumentDirectoryPath
        : RNFS.MainBundlePath;
    // get a list of files and directories in the main bundle
    RNFS.readDir(RNFSDIR) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
      .then((result) => {
        setTxts(JSON.stringify(result));
        console.log('GOT RESULT', result);
      });
  };
  //保存图片
  const savePhoto = () => {
    const saveImageUrl =
      'https://xintongmove.oss-cn-shenzhen.aliyuncs.com/bankproducts/1.png';
    const RNFS = require('react-native-fs'); //文件处理
    const storeLocation = `${RNFS.DocumentDirectoryPath}`;
    // let pathName = new Date().getTime() + '-拍照.png';
    let pathName = 'saveImg.png';
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
  };
  //保存视频
  const saveVideo = () => {
    //   CameraRoll.save(tag, { type, album })
    //视频
    const downloadDest = `${RNFS.DocumentDirectoryPath}/${
      (Math.random() * 1000) | 0
    }.mp4`;
    const formUrl =
      'https://xintongmove.oss-cn-shenzhen.aliyuncs.com/video/1566819412695.mp4';

    const options = {
      fromUrl: formUrl,
      toFile: downloadDest,
      background: true,
      begin: (res) => {
        console.log('begin', res);
        console.log('contentLength:', res.contentLength / 1024 / 1024, 'M');
      },
      progress: (res) => {
        let pro = res.bytesWritten / res.contentLength;
        setprogressNum((pro * 100).toFixed(0));
      },
    };
    try {
      const ret = RNFS.downloadFile(options);
      ret.promise
        .then((res) => {
          console.log('success', res);
          console.log('file://' + downloadDest);
          // 例如保存视频
          // CameraRoll.saveToCameraRoll(downloadDest)
          CameraRoll.save(downloadDest, {type: 'video', album: 'swxyy'})
            .then(() => {
              alert('视频已保存到本地');
            })
            .catch(() => {
              alert('视频保存失败');
            });
        })
        .catch((err) => {
          console.log('err', err);
        });
    } catch (e) {
      console.log(error);
    }
  };
  //获取专题
  const getAlbums = () => {
    // assetType : {string} :=>    All // default/ Videos/   Photos
    CameraRoll.getAlbums({assetType: 'All'}).then((res) => {
      console.log(res);
    });
  };
  const _handleButtonPress = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
    })
      .then((r) => {
        setphotos({photos: r.edges});
      })
      .catch((err) => {
        //Error Loading Images
      });
  };
  return (
    <SafeAreaView>
      {/* <ScrollView> */}
      <Text>RnfsApi</Text>
      <Button title="测试" onPress={() => alert('测试')} />
      <View style={{padding: 5}} />
      <Button title="readDir" onPress={readDir} />
      <View style={{padding: 5}} />
      <Button title="savePhoto(保存图片)" onPress={savePhoto} />
      <View style={{padding: 5}} />
      <Button
        title={`saveVideo(保存视频=>进度:${progressNum}%)`}
        onPress={saveVideo}
      />
      <View style={{padding: 5}} />
      <Button title="getAlbums" onPress={getAlbums} />
      <View style={{padding: 5}} />
      <Text>{Txts}</Text>
      <Button title="getPhotos (Load Images)" onPress={_handleButtonPress} />
      <ScrollView>
        {photos?.photos?.map((p, i) => {
          return (
            <Image
              key={i}
              style={{
                height: 200,
              }}
              source={{uri: p.node.image.uri}}
            />
          );
        })}
      </ScrollView>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default cameraroll;

const styles = StyleSheet.create({});
