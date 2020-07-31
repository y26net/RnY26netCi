import React from 'react';
import {StyleSheet, Text, View, AccessibilityInfo} from 'react-native';

const AccessibilityInfos = () => {
  const [reduceMotionEnabled, setReduceMotionEnabled] = React.useState(false);
  const [screenReaderEnabled, setScreenReaderEnabled] = React.useState(false);
  const _handleReduceMotionToggled = (reduceMotionEnabled) => {
    setReduceMotionEnabled(reduceMotionEnabled);
  };

  const _handleScreenReaderToggled = (screenReaderEnabled) => {
    setScreenReaderEnabled(screenReaderEnabled);
  };
  React.useEffect(() => {
    AccessibilityInfo.addEventListener(
      'reduceMotionChanged',
      _handleReduceMotionToggled,
    );
    AccessibilityInfo.addEventListener(
      'screenReaderChanged',
      _handleScreenReaderToggled,
    );

    AccessibilityInfo.isReduceMotionEnabled().then((reduceMotionEnabled) => {
      setReduceMotionEnabled(reduceMotionEnabled);
    });
    AccessibilityInfo.isScreenReaderEnabled().then((screenReaderEnabled) => {
      setScreenReaderEnabled(screenReaderEnabled);
    });
    return () => {
      AccessibilityInfo.removeEventListener(
        'reduceMotionChanged',
        _handleReduceMotionToggled,
      );

      AccessibilityInfo.removeEventListener(
        'screenReaderChanged',
        _handleScreenReaderToggled,
      );
    };
  }, []);
  return (
    <View>
      <Text>
        The reduce motion is {reduceMotionEnabled ? 'enabled' : 'disabled'}.
      </Text>
      <Text>
        The screen reader is {screenReaderEnabled ? 'enabled' : 'disabled'}.
      </Text>
    </View>
  );
};

export default AccessibilityInfos;

const styles = StyleSheet.create({});
