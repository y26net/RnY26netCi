/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {DrawerLayoutAndroid, View, StyleSheet, Text} from 'react-native';

export default class DrawerLayoutAndroids extends Component {
  render() {
    const navigationView = (
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
          I'm in the Drawer!
        </Text>
      </View>
    );
    const onDrawerClose = () => {
      console.log('onDrawerClose....');
    };
    const onDrawerOpens = () => {
      console.log('onDrawerOpen====');
    };
    return (
      <DrawerLayoutAndroid
        drawerWidth={200}
        //DrawerConsts.DrawerPosition.Left, DrawerConsts.DrawerPosition.Right
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
        onDrawerOpen={onDrawerOpens}
        onDrawerClose={onDrawerClose}
        drawerBackgroundColor="rgba(0,0,0,0.5)"
        //设置拖动过程中是否隐藏软键盘=>'none' (默认)，拖动时不隐藏软键盘。/'on-drag'，拖动时隐藏软键盘。
        // keyboardDismissMode="on-drag"
        //设置导航视图的锁定模式=>'unlocked', 'locked-closed', 'locked-open'
        // drawerLockMode="unlocked "
        statusBarBackgroundColor="#ff0">
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>
            Hello
          </Text>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>
            World!
          </Text>
          <Text>
            译注：此组件仅能在 Android
            上使用。我们推荐使用跨平台的react-navigation中的 DrawerNavigation
            来代替此组件
          </Text>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}
