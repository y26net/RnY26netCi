import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
var RNFS = require('react-native-fs');

const fileDeletion = () => {
  const [Txts, setTxt] = React.useState('');
  const deleteFile = () => {
    var path = RNFS.DocumentDirectoryPath + '/test.txt';
    RNFS.unlink(path)
      .then(() => {
        console.log('FILE DELETED');
        setTxt('FILE DELETED（文件已经删除）');
      })
      // `unlink` will throw an error, if the item to unlink does not exist
      .catch((err) => {
        setTxt(err.message);
        console.log(err.message);
      });
  };
  return (
    <View>
      <Text>File deletion</Text>
      <Button title="删除test.txt文件" onPress={deleteFile} />
      <Text>{Txts}</Text>
    </View>
  );
};

export default fileDeletion;

const styles = StyleSheet.create({});
