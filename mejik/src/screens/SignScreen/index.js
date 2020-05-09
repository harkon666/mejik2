import {createStackNavigator} from 'react-navigation-stack';

//screens
import SignScreen from './sign';
import LoginScreen from './LoginScreen/index';

const Router = createStackNavigator(
  {
    SignScreen: {
      screen: SignScreen,
    },
  },
  {
    headerMode: 'none',
  },
);

export default Router;
