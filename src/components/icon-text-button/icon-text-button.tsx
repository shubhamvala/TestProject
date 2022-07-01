import React, { memo } from 'react';
import { IBoxProps, Pressable, VStack } from 'native-base';
import { Text, TextProps, Icon, IconProps } from '@components/index';

type IconTextButtonProps = IBoxProps & {
  labelTx?: string;
  label?: string;
  _text?: TextProps;
  icon?: IconProps;
  onPressButton?: () => void;
};
export const IconTextButton = memo(
  ({
    label,
    labelTx,
    _text,
    icon,
    onPressButton,
    ...props
  }: IconTextButtonProps) => {
    return (
      <Pressable _pressed={{ opacity: 0.7 }} onPress={onPressButton}>
        <VStack alignItems={'center'} {...props}>
          <Icon {...icon} />
          <Text
            text={label}
            tx={labelTx}
            fontFamily={'main'}
            fontWeight={600}
            fontSize="xs"
            color={'darkGray.700'}
            {..._text}
          />
        </VStack>
      </Pressable>
    );
  },
);
