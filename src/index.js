/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/***  公共页分割线  *****************************************************************************/
import flash from './pages/common/flash';
import splash from './pages/common/splash';
/***  公共页分割线  end**************************************************************************/
/***  菜单分割线  *****************************************************************************/
import Ai from './pages/ai';
import Home from './pages/home';
import My from './pages/my';
import Nearby from './pages/nearby';
// 配置Tab默认信息
const tabBarOptions = {
  inactiveTintColor: '#174299',
  inactiveBackgroundColor: '#ddd',
  activeTintColor: '#fff',
  activeBackgroundColor: '#174299',
  labelStyle: {
    fontSize: 16,
    // color: '#f00',
  },
};
// 设置TabScreen基础配置
function TabOptions({route, navigation}) {
  // &#xe658; 转 \ue658
  const iconMap = {
    Home: '\ue658',
    Nearby: '\ue604',
    Ai: '\ue87c',
    My: '\ue622',
  };
  // alert(JSON.stringify(route));
  return {
    tabBarLabel:
      {Home: '首页', Nearby: '附近', Ai: 'AI推荐', My: '我的'}[route.name] ||
      route.name,
    tabBarIcon: ({focused, color, size}) => (
      <Text style={{fontSize: size, color, fontFamily: 'iconfont'}}>
        {/* ❄ */}
        {iconMap[route.name]}
      </Text>
    ),
  };
}
//设置StackTab基础配置
function StackTabOptions({route, navigation}) {
  // alert(JSON.stringify(route.state));
  return {
    headerShown: false, //不显示header (Main)
  };
}
//Tabs Main
function MainTabs() {
  return (
    <Tab.Navigator tabBarOptions={{...tabBarOptions}} initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} options={(i) => TabOptions(i)} />
      <Tab.Screen
        name="Nearby"
        component={Nearby}
        options={(i) => TabOptions(i)}
      />
      <Tab.Screen name="Ai" component={Ai} options={(i) => TabOptions(i)} />
      <Tab.Screen name="My" component={My} options={(i) => TabOptions(i)} />
    </Tab.Navigator>
  );
}
/***  菜单分割线  end*****************************************************************************/

/***  页面分割线 *****************************************************************************/
/**
 * Stack
 * 设置StackPages基础配置
 */
function StackPagesOptions({route, navigation}) {
  return {
    title: route?.params?.title || route.name,
    headerShown: true, //显示header
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    // header: ({scene, previous, navigation}) => {
    //   return <Text>xxxx</Text>;
    // },
  };
}
function Profile() {
  return <Text>Profile</Text>;
}
function Settings() {
  return <Text>Settings</Text>;
}
import Test from './pages/test';
import Comps from './pages/comps';
import Apis from './pages/apis';
import Rnfs from './pages/rnfs';
import * as pages from './pages';
const PageRouter = {
  Test, //测试
  Comps,
  Apis,
  Rnfs,
  ...pages.default,
};
/***  页面分割线  end*****************************************************************************/
/**
 * 路由入口
 */
function App() {
  return (
    <NavigationContainer initialRouteName="Splash">
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Flash"
          component={flash}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Splash"
          component={splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={(params) => StackTabOptions(params)}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={(params) => StackPagesOptions(params)}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={(params) => StackPagesOptions(params)}
        />
        {/* <Stack.Screen
          name="Test"
          component={Test}
          options={(params) => StackPagesOptions(params)}
        /> */}
        {Object.keys(PageRouter).map((key, i) => {
          return (
            <Stack.Screen
              key={i}
              name={key}
              component={PageRouter[key]}
              options={(params) => StackPagesOptions(params)}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
