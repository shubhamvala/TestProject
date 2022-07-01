import React from 'react';
import { pickBy, identity } from 'lodash';
import { IconProps } from './icon.props';
import { icons } from './icons';
import { Icon as NBIcon } from 'native-base';

const omitNil = (obj: any) => pickBy(obj, identity);

export function Icon(props: IconProps) {
  const { name, size, height, width, ...rest } = props;

  const IconSVG = icons[name] ?? NBIcon;
  const objectProps = omitNil({
    name,
    size,
    height: height || size,
    width: width || size,
    ...rest,
  });
  return <IconSVG {...objectProps} />;
}
