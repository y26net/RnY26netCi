/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
  Button,
} from 'react-native';

const Modals = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const onShow = () => {
    console.log('onShow.....');
  };
  return (
    <View style={{marginTop: 22}}>
      <Modal
        onShow={onShow}
        // animationType指定了 modal 的动画类型=>slide 从底部滑入滑出/fade 淡入淡出/none 没有动画，直接蹦出来。
        animationType="slide"
        // transparent 属性是指背景是否透明，默认为白色，将这个属性设为：true 的时候弹出一个透明背景层的modal。
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          alert('Modal has been closed.');
          setModalVisible(false);
        }}>
        <View
          style={{
            marginTop: 10,
            backgroundColor: '#666',
            padding: 10,
            flex: 1,
          }}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text
                style={{
                  padding: 10,
                  backgroundColor: '#ff0000',
                  color: '#fff',
                }}>
                Hide Modal
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={{padding: 10, backgroundColor: '#ff0000', color: '#fff'}}>
          Show Modal
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default Modals;

const styles = StyleSheet.create({});
