/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

function UselessTextInput(props) {
  return (
    <TextInput
      {...props} // 将父组件传递来的所有props传递给TextInput;比如下面的multiline和numberOfLines
      editable
      maxLength={40}
    />
  );
}

const TextInputs = () => {
  const [value, onChangeText] = React.useState('Useless Placeholder');
  return (
    <View>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        //'none', 'sentences', 'words', 'characters')
        // characters: 所有的字符。
        // words: 每个单词的第一个字符。
        // sentences: 每句话的第一个字符（默认）。
        // none: 不切换。
        autoCapitalize="none"
        // 'off', 'username', 'password', 'email', 'name', 'tel', 'street-address', 'postal-code', 'cc-number', 'cc-csc', 'cc-exp', 'cc-exp-month', 'cc-exp-year'
        // autoComplete=""
      />
      <View
        style={{
          backgroundColor: value,
          borderBottomColor: '#000000',
          borderBottomWidth: 1,
        }}>
        <UselessTextInput
          multiline
          numberOfLines={4}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
      </View>
    </View>
  );
};

export default TextInputs;

const styles = StyleSheet.create({});
