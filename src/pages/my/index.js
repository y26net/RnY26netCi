import React from 'react';
import {SafeAreaView, ScrollView, Button, View, Text} from 'react-native';

const My = ({route, navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Button
          title="测试组件"
          onPress={() => navigation.navigate('Test')}
          color="#ddd"
        />
        <View>
          <Text>测试My</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default My;
