import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Platform} from 'react-native';

const Basic = () => {
  const [Res, setRes] = useState('');
  const test = () => {
    // require the module
    var RNFS = require('react-native-fs');
    // get a list of files and directories in the main bundle
    // Platform.OS==='android'/Platform.OS==='ios'
    const RNFSDIR =
      Platform.OS === 'android'
        ? RNFS.DocumentDirectoryPath
        : RNFS.MainBundlePath;
    // readDir===========================================================
    // ctime: date;     // The creation date of the file (iOS only)
    // mtime: date;     // The last modified date of the file
    // name: string;     // The name of the item
    // path: string;     // The absolute path to the item
    // size: string;     // Size in bytes
    // isFile: () => boolean;        // Is the file just a file?
    // isDirectory: () => boolean;   // Is the file a directory?
    RNFS.readDir(RNFSDIR) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
      .then((result) => {
        console.log('GOT RESULT', result);
        setRes(JSON.stringify(result));
        //   [{
        //     "ctime": null,
        //     "isDirectory": [Function isDirectory],
        //     "isFile": [Function isFile],
        //     "mtime": 2020 - 05 - 27T07: 38: 43.000Z,
        //     "name": "1590565121664文件名.png",
        //     "path": "/data/user/0/com.rny26netci/files/1590565121664文 件名.png",
        //     "size": 24838
        // }, {...  }]
        // stat the first file
        return Promise.all([RNFS.stat(result[0].path), result[0].path]);
      })
      .then((statResult) => {
        if (statResult[0].isFile()) {
          // if we have a file, read it
          // return RNFS.readFile(statResult[1], 'utf8');
          // return RNFS.readFile(statResult[0], 'utf8');
          console.log(statResult[0]);
          // RNFS.unlink(statResult[0]['path']);
        }
        return 'no file';
      });
    // .then((contents) => {
    //   // log the file contents
    //   console.log(contents);
    // });
    // .catch((err) => {
    //   console.log(err.message, err.code);
    // });
  };
  return (
    <View>
      <Text>Basic</Text>
      <Button title="测试Bacic(注意android/ios)" onPress={test} />
      <Text>{Res}</Text>
    </View>
  );
};

export default Basic;

const styles = StyleSheet.create({});

// {
//   "CachesDirectoryPath": "/data/user/0/com.rny26netci/cache",
//   "DocumentDirectoryPath": "/data/user/0/com.rny26netci/files",
//   "DownloadDirectoryPath": "/storage/emulated/0/Download",
//   "ExternalCachesDirectoryPath": "/storage/emulated/0/Android/data/com.rny26netci/cache",
//   "ExternalDirectoryPath": "/storage/emulated/0/Android/data/com.rny26netci/files",
//   "ExternalStorageDirectoryPath": "/storage/emulated/0",
//   "FileProtectionKeys": undefined,
//   "LibraryDirectoryPath": undefined,
//   "MainBundlePath": undefined,
//   "PicturesDirectoryPath": "/storage/emulated/0/Pictures",
//   "TemporaryDirectoryPath": "/data/user/0/com.rny26netci/cache",
//   "appendFile": [Function appendFile],
//   "completeHandlerIOS": [Function completeHandlerIOS],
//   "copyAssetsFileIOS": [Function copyAssetsFileIOS],
//   "copyAssetsVideoIOS": [Function copyAssetsVideoIOS],
//   "copyFile": [Function copyFile],
//   "copyFileAssets": [Function copyFileAssets],
//   "copyFileRes": [Function copyFileRes],
//   "downloadFile": [Function downloadFile],
//   "exists": [Function exists],
//   "existsAssets": [Function existsAssets],
//   "existsRes": [Function existsRes],
//   "getAllExternalFilesDirs": [Function getAllExternalFilesDirs],
//   "getFSInfo": [Function getFSInfo],
//   "hash": [Function hash],
//   "isResumable": [Function isResumable],
//   "mkdir": [Function mkdir],
//   "moveFile": [Function moveFile],
//   "pathForBundle": [Function pathForBundle],
//   "pathForGroup": [Function pathForGroup],
//   "read": [Function read],
//   "readDir": [Function readDir],
//   "readDirAssets": [Function readDirAssets],
//   "readFile": [Function readFile],
//   "readFileAssets": [Function readFileAssets],
//   "readFileRes": [Function readFileRes],
//   "readdir": [Function readdir],
//   "resumeDownload": [Function resumeDownload],
//   "scanFile": [Function scanFile],
//   "setReadable": [Function setReadable],
//   "stat": [Function stat],
//   "stopDownload": [Function stopDownload],
//   "stopUpload": [Function stopUpload],
//   "touch": [Function touch],
//   "unlink": [Function unlink],
//   "uploadFiles": [Function uploadFiles],
//   "write": [Function write],
//   "writeFile": [Function writeFile]
// }
