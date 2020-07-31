import React from 'react';
import {StyleSheet, Text, View, Share, Button} from 'react-native';

const Shares = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          alert('Share sharedAction');
        } else {
          alert('Share else');
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View>
      <Text>Share</Text>
      <Button title="测试Share" onPress={onShare}>
        Share
      </Button>
    </View>
  );
};

export default Shares;

const styles = StyleSheet.create({});
