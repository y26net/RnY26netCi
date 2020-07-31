import React, {useState} from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';

const Switchs = () => {
  const [value, setValue] = useState(false);
  const onValueChange = () => {
    console.log('onValueChange...');
    setValue(!value);
  };
  return (
    <View>
      <Text>Switch</Text>
      <Switch
        disabled={false}
        thumbColor="#ffff00"
        trackColor="#ff0000"
        onValueChange={onValueChange}
        tintColor="#333"
        value={value}
      />
      <Text>是否选择：{(value && 'true') || 'false'}</Text>
    </View>
  );
};

export default Switchs;

const styles = StyleSheet.create({});
