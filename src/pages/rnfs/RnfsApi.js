import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import RNFS from 'react-native-fs';

const RnfsApi = () => {
  const [Txts, setTxts] = useState('');
  const Basic = () => {
    const RNFSDIR =
      Platform.OS === 'android'
        ? RNFS.DocumentDirectoryPath
        : RNFS.MainBundlePath;
    // get a list of files and directories in the main bundle
    RNFS.readDir(RNFSDIR) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
      .then((result) => {
        console.log('GOT RESULT', result);
        setTxts(JSON.stringify(result));
        // stat the first file
        return Promise.all([RNFS.stat(result[0].path), result[0].path]);
      })
      .then((statResult) => {
        if (statResult[0].isFile()) {
          // if we have a file, read it
          setTxts(JSON.stringify(statResult));
          RNFS.unlink(statResult[0].path);
          return RNFS.readFile(statResult[1], 'utf8');
        }
        return 'no file';
      })
      .then((contents) => {
        // log the file contents
        console.log(contents);
        setTxts(contents);
      })
      .catch((err) => {
        console.log(err.message, err.code);
        // setTxts('message:' + err.message + ',code:' + err.code);
      });
  };
  // 创建写入文件
  const fileCreate = () => {
    // create a path you want to write to
    // :warning: on iOS, you cannot write into `RNFS.MainBundlePath`,
    // but `RNFS.DocumentDirectoryPath` exists on both platforms and is writable
    var path = RNFS.DocumentDirectoryPath + '/test.txt';
    // write the file
    RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
      .then((success) => {
        setTxts('FILE WRITTEN!');
        console.log('FILE WRITTEN!');
      })
      .catch((err) => {
        setTxts(err.message);
        console.log(err.message);
      });
  };
  //文件删除
  const fileDelete = () => {
    // create a path you want to delete
    var path = RNFS.DocumentDirectoryPath + '/test.txt';
    return (
      RNFS.unlink(path)
        .then(() => {
          setTxts('FILE DELETED!');
          console.log('FILE DELETED');
        })
        // `unlink` will throw an error, if the item to unlink does not exist
        .catch((err) => {
          setTxts(err.message);
          console.log(err.message);
        })
    );
  };
  //文件上传
  const fileUpload = () => {
    var uploadUrl = 'http://requestb.in/XXXXXXX'; // For testing purposes, go to http://requestb.in/ and create your own link
    // create an array of objects of the files you want to upload
    var files = [
      {
        name: 'test1',
        filename: 'test1.w4a',
        filepath: RNFS.DocumentDirectoryPath + '/test1.w4a',
        filetype: 'audio/x-m4a',
      },
      {
        name: 'test2',
        filename: 'test2.w4a',
        filepath: RNFS.DocumentDirectoryPath + '/test2.w4a',
        filetype: 'audio/x-m4a',
      },
    ];

    var uploadBegin = (response) => {
      var jobId = response.jobId;
      console.log('UPLOAD HAS BEGUN! JobId: ' + jobId);
    };

    var uploadProgress = (response) => {
      var percentage = Math.floor(
        (response.totalBytesSent / response.totalBytesExpectedToSend) * 100,
      );
      console.log('UPLOAD IS ' + percentage + '% DONE!');
    };

    // upload files
    RNFS.uploadFiles({
      toUrl: uploadUrl,
      files: files,
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      fields: {
        hello: 'world',
      },
      begin: uploadBegin,
      progress: uploadProgress,
    })
      .promise.then((response) => {
        if (response.statusCode == 200) {
          console.log('FILES UPLOADED!'); // response.statusCode, response.headers, response.body
        } else {
          console.log('SERVER ERROR');
        }
      })
      .catch((err) => {
        if (err.description === 'cancelled') {
          // cancelled by user
        }
        console.log(err);
      });
  };
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
  const readDirAssets = () => {
    const RNFSDIR =
      Platform.OS === 'android'
        ? RNFS.DocumentDirectoryPath
        : RNFS.MainBundlePath;
    // get a list of files and directories in the main bundle
    RNFS.readDirAssets(RNFSDIR) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
      .then((result) => {
        setTxts(JSON.stringify(result));
        console.log('GOT RESULT', result);
      });
  };
  // 只读文件名称
  const readdirs = () => {
    const RNFSDIR =
      Platform.OS === 'android'
        ? RNFS.DocumentDirectoryPath
        : RNFS.MainBundlePath;
    // get a list of files and directories in the main bundle
    RNFS.readdir(RNFSDIR) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
      .then((result) => {
        setTxts(JSON.stringify(result));
        console.log('GOT RESULT', result);
      });
  };
  //文件读取
  const readFile = () => {
    var path = RNFS.DocumentDirectoryPath + '/test.txt';
    RNFS.readFile(path, 'utf8') // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
      .then((result) => {
        setTxts(JSON.stringify(result));
        console.log('GOT RESULT', result);
      });
  };
  //
  const stat = () => {
    var path = RNFS.DocumentDirectoryPath + '/test.txt';
    RNFS.stat(path).then((result) => {
      setTxts(JSON.stringify(result));
      console.log('GOT RESULT', result);
    });
  };
  const read = () => {
    var path = RNFS.DocumentDirectoryPath + '/test.txt';
    RNFS.read(path, 5, 2, 'utf8').then((result) => {
      setTxts(JSON.stringify(result));
      console.log('GOT RESULT', result);
    });
  };
  const readFileAssets = () => {
    var path = RNFS.DocumentDirectoryPath + '/test.txt';
    RNFS.readFileAssets(path).then((result) => {
      setTxts(JSON.stringify(result));
      console.log('GOT RESULT', result);
    });
  };
  const readFileRes = () => {
    RNFS.readFileRes('test.txt').then((result) => {
      setTxts(JSON.stringify(result));
      console.log('GOT RESULT', result);
    });
  };
  // 文件写入
  const writeFile = () => {
    var path = RNFS.DocumentDirectoryPath + '/test.txt';
    RNFS.writeFile(path, '这是一段文本，YES', 'utf8')
      .then((success) => {
        console.log('path', path);
        setTxts(path);
      })
      .catch((err) => {
        setTxts(err.message);
        console.log(err.message);
      });
  };
  // 文件追加
  const appendFile = () => {
    var path = RNFS.DocumentDirectoryPath + '/test.txt';
    RNFS.appendFile(path, '这是一段文本，YES', 'utf8')
      .then((success) => {
        console.log('path', path);
        setTxts(path);
      })
      .catch((err) => {
        setTxts(err.message);
        console.log(err.message);
      });
  };
  const write = () => {
    var path = RNFS.DocumentDirectoryPath + '/test.txt';
    RNFS.write(path, '这是一段文本，YES', 5, 3, 'utf8')
      .then((success) => {
        console.log('path', path);
        setTxts(path);
      })
      .catch((err) => {
        setTxts(err.message);
        console.log(err.message);
      });
  };
  const moveFile = () => {
    var path = RNFS.DocumentDirectoryPath + '/test.txt';
    var despath = RNFS.DocumentDirectoryPath + '/aa/test.txt';
    RNFS.moveFile(path, despath);
  };
  const copyFile = () => {
    var path = RNFS.DocumentDirectoryPath + '/test.txt';
    var despath = RNFS.DocumentDirectoryPath + '/aa/test.txt';
    RNFS.copyFile(path, despath);
  };
  const unlink = () => {
    var path = RNFS.DocumentDirectoryPath + '/test.txt';
    RNFS.unlink(path);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>RnfsApi</Text>
        <Button title="测试" onPress={() => alert('测试')} />
        <View style={{padding: 5}} />
        <Button title="Basic" onPress={Basic} />
        <View style={{padding: 5}} />
        <Button title="File creation" onPress={fileCreate} />
        <View style={{padding: 5}} />
        <Button title="File deletion" onPress={fileDelete} />
        <View style={{padding: 5}} />
        <Button
          title="File upload (Android and IOS only)"
          onPress={fileUpload}
        />
        <View style={{padding: 5}} />
        <Button title="readDir" onPress={readDir} />
        <View style={{padding: 5}} />
        <Button title="readDirAssets only Android" onPress={readDirAssets} />
        <View style={{padding: 5}} />
        <Button title="readdir (只包含文件名称)" onPress={readdirs} />
        <View style={{padding: 5}} />
        <Button title="readFile(文件读取)" onPress={readFile} />
        <View style={{padding: 5}} />
        <Button title="stat" onPress={stat} />
        <View style={{padding: 5}} />
        <Button
          title="read (filepat\length\positio\encodingOrOptions)"
          onPress={read}
        />
        <View style={{padding: 5}} />
        <Button title="readFileAssets only android" onPress={readFileAssets} />
        <View style={{padding: 5}} />
        <Button title="readFileRes" onPress={readFileRes} />
        <View style={{padding: 5}} />
        <Button title="writeFile" onPress={writeFile} />
        <View style={{padding: 5}} />
        <Button title="appendFile" onPress={appendFile} />
        <View style={{padding: 5}} />
        <Button title="write" onPress={write} />
        <View style={{padding: 5}} />
        <Button title="moveFile" onPress={moveFile} />
        <View style={{padding: 5}} />
        <Button title="copyFile" onPress={copyFile} />
        <View style={{padding: 5}} />
        <Button title="unlink" onPress={unlink} />
        <View style={{padding: 5}} />
        <Text>{Txts}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RnfsApi;

const styles = StyleSheet.create({});
