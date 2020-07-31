/* eslint-disable react-native/no-inline-styles */
import {FlexAlignType, Text, TouchableOpacity, View} from 'react-native';
import {Component} from 'react';
import React from 'react';

export default class AlignItemTestComponent extends Component {
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
            backgroundColor: 'red',
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
        {this.customButton('baseline')}
      </View>
    );
  };

  item = (height, fontSize) => {
    return (
      <View
        style={{height: height, width: 50, backgroundColor: 'red', margin: 10}}>
        <Text style={{fontSize: fontSize}}> {fontSize} </Text>
      </View>
    );
  };

  resultDisplayView = () => {
    const {alignItemValue} = this.state;

    let heights = [100, 150, 80];
    if (alignItemValue === 'stretch') {
      heights = [-1, -1, -1];
    }
    return (
      <View
        style={{
          height: '100%',
          width: '70%',
          alignItems: alignItemValue,
          backgroundColor: '#efefef',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        {this.item(heights[0], 10)}
        {this.item(heights[1], 20)}
        {this.item(heights[2], 30)}
      </View>
    );
  };

  render() {
    return (
      <View>
        <View
          style={{
            height: 200,
            backgroundColor: '#e5e5e5',
            flexDirection: 'row',
          }}>
          {this.operaView()}
          {this.resultDisplayView()}
        </View>
        <View style={{padding: 10, backgroundColor: '#ccc'}}>
          <Text>
            属性值： type FlexAlignType = "flex-start" | "flex-end" | "center" |
            "stretch" | "baseline"; 用法示例：
            {/* <View style={{ alignItem: 'flex-start' />  */}
          </Text>
          <Text>
            flex-start: 首先还是来看一下flex-start，
            下方我们的子元素是横向排列的，所以设置flex-start时，就意味着，子元素在纵轴开始的位置对齐，也就是顶部对齐。
          </Text>
          <Text>
            center:
            也是以横向排列的子元素为例，当设置alignItem为Center时，表示交叉轴方向上居中对齐，具体在该Demo中表现的是上下方向上居中对齐。
          </Text>
          <Text>flex-end: 这个与flex-start相反，表示以交叉轴的尾部对齐。</Text>
          <Text>
            baseline:
            这个就比较有意思了，设置该属性值就意味着子元素以子元素中的文字的基线对齐。
          </Text>
        </View>
      </View>
    );
  }
}
