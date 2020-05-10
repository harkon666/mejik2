import React from 'react';
import {View, Text} from 'react-native';

import {Header, Image, Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

const RegisterScreen = ({navigation}) => {
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
            onPress={() => navigation.navigate('SignScreen')}
            name="chevron-left"
            size={24}
          />
        }
      />
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <View style={{marginHorizontal: 20, marginTop: 40}}>
          <Text style={{fontWeight: 'bold', fontSize: 24}}>Registration</Text>
          <View style={{marginTop: 15, marginRight: 30}}>
            <Text>Please complete your detail below to register</Text>
          </View>
          <View style={{marginTop: 30, marginLeft: -10}}>
            <Input
              labelStyle={{marginBottom: 8, color: 'black'}}
              inputStyle={{borderWidth: 1, borderColor: 'gray'}}
              label="Full Name"
              placeholder="e.g john doe"
            />
            <Input
              labelStyle={{marginBottom: 8, color: 'black'}}
              inputStyle={{borderWidth: 1, borderColor: 'gray'}}
              label="Email"
              placeholder="e.g joh@email.com"
            />
            <Input
              labelStyle={{marginBottom: 8, color: 'black'}}
              inputStyle={{borderWidth: 1, borderColor: 'gray'}}
              label="Phone Number"
              placeholder="e.g 081237213"
            />
          </View>
          <View style={{marginRight: 10, marginTop: 10}}>
            <Button
              onPress={() => navigation.navigate('DonationScreen')}
              title="Continue"
              buttonStyle={{backgroundColor: 'red', height: 45}}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default RegisterScreen;
