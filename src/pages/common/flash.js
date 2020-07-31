/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StatusBar, Image, View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
export default class Flash extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, {backgroundColor: '#fff'}]}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Image source={require('../../assets/img/login.png')} />
        <Text style={[styles.logoText]}>税务信用云</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 32,
    color: '#000000',
    fontWeight: 'bold',
  },
});
