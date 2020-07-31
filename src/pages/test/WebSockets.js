import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WebSockets = () => {
  const initWs = () => {
    var ws = new WebSocket('ws://10.168.1.242:3001');
    // const ws = new WebSocket(
    //   'ws://localhost:3001/socket.io/?EIO=4&transport=websocket',
    // );
    // console.log(ws);
    ws.onopen = () => {
      // connection opened
      console.log('连接服务器成功');
      ws.send('something'); // send a message
    };
    ws.onmessage = (e) => {
      // a message was received
      console.log('连接成功=>', e.data);
      ws.send('连接成功');
    };
    ws.onerror = (e) => {
      // an error occurred
      console.log('连接出错=>', e.message);
    };
    ws.onclose = (e) => {
      // connection closed
      console.log('服务器关闭=>', e.code, e.reason);
    };
  };
  // React.useEffect(() => {
  //   initWs();
  // }, []);
  return (
    <View>
      <Text>sssssssssssss</Text>
      <Text onPress={initWs}>启用wss</Text>
    </View>
  );
};

export default WebSockets;

const styles = StyleSheet.create({});
