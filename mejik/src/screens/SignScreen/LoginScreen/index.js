import {createStackNavigator} from 'react-navigation-stack';

import EmailScreen from './email';
import PasswordScreen from './password';

const Router = createStackNavigator({
  EmailScreen: {
    screen: EmailScreen,
  },
  PasswordScreen: {
    screen: PasswordScreen,
  },
});

export default Router;
