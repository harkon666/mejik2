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
import {View, Text} from 'react-native';

//screens
import BottomTabNavigator from './src/screens/BottomTabNavigator/index';

const App = createStackNavigator({
  BottomTabNavigator: {
    screen: BottomTabNavigator,
  },
});

export default createAppContainer(App);
