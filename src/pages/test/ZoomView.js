/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, PanResponder, Dimensions} from 'react-native';
import {RNCamera} from 'react-native-camera';

// ZoomView
class ZoomView extends Component {
  constructor(props) {
    super(props);
    this._panResponder = PanResponder.create({
      onPanResponderMove: (e, {dy}) => {
        const {height: windowHeight} = Dimensions.get('window');
        return this.props.onZoomProgress(
          Math.min(Math.max((dy * -1) / windowHeight, 0), 0.5),
        );
      },
      onMoveShouldSetPanResponder: (ev, {dx}) => {
        return dx !== 0;
      },
      onPanResponderGrant: () => {
        return this.props.onZoomStart();
      },
      onPanResponderRelease: () => {
        return this.props.onZoomEnd();
      },
    });
  }
  render() {
    return (
      <View
        style={{flex: 1, width: '100%'}}
        {...this._panResponder.panHandlers}>
        {this.props.children}
      </View>
    );
  }
}

// Implementation
class CameraView extends Component {
  state = {
    zoom: 0,
  };
  render() {
    return (
      <ZoomView
        onZoomProgress={(progress) => {
          this.setState({zoom: progress});
        }}
        onZoomStart={() => {
          console.log('zoom start');
        }}
        onZoomEnd={() => {
          console.log('zoom end');
        }}>
        <RNCamera zoom={this.state.zoom} style={{flex: 1}} />
      </ZoomView>
    );
  }
}

export default CameraView;
