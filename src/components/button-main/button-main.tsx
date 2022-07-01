import React, { memo } from 'react';
import { Box, Button as NBButton, IButtonProps } from 'native-base';
import { Text, TextProps } from '@components/text';

type ButtonMainProps = IButtonProps & {
  labelTx?: string;
  label?: string;
  textColor?: string;
  buttonColor?: string;
  textAllCaps?: boolean;
  _text?: TextProps;
};
export const ButtonMain = memo(
  ({
    label,
    labelTx,
    _text,
    children,
    disabled,
    buttonColor,
    textColor,
    textAllCaps,
    ...props
  }: ButtonMainProps) => {
    const buttonProps = disabled ? { bg: 'gray.400' } : {};
    return (
      <NBButton
        bg={buttonColor || 'primary.500'}
        h={12}
        alignItems="center"
        justifyContent={'center'}
        borderRadius={6}
        disabled={disabled}
        {...buttonProps}
        _spinner={{
          color: textColor || 'white',
        }}
        spinnerPlacement="end"
        shadow={2}
        colorScheme={'primary'}
        {...props}>
        <Box>
          {(!!labelTx || !!label) && (
            <Text
              fontFamily={'main'}
              fontWeight={700}
              fontSize="md"
              color={textColor || 'white'}
              text={label}
              tx={labelTx}
              textAllCaps={textAllCaps}
              {..._text}
            />
          )}
          {children}
        </Box>
      </NBButton>
    );
  },
);
