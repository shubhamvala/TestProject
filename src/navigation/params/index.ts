import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Routes from '../routes';

export type RootParamList = {
  [Routes.InvestStockScreen]: undefined;
  [Routes.FamilyPlusDashboardScreen]: undefined;
  [Routes.AggressivePortfolioScreen]: undefined;
};

export type AppNavigationProps = NativeStackNavigationProp<RootParamList>;
