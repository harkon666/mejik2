import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

//screens
import RegisterScreen from './register';

const Router = createStackNavigator(
  {
    RegisterScreen: {
      screen: RegisterScreen,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'RegisterScreen',
  },
);

export default createAppContainer(Router);
