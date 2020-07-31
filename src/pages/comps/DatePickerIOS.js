import React, {Component} from 'react';
import {DatePickerIOS, View, StyleSheet, Text} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {chosenDate: new Date()};

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }

  onChange() {
    console.log('onChange===');
  }

  render() {
    return (
      <View style={styles.container}>
        <DatePickerIOS
          date={this.state.chosenDate}
          //   日期/时间变化的监听函数
          onDateChange={this.setDate}
          onChange={this.onChange}
          //   可选的最大日期
          maximumDate={this.state.chosenDate}
          //   可选的最小日期
          minimumDate={this.state.chosenDate}
          //   可选的最小的分钟单位=>1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30...
          //   minuteInterval={}
          // 选择器模式=>'date', 'time', 'datetime', 'countdown'
          mode="datetime"
        />
        <Text>
          Android&IOS通用组件：https://github.com/react-native-community/datetimepicker
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
