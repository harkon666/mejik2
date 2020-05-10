import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import EmailScreen from './email';
import PasswordScreen from './password';

const Router = createStackNavigator(
  {
    EmailScreen: {
      screen: EmailScreen,
    },
    PasswordScreen: {
      screen: PasswordScreen,
    },
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(Router);
