import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Texts = () => {
  const [titleText, settitleText] = useState("Bird's Nest");
  const [bodyText, setbodyText] = useState('This is not really a bird nest.');
  const onPressTitle = () => {
    console.log('onPressTitle。。。。');
  };
  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {'\n'}
        {'\n'}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
      <Text style={{fontWeight: 'bold'}}>
        I am bold
        <Text style={{color: 'red'}}>and red</Text>
      </Text>
    </Text>
  );
};

export default Texts;

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
