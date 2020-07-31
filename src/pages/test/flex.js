/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
// flex
import {Component} from 'react';
import {TouchableOpacity, View, Text, ScrollView} from 'react-native';
import React from 'react';

// flex、flexDirection、justifyContent、alignContent、flexWrap、AlignItem、AlignSelf
export default class FlexTestComponent extends Component {
  flexValue = 1;
  constructor(props) {
    super(props);
    this.state = {
      flexValue: this.flexValue,
    };
  }

  clickView = () => {
    this.flexValue++;
    this.setState({flexValue: this.flexValue});
  };

  item = (flexValue) => {
    return (
      <View
        style={{
          flex: flexValue,
          height: 50,
          backgroundColor: 'black',
          marginLeft: 10,
          marginRight: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff'}}>flex = {flexValue}</Text>
      </View>
    );
  };

  itemB = (flexValue, w = 100) => {
    return (
      <View
        style={{
          backgroundColor: 'black',
          justifyContent: 'center',
          width: w,
        }}>
        <Text style={{color: '#fff'}}>flex = {flexValue}</Text>
      </View>
    );
  };
  itemC = (height, fontSize) => {
    return (
      <View
        style={{height: height, width: 50, backgroundColor: 'red', margin: 10}}>
        <Text style={{fontSize: fontSize}}> {fontSize} </Text>
      </View>
    );
  };
  itemD = (width, height) => {
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

  render() {
    const {flexValue} = this.state;
    return (
      <ScrollView>
        <TouchableOpacity onPress={this.clickView}>
          <View
            style={{
              height: 60,
              width: '100%',
              backgroundColor: '#e5e5e5',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {this.item(1)}
            {this.item(flexValue)}
            {this.item(1)}
          </View>
        </TouchableOpacity>
        {/* 容器属性主要有下列6个：
            flex-direction（在RN中属性名称为：flexDirection）
            flex-wrap（在RN中属性名称为：flexWrap）
            flex-flow（RN中暂时用不到此属性）
            justify-content（在RN中属性名称为：justifyContent）
            align-items（在RN中属性名称为：alignItems）
            align-content（在RN中暂时用不到此属性）
        */}
        <View style={{padding: 10, backgroundColor: '#ccc'}}>
          {/* <Text style={{flexDirection: 'row '}}>
            flex-direction（在RN中属性名称为：flexDirection）
          </Text> */}
          {/* row | row-reverse | column | column-reverse; */}
          <Text>row：主轴为水平方向，起点在左端</Text>
          <View
            style={{
              padding: 10,
              width: '100%',
              backgroundColor: '#999',
              flexDirection: 'row',
            }}>
            {this.item(1)}
            {this.item(2)}
            {this.item(3)}
          </View>
          <Text>row-reverse：主轴为水平方向，起点在右端</Text>
          <View
            style={{
              padding: 10,
              width: '100%',
              backgroundColor: '#999',
              flexDirection: 'row-reverse',
            }}>
            {this.item(1)}
            {this.item(2)}
            {this.item(3)}
          </View>
          <Text>column：主轴为竖直方向，起点在上沿</Text>
          <View
            style={{
              padding: 10,
              width: '100%',
              backgroundColor: '#999',
              flexDirection: 'column',
            }}>
            {this.item(1)}
            {this.item(2)}
            {this.item(3)}
          </View>
          <Text>column-reverse：主轴为竖直方向，起点在下沿</Text>
          <View
            style={{
              padding: 10,
              width: '100%',
              backgroundColor: '#999',
              flexDirection: 'column-reverse',
            }}>
            {this.item(1)}
            {this.item(2)}
            {this.item(3)}
          </View>
          {/* flex-wrap: nowrap | wrap | wrap-reverse; */}
          <Text>nowrap（默认值）：不换行</Text>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              width: '100%',
              backgroundColor: '#999',
              flexWrap: 'nowrap',
            }}>
            {this.itemB(1)}
            {this.itemB(2)}
            {this.itemB(3)}
          </View>
          <Text>wrap：换行，第一行在上方</Text>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              width: '100%',
              backgroundColor: '#999',
              flexWrap: 'wrap',
            }}>
            {this.itemB(1)}
            {this.itemB(2)}
            {this.itemB(3)}
            {this.itemB(4)}
            {this.itemB(5)}
          </View>
          <Text>wrap-reverse：换行，第一行在下方</Text>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              width: '100%',
              backgroundColor: '#999',
              flexWrap: 'wrap-reverse',
            }}>
            {this.itemB(1)}
            {this.itemB(2)}
            {this.itemB(3)}
            {this.itemB(4)}
            {this.itemB(5)}
          </View>
          <Text>
            flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row
            nowrap
            {/* flex-flow: <flex-direction> || <flex-wrap>; */}
          </Text>
          <View
            style={{
              padding: 10,
              width: '100%',
              backgroundColor: '#999',
              flexFlow: 'row|wrap',
              display: 'flex',
              //   flexDirection: 'row',
              //   flexWrap: 'wrap',
            }}>
            {this.itemB(1)}
            {this.itemB(2)}
            {this.itemB(3)}
            {this.itemB(4)}
            {this.itemB(5)}
          </View>
          <Text>justify-content属性定义了项目在主轴上的对齐方式</Text>
          <Text>justifyContent:flex-start(默认值)左对齐============</Text>
          <View
            style={{
              padding: 10,
              width: '100%',
              backgroundColor: '#999',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
            }}>
            {this.itemB(1)}
            {this.itemB(2)}
            {this.itemB(3)}
          </View>
          <Text>justifyContent:flex-end右对齐============</Text>
          <View
            style={{
              padding: 10,
              width: '100%',
              backgroundColor: '#999',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
            }}>
            {this.itemB(1)}
            {this.itemB(2)}
            {this.itemB(3)}
          </View>
          <Text>justifyContent:center居中============</Text>
          <View
            style={{
              padding: 10,
              width: '100%',
              backgroundColor: '#999',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
            {this.itemB(1)}
            {this.itemB(2)}
            {this.itemB(3)}
          </View>
          <Text>
            justifyContent:space-between两端对齐，项目之间的间隔都相等============
          </Text>
          <View
            style={{
              padding: 10,
              width: '100%',
              backgroundColor: '#999',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            {this.itemB(1)}
            {this.itemB(2)}
            {this.itemB(3)}
          </View>
          <Text>
            justifyContent:space-evenly均匀排列每个元素,每个元素之间的间隔相等============
          </Text>
          <View
            style={{
              padding: 10,
              width: '100%',
              backgroundColor: '#999',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
            }}>
            {this.itemB(1)}
            {this.itemB(2)}
            {this.itemB(3)}
          </View>
          <Text>
            justifyContent:space-around每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍============
          </Text>
          <View
            style={{
              padding: 10,
              width: '100%',
              backgroundColor: '#999',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {this.itemB(1)}
            {this.itemB(2)}
            {this.itemB(3)}
          </View>
          <Text>
            alignItems:stretch(默认值)如果项目未设置高度或设为auto，将占满整个容器的高度。============
          </Text>
          <View
            style={{
              height: 100,
              width: '70%',
              alignItems: 'stretch',
              backgroundColor: '#efefef',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            {this.itemC(-1, 10)}
            {this.itemC(-1, 20)}
            {this.itemC(-1, 30)}
            {/* [-1, -1, -1] */}
          </View>
          <Text>alignItems:flex-start交叉轴的起点对============</Text>
          <View
            style={{
              height: 100,
              width: '70%',
              alignItems: 'flex-start',
              backgroundColor: '#efefef',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            {this.itemC(50, 10)}
            {this.itemC(90, 20)}
            {this.itemC(30, 30)}
            {/* [-1, -1, -1] */}
          </View>
          <Text>alignItems:flex-end交叉轴的终点对齐============</Text>
          <View
            style={{
              height: 100,
              width: '70%',
              alignItems: 'flex-end',
              backgroundColor: '#efefef',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            {this.itemC(50, 10)}
            {this.itemC(90, 20)}
            {this.itemC(30, 30)}
            {/* [-1, -1, -1] */}
          </View>
          <Text>alignItems:center交叉轴的中点对齐============</Text>
          <View
            style={{
              height: 100,
              width: '70%',
              alignItems: 'center',
              backgroundColor: '#efefef',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            {this.itemC(50, 10)}
            {this.itemC(90, 20)}
            {this.itemC(30, 30)}
            {/* [-1, -1, -1] */}
          </View>
          <Text>alignItems:baseline项目的第一行文字的基线对齐============</Text>
          <View
            style={{
              height: 100,
              width: '70%',
              alignItems: 'baseline',
              backgroundColor: '#efefef',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            {this.itemC(50, 10)}
            {this.itemC(90, 20)}
            {this.itemC(30, 30)}
            {/* [-1, -1, -1] */}
          </View>
          <Text>
            alignContent:stretch(默认值) 轴线占满整个交叉轴============
          </Text>
          <View
            style={{
              padding: 10,
              width: '100%',
              backgroundColor: '#999',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignContent: 'stretch',
              height: 150,
            }}>
            {this.itemD(50, -1)}
            {this.itemD(180, -1)}
            {this.itemD(30, -1)}
            {this.itemD(60, -1)}
            {this.itemD(60, -1)}
          </View>
          <Text>alignContent:flex-start与交叉轴的起点对齐===========</Text>
          <View
            style={{
              padding: 10,
              width: '100%',
              backgroundColor: '#999',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignContent: 'flex-start',
              height: 150,
            }}>
            {this.itemD(50, 30)}
            {this.itemD(180, 30)}
            {this.itemD(30, 30)}
            {this.itemD(60, 30)}
            {this.itemD(60, 30)}
          </View>
          <Text>alignContent:flex-end与交叉轴的终点对齐===========</Text>
          <View
            style={{
              padding: 10,
              width: '100%',
              backgroundColor: '#999',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignContent: 'flex-end',
              height: 150,
            }}>
            {this.itemD(50, 30)}
            {this.itemD(180, 30)}
            {this.itemD(30, 30)}
            {this.itemD(60, 30)}
            {this.itemD(60, 30)}
          </View>
          <Text>alignContent:center与交叉轴的中点对齐===========</Text>
          <View
            style={{
              padding: 10,
              width: '100%',
              backgroundColor: '#999',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignContent: 'center',
              height: 150,
            }}>
            {this.itemD(50, 30)}
            {this.itemD(180, 30)}
            {this.itemD(30, 30)}
            {this.itemD(60, 30)}
            {this.itemD(60, 30)}
          </View>
          <Text>
            alignContent:space-between与交叉轴两端对齐，轴线之间的间隔平均分布===========
          </Text>
          <View
            style={{
              padding: 10,
              width: '100%',
              backgroundColor: '#999',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignContent: 'space-between',
              height: 150,
            }}>
            {this.itemD(50, 30)}
            {this.itemD(180, 30)}
            {this.itemD(30, 30)}
            {this.itemD(60, 30)}
            {this.itemD(60, 30)}
          </View>
          <Text>
            alignContent:space-around每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍===========
          </Text>
          <View
            style={{
              padding: 10,
              width: '100%',
              backgroundColor: '#999',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignContent: 'space-around',
              height: 150,
            }}>
            {this.itemD(50, 30)}
            {this.itemD(180, 30)}
            {this.itemD(30, 30)}
            {this.itemD(60, 30)}
            {this.itemD(60, 30)}
          </View>
          <Text>
            lex-grow在RN中属性为flexGrow
            定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大
          </Text>
          <View
            style={{
              padding: 10,
              width: '100%',
              backgroundColor: '#999',
              flexDirection: 'row',
              flexWrap: 'wrap',
              height: 150,
            }}>
            <View
              style={{
                flexGrow: 1,
                backgroundColor: 'red',
                height: 50,
                margin: 5,
              }}></View>
            <View
              style={{
                flexGrow: 2,
                backgroundColor: 'red',
                height: 50,
                margin: 5,
              }}></View>
            <View
              style={{
                flexGrow: 1,
                backgroundColor: 'red',
                height: 50,
                margin: 5,
              }}></View>
          </View>
          <Text>
            align-self:auto(默认值)表示继承父元素的align-items属性============
          </Text>
          <View
            style={{
              height: 100,
              width: '70%',
              alignSelf: 'auto',
              backgroundColor: '#efefef',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            {this.itemC(50, 10)}
            {this.itemC(90, 20)}
            {this.itemC(30, 30)}
            {/* [-1, -1, -1] */}
          </View>
          <Text>align-self:flex-start 交叉轴的起点对齐============</Text>
          <View
            style={{
              height: 100,
              width: '70%',
              alignSelf: 'flex-start',
              backgroundColor: '#efefef',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            {this.itemC(50, 10)}
            {this.itemC(90, 20)}
            {this.itemC(30, 30)}
          </View>
          <Text>align-self:flex-end 交叉轴的终点对齐============</Text>
          <View
            style={{
              height: 100,
              width: '70%',
              alignSelf: 'flex-end',
              backgroundColor: '#efefef',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            {this.itemC(50, 10)}
            {this.itemC(90, 20)}
            {this.itemC(30, 30)}
          </View>
          <Text>align-self:center 交叉轴的中点对齐============</Text>
          <View
            style={{
              height: 100,
              width: '70%',
              alignSelf: 'center',
              backgroundColor: '#efefef',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            {this.itemC(50, 10)}
            {this.itemC(90, 20)}
            {this.itemC(30, 30)}
          </View>
          <Text>
            align-self:stretch
            如果项目未设置高度或设为auto，将占满整个容器的高度============
          </Text>
          <View
            style={{
              height: 100,
              width: '70%',
              alignSelf: 'stretch',
              backgroundColor: '#efefef',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            {this.itemC(-1, 10)}
            {this.itemC(-1, 20)}
            {this.itemC(-1, 30)}
          </View>
          <Text>
            align-self:baseline 项目的第一行文字的基线对齐============
          </Text>
          <View
            style={{
              height: 100,
              width: '70%',
              alignSelf: 'baseline',
              backgroundColor: '#efefef',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            {this.itemC(50, 10)}
            {this.itemC(90, 20)}
            {this.itemC(30, 30)}
          </View>
        </View>
      </ScrollView>
    );
  }
}
