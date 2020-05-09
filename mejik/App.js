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
import SignScreen from './src/screens/SignScreen/index';

const App = createStackNavigator(
  {
    BottomTabNavigator: {
      screen: BottomTabNavigator,
    },
    SignScreen: {
      screen: SignScreen,
    },
  },
  {headerMode: 'none'},
);

export default createAppContainer(App);
