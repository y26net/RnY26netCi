// 引入对应组件
import Flex from './test/flex';
import FlexDirection from './test/FlexDirection';
import JustifyContent from './test/JustifyContent';
import AlignContent from './test/AlignContent';
import flexWrap from './test/flexWrap';
import AlignItem from './test/AlignItem';
import AlignSelf from './test/AlignSelf';
import RNCamera from './test/RNCamera';
import RNCameraSale from './test/RNCameraSale';
import MYAnimated from './test/MYAnimated';
import CameraRoute from './test/CameraRoute';
import TakePicture from './test/TakePicture';
import ZoomView from './test/ZoomView';
import ReactNativeDemo from './test/ReactNativeDemo';
import cameraRecordScreen from './test/cameraRecordScreen';
import CameraRollSaveImg from './test/CameraRollSaveImg';
import WebSockets from './test/WebSockets';
import myLibrary from './test/myLibrary';

// 组件合集
import comps from './comps/router';
import apis from './apis/router';
import rnfs from './rnfs/router';

// 抛出按需加载组件
export default {
  Flex,
  FlexDirection,
  JustifyContent,
  AlignContent,
  flexWrap,
  AlignItem,
  AlignSelf,
  RNCamera,
  RNCameraSale,
  MYAnimated,
  CameraRoute,
  TakePicture,
  ZoomView,
  ReactNativeDemo,
  cameraRecordScreen,
  CameraRollSaveImg,
  WebSockets,
  myLibrary,
  ...comps,
  ...apis,
  ...rnfs,
};
