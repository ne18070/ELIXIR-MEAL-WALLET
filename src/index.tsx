import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  BalanceScreen,
  Transactions,
  ScannerScreen,
} from '../screens/';

import CardItem from '../components/Cards/CardSection'
const Router = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
    BalanceScreen,
    Transactions: { screen: Transactions },
    ScannerScreen,
    CardItem,
  },
  {
    initialRouteName: 'Dashboard',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);