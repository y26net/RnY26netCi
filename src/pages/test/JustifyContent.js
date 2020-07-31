/* eslint-disable react-native/no-inline-styles */
// justifyContent
import {Component} from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import React from 'react';

// | 'flex-start'
// | 'flex-end'
// | 'center'
// | 'space-between'
// | 'space-around'
// | 'space-evenly';

export default class JustifyContentTestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      justifyContentValue: 'flex-start',
    };
  }

  clickView = (value) => () => {
    this.setState({justifyContentValue: value});
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
          height: 90,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {this.customButton('flex-start')}
        {this.customButton('flex-end')}
        {this.customButton('center')}
        {this.customButton('space-between')}
        {this.customButton('space-around')}
        {this.customButton('space-evenly')}
      </View>
    );
  };

  item = (width) => {
    return (
      <View
        style={{height: 30, width: width, backgroundColor: 'green', margin: 2}}
      />
    );
  };

  resultDisplayView = () => {
    const {justifyContentValue} = this.state;
    return (
      <View
        style={{
          height: 110,
          width: '100%',
          justifyContent: justifyContentValue,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {this.item(60)}
        {this.item(100)}
        {this.item(30)}
        {this.item(80)}
        {this.item(100)}
        {this.item(90)}
        {this.item(30)}
        {this.item(80)}
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
            属性值： justifyContent?: "flex-start" | "flex-end" | "center" |
            "space-between" | "space-around" | "space-evenly" 用法示例：
            {/* <View style={{ justifyContent: 'flex-start' /> */}
          </Text>
          <Text>
            flex-start:
            该属性值的功能是让所有子元素靠左对齐，如下方点击flex-start的布局形式。
          </Text>
          <Text>
            center:
            则表示子元素在左右方向上居中展示，如下方点击Center按钮对应的布局形式。
          </Text>
          <Text>
            flex-end:
            这个与flex-start相反，flex-end则表示子元素靠右对齐，对应着下方点击flex-end按钮的布局形式。
          </Text>
          <Text>
            space-between：从字面意思上不难看出，该属性值对应的是左右间距平分于子元素中间的布局方式，设置该属性值后，左右边上是子元素是紧贴父View的左右边距的，间距平分与子元素中间。
          </Text>
          <Text>
            space-around:
            该属性也是比较好理解的，就是左右间距环绕在子元素周围，从下方点击space-around的效果不难看出，设置该属性后，每个元素的左右边距是一致的，环绕在子元素之间。
          </Text>
          <Text>
            space-evenly:
            该属性值的意思是子元素的左右间距均分，这个间距包括子元素与子元素的间距，还包括子元素与父元素的间距。
          </Text>
        </View>
      </ScrollView>
    );
  }
}
