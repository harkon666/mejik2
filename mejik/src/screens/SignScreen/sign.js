import React from 'react';
import {View, Text} from 'react-native';

import {Header, Image, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SignScreen = ({navigation}) => {
  return (
    <>
      <Header
        containerStyle={{
          maxHeight: 60,
          paddingTop: 10,
          backgroundColor: 'white',
        }}
        leftComponent={
          <Icon
            style={{marginLeft: 5}}
            onPress={() => navigation.navigate('BottomTabNavigator')}
            name="chevron-left"
            size={24}
          />
        }
      />
      <View style={{height: '100%', backgroundColor: 'white'}}>
        <View style={{marginHorizontal: 15, marginTop: 50}}>
          <Image
            source={require('../../assets/logo-foundation.svg')}
            style={{width: '100%', height: 225}}
          />
        </View>
        <View style={{marginHorizontal: 100, marginTop: 30}}>
          <Text style={{fontSize: 24, textAlign: 'center', fontWeight: 'bold'}}>
            Welcome to Mejik Foundation
          </Text>
        </View>
        <View style={{marginHorizontal: 30, marginTop: 10}}>
          <Text style={{textAlign: 'center'}}>
            Mejik Foundation is a network that facillitates and empowers the
            voice of mejik communication
          </Text>
        </View>
        <View style={{marginTop: 50, marginHorizontal: 30}}>
          <View style={{marginBottom: 10}}>
            <Button
              onPress={() => navigation.navigate('LoginScreen')}
              title="Login"
              buttonStyle={{backgroundColor: 'red'}}
            />
          </View>
          <View>
            <Button
              type="outline"
              title="Register"
              buttonStyle={{borderColor: 'red'}}
              titleStyle={{color: 'red'}}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default SignScreen;
