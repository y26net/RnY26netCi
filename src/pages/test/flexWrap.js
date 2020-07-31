/* eslint-disable react-native/no-inline-styles */
// flexWrap
import {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import React from 'react';

export default class FlexWrapTestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allViews: [this.item()],
    };
  }

  clickView = () => {
    let items = this.state.allViews;
    items.push(this.item());
    this.setState({allViews: items});
  };

  item = () => {
    let randomWidth = Math.random() * 100 + 10;
    return (
      <View
        style={{
          backgroundColor: 'green',
          height: 30,
          width: randomWidth,
          margin: 5,
        }}
      />
    );
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.clickView}>
          <View
            style={{
              height: 100,
              backgroundColor: '#eaeaea',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {this.state.allViews}
          </View>
        </TouchableOpacity>
        <Text>
          属性值： flexWrap?:"wrap" | "nowrap" | "wrap-reverse" 用法示例：
          {/* <View style={{ flexWrap: 'wrap' />  */}
        </Text>
        <Text>flexWrap?:"wrap" | "nowrap" | "wrap-reverse"</Text>
      </View>
    );
  }
}
