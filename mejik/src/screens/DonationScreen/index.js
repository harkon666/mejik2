import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

//screens
import TargetDonateScreen from './TargetDonate';
import PaymentScreen from './payment';

const Router = createStackNavigator(
  {
    TargetDonateScreen: {
      screen: TargetDonateScreen,
    },
    PaymentScreen: {
      screen: PaymentScreen,
    },
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(Router);
