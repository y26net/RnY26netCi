import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Profile" onPress={(a) => navigation.navigate('Profile')} />
    </View>
  );
}

function Profile() {
  return <Text>Profile</Text>;
}

function Settings() {
  return <Text>Settings</Text>;
}

function Feed() {
  return <Text>Feed</Text>;
}
function Notifications() {
  return <Text>Notifications</Text>;
}

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
