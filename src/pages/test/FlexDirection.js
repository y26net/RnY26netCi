/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

export default function FlexDirectionTestComponent() {
  return (
    <ScrollView>
      <View
        style={{height: 180, backgroundColor: '#c1c1c1', flexDirection: 'row'}}>
        <View
          style={{
            height: '100%',
            width: '50%',
            justifyContent: 'space-around',
          }}>
          <FlexDirectionTestView value={{flexDirection: 'row'}} />
          <FlexDirectionTestView value={{flexDirection: 'row-reverse'}} />
        </View>

        <View
          style={{
            height: '100%',
            width: '50%',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <FlexDirectionTestView value={{flexDirection: 'column'}} />
          <FlexDirectionTestView value={{flexDirection: 'column-reverse'}} />
        </View>
      </View>
      <View style={{backgroundColor: '#ccc', padding: 10, marginTop: 10}}>
        <Text>
          属性值： flexDirection?: "row" | "column" | "row-reverse" |
          "column-reverse"; 用法示例：
          {/* <View style={{ flexDirection: 'row' /> */}
        </Text>
        <Text>
          row : '行'，该值表示子元素自左向右横向排列, 。如下图的row,
          先放的子元素1，如果有子元素2的话，会放到子元素1的右边，依次类推的横向布局。
        </Text>
        <Text>
          row-reverse:
          '逆向的行'，这个与row相反，该属性表示自右向左横向排列。具体参见下图中的row-reverse。
        </Text>
        <Text>
          column：'列'，该属性值表示子元素自上而下纵向排列，具体参见下方的column。
        </Text>
        <Text>
          column-reverse:
          '逆向的列'，这个与column相反，该属性则表示自下而上的纵向排列，具体参见下方的column-reverse。
        </Text>
      </View>
    </ScrollView>
  );
}

class FlexDirectionTestView extends Component {
  render() {
    return (
      <View
        style={[
          myStyle.flexDirectionProps,
          {flexDirection: this.props.value.flexDirection},
        ]}>
        <Text>{this.props.value.flexDirection}</Text>
        <SubView value={'1'} />
        <SubView value={'2'} />
        <SubView value={'3'} />
      </View>
    );
  }
}

class SubView extends Component {
  render() {
    return (
      <View style={myStyle.subViewStyle}>
        <Text style={{color: 'white', fontSize: 17}}> {this.props.value} </Text>
      </View>
    );
  }
}

const myStyle = StyleSheet.create({
  subViewStyle: {
    margin: 10,
    borderRadius: 25,
    width: 25,
    height: 25,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexDirectionProps: {
    backgroundColor: 'gray',
    margin: 5,
  },
});
