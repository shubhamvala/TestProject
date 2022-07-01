import React from 'react';
import { Icon, Text, IconCustomProps } from '@components/index';
import { Box, HStack, Pressable, useTheme } from 'native-base';

export type HeaderMainProps = {
  headerTitleTx?: string;
  headerTitle?: string;
  leftIcon?: string;
  leftIconProps?: IconCustomProps;
  rightIcon?: string;
  rightIconProps?: IconCustomProps;
  onPressLeftIcon?: () => void;
  onPressRightIcon?: () => void;
};

export const HeaderMain = ({
  headerTitleTx,
  headerTitle,
  leftIcon,
  leftIconProps,
  rightIcon,
  rightIconProps,
  onPressLeftIcon,
  onPressRightIcon,
}: HeaderMainProps) => {
  const theme = useTheme();
  return (
    <HStack safeAreaTop alignItems={'center'} py={3}>
      {leftIcon && (
        <Pressable px={4} onPress={onPressLeftIcon}>
          <Icon name={leftIcon} size={24} {...leftIconProps} />
        </Pressable>
      )}
      <Box flex={1}>
        {(headerTitle || headerTitleTx) && (
          <Text
            text={headerTitle}
            tx={headerTitleTx}
            color="primary.500"
            fontFamily={theme.fontConfig.Mulish[700].normal}
            fontWeightIOS="700"
            textAlign={'center'}
            fontSize="md"
          />
        )}
      </Box>
      {rightIcon && (
        <Pressable px={4} onPress={onPressRightIcon}>
          <Icon name={rightIcon} size={24} {...rightIconProps} />
        </Pressable>
      )}
    </HStack>
  );
};
