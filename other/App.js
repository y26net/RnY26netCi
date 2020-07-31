/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
// ===================  Hello React Navigation  ====================
// import React from 'react';
// import {View, Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// function HomeScreen({extraData}) {
//   //   console.log(extraData, extraData.id);
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen! {extraData.id}</Text>
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// const someData = {
//   id: 123,
// };
// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         {/* <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{title: 'Overview'}}
//         /> */}
//         <Stack.Screen name="Home">
//           {(props) => <HomeScreen {...props} extraData={someData} />}
//         </Stack.Screen>
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// ===================  Moving between screens  ====================
// import * as React from 'react';
// import {Button, View, Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// function HomeScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//       {/* <Button
//         title="Go to Details... again"
//         onPress={() => navigation.navigate('Details')}
//       /> */}
//       <Button
//         title="Go to Details... again"
//         onPress={() => navigation.push('Details')}
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       {/* 回到初始位置：popToTop */}
//       <Button
//         title="Go back to first screen in stack"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   );
// }

// const Stack = createStackNavigator();
// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{title: 'Overview'}}
//         />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// ===================  Passing parameters to routes  ====================
// import * as React from 'react';
// import {Button, View, Text, TextInput} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// function HomeScreen({navigation, route}) {
//   // 参数传递到上一页面
//   React.useEffect(() => {
//     if (route.params?.post) {
//       // Post updated, do something with `route.params.post`
//       // For example, send the post to the server
//     }
//   }, [route.params?.post]);
//   // 参数传递到上一页面 end
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       {/* 默认参数 */}
//       <Button
//         title="Go to Details"
//         onPress={() => {
//           navigation.navigate('Details');
//         }}
//       />
//       {/* 接受参数 */}
//       <Button
//         title="Go to Details"
//         onPress={() => {
//           /* 1. Navigate to the Details route with params */
//           navigation.navigate('Details', {
//             itemId: 86,
//             otherParam: 'anything you want here',
//           });
//         }}
//       />
//       {/* 参数传递到上一页面 */}
//       <Button
//         title="Create post"
//         onPress={() => navigation.navigate('CreatePost')}
//       />
//       <Text style={{margin: 10}}>Post: {route.params?.post}</Text>
//     </View>
//   );
// }

// function DetailsScreen({route, navigation}) {
//   /* 2. Get the param */
//   const {itemId} = route.params;
//   const {otherParam} = route.params;
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() =>
//           navigation.push('Details', {
//             itemId: Math.floor(Math.random() * 100),
//           })
//         }
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// function CreatePostScreen({navigation, route}) {
//   const [postText, setPostText] = React.useState('');

//   return (
//     <>
//       <TextInput
//         multiline
//         placeholder="What's on your mind?"
//         style={{height: 200, padding: 10, backgroundColor: 'white'}}
//         value={postText}
//         onChangeText={setPostText}
//       />
//       <Button
//         title="Done"
//         onPress={() => {
//           // Pass params back to home screen
//           navigation.navigate('Home', {post: postText});
//         }}
//       />
//     </>
//   );
// }
// const Stack = createStackNavigator();
// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{title: 'Overview'}}
//         />
//         <Stack.Screen
//           name="Details"
//           component={DetailsScreen}
//           initialParams={{itemId: 42}}
//         />
//         <Stack.Screen name="CreatePost" component={CreatePostScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// export default App;
//嵌套导航
// navigation.navigate('Account', {
//     screen: 'Settings',
//     params: { user: 'jane' },
//   });

// ===================  Configuring the header bar  ====================
// import * as React from 'react';
// import {Button, View, Text, TextInput} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// function HomeScreen({navigation, route}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//       <Button
//         title="Go Stack Home"
//         onPress={() =>
//           navigation.navigate('Stack', {
//             screen: 'Home',
//             params: {id: 'home-001'},
//           })
//         }
//       />
//       <Button
//         title="Go Stack Profile"
//         onPress={() =>
//           navigation.navigate('Stack', {
//             screen: 'Profile',
//             params: {id: 'profile-001'},
//           })
//         }
//       />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// function DetailsScreen({route, navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         title="Go Stack Home"
//         onPress={() =>
//           navigation.navigate('Stack', {
//             screen: 'Home',
//             params: {id: 'home-001'},
//           })
//         }
//       />
//       <Button
//         title="Go Stack Profile"
//         onPress={() =>
//           navigation.navigate('Stack', {
//             screen: 'Profile',
//             params: {id: 'profile-001'},
//           })
//         }
//       />
//     </View>
//   );
// }

// function LogoTitle({children}) {
//   return <Text>{children}</Text>;
// }

// function StackScreen() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: '#009900',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}>
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           title: 'My home',
//           headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//           headerTitle: (props) => <LogoTitle {...props} />,
//         }}
//       />
//       <Stack.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={({route}) => ({title: route.params.name})}
//       />
//     </Stack.Navigator>
//   );
// }

// function ProfileScreen({route, navigation}) {
//   return (
//     <View>
//       <Text>Profile Screen </Text>
//       <Button
//         title="Update the title"
//         onPress={() => navigation.setOptions({title: 'Updated!'})}
//       />
//     </View>
//   );
// }

// const Stack = createStackNavigator();
// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Stack" component={StackScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// export default App;

// ===================  Header buttons  ====================
// import * as React from 'react';
// import {Button, View, Text, TextInput} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// function HomeScreen({navigation}) {
//   const [count, setCount] = React.useState(0);
//   React.useLayoutEffect(() => {
//     navigation.setOptions({
//       headerRight: () => (
//         <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
//       ),
//     });
//   }, [navigation, setCount]);

//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Text>Count: {count}</Text>
//     </View>
//   );
// }

// function LogoTitle({children}) {
//   return <Text>{children}</Text>;
// }
// function StackScreen() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           headerTitle: (props) => <LogoTitle {...props} />,
//           headerRight: () => (
//             <Button
//               onPress={() => alert('This is a button!')}
//               title="Info"
//               color="#666"
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
// const Stack = createStackNavigator();
// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Stack" component={StackScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// export default App;

// ===================  Nesting navigators  ====================
// import * as React from 'react';
// import {Button, View, Text, TextInput} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

// function Home() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Feed" component={Feed} />
//       <Tab.Screen name="Messages" component={Messages} />
//     </Tab.Navigator>
//   );
// }

// function Profile() {
//   return <Text>Profile Screen</Text>;
// }

// function Settings() {
//   return <Text>Settings Screen</Text>;
// }
// function Feed({navigation}) {
//   return (
//     <View>
//       <Text>Feed Screen</Text>
//       {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
//       <Button title="Go to Feed" onPress={() => navigation.navigate('Feed')} />
//       <Button
//         title="Go to Messages"
//         onPress={() => navigation.navigate('Messages')}
//       />
//       <Button
//         title="Go to Profile"
//         onPress={() => navigation.navigate('Profile')}
//       />
//       <Button
//         title="Go to Settings"
//         onPress={() => navigation.navigate('Settings')}
//       />
//     </View>
//   );
// }
// function Messages() {
//   return <Text>Messages Screen</Text>;
// }

// // 导航到嵌套导航器中的屏幕
// // function Root() {
// //   return (
// //     <Stack.Navigator>
// //       <Stack.Screen name="Profile" component={Profile} />
// //       <Stack.Screen name="Settings" component={Settings} />
// //     </Stack.Navigator>
// //   );
// // }
// // navigation.navigate('Root', { screen: 'Settings' });
// // navigation.navigate('Root', {
// //   screen: 'Settings',
// //   params: { user: 'jane' },
// // });
// // navigation.navigate('Root', {
// //     screen: 'Settings',
// //     params: {
// //       screen: 'Sound',
// //       params: {
// //         screen: 'Media',
// //       },
// //     },
// //   });
// // navigation.navigate('Root', {
// //     screen: 'Settings',
// //     initial: false,
// //   });

// const Stack = createStackNavigator();
// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Profile" component={Profile} />
//         <Stack.Screen name="Settings" component={Settings} />
//       </Stack.Navigator>
//       {/* <Drawer.Navigator>
//         <Drawer.Screen name="Home" component={Home} />
//         <Drawer.Screen name="Root" component={Root} />
//       </Drawer.Navigator> */}
//     </NavigationContainer>
//   );
// }
// export default App;
// =================== Navigation lifecycle  ====================
// import * as React from 'react';
// import {Button, View, Text, TextInput} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();
// // const Stack = createStackNavigator();
// const SettingsStack = createStackNavigator();
// const HomeStack = createStackNavigator();

// function HomeScreen() {
//   return <Text>Home Screen</Text>;
// }
// function DetailsScreen() {
//   return <Text>Details Screen</Text>;
// }
// function SettingsScreen() {
//   return <Text>Settings Screen</Text>;
// }
// function ProfileScreen() {
//   return <Text>Profile Screen</Text>;
// }

// // 导航生命周期事件
// // function Profile({navigation}) {
// //   React.useEffect(() => {
// //     const unsubscribe = navigation.addListener('focus', () => {
// //       // Screen was focused
// //       // Do something
// //     });
// //     return unsubscribe;
// //   }, [navigation]);
// //   return <ProfileContent />;
// // }

// // import { useFocusEffect } from '@react-navigation/native';
// // function Profile() {
// //   useFocusEffect(
// //     React.useCallback(() => {
// //       // Do something when the screen is focused
// //       return () => {
// //         // Do something when the screen is unfocused
// //         // Useful for cleanup functions
// //       };
// //     }, [])
// //   );
// //   return <ProfileContent />;
// // }

// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="First">
//           {() => (
//             <SettingsStack.Navigator>
//               <SettingsStack.Screen
//                 name="Settings"
//                 component={SettingsScreen}
//               />
//               <SettingsStack.Screen name="Profile" component={ProfileScreen} />
//             </SettingsStack.Navigator>
//           )}
//         </Tab.Screen>
//         <Tab.Screen name="Second">
//           {() => (
//             <HomeStack.Navigator>
//               <HomeStack.Screen name="Home" component={HomeScreen} />
//               <HomeStack.Screen name="Details" component={DetailsScreen} />
//             </HomeStack.Navigator>
//           )}
//         </Tab.Screen>
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
// export default App;
// ===================  Opening a full-screen modal  ====================
// import * as React from 'react';
// import {Button, View, Text, TextInput} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// function HomeScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text style={{fontSize: 30}}>This is the home screen!</Text>
//       <Button
//         onPress={() => navigation.navigate('MyModal')}
//         title="Open Modal"
//       />
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View>
//       <Text>Details</Text>
//     </View>
//   );
// }

// function ModalScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text style={{fontSize: 30}}>This is a modal!</Text>
//       <Button onPress={() => navigation.goBack()} title="Dismiss" />
//     </View>
//   );
// }

// const MainStack = createStackNavigator();
// const RootStack = createStackNavigator();

// function MainStackScreen() {
//   return (
//     <MainStack.Navigator>
//       <MainStack.Screen name="Home" component={HomeScreen} />
//       <MainStack.Screen name="Details" component={DetailsScreen} />
//     </MainStack.Navigator>
//   );
// }

// function RootStackScreen() {
//   return (
//     <RootStack.Navigator mode="modal">
//       <RootStack.Screen
//         name="Main"
//         component={MainStackScreen}
//         options={{headerShown: false}}
//       />
//       <RootStack.Screen name="MyModal" component={ModalScreen} />
//     </RootStack.Navigator>
//   );
// }

// function TestScreen() {
//   return <Text>Test Screen</Text>;
// }
// // const Tab = createBottomTabNavigator();

// const Stack = createStackNavigator();
// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Roots" component={RootStackScreen} />
//         <Stack.Screen name="Test" component={TestScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// export default App;

// ===================  Glossary of terms  ====================
// import * as React from 'react';
// import {Button, View, Text, TextInput} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// function HomeScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//       <DetailsScreen />
//     </View>
//   );
// }
// function DetailsScreen() {
//   return <Text>Details Screen</Text>;
// }

// const Stack = createStackNavigator();
// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// export default App;
// ===================  Tab navigation  ====================
// import * as React from 'react';
// import {Text, View, Button} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// function HomeScreen({navigation}) {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Home!</Text>
//       <Button
//         title="Go to Settings"
//         onPress={() => navigation.navigate('Settings')}
//       />
//     </View>
//   );
// }

// function SettingsScreen({navigation}) {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Settings!</Text>
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// // Add badges to icons
// // function IconWithBadge({name, badgeCount, color, size}) {
// function IconWithBadge({name, badgeCount, color, size, focused, params}) {

// 	let iconName;
// 	if (name === 'Home') {
// 		iconName = focused
// 		? '高'
// 		: 'no';
// 	}

//   return (
//     <View style={{width: 24, height: 24, margin: 5}}>
//       {/* <Ionicons name={name} size={size} color={color} /> */}
//       <Text size={size} color={color}>
//         {iconName}
//       </Text>
//       {badgeCount > 0 && (
//         <View
//           style={{
//             // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
//             position: 'absolute',
//             right: -6,
//             top: -3,
//             backgroundColor: 'red',
//             borderRadius: 6,
//             width: 12,
//             height: 12,
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}>
//           <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>
//             {badgeCount}
//           </Text>
//         </View>
//       )}
//     </View>
//   );
// }
// function HomeIconWithBadge(props) {
//   return <IconWithBadge {...props} badgeCount={3} />;
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({route}) => ({
//           tabBarIcon: ({focused, color, size}) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused
//                 ? 'ios-information-circle'
//                 : 'ios-information-circle-outline';
//             } else if (route.name === 'Settings') {
//               iconName = focused ? 'ios-list-box' : 'ios-list';
//             }

//             // You can return any component that you like here!
//             // return <Ionicons name={iconName} size={size} color={color} />;
//             return (
//               <Text size={size} color={color}>
//                 {iconName}
//               </Text>
//             );
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: 'tomato',
//           inactiveTintColor: 'gray',
//         }}>
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={({route}) => ({
//             tabBarIcon: (params) => HomeIconWithBadge({...params, ...route}),
//           })}
//           //   options={{
//           //     tabBarIcon: HomeIconWithBadge,
//           //   }}
//         />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
// ===================  Authentication flows  ====================

// import React, {useState} from 'react';
// import {View, Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// function HomeScreen() {
//   return <Text>Home Screen!</Text>;
// }

// function ProfileScreen() {
//   return <Text>Profile Screen</Text>;
// }

// function SettingsScreen() {
//   return <Text>Settings Screen</Text>;
// }

// function SignInScreen() {
//   return <Text>SignIn Screen</Text>;
// }

// function SignUpScreen() {
//   return <Text>SignUpScreen Screen</Text>;
// }
// function SplashScreen() {
//   return <Text>Lodding 。。。。</Text>;
// }

// const Stack = createStackNavigator();
// function App() {
//   const [isSignedIn, setIsSignedIn] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   //   setIsSignedIn(true);
//   let userToken;
//   if (isLoading) {
//     // We haven't finished checking for the token yet
//     return <SplashScreen />;
//   }
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {/* {isSignedIn ? ( */}
//         {userToken == null ? (
//           <>
//             <Stack.Screen name="Home" component={HomeScreen} />
//             <Stack.Screen name="Profile" component={ProfileScreen} />
//             <Stack.Screen name="Settings" component={SettingsScreen} />
//           </>
//         ) : (
//           <>
//             <Stack.Screen name="SignIn" component={SignInScreen} />
//             <Stack.Screen name="SignUp" component={SignUpScreen} />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
// ===================  状态管理库  ====================
// import * as React from 'react';
// import {Button, View, Text, TextInput} from 'react-native';
// const AuthContext = React.createContext();
// import AsyncStorage from '@react-native-community/async-storage';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// const Stack = createStackNavigator();

// function HomeScreen() {
//   return <Text>Home Screen</Text>;
// }

// function SignInScreen() {
//   const [username, setUsername] = React.useState('');
//   const [password, setPassword] = React.useState('');

//   const {signIn} = React.useContext(AuthContext);

//   return (
//     <View>
//       <TextInput
//         placeholder="Username"
//         value={username}
//         onChangeText={setUsername}
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <Button title="Sign in" onPress={() => signIn({username, password})} />
//     </View>
//   );
// }
// export default function App({navigation}) {
//   const [state, dispatch] = React.useReducer(
//     (prevState, action) => {
//       switch (action.type) {
//         case 'RESTORE_TOKEN':
//           return {
//             ...prevState,
//             userToken: action.token,
//             isLoading: false,
//           };
//         case 'SIGN_IN':
//           return {
//             ...prevState,
//             isSignout: false,
//             userToken: action.token,
//           };
//         case 'SIGN_OUT':
//           return {
//             ...prevState,
//             isSignout: true,
//             userToken: null,
//           };
//       }
//     },
//     {
//       isLoading: true,
//       isSignout: false,
//       userToken: null,
//     },
//   );

//   React.useEffect(() => {
//     // Fetch the token from storage then navigate to our appropriate place
//     const bootstrapAsync = async () => {
//       let userToken;

//       try {
//         userToken = await AsyncStorage.getItem('userToken');
//       } catch (e) {
//         // Restoring token failed
//       }

//       // After restoring token, we may need to validate it in production apps

//       // This will switch to the App screen or Auth screen and this loading
//       // screen will be unmounted and thrown away.
//       dispatch({type: 'RESTORE_TOKEN', token: userToken});
//     };

//     bootstrapAsync();
//   }, []);

//   const authContext = React.useMemo(
//     () => ({
//       signIn: async (data) => {
//         // In a production app, we need to send some data (usually username, password) to server and get a token
//         // We will also need to handle errors if sign in failed
//         // After getting token, we need to persist the token using `AsyncStorage`
//         // In the example, we'll use a dummy token

//         dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
//         AsyncStorage.setItem('userToken', 'dummy-auth-token');
//       },
//       signOut: () => dispatch({type: 'SIGN_OUT'}),
//       signUp: async (data) => {
//         // In a production app, we need to send user data to server and get a token
//         // We will also need to handle errors if sign up failed
//         // After getting token, we need to persist the token using `AsyncStorage`
//         // In the example, we'll use a dummy token

//         dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
//       },
//     }),
//     [],
//   );
//   return (
//     <AuthContext.Provider value={authContext}>
//       <NavigationContainer>
//         <Stack.Navigator>
//           {state.userToken == null ? (
//             <Stack.Screen name="SignIn" component={SignInScreen} />
//           ) : (
//             <Stack.Screen name="Home" component={HomeScreen} />
//           )}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </AuthContext.Provider>
//   );
// }
// ===================  支持安全区  ====================
// // 会渲染渲染任何内容tabBar
// import * as React from 'react';
// import {Text, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createStackNavigator} from '@react-navigation/stack';

// function Demo() {
//   return (
//     <View
//       style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
//       <Text>This is top text.</Text>
//       <Text>This is bottom text.</Text>
//     </View>
//   );
// }
// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home" headerMode="none">
//         <Stack.Screen name="Home">
//           {() => (
//             <Tab.Navigator initialRouteName="Analytics" tabBar={() => null}>
//               <Tab.Screen name="Analytics" component={Demo} />
//               <Tab.Screen name="Profile" component={Demo} />
//             </Tab.Navigator>
//           )}
//         </Stack.Screen>

//         <Stack.Screen name="Settings" component={Demo} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// ----------------------
// import * as React from 'react';
// import {Text, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// import {
//   SafeAreaProvider,
//   SafeAreaView,
//   useSafeArea,
// } from 'react-native-safe-area-context';
// const Stack = createStackNavigator();
// // 在内容上应用安全区域插图
// // function Demo() {
// //   return (
// //     <SafeAreaView
// //       style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
// //       <Text>This is top text.</Text>
// //       <Text>This is bottom text.</Text>
// //     </SafeAreaView>
// //   );
// // }
// // 调整填充以实现更多控制
// function Demo() {
//   const insets = useSafeArea();
//   return (
//     <View
//       style={{
//         paddingTop: insets.top,
//         paddingBottom: insets.bottom,

//         flex: 1,
//         justifyContent: 'space-between',
//         alignItems: 'center',
//       }}>
//       <Text>This is top text.</Text>
//       <Text>This is bottom text.</Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Settings" component={Demo} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }

// ===================  在特定屏幕中隐藏标签栏  ====================
// import * as React from 'react';
// import {Text, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// function Home() {
//   return <Text>Home</Text>;
// }

// function Profile() {
//   return <Text>Profile</Text>;
// }

// function Settings() {
//   return <Text>Settings</Text>;
// }

// function Feed() {
//   return <Text>Feed</Text>;
// }
// function Notifications() {
//   return <Text>Notifications</Text>;
// }

// // function HomeStack() {
// //   return (
// //     <Stack.Navigator>
// //       <Stack.Screen name="Home" component={Home} />
// //       <Stack.Screen name="Profile" component={Profile} />
// //       <Stack.Screen name="Settings" component={Settings} />
// //     </Stack.Navigator>
// //   );
// // }

// // function App() {
// //   return (
// //     <NavigationContainer>
// //       <Tab.Navigator>
// //         <Tab.Screen name="Home" component={HomeStack} />
// //         <Tab.Screen name="Feed" component={Feed} />
// //         <Tab.Screen name="Notifications" component={Notifications} />
// //       </Tab.Navigator>
// //     </NavigationContainer>
// //   );
// // }
// // // 使用这种结构，当我们导航到Profile或Settings屏幕时，选项卡栏仍然在这些屏幕上保持可见。

// // 但是，如果我们要显示标签栏只在Home，Feed和Notifications屏幕，但没有对Profile和Settings筛选，我们需要改变导航结构。
// // 实现此目的的最简单方法是将选项卡导航器嵌套在堆栈的第一个屏幕内，而不是将堆栈嵌套在选项卡导航器内：
// function HomeTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Feed" component={Feed} />
//       <Tab.Screen name="Notifications" component={Notifications} />
//     </Tab.Navigator>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeTabs} />
//         <Stack.Screen name="Profile" component={Profile} />
//         <Stack.Screen name="Settings" component={Settings} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// // 重新组织导航结构后，现在如果我们导航到Profile或Settings屏幕，则选项卡栏将不再在屏幕上可见。
// export default App;
// =================== 根据路由配置不同的状态栏  ====================
// import * as React from 'react';
// import {Text, StatusBar, Button, StyleSheet, Platform} from 'react-native';
// import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
// // import SafeAreaView from 'react-native-safe-area-view';

// function Screen1({navigation}) {
//   //   useFocusEffect(
//   //     React.useCallback(() => {
//   //       const unsubscribe = API.subscribe(userId, (user) => setUser(data));

//   //       return () => unsubscribe();
//   //     }, [userId]),
//   //   );
//   useFocusEffect(
//     React.useCallback(() => {
//       StatusBar.setBarStyle('light-content');
//       Platform.OS === 'android' && StatusBar.setBackgroundColor('#6a51ae');
//     }, []),
//   );
//   return (
//     <SafeAreaView style={[styles.container, {backgroundColor: '#6a51ae'}]}>
//       {/* <StatusBar barStyle="light-content" backgroundColor="#6a51ae" /> */}
//       <Text style={{color: '#fff'}}>Light Screen</Text>
//       <Button
//         title="Next screen"
//         onPress={() => navigation.navigate('Screen2')}
//         color="#fff"
//       />
//     </SafeAreaView>
//   );
// }

// function Screen2({navigation}) {
//   //如不使用StatusBar组件时
//   useFocusEffect(
//     React.useCallback(() => {
//       StatusBar.setBarStyle('dark-content');
//       Platform.OS === 'android' && StatusBar.setBackgroundColor('#ecf0f1');
//     }, []),
//   );
//   return (
//     <SafeAreaView style={[styles.container, {backgroundColor: '#ecf0f1'}]}>
//       {/* <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" /> */}
//       <Text>Dark Screen</Text>
//       <Button
//         title="Next screen"
//         onPress={() => navigation.navigate('Screen1')}
//       />
//     </SafeAreaView>
//   );
// }

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Stack.Navigator headerMode="none">
//           <Stack.Screen name="Screen1" component={Screen1} />
//           <Stack.Screen name="Screen2" component={Screen2} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
// });

// // 标签和抽屉
// // 如果您使用的是标签页或抽屉式导航器，StatusBar则要复杂一些，因为导航器中的所有屏幕可能会一次渲染并保持渲染状态-这意味着将使用您设置的最后一个配置（可能在最后一个选项卡上标签导航器，而不是用户看到的内容）。
// // 要解决此问题，我们必须做两件事
// // 仅StatusBar在我们的初始屏幕上使用该组件。这使我们可以确保使用正确的StatusBar配置。
// // 当标签变为活动状态时，使用useFocusEffect和StatusBar的隐式API更改StatusBar配置。
// // 首先，新的Screen2.js将不再使用该StatusBar组件。
// ===================  屏幕选项分辨率  ====================
import * as React from 'react';
import {Text, StatusBar, Button, StyleSheet, Platform} from 'react-native';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {
  createBottomTabNavigator,
  createTabNavigator,
} from '@react-navigation/bottom-tabs';
// const Tab = createTabNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();

function A() {
  return <Text>AAAAA</Text>;
}
function B() {
  return <Text>BBBBB</Text>;
}
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="A"
        component={A}
        options={{tabBarLabel: 'Home!'}}
      />
    </HomeStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="B"
        component={B}
        options={{tabBarLabel: 'Settings!'}}
      />
    </SettingsStack.Navigator>
  );
}
// 您只能从导航器的屏幕组件之一修改其导航选项。这同样适用于嵌套为屏幕的导航器。
// 让我们以一个标签导航器为例，该标签导航器在每个标签中都包含一个堆栈。如果将设置options在堆栈内部的屏幕上会怎样？
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeStackScreen} />
//         <Tab.Screen name="Settings" component={SettingsStackScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// 如前所述，您只能从导航器的屏幕组件之一修改其导航选项。A和B上方分别是HomeStack和而SettingsStack不是在标签导航器中的屏幕组件。因此，结果是该tabBarLabel属性未应用于选项卡导航器。我们可以解决这个问题！
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen
//           name="Home"
//           component={HomeStackScreen}
//           options={{tabBarLabel: 'Home!'}}
//         />
//         <Tab.Screen
//           name="Settings"
//           component={SettingsStackScreen}
//           options={{tabBarLabel: 'Settings!'}}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
// 根据子导航器的状态设置父屏幕选项
function FeedScreen() {
  return <Text>FeedScreen</Text>;
}
function ProfileScreen() {
  return <Text>ProfileScreen</Text>;
}
function AccountScreen() {
  return <Text>AccountScreen</Text>;
}
function SettingsScreen() {
  return <Text>SettingsScreen</Text>;
}
// function HomeTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Feed" component={FeedScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//       <Tab.Screen name="Account" component={AccountScreen} />
//     </Tab.Navigator>
//   );
// }
// function HomeTabs({navigation, route}) {
//   React.useLayoutEffect(() => {
//     navigation.setOptions({headerTitle: getHeaderTitle(route)});
//   }, [navigation, route]);

//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Feed" component={FeedScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//       <Tab.Screen name="Account" component={AccountScreen} />
//     </Tab.Navigator>
//   );
// }
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeTabs}
//           options={({route}) => ({
//             headerTitle: getHeaderTitle(route),
//           })}
//         />
//         <Stack.Screen name="Settings" component={SettingsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// 如果我们设置headerTitle与options对FeedScreen，这是行不通的。这是因为App堆栈将仅查看其直接子级以进行配置：HomeTabs和SettingsScreen。
// 但是我们可以headerTitle使用route.state属性根据选项卡导航器的导航状态确定选项。让我们创建一个函数以首先获取标题route.state：
// function getHeaderTitle(route) {
//   // Access the tab navigator's state using `route.state`
//   const routeName = route.state
//     ? // Get the currently active route name in the tab navigator
//       route.state.routes[route.state.index].name
//     : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
//       // In our case, it's "Feed" as that's the first screen inside the navigator
//       route.params?.screen || 'Feed';

//   switch (routeName) {
//     case 'Feed':
//       return 'News feed';
//     case 'Profile':
//       return 'My profile';
//     case 'Account':
//       return 'My account';
//   }
// }
{
  /* <Stack.Screen
  name="Home"
  component={HomeTabs}
  options={({ route }) => ({
    headerTitle: getHeaderTitle(route),
  })}
/> */
}
// 例如，对于上述用例，我们可以在每个选项卡中添加一个堆栈导航器，而不是在堆栈导航器中添加一个标签导航器。
const FeedStack = createStackNavigator();
function FeedStackScreen() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="Feed" component={FeedScreen} />
      {/* other screens */}
    </FeedStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}
// const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeTabs} />
        <RootStack.Screen name="Settings" component={SettingsScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
// ===================  自定义Android后退按钮行为  ====================
// function ScreenWithCustomBackBehavior() {
//   // ...

//   useFocusEffect(
//     React.useCallback(() => {
//       const onBackPress = () => {
//         if (isSelectionModeEnabled()) {
//           disableSelectionMode();
//           return true;
//         } else {
//           return false;
//         }
//       };

//       BackHandler.addEventListener('hardwareBackPress', onBackPress);

//       return () =>
//         BackHandler.removeEventListener('hardwareBackPress', onBackPress);
//     }, [isSelectionModeEnabled, disableSelectionMode]),
//   );

//   // ...
// }
// ===================  Nesting navigators  ====================
// ===================  Nesting navigators  ====================
// ===================  Nesting navigators  ====================
// ===================  Nesting navigators  ====================
// ===================  Nesting navigators  ====================
// ===================  Nesting navigators  ====================
// ===================  Nesting navigators  ====================
