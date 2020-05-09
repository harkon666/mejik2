import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';

//screen
import ArticleScreen from './article';
import DonationScreen from './donation';
import SettingScreen from './setting';

const Router = createBottomTabNavigator(
  {
    ArticleScreen: ArticleScreen,
    DonationScreen: DonationScreen,
    SettingScreen: SettingScreen,
  },
  {
    swipeEnabled: true,
  },
  {
    initialRouteName: 'ArticleScreen',
  },
);

export default Router;
