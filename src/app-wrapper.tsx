import React from 'react';
import { RootNavigator } from '@navigation/index';
import { navigationTheme } from '@styles/theme';

const AppWrapper = () => {
  return <RootNavigator theme={navigationTheme} />;
};
export default AppWrapper;
