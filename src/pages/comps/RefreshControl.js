import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View, RefreshControl} from 'react-native';

const RefreshControls = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [Txt, setTxt] = useState('下拉刷新初始化');
  const _onRefresh = () => {
    setRefreshing(true);
    setTxt('下拉刷新开始...');
    console.log('下拉刷新.....');
    setTimeout(() => {
      setRefreshing(false);
      setTxt('下拉刷新完成');
    }, 3000);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          // 视图是否应该在刷新时显示指示器。
          refreshing={refreshing}
          // 视图开始刷新时调用
          onRefresh={_onRefresh}
        />
      }>
      <View>
        <Text>RefreshControl</Text>
        <Text>{Txt}</Text>
      </View>
    </ScrollView>
  );
};

export default RefreshControls;

const styles = StyleSheet.create({});
