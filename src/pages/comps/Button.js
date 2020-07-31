/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

import React, {useState} from 'react';
import {Button, View, Text} from 'react-native';

const log = (e) => {
  console.log(Object.keys(e).map((v, i) => v));
};
export default function ApisButton() {
  const [state, setstate] = useState('');
  onPressLearnMore = (e) => {
    // ["dispatchConfig", "_targetInst", "nativeEvent", "type", "target", "currentTarget", "eventPhase", "bubbles", "cancelable", "timeStamp", "defaultPrevented", "isTrusted", "touchHistory", "isDefaultPrevented", "isPropagationStopped", "_dispatchListeners", "_dispatchInstances"]
    // console.log(Object.keys(e).map((v, i) => v));
    // nativeEvent:["identifier", "timestamp", "target", "locationY", "locationX", "pageY", "pageX", "changedTouches", "touches"]
    const {target} = e;
    // log(target);
    console.log(target);
    setstate(
      Object.keys(e)
        .map((v, i) => v)
        .join('||'),
    );
  };
  return (
    <View>
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        disabled={false}
      />
      <View>
        <Text>{state}</Text>
      </View>
      <Button title="Default Button" />
    </View>
  );
}
