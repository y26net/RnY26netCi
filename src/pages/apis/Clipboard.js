//
import React from 'react';
import {StyleSheet, Text, View, Clipboard, Button} from 'react-native';

const Clipboards = () => {
  const [Clird, setClird] = React.useState('');
  const _getContent = async () => {
    const content = await Clipboard.getString();
    setClird(content);
    console.log(content);
  };
  const _setContent = () => {
    Clipboard.setString('hello world2');
  };
  return (
    <View>
      <Text>Clipboard:{Clird}</Text>
      <Button title="获取粘贴板内容" onPress={_getContent} />
      <Button title="设置粘贴板内容" onPress={_setContent} />
    </View>
  );
};

export default Clipboards;

const styles = StyleSheet.create({});
