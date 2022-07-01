import React, { memo } from 'react';
import { translate } from '@i18n/translate';
import { Text as NBText, ITextProps } from 'native-base';

export type TextProps = ITextProps & {
  tx?: string;
  text?: string | number;
  txOptions?: Record<string, string | number>;
  variant?: any;
  textAllCaps?: boolean;
};
export const Text = memo(
  ({ text, tx, children, txOptions, textAllCaps, ...props }: TextProps) => {
    const content = tx ? translate(tx, txOptions) : text;
    const contentMain =
      typeof content === 'string' && textAllCaps
        ? content.toUpperCase()
        : content;

    return (
      <NBText {...props}>
        {contentMain}
        {children && children}
      </NBText>
    );
  },
);
