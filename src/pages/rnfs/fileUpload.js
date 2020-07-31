import React from 'react';
import {StyleSheet, Text, View, Button, Platform} from 'react-native';
var RNFS = require('react-native-fs');
const fileUpload = () => {
  const [Txts, setTxts] = React.useState('');
  const fileUploads = () => {
    if (Platform.OS === 'android') {
      alert('文件上传只支持IOS');
      return false;
    }
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
      setTxts('UPLOAD HAS BEGUN! JobId: ' + jobId);
      console.log('UPLOAD HAS BEGUN! JobId: ' + jobId);
    };

    var uploadProgress = (response) => {
      var percentage = Math.floor(
        (response.totalBytesSent / response.totalBytesExpectedToSend) * 100,
      );
      setTxts('UPLOAD IS ' + percentage + '% DONE!');
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
          setTxts('FILES UPLOADED!');
          console.log('FILES UPLOADED!'); // response.statusCode, response.headers, response.body
        } else {
          setTxts('SERVER ERROR');
          console.log('SERVER ERROR');
        }
      })
      .catch((err) => {
        if (err.description === 'cancelled') {
          // cancelled by user
        }
        setTxts(err);
        console.log(err);
      });
  };
  return (
    <View>
      <Text>fileUpload</Text>
      <Button title="文件上传 only ios" onPress={fileUploads} />
      <Text>{Txts}</Text>
    </View>
  );
};

export default fileUpload;

const styles = StyleSheet.create({});
