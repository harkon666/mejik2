/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

//screens
import BottomTabNavigator from './src/screens/BottomTabNavigator/index';
import SignScreen from './src/screens/SignScreen/index';
import HistoryScreen from './src/screens/history';
import TargetDonateScreen from './src/screens/DonationScreen';

const App = createStackNavigator(
  {
    BottomTabNavigator: {
      screen: BottomTabNavigator,
    },
    SignScreen: {
      screen: SignScreen,
    },
    HistoryScreen: {
      screen: HistoryScreen,
    },
    TargetDonateScreen: {
      screen: TargetDonateScreen,
    },
  },
  {headerMode: 'none'},
);

export default createAppContainer(App);
