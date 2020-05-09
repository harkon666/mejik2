import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

//screens
import SignScreen from './sign';
import LoginScreen from './LoginScreen/index';

const Router = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
    },
    SignScreen: {
      screen: SignScreen,
    },
  },
  {
    initialRouteName: 'SignScreen',
    headerMode: 'none',
  },
);

export default createAppContainer(Router);
