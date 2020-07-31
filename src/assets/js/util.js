import ReactNative, {Dimensions} from 'react-native';
// 设计稿元素宽度（px） / 设计稿总宽度（px） = 元素的宽度（dp） / 屏幕的总宽度（dp）
// 元素的宽度（dp） = 设计稿元素宽度（px）* 屏幕的总宽度（dp） / 设计稿总宽度（px）
// 设备宽度，单位 dp
// const deviceWidthDp = Dimensions.get('window').width;
// // 设计稿宽度（这里为640px），单位 px
// const uiWidthPx = 640;
// // px 转 dp（设计稿中的 px 转 rn 中的 dp）
// export const pTd = (uiElePx) => {
//  return uiElePx * deviceWidthDp / uiWidthPx;
// }
// --------------------------
// 设计稿
// 获取屏幕的dp
const {width, height} = Dimensions.get('window');
let fontScale = ReactNative.PixelRatio.getFontScale();
let pixelRatio = ReactNative.PixelRatio.get();
// 高保真的宽度和告诉(设计稿)
const designWidth = 750.0;
const designHeight = 1334.0;

// 根据dp获取屏幕的px
let screenPxW = ReactNative.PixelRatio.getPixelSizeForLayoutSize(width);
let screenPxH = ReactNative.PixelRatio.getPixelSizeForLayoutSize(height);
/**
 * 适配高度
 */
export default function px2dp(px) {
  return (px * width) / designWidth;
}

/**
 * 设置text
 * @param size  px
 * @returns {Number} dp
 */
export function setSpText(size) {
  var scaleWidth = width / designWidth;
  var scaleHeight = height / designHeight;
  var scale = Math.min(scaleWidth, scaleHeight);
  size = Math.round((size * scale) / fontScale + 0.5);
  return size;
}
/**
 * 设置高度
 * @param size  px
 * @returns {Number} dp
 */
export function scaleSizeH(size) {
  var scaleHeight = (size * screenPxH) / designHeight;
  size = Math.round(scaleHeight / pixelRatio + 0.5);
  return size;
}

/**
 * 设置宽度
 * @param size  px
 * @returns {Number} dp
 */
export function scaleSizeW(size) {
  var scaleWidth = (size * screenPxW) / designWidth;
  size = Math.round(scaleWidth / pixelRatio + 0.5);
  return size;
}
