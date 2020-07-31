import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
// import {AsyncStorage} from 'react-native';
// Deprecated. Use @react-native-community/async-storage instead.
import AsyncStorage from '@react-native-community/async-storage';

const AsyncStorages = () => {
  const _storeData = async () => {
    try {
      await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
    } catch (error) {
      // Error saving data
    }
  };
  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('@MySuperStore:key');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  const merges = () => {
    let UID123_object = {
      name: 'Chris',
      age: 30,
      traits: {hair: 'brown', eyes: 'brown'},
    };
    // 只需定义新增或是修改的数据
    let UID123_delta = {
      age: 31,
      traits: {eyes: 'blue', shoe_size: 10},
    };
    AsyncStorage.setItem('UID123', JSON.stringify(UID123_object), () => {
      AsyncStorage.mergeItem('UID123', JSON.stringify(UID123_delta), () => {
        AsyncStorage.getItem('UID123', (err, result) => {
          console.log(result);
          //   {"name":"Chris","age":31,"traits":{"hair":"brown","eyes":"blue","shoe_size":10}
        });
      });
    });
  };
  const multiMerges = () => {
    // 第一个用户的初始数据
    let UID234_object = {
      name: 'Chris',
      age: 30,
      traits: {hair: 'brown', eyes: 'brown'},
    };

    // 第一个用户的增量数据
    let UID234_delta = {
      age: 31,
      traits: {eyes: 'blue', shoe_size: 10},
    };

    // 第二个用户的初始数据
    let UID345_object = {
      name: 'Marge',
      age: 25,
      traits: {hair: 'blonde', eyes: 'blue'},
    };

    // 第二个用户的增量数据
    let UID345_delta = {
      age: 26,
      traits: {eyes: 'green', shoe_size: 6},
    };

    let multi_set_pairs = [
      ['UID234', JSON.stringify(UID234_object)],
      ['UID345', JSON.stringify(UID345_object)],
    ];
    let multi_merge_pairs = [
      ['UID234', JSON.stringify(UID234_delta)],
      ['UID345', JSON.stringify(UID345_delta)],
    ];

    AsyncStorage.multiSet(multi_set_pairs, (err) => {
      AsyncStorage.multiMerge(multi_merge_pairs, (err) => {
        AsyncStorage.multiGet(['UID234', 'UID345'], (err, stores) => {
          stores.map((result, i, store) => {
            let key = store[i][0];
            let val = store[i][1];
            console.log(key, val);
          });
        });
      });
    });

    // Console log results:
    // => UID234 {"name":"Chris","age":31,"traits":{"shoe_size":10,"hair":"brown","eyes":"blue"}}
    // => UID345 {"name":"Marge","age":26,"traits":{"shoe_size":6,"hair":"blonde","eyes":"green"}}
  };
  return (
    <View>
      <Text>
        AsyncStorage是一个简单的、异步的、持久化的 Key-Value 存储系统，它对于
        App 来说是全局性的。可用来代替 LocalStorage。
      </Text>
      <Button title="存储数据" onPress={_storeData} />
      <Button title="获取数据" onPress={_retrieveData} />
      <Button title="更新数据" onPress={merges} />
      <Button title="合并数据" onPress={multiMerges} />
    </View>
  );
};

export default AsyncStorages;

const styles = StyleSheet.create({});
