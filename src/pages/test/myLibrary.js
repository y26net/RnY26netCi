import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import daolib from 'react-native-dao-lib';
daolib.sampleMethod('Test', 123, function (res) {
  console.log(res);
});
const myLibrarys = () => {
  const [state, setstate] = React.useState('');
  const onSampleMethod = () => {
    daolib.sampleMethod('Test', 123, function (res) {
      setstate(res);
    });
  };
  return (
    <View>
      <Text>react-native-dao-lib</Text>
      <Button title="sampleMethod" onPress={onSampleMethod} />
      <Text>sampleMethod:{state}</Text>
    </View>
  );
};

export default myLibrarys;

const styles = StyleSheet.create({});
