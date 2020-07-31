import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
var RNFS = require('react-native-fs');

const fileCreate = () => {
  const [Txt, setTxt] = React.useState('');
  const [readTxt, serreadTxt] = React.useState('');
  const createFile = () => {
    // require the module
    // create a path you want to write to
    // :warning: on iOS, you cannot write into `RNFS.MainBundlePath`,
    // but `RNFS.DocumentDirectoryPath` exists on both platforms and is writable
    var path = RNFS.DocumentDirectoryPath + '/test.txt';
    // write the file
    RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
      .then((success) => {
        setTxt('FILE WRITTEN(文件创建完成)!');
        console.log('FILE WRITTEN!');
      })
      .catch((err) => {
        setTxt(err.message);
        console.log(err.message);
      });
  };
  const readFile = () => {
    const path = RNFS.DocumentDirectoryPath + '/test.txt';
    return RNFS.readFile(path)
      .then((result) => {
        console.log(result);
        serreadTxt(result);
      })
      .catch((err) => {
        serreadTxt(err.message);
        console.log(err.message);
      });
  };
  return (
    <View>
      <Text>fileCreate</Text>
      <Button title="创建文本" onPress={createFile} />
      <Text>{Txt}</Text>
      <Button title="读取文本" onPress={readFile} />
      <Text>{readTxt}</Text>
    </View>
  );
};

export default fileCreate;

const styles = StyleSheet.create({});
