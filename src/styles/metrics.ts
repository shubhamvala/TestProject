import { Dimensions, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { hp } from '@styles/responsive';

const { width, height } = Dimensions.get('window');
const platform = Platform.OS;
const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;
const statusBarHeightAnimation = getStatusBarHeight();
const headerHeight =
  Platform.select({
    android: 56,
    default: 40,
  }) + statusBarHeightAnimation;
const bottomBarHeight = hp(5);

const screenSmallHeight = screenHeight <= 740;
const screenMediumHeight = screenHeight > 740 && screenHeight <= 850;
const screenBaseHeight = screenHeight <= 667;

export const metrics = {
  screenWidth,
  screenHeight,
  platform,
  statusBarHeightAnimation,
  headerHeight,
  bottomBarHeight,
  screenSmallHeight,
  screenMediumHeight,
  screenBaseHeight,
};
