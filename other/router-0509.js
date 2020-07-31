import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import Ai from './pages/ai';
import Home from './pages/home';
import My from './pages/my';
import Nearby from './pages/nearby';

/**
 * 首页菜单
 */
function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Nearby" component={Nearby} />
      <Tab.Screen name="Ai" component={Ai} />
      <Tab.Screen name="My" component={My} />
    </Tab.Navigator>
  );
}

function Profile() {
  return <Text>Profile</Text>;
}

function Settings() {
  return <Text>Settings</Text>;
}
/**
 * 路由入口
 */
function Routers() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routers;
