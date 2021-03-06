/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View, Picker} from 'react-native';

const Pickers = () => {
  const [language, setLanguage] = useState('js');
  const pkItem = [
    {
      label: 'Java',
      value: 'java',
    },
    {
      label: 'JavaScript',
      value: 'js',
    },
    {
      label: 'C#',
      value: 'c',
    },
    {
      label: 'Node脚本',
      value: 'nodejs',
    },
  ];
  return (
    <View>
      <Picker
        // 默认选中的值。可以是字符串或整数
        selectedValue={language}
        style={{
          height: 50,
          width: 200,
          backgroundColor: '#ff0000',
          color: '#fff',
        }}
        onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}>
        {pkItem.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
        {/* <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" /> */}
      </Picker>
      <Text>选择的值：{language}</Text>
    </View>
  );
};

export default Pickers;

const styles = StyleSheet.create({});
