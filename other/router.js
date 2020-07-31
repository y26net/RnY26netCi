// import 'react-native-gesture-handler';
// import React, {Component} from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// import AntDesign from './pages/antdesign';
// import Elements from './pages/elements';
// import Demo from './pages/demo';
// import Test from './pages/test';
// // AntDesign=======================
// // import Flex from './pages/antdesign/flex';
// // import WingBlankExample from './pages/antdesign/WingBlankExample';
// // ---------------------------------------------
// // 用import引入的组件只需要export default即可
// // 而通过require引入的组件需要底部生命module.exports = component
// // const aaa = './pages/antdesign/flex';
// // const bbb = './pages/antdesign/WingBlankExample';
// // const ccc = 'elements';
// // Promise.all([import(aaa), import(bbb), import('./pages/' + ccc)]).then(
// //   pages => {
// //     console.log(pages);
// //   },
// // );
// // Elements=======================
// import * as pages from './pages';
// /**
//  * 配置类型（Tab、Pages）
//  */
// const MainRouter = {
//   TabRouter: {
//     AntDesign, //AntDesign
//     Elements, //Elements
//     Demo, //Demo
//   },
//   PageRouter: {
//     Test, //测试
//     ...pages.default,
//     // AntDesign=======================
//     // Flex,
//     // WingBlankExample,
//     // Elements=======================
//   },
// };
// /**
//  * 配置类型（Tab、Pages）别名或标题
//  */
// const pagesTitle = {
//   // tabbars
//   AntDesign: 'Ant Design UI',
//   Elements: 'Elements UI',
//   // pages
//   Test: '测试',
// };

// //********************=== 自定义配置项 end===**********************************

// /**
//  * Stack
//  * 设置StackTab基础配置
//  */
// function StackTabOptions({route, navigation}) {
//   return {
//     headerShown: false, //不显示header (Main)
//   };
// }

// /**
//  * Stack
//  * 设置StackPages基础配置
//  */
// function StackPagesOptions({route, navigation}) {
//   // console.log(route, navigation);
//   // params
//   // navigation.setParams({
//   //     // name:pagesTitle[route.name] || route.name
//   //     name:"xxxxxxxxxxxxxxxx"
//   // });
//   return {
//     title: route?.params?.title || pagesTitle[route.name] || route.name,
//     headerShown: true, //显示header
//     headerStyle: {
//       backgroundColor: '#f4511e',
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//       fontWeight: 'bold',
//     },
//     // header: ({scene, previous, navigation}) => {
//     //     console.log(scene, previous, navigation);
//     //     return <Text>xxxx</Text>;
//     // },
//   };
// }

// /**********************************************
//  * Tab
//  * 配置Tab默认信息
//  */
// const tabBarOptions = {
//   inactiveTintColor: '#174299',
//   inactiveBackgroundColor: '#ddd',
//   activeTintColor: '#fff',
//   activeBackgroundColor: '#174299',
//   labelStyle: {
//     fontSize: 16,
//     // color:'#f00'
//   },
// };

// /**
//  * Tab
//  * 设置TabScreen基础配置
//  */
// function TabScreenOptions({route, navigation}) {
//   // &#xe658; 转 \ue658
//   const iconMap = {
//     AntDesign: '\ue604',
//     Elements: '\ue87c',
//   };
//   return {
//     tabBarLabel: pagesTitle[route.name] || route.name,
//     tabBarIcon: ({focused, color, size}) => (
//       <Text style={{fontFamily: 'iconfont', fontSize: size, color}}>
//         {/*{iconMap[route.name]}*/}❄
//       </Text>
//     ),
//   };
// }
// export default class Routers extends Component {
//   render() {
//     return (
//       <NavigationContainer initialRouteName="Main">
//         {/*headerMode="none"*/}
//         <Stack.Navigator>
//           <Stack.Screen
//             name="Main"
//             key="Main"
//             component={MainTabScreen}
//             options={params => StackTabOptions(params)}
//           />
//           {Object.keys(MainRouter.PageRouter).map((key, i) => {
//             return (
//               <Stack.Screen
//                 key={i}
//                 name={key}
//                 component={MainRouter.PageRouter[key]}
//                 options={params => StackPagesOptions(params)}
//                 initialParams={{title: pagesTitle[key]}}
//               />
//             );
//           })}
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
// }
// /************************************************************************************
//  * TabBar路由堆栈
//  */
// function MainTabScreen() {
//   return (
//     <Tab.Navigator
//       // tabBar={(props) => <TabBar {...props} />}
//       tabBarOptions={{...tabBarOptions}}
//       initialRouteName="Elements">
//       {Object.keys(MainRouter.TabRouter).map((key, i) => {
//         return (
//           <Tab.Screen
//             key={i}
//             name={key}
//             component={MainRouter.TabRouter[key]}
//             options={params => TabScreenOptions(params)}
//           />
//         );
//       })}
//     </Tab.Navigator>
//   );
// }
