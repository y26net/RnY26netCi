import React, {Component} from 'react';
import {AppState, Text, View} from 'react-native';

export default class AppStateExample extends Component {
  state = {
    appState: AppState.currentState,
  };

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!');
    }
    this.setState({appState: nextAppState});
  };

  render() {
    return (
      <View>
        <Text>Current state is: {this.state.appState}</Text>
        <Text>
          AppState能告诉你应用当前是在前台还是在后台，并且能在状态变化的时候通知你。
        </Text>
        <Text>AppState 通常在处理推送通知的时候用来决定内容和对应的行为。</Text>
        <Text>active - 应用正在前台运行</Text>
        <Text>
          background -
          应用正在后台运行。用户可能面对以下几种情况：在别的应用中/停留在桌面/对
          Android 来说还可能处在另一个Activity中（即便是由你的应用拉起的）
        </Text>
        <Text>
          [iOS] inactive -
          此状态表示应用正在前后台的切换过程中，或是处在系统的多任务视图，又或是处在来电状态中
        </Text>
      </View>
    );
  }
}
