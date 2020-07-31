/* eslint-disable react-native/no-inline-styles */
// alignItem
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {Component} from 'react';
import React from 'react';

// | 'flex-start'
// | 'flex-end'
// | 'center'
// | 'stretch'
// | 'space-between'
// | 'space-around';

export default class AlignContentTestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alignContentValue: 'flex-start',
    };
  }

  clickView = (title) => () => {
    this.setState({alignContentValue: title});
  };

  customButton = (title) => {
    return (
      <TouchableOpacity onPress={this.clickView(title)}>
        <View
          style={{
            width: 120,
            height: 30,
            backgroundColor: 'green',
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
          height: '40%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {this.customButton('flex-start')}
        {this.customButton('center')}
        {this.customButton('flex-end')}
        {this.customButton('space-between')}
        {this.customButton('space-around')}
        {this.customButton('stretch')}
      </View>
    );
  };

  item = (width: number, height: number) => {
    return (
      <View
        style={{
          height: height,
          width: width,
          backgroundColor: 'red',
          margin: 2,
        }}
      />
    );
  };

  resultDisplayView = () => {
    const {alignContentValue} = this.state;

    let height = 30;
    if (alignContentValue === 'stretch') {
      height = -1;
    }
    return (
      <View
        style={{
          height: '60%',
          width: '100%',
          alignContent: alignContentValue,
          backgroundColor: '#efefef',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {this.item(50, height)}
        {this.item(80, height)}
        {this.item(30, height)}
        {this.item(60, height)}
        {this.item(50, height)}
        {this.item(100, height)}
        {this.item(30, height)}
        {this.item(50, height)}
        {this.item(80, height)}
        {this.item(30, height)}
      </View>
    );
  };

  render() {
    return (
      <ScrollView>
        <View style={{height: 200, backgroundColor: '#e5e5e5'}}>
          {this.operaView()}
          {this.resultDisplayView()}
        </View>
        <View style={{padding: 10, backgroundColor: '#ccc'}}>
          <Text>
            属性值： alignContent?:"flex-start" | "flex-end" | "center" |
            "stretch" | "space-between" | "space-around" 用法示例：
            {/* <View style={{ alignContent: 'flex-start' />  */}
          </Text>
          <Text>
            flex-start:
            子元素顶部对齐，点击下方的flex-start按钮会看到所有子元素向上对齐了。
          </Text>
          <Text>
            center:
            上下方向上居中，也就是说设置该属性，子元素会在上下方向上进行居中展示。
          </Text>
          <Text>
            flex-end: 该属性与flex-start相反,
            设置该属性，子元素会位于父元素的底部展示。
          </Text>
          <Text>space-between：间隔填充，子元素的上下间距位于子元素中间。</Text>
          <Text>
            space-around:
            即间隔环绕在子元素的上下，与JustifyContent的space-around类似。
          </Text>
          <Text>
            stretch：拉伸，该属性只有在子元素的高度没有设置的情况下适用，该情况下会自适应高度，以至填满父视图，具体如下所示：
          </Text>
        </View>
      </ScrollView>
    );
  }
}
