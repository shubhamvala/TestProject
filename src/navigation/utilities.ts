import {
  PartialState,
  NavigationState,
  useNavigation,
} from '@react-navigation/native';
import { AppNavigationProps } from './params';

export const RootNavigation = {
  navigate(name: string, params?: any) {
    name;
    params;
  },
  goBack() {},
  resetRoot(state?: PartialState<NavigationState> | NavigationState) {}, // eslint-disable-line @typescript-eslint/no-unused-vars,
  getRootState(): NavigationState {
    return {} as any;
  },
};

export const useAppNavigation = () => useNavigation<AppNavigationProps>();
