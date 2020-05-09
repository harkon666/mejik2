import React from 'react';
import {View, Text} from 'react-native';
import {Header, Image, Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

const PasswordScreen = ({navigation}) => {
  const [show, setShow] = React.useState(true);
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
            onPress={() => navigation.goBack()}
            name="chevron-left"
            size={24}
          />
        }
      />
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <View style={{marginTop: 50, marginLeft: 15}}>
          <Image
            source={require('../../../assets/logo-foundation.svg')}
            style={{height: 200, width: 200, borderRadius: 100}}
          />
        </View>
        <View style={{marginHorizontal: 15, marginTop: 50}}>
          <Text style={{fontWeight: 'bold', fontSize: 24}}>Password</Text>
          <View style={{marginTop: 15, marginRight: 30}}>
            <Text>Please enter your password to can log in to application</Text>
          </View>
          <View style={{marginTop: 30, marginLeft: -10}}>
            <Input
              rightIcon={
                <Icon
                  onPress={() => (show ? setShow(false) : setShow(true))}
                  name={show ? 'eye-slash' : 'eye'}
                  size={20}
                />
              }
              rightIconContainerStyle={{
                borderColor: 'gray',
                borderWidth: 1,
                paddingVertical: 24.3,
                paddingRight: 15,
                borderLeftWidth: 0,
              }}
              labelStyle={{marginBottom: 8, color: 'black'}}
              inputStyle={{
                borderWidth: 1,
                borderRightWidth: 0,
                borderColor: 'gray',
              }}
              label="Password"
              placeholder="Enter your password ..."
              secureTextEntry={show}
            />
          </View>
          <View style={{marginRight: 10}}>
            <Button
              onPress={() => navigation.navigate('DonationScreen')}
              title="Continue"
              buttonStyle={{backgroundColor: 'red'}}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default PasswordScreen;
