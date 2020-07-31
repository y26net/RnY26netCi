/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, SectionList} from 'react-native';

const SectionLists = () => {
  const overrideRenderItem = ({item, index, section: {title, data}}) => (
    <Text key={index}>Override{item}</Text>
  );
  return (
    <View>
      <Text>高性能的分组(section)列表组件，支持下面这些常用的功能：</Text>
      <Text>完全跨平台。</Text>
      <Text>行组件显示或隐藏时可配置回调事件。</Text>
      <Text>支持单独的头部组件。</Text>
      <Text>支持单独的尾部组件。</Text>
      <Text>支持自定义行间分隔线。</Text>
      <Text>支持分组的头部组件。</Text>
      <Text>支持分组的分隔线。</Text>
      <Text>支持多种数据源结构</Text>
      <Text>支持下拉刷新。</Text>
      <Text>支持上拉加载。</Text>
      <Text>
        如果你的列表不需要分组(section)，那么可以使用结构更简单的FlatList
      </Text>
      <Text>必须的props=>sections/renderItem</Text>
      <Text>
        可选的props=>initialNumToRender/keyExtractor/onEndReached/extraData/ItemSeparatorComponent/inverted/ListFooterComponent/legacyImplementation/ListEmptyComponent/onEndReachedThreshold/onRefresh/onViewableItemsChanged/refreshing/removeClippedSubviews/ListHeaderComponent/renderSectionFooter/renderSectionHeader/SectionSeparatorComponent/stickySectionHeadersEnabled
      </Text>
      <Text>
        查看方法=>scrollToLocation/recordInteraction/flashScrollIndicators
      </Text>
      {/* // Example 1 (Homogeneous Rendering) */}
      <SectionList
        renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
        renderSectionHeader={({section: {title}}) => (
          <Text style={{fontWeight: 'bold'}}>{title}</Text>
        )}
        sections={[
          {title: 'Title1', data: ['item1', 'item2']},
          {title: 'Title2', data: ['item3', 'item4']},
          {title: 'Title3', data: ['item5', 'item6']},
        ]}
        keyExtractor={(item, index) => item + index}
      />
      {/* // Example 2 (Heterogeneous Rendering / No Section Headers) */}
      <SectionList
        renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
        sections={[
          {
            title: 'Title1',
            data: ['item1', 'item2'],
            renderItem: overrideRenderItem,
          },
          {title: 'Title2', data: ['item3', 'item4']},
          {title: 'Title3', data: ['item5', 'item6']},
        ]}
      />
    </View>
  );
};

export default SectionLists;

const styles = StyleSheet.create({});
