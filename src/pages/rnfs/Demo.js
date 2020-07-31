import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import RNFS from 'react-native-fs';
const Demo = () => {
  const [rnfsApi, setrnfsApi] = useState('');
  const [progressNum, setprogressNum] = useState(0);
  const [readTxt, readTxtResult] = useState('');
  // 下载文件
  downloadFile = () => {
    // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
    // 图片
    // const downloadDest = `${RNFS.MainBundlePath}/${((Math.random() * 1000) | 0)}.jpg`;
    // const formUrl = 'http://img.kaiyanapp.com/c7b46c492261a7c19fa880802afe93b3.png?imageMogr2/quality/60/format/jpg';

    // 文件
    // const downloadDest = `${RNFS.MainBundlePath}/${((Math.random() * 1000) | 0)}.zip`;
    // const formUrl = 'http://files.cnblogs.com/zhuqil/UIWebViewDemo.zip';

    // 视频
    // const downloadDest = `${RNFS.MainBundlePath}/${((Math.random() * 1000) | 0)}.mp4`;
    // http://gslb.miaopai.com/stream/SnY~bbkqbi2uLEBMXHxGqnNKqyiG9ub8.mp4?vend=miaopai&
    // https://gslb.miaopai.com/stream/BNaEYOL-tEwSrAiYBnPDR03dDlFavoWD.mp4?vend=miaopai&
    // const formUrl = 'https://gslb.miaopai.com/stream/9Q5ADAp2v5NHtQIeQT7t461VkNPxvC2T.mp4?vend=miaopai&';
    // 音频
    // const downloadDest = `${RNFS.MainBundlePath}/${
    //   (Math.random() * 1000) | 0
    // }.mp3`;
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
  // 写入文件
  const writeFiles = () => {
    // create a path you want to write to
    // const path = RNFS.MainBundlePath + '/test.txt';
    const path = RNFS.DocumentDirectoryPath + '/test.txt';
    // const path = `${RNFS.DocumentDirectoryPath}/${
    //   (Math.random() * 1000) | 0
    // }.txt`;
    // write the file
    RNFS.writeFile(path, '这是一段文本，YES', 'utf8')
      .then((success) => {
        console.log('path', path);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  //读取文本
  const readFile = () => {
    // create a path you want to delete
    // const path = RNFS.MainBundlePath + '/test.txt';
    const path = RNFS.DocumentDirectoryPath + '/test.txt';
    // const path = `${RNFS.DocumentDirectoryPath}/${
    //   (Math.random() * 1000) | 0
    // }.txt`;
    return RNFS.readFile(path)
      .then((result) => {
        console.log(result);
        readTxtResult(result);
      })
      .catch((err) => {
        readTxtResult(err.message);
        console.log(err.message);
      });
  };
  //在已有的txt上添加新的文本
  const appendFile = () => {
    // const path = RNFS.MainBundlePath + '/test.txt';
    const path = RNFS.DocumentDirectoryPath + '/test.txt';
    return RNFS.appendFile(path, '新添加的文本', 'utf8')
      .then((success) => {
        console.log('success');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  /*删除文件*/
  const deleteFile = () => {
    // create a path you want to delete
    // const path = RNFS.MainBundlePath + '/test.txt';
    // const path = RNFS.DocumentDirectoryPath + '/341.txt';
    const path = RNFS.DocumentDirectoryPath + '/test.txt';
    return (
      RNFS.unlink(path)
        .then(() => {
          console.log('FILE DELETED');
        })
        // `unlink` will throw an error, if the item to unlink does not exist
        .catch((err) => {
          console.log(err.message);
        })
    );
  };
  /*上传文件 only iOS*/
  const uploadFile = () => {
    // const uploadSrc = `${RNFS.MainBundlePath}/test.txt`;
    const path = RNFS.DocumentDirectoryPath + '/test.txt';
    const uploadUrl = 'http://buz.co/rnfs/upload-tester.php';

    const options = {
      toUrl: uploadUrl,
      files: [
        {
          name: 'myfile',
          filename: 'test.txt',
          filepath: uploadSrc,
          filetype: 'text/plain',
        },
      ],
      background: true,
      method: 'POST', // PUT
      begin: (res) => {
        console.log('begin', res);
      },
      progress: (res) => {
        console.log('progress', res);
      },
    };

    const ret = RNFS.uploadFiles(options);

    return ret.promise
      .then((res) => {
        const response = JSON.parse(res.body);
        console.log(response);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };
  //打印出常用路径
  const printPaths = () => {
    //   console.log('MainBundlePath=' + RNFS.MainBundlePath);
    //   console.log('CachesDirectoryPath=' + RNFS.CachesDirectoryPath);
    //   console.log('DocumentDirectoryPath=' + RNFS.DocumentDirectoryPath);
    //   console.log('TemporaryDirectoryPath=' + RNFS.TemporaryDirectoryPath);
    //   console.log('LibraryDirectoryPath=' + RNFS.LibraryDirectoryPath);
    //   console.log('ExternalDirectoryPath=' + RNFS.ExternalDirectoryPath);
    //   console.log(
    //     'ExternalStorageDirectoryPath=' + RNFS.ExternalStorageDirectoryPath,
    //   );

    var aa = [
      'CachesDirectoryPath',
      'DocumentDirectoryPath',
      'DownloadDirectoryPath',
      'ExternalCachesDirectoryPath',
      'ExternalDirectoryPath',
      'ExternalStorageDirectoryPath',
      'FileProtectionKeys',
      'LibraryDirectoryPath',
      'MainBundlePath',
      'PicturesDirectoryPath',
      'TemporaryDirectoryPath',
    ];
    aa.map((v, i) => {
      // console.log(v, i);
      console.log(v + '=' + RNFS[v]);
    });
  };
  useEffect(() => {
    // require the module
    // console.log(Object.keys(RNFS).join());
    setrnfsApi(Object.keys(RNFS).join());
  }, []);
  return (
    <View>
      <Text>Demo</Text>
      <Text>可使用API:{rnfsApi}</Text>
      <Button
        title={`下载文件（进度:${progressNum}%）`}
        onPress={downloadFile}
      />
      <View style={{padding: 5}} />
      <Button title="将文本写入本地 txt" onPress={writeFiles} />
      <View style={{padding: 5}} />
      <Button title="读取txt文件内容" onPress={readFile} />
      <View style={{padding: 5}} />
      <Button title="在已有的txt上添加新的文本" onPress={appendFile} />
      <View style={{padding: 5}} />
      <Button title="删除文件" onPress={deleteFile} />
      <View style={{padding: 5}} />
      <Button title="上传文件 only iOS" onPress={uploadFile} />
      <View style={{padding: 5}} />
      <Text>{readTxt}</Text>
      <View style={{padding: 5}} />
      <Button title="获得文件夹路径" onPress={printPaths} />
    </View>
  );
};

export default Demo;

const styles = StyleSheet.create({});
