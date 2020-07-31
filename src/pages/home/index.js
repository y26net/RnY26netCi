/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = ({route, navigation}) => {
  return (
    <SafeAreaView style={[styles.container]}>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#2bcddd" /> */}
      <StatusBar barStyle="light-content" backgroundColor="#2bcddd" />
      {/* <ImageBackground
        style={{flex: 1, width: 1000}}
        source={require('../../assets/img/login.png')}>
        <Image
          source={require('../../assets/img/login.png')}
          style={styles.backgroundImage}
        />
      </ImageBackground> */}
      <ScrollView>
        <View style={styles.offBar}>
          <View style={[styles.offBarItem]}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[styles.offBarItemTxt, {backgroundColor: '#fe5e75'}]}>
                待办
              </Text>
            </View>
            <Text style={[styles.offBarItemTxt]}>未受理3条</Text>
          </View>
          <View style={[styles.offBarItem]}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[styles.offBarItemTxt, {backgroundColor: '#02a7f0'}]}>
                优质企业推荐
              </Text>
            </View>
            <Text style={[styles.offBarItemTxt]}>共3家</Text>
          </View>
        </View>
        {/* banner */}
        <View style={{backgroundColor: '#2bcddd', padding: 10}}>
          <Text
            style={{
              backgroundColor: '#ff6e8f',
              padding: 10,
              borderRadius: 5,
              height: 120,
              color: '#fff',
              fontSize: 30,
            }}>
            近期数据统计
          </Text>
        </View>
        {/* card */}
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            flex: 1,
          }}>
          <View
            style={{
              flexGrow: 1,
              height: 80,
              backgroundColor: '#f4f4f4',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}>
            <Text>❄</Text>
            <Text>待办日历</Text>
          </View>
          <View
            style={{
              flexGrow: 1,
              height: 80,
              backgroundColor: '#f4f4f4',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}>
            <Text>❄</Text>
            <Text>限时抢单</Text>
          </View>
          <View
            style={{
              flexGrow: 1,
              height: 80,
              backgroundColor: '#f4f4f4',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}>
            <Text>❄</Text>
            <Text>随心查</Text>
          </View>
          <View
            style={{
              flexGrow: 1,
              height: 80,
              backgroundColor: '#f4f4f4',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}>
            <Text>❄</Text>
            <Text>风控预警</Text>
          </View>
        </View>
        {/* 限时抢单 */}
        <View
          style={{
            backgroundColor: '#f4f4f4',
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              borderLeftColor: '#3ed2e4',
              borderLeftWidth: 5,
              paddingLeft: 10,
              color: '#3ed2e4',
            }}>
            限时抢单 13:24:38
          </Text>
          <Text style={{color: '#bbb'}}>更多</Text>
        </View>
        {/* 企业 */}
        <View
          style={{
            flexDirection: 'column',
            backgroundColor: '#f4f4f4',
            margin: 10,
            padding: 10,
          }}>
          <View>
            <Text>xxx科技有限责任公司</Text>
          </View>
          <View style={{flexDirection: 'row', flex: 1, padding: 5}}>
            <Text
              style={{
                flexGrow: 1,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                margin: 5,
              }}>
              经营年限
            </Text>
            <Text
              style={{
                flexGrow: 1,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                margin: 5,
              }}>
              法定代表人
            </Text>
            <Text
              style={{
                flexGrow: 1,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                margin: 5,
              }}>
              登记日期
            </Text>
          </View>
          <View>
            <Text>意向额度：30万 还款周期：36期</Text>
          </View>
        </View>
        {/* 系统公告 */}
        <View
          style={{
            backgroundColor: '#f4f4f4',
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text
            style={{
              borderLeftColor: '#3ed2e4',
              borderLeftWidth: 5,
              paddingLeft: 10,
              color: '#3ed2e4',
              marginTop: 10,
            }}>
            系统公告
          </Text>
          <Text style={{color: '#bbb'}}>更多</Text>
        </View>
        <Button title="RN-fs" onPress={() => navigation.navigate('Rnfs')} />
        <View style={{height: 10, paddingBottom: 10}}></View>
        <Button title="测试" onPress={() => navigation.navigate('Test')} />
        <View style={{height: 10, paddingBottom: 10}}></View>
        <Button title="Comps" onPress={() => navigation.navigate('Comps')} />
        <View style={{height: 10, paddingBottom: 10}}></View>
        <Button title="Apis" onPress={() => navigation.navigate('Apis')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: null,
    height: null,
    //不加这句，就是按照屏幕高度自适应
    //加上这几，就是按照屏幕自适应
    //resizeMode:Image.resizeMode.contain,
    //祛除内部元素的白色背景
    backgroundColor: 'rgba(0,0,0,0)',
  },
  offBar: {
    padding: 10,
    width: '100%',
    backgroundColor: '#2bcddd',
    flexDirection: 'row', //布局方向，决定主轴的方向，默认值是column，即纵向布局(row|column)
    flexWrap: 'nowrap', //包含内容，默认值是nowrap，不包裹所有内容，其实可以理解为是否换行。(nowrap|wrap)
    // alignItems: 'center', //交叉轴方向对齐方式，默认值flex-start，即交叉轴开端。(flex-start|center|flex-end)
    justifyContent: 'flex-start', //主轴方向对齐方式，默认值是flex-start，即主轴的开端(|flex-start|center|flex-end|space-between|space-around)
    flex: 1,
    height: 100,
  },
  offBarItem: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#86e3ed',
    flexGrow: 1,
    paddingTop: 15,
    flexDirection: 'column',
  },
  offBarItemTxt: {
    color: '#fff',
    fontSize: 15,
    padding: 5,
    borderRadius: 5,
  },
  offBarItemTxt1: {
    backgroundColor: '#fe5e75',
  },
  offBarItemTxt2: {
    backgroundColor: '#02a7f0',
  },
});
