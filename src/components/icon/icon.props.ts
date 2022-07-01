import { IconName } from './icons';
import { IIconProps } from 'native-base';

export type IconCustomProps = {
  stroke?: string;
  fill?: string;
  width?: number | string;
  height?: number | string;
  opacity?: number;
  size?: number;
};

export type IconProps = IIconProps & {
  name?: IconName | string;
} & IconCustomProps;
