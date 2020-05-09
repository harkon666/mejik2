/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

//screens
import BottomTabNavigator from './src/screens/BottomTabNavigator/index';
import LoginScreen from './src/screens/LoginScreen/index';

const App = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
    },
    BottomTabNavigator: {
      screen: BottomTabNavigator,
    },
  },
  {headerMode: 'none'},
);

export default createAppContainer(App);
