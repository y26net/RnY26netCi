import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Notifics = () => {
  return (
    <View>
      <Text>ssssssssssssssss</Text>
    </View>
  );
};

export default Notifics;

const styles = StyleSheet.create({});

// import React, {Component} from 'react';
// import {Notifications} from 'react-native-notifications';

// export default class MyComponent extends Component {
//   constructor(props) {
//     super(props);
//     Notifications.registerRemoteNotifications();

//     Notifications.events().registerNotificationReceivedForeground(
//       (notification, completion) => {
//         console.log(
//           `Notification received in foreground: ${notification.title} : ${notification.body}`,
//         );
//         completion({alert: false, sound: false, badge: false});
//       },
//     );

//     Notifications.events().registerNotificationOpened(
//       (notification, completion) => {
//         console.log(`Notification opened: ${notification.payload}`);
//         completion();
//       },
//     );
//   }
// }
