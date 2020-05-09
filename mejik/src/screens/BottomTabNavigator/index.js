import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';

//components
import Footer from '../../components/BottomTabFooter';

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
    tabBarComponent: props => {
      return <Footer {...props} />;
    },
  },
  {
    initialRouteName: 'ArticleScreen',
  },
);

export default Router;
