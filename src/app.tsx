import React, { useEffect } from 'react';
import { enableScreens } from 'react-native-screens';
import AppWrapper from './app-wrapper';
import { NativeBaseProvider, extendTheme, StatusBar } from 'native-base';
import { theme } from '@styles/theme';
import Orientation from 'react-native-orientation-locker';
import { setI18nConfig } from '@i18n/index';

enableScreens();
setI18nConfig();

function App() {
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <NativeBaseProvider theme={extendTheme(theme)}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <AppWrapper />
    </NativeBaseProvider>
  );
}

export default App;
