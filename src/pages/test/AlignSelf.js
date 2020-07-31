/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity, View} from 'react-native';
import {Component} from 'react';
import React from 'react';

export default class AlignSelfTestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alignItemValue: 'flex-start',
    };
  }

  clickView = (title) => () => {
    this.setState({alignItemValue: title});
  };

  customButton = (title) => {
    return (
      <TouchableOpacity onPress={this.clickView(title)}>
        <View
          style={{
            width: 80,
            height: 30,
            backgroundColor: 'black',
            margin: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff', fontSize: 17}}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  operaView = () => {
    return (
      <View
        style={{
          height: '100%',
          width: '30%',
          backgroundColor: '#e0e0e0',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {this.customButton('flex-start')}
        {this.customButton('center')}
        {this.customButton('flex-end')}
        {this.customButton('stretch')}
      </View>
    );
  };

  resultDisplayView = () => {
    const {alignItemValue} = this.state;

    let height = 80;
    if (alignItemValue === 'stretch') {
      height = -1;
    }
    return (
      <View
        style={{
          height: '100%',
          width: '70%',
          alignItems: 'flex-start',
          backgroundColor: '#efefef',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View
          style={{height: 150, width: 50, backgroundColor: 'black', margin: 10}}
        />
        <View
          style={{
            alignSelf: alignItemValue,
            height: height,
            width: 50,
            backgroundColor: 'black',
            margin: 10,
          }}
        />
        <View
          style={{height: 100, width: 50, backgroundColor: 'black', margin: 10}}
        />
      </View>
    );
  };

  render() {
    return (
      <View>
        <View
          style={{
            height: 180,
            backgroundColor: '#e5e5e5',
            flexDirection: 'row',
          }}>
          {this.operaView()}
          {this.resultDisplayView()}
        </View>
        <Text>
          属性值： type FlexAlignType = "flex-start" | "flex-end" | "center" |
          "stretch" | "baseline"; type AlignSelfType = "auto" | FlexAlignType;
          用法示例：
          {/* <View>
            　　<View style={{ alignSelf: 'flex-start' />
            </View>  */}
        </Text>
      </View>
    );
  }
}
