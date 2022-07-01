import { Dimensions, PixelRatio, Platform } from 'react-native';
import ExtraDimensions from 'react-native-extra-dimensions-android';

const { width, height } = Dimensions.get('window');

// Retrieve initial screen's width
const screenWidth = width;

// Retrieve initial screen's height
const screenHeight =
  Platform.OS === 'ios'
    ? height
    : height - ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT');

/**
 * Converts provided width percentage to independent pixel (dp).
 * @param  {number|string} widthPercent The percentage of screen's width that UI element should cover
 *                               along with the percentage symbol (%).
 * @return {number}              The calculated dp depending on current device's screen width.
 */
const wp = (widthPercent: number | string): number => {
  // Parse string percentage input and convert it to number.
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that corresponds to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

/**
 * Converts provided height percentage to independent pixel (dp).
 * @param  {number|string} heightPercent The percentage of screen's height that UI element should cover
 *                                along with the percentage symbol (%).
 * @return {number}               The calculated dp depending on current device's screen height.
 */
const hp = (heightPercent: number | string): number => {
  // Parse string percentage input and convert it to number.
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export { wp, hp };
