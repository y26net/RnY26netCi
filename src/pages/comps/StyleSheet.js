import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const StyleSheets = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <View style={styles.container}>
      <Text
        style={[styles.title, isActive && styles.activeTitle]}
        onPress={() => setIsActive(!isActive)}>
        StyleSheet
      </Text>
      <Text>StyleSheet 提供了一种类似 CSS 样式表的抽象。</Text>
    </View>
  );
};

export default StyleSheets;

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
  listItem: {
    flex: 1,
    fontSize: 16,
    color: 'white',
  },
  selectedListItem: {
    color: 'green',
  },
});

// StyleSheet.flatten([styles.listItem, styles.selectedListItem]);
// 返回值为 { flex: 1, fontSize: 16, color: 'green' }

// static compose(style1, style2)
// hairlineWidth
// const styles = StyleSheet.create({
//   separator: {
//     borderBottomColor: '#bbb',
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
// });

// absoluteFill
// A very common pattern is to create overlays with position absolute and zero positioning (position: 'absolute', left: 0, right: 0, top: 0, bottom: 0), so absoluteFill
// const styles = StyleSheet.create({
//     wrapper: {
//       ...StyleSheet.absoluteFill,
//       top: 10,
//       backgroundColor: 'transparent',
//     },
//   });
