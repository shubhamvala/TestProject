import React, { ComponentProps, forwardRef } from 'react';
import { RootParamList } from '@navigation/params';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from '@navigation/routes';

const Stack = createNativeStackNavigator<RootParamList>();
const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={Routes.InvestStockScreen}
        component={require('@screens/invest-stock-screen').default}
      />
      <Stack.Screen
        name={Routes.FamilyPlusDashboardScreen}
        component={require('@screens/family-plus-dashboard-screen').default}
      />
      <Stack.Screen
        name={Routes.AggressivePortfolioScreen}
        component={require('@screens/aggressive-portfolio-screen').default}
      />
    </Stack.Navigator>
  );
};

export const RootNavigator = forwardRef<
  NavigationContainerRef<any>,
  Partial<ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <RootStack />
    </NavigationContainer>
  );
});
RootNavigator.displayName = 'RootNavigator';

const exitRoutes = [Routes.InvestStockScreen];
export const canExit = (routeName: string) =>
  exitRoutes.includes(routeName as any);
