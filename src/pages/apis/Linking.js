import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  Button,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={() =>
          Linking.canOpenURL(this.props.url).then((supported) => {
            if (supported) {
              Linking.openURL(this.props.url);
            } else {
              console.log('无法打开该URI: ' + this.props.url);
            }
          })
        }>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

const Linkings = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <View>
        <Text>Linking</Text>
        <Button
          title="拨打电话"
          onPress={() => {
            Linking.openURL('tel:10086');
          }}
        />
        <View style={{height: 10}} />
        <Button
          title="打开网址"
          onPress={() => {
            Linking.openURL('http://www.baidu.com');
          }}
        />
        <View style={{height: 10}} />
        <Button
          title="发短信"
          onPress={() => {
            Linking.openURL('smsto:10086');
          }}
        />
        <View style={{height: 10}} />
        <Button
          title="发邮件"
          onPress={() => {
            Linking.openURL('mailto:admin@qq.com');
          }}
        />
        <View style={{height: 10}} />
        <Text>打开第三方应用</Text>
        {/* 第三方schema */}
        {/* 微信：weixin://
        QQ：mqq://
        知乎: zhihu://
        知乎搜索: zhihu://search?q=
        京东: openapp.jdmobile://
        饿了么: eleme://
    支付宝: alipayqr:// */}
        <Button
          title="判断引用是否安装"
          onPress={() => {
            Linking.canOpenURL('weixin://').then((supported) => {
              console.log(supported);
              // 打开第三方应用
              supported && Linking.openURL('weixin://');
            });
          }}
        />
        <Text>地图schema</Text>
        {/* ios内置地图
        打开地图: http://maps.apple.com/?q=://
        获取地图路线: http://maps.apple.com/?saddr=SADDR&daddr=DADDR
        搜索地图: http://maps.apple.com/?q=QUERY&near=NEAR */}
        {/* 下载地图   */}
        {/* if(Platform.OS === 'ios') {
            Alert.alert('选择地图', '您还没有安装地图软件。', [
                { text: '下载高德地图', onPress: () => Linking.openURL('https://apps.apple.com/cn/app/%E9%AB%98%E5%BE%B7%E5%9C%B0%E5%9B%BE-%E7%B2%BE%E5%87%86%E5%9C%B0%E5%9B%BE-%E5%AF%BC%E8%88%AA%E5%87%BA%E8%A1%8C%E5%BF%85%E5%A4%87/id461703208') },
                { text: '下载百度地图', onPress: () => Linking.openURL('https://apps.apple.com/cn/app/%E7%99%BE%E5%BA%A6%E5%9C%B0%E5%9B%BE-%E8%B7%AF%E7%BA%BF%E8%A7%84%E5%88%92-%E5%87%BA%E8%A1%8C%E5%BF%85%E5%A4%87/id452186370') },
                { text: '下载腾讯地图', onPress: () => Linking.openURL('https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%9C%B0%E5%9B%BE-%E5%87%BA%E8%A1%8C%E5%BF%85%E5%A4%87%E7%9A%84%E5%AF%BC%E8%88%AA%E8%BD%AF%E4%BB%B6/id481623196') },
                { text: '取消' }
            ]);
        }else {
            Alert.alert('选择地图', '您还没有安装地图软件。', [
                { text: '下载高德地图', onPress: () => Linking.openURL('http://wap.amap.com/') },
                { text: '下载百度地图', onPress: () => Linking.openURL('http://map.baidu.com/zt/client/index/') },
                { text: '下载腾讯地图', onPress: () => Linking.openURL('https://mapdownload.map.qq.com/') },
                { text: '取消' }
            ]);
        } */}
        {/* ios在 info.plist 中添加 */}
        {/* <array>
        <string>baidumap</string>
        <string>qqmap</string>
        <string>iosamap</string>
      </array> */}
        <CustomButton
          url={'http://www.reactnative.vip'}
          text="点击打开http网页"
        />
        <CustomButton url={'https://www.baidu.com'} text="点击打开https网页" />
        <CustomButton url={'smsto:13667377378'} text="点击进行发送短信" />
        <CustomButton url={'tel:13667377378'} text="点击进行打电话" />
        <CustomButton url={'mailto:309623978@qq.com'} text="点击进行发邮件" />
        <CustomButton url={'dfy:888999'} text="无法打开url" />
        <CustomButton url={'geo:38,114'} text="点击打开一个地图位置" />
        {/* <CustomButton url={'myrnlinkdemo://'} text="自己打开自己" />
        <CustomButton url={'myrnlinkdemo1://'} text="打开myrnlindemo1" /> */}
      </View>
    </ScrollView>
  );
};

export default Linkings;

const styles = StyleSheet.create({});

// ----------------------------------------------
// {/* 百度地图(参考这里) */}
// 自定义打点:
// /**
//  * location 位置 lat(纬度) lng(经度)
//  * title 打点标题
//  * content 打点内容
//  * coord_type 坐标类型
//  *    bd09ll：百度经纬度坐标
//  *    bd09mc：百度墨卡托坐标
//  *    gcj02：国测局加密坐标
//  *    wgs84：gps设备获取的坐标
//  * traffic 是否开启路况
//  *    on 开启
//  *    off表示关闭
//  * src 统计来源   参数格式为: andr.companyName.appName
//  */
// ios: `baidumap://map/marker?location=40.047669,116.313082&title=我的位置&content=百度
// android: `bdapp://map/marker?location=40.05740665572,116.2964407172&title=Marker&content=makeamarker&coord_type=gcj02&src=`

// 地址解析:
// /**
//  * address 地址名称
//  */
// ios: `baidumap://map/geocoder?address=北京市海淀区上地信息路9号奎科科技大厦&src=`
// android: `bdapp://map/geocoder?address=北京市海淀区上地信息路9号奎科科技大厦&src=`

// 逆地理编码:
// ios: `baidumap://map/geocoder?location=39.990912172420714,116.32715863448607&coord_type=gcj02&src=`
// android: `bdapp://map/geocoder?location=39.98871,116.43234&src=`

// POI搜索(根据给定的关键字、检索条件进行检索):
// /**
//  * query  关键词(必选)
//  * region   城市名或县名
//  * radius 检索半径,单位:m
//  */
// ios: `baidumap://map/place/search?query=美食&region=上海&location=31.204055632862,121.41117785465&radius=1000&src=`
// android: `bdapp://map/place/search?query=美食&region=北京&location=39.98871,116.43234&radius=1000&src=`

// 路线规划:
// /**
//  * origin 起点名称或经纬度 lat(纬度) lng(经度)
//  * destination 终点名称或经纬度 lat(纬度) lng(经度)
//  * mode  交通方式
//  *    driving - 驾车 default
//  *    riding - 骑行
//  *    transit - 公交
//  *    walking - 步行
//  */
// ios: `baidumap://map/direction?origin=name:西安城墙北|latlng:34.264642646862,108.95108518068&destination=name:上清桥|latlng:40.007623,116.360582&coord_type=bd09ll&mode=driving&src=`
// android: `bdapp://map/direction?origin=name:对外经贸大学|latlng:39.98871,116.43234&destination=西直门&coord_type=bd09ll&mode=riding&src=`

// 公交、地铁线路查询:
// /**
//  * region 城市名或县名
//  * name 线路名称
//  */
// ios: `baidumap://map/line?region=北京&name=909&src=`
// android: `bdapp://map/line?region=北京&name=909&src=`

// 附近搜索:
// /**
//  * center  中心点经纬度
//  *    经纬度：39.9761,116.3282
//  *    经纬度和名称：latlng:39.9761,116.3282|name:中关村
//  * query  关键词(必选)
//  */
// ios: `baidumap://map/nearbysearch?query=景点&src=`
// android: `bdapp://map/place/nearby?query=景点&src=`

// 驾车导航:
// ios: `baidumap://map/navi?query=天河公园&src=`
// android: `bdapp://map/navi?query=天河公园&src=`

// 骑行导航:
// ios: `baidumap://map/ridenavi?destination=39.91441,116.40405&coord_type=bd09ll&src=`
// android: `bdapp://map/bikenavi?origin=39.98871,116.43234&destination=39.91441,116.40405&coord_type=bd09ll&src=`

// 电子狗:
// ios: `baidumap://map/navi/cruiser?src=`
// android: `bdapp://map/navi/cruiser?src=`

// ----------------------------------------------
// 使用
// Linking.canOpenURL(url)
//     .then(supported => {
//         if(supported) {
//             Linking.openURL(url)
//         }
//     })
// ----------------------------------------------
// 高德地图(参考这里)

// 导航:
// /**
//  * sourceApplication  第三方调用应用名称
//  * poiname    POI 名称
//  * lat  纬度
//  * lon  经度
//  * dev  是否偏移(0:lat 和 lon 是已经加密后的,不需要国测加密; 1:需要国测加密)
//  */
// ios: iosamap://navi?sourceApplication=applicationName&poiname=fangheng&poiid=BGVIS&lat=36.547901&lon=104.258354&dev=1&style=2
// android: androidamap://navi?lat=36.547901&lon=104.258354

// 骑行导航:
// /**
//  * featureName    功能名称，OnRideNavi 为骑行导航
//  * rideType   骑行类型
//  *    elebike - 电动车
//  *    bike - 或留空为自行车
//  */
// ios: iosamap://openFeature?featureName=OnRideNavi&rideType=elebike&sourceApplication=appname&lat=23.2200491&lon=113.30764968&dev=1
// android: androidamap://openFeature?featureName=OnRideNavi&lat=23.2200491&lon=113.30764968

// 地图标注:
// ios: iosamap://viewMap?sourceApplication=applicationName&poiname=万恒购物中心&lat=39.98848272&lon=116.47560823&dev=1
// android: androidamap://viewMap?lat=23.1200491&lon=113.30764968

// 路线规划:
// /**
//  * sid    起点的POIID
//  * slat   起点纬度,不填写此参数则自动将用户当前位置设为起点纬度
//  * slon   起点经度,不填写此参数则自动将用户当前位置设为起点经度
//  * sname  起点名称
//  * did    终点的POIID
//  * dlat   终点纬度
//  * dlon   终点经度
//  * dname  终点名称
//  * t    t = 0（驾车）= 1（公交）= 2（步行）= 3（骑行）= 4（火车）= 5（长途客车）
//  *      - （骑行仅在V7.8.8以上版本支持）
//  * rideType   仅当 t = 3 时该参数生效。rideType = elebike    电动车，rideType = bike/为空 自行车
//  *    （电动车规划仅在V8.65.0及以上版本支持）
//  */
// ios: iosamap://path?sourceApplication=applicationName&sid=BGVIS1&slat=39.92848272&slon=116.39560823&sname=景山后街&did=BGVIS2&dlat=39.98848272&dlon=116.47560823&dname=广顺南大街&dev=0&t=0
// android: amapuri://route/plan?sid=BGVIS1&slat=39.92848272&slon=116.39560823&sname=景山后街&did=BGVIS2&dlat=39.98848272&dlon=116.47560823&dname=广顺南大街&dev=0&t=0

// 公交线路查询:
// /**
//  * busname    公交名称
//  * city   城市编码或者城市名,参考城市代码
//  */
// ios: iosamap://bus?&busname=445&city=010
// android: androidamap://bus?&busname=445&city=010

// 周边分类(搜索周边的超市、银行、加油站等分类信息):
// /**
//  * keyword    搜索关键字
//  */
// ios: iosamap://arroundpoi?sourceApplication=applicationName&keywords=超市&lat=36.2&lon=116.1&dev=0
// android: androidamap://arroundpoi?keywords=银行|加油站|电影院&dev=0

// 我的位置:
// ios: iosamap://myLocation?
// android: androidamap://myLocation?

// 搜索地点:
// ios: iosamap://poi?sourceApplication=applicationName&name=加油站|电影院&dev=1
// android:androidamap://poi?keywords=加油站|电影院&dev=1

// ----------------------------------------------
// 腾讯地图(参考这里)
// 导航和路线规划:
// /**
//  * type  路线规划方式
//  *    bus   公交
//  *    drive 驾车
//  *    walk  步行
//  *    bike  骑行
//  * from   起点名称
//  * fromcoord    起点坐标(lat,lng)
//  * to  终点名称
//  * tocoord  终点坐标(lat,lng)
//  * referer  开发者key
//  */
// qqmap://map/routeplan?type=drive&from=清华&fromcoord=39.994745,116.247282&to=怡和世家&tocoord=39.867192,116.493187&referer=

// 周边搜索:
// /**
//  * keyword   搜索关键字
//  * center    中心点位置
//  * radius    以center为中心的查询范围半径，单位：米
//  * referer  开发者key
//  */
// qqmap://map/search?keyword=美食&center=39.977169,116.336954&radius=1000&referer=

// 探索周边:
// /**
//  * coord   lat<纬度>,lng<经度>，中心点经纬度
//  * placeName    地点名称，用于探索周边页面Title展示
//  * referer  开发者key
//  */
// qqmap://map/nearby?coord=39.984026,116.307492&placeName=中关村&referer=

// 地点标注:
// /**
//  * marker    marker=markerAttributes|markerAttributes|...
//  *    coord：标的坐标，格式：lat,lng 纬度在前经度在后
//  *    title：标注点名称
//  *    addr：地址
//  *    各key和value之间用英文冒号分隔，各key/value对之间用英文分号分隔
//  *    注：目前仅支持添加一个标注
//  * referer  开发者key
//  */
// qqmap://map/marker?marker=coord:39.892326,116.342763;title:超好吃冰激凌;addr:手帕口桥北铁路道口&referer=
