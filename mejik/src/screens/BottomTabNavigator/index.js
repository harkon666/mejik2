import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';

//screen
import ArticleScreen from './article';

const Router = createBottomTabNavigator({
  ArticleScreen: ArticleScreen,
});
