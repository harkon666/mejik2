import React from 'react';
import {View, Text} from 'react-native';
import {Header, Image, Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

const EmailScreen = ({navigation}) => {
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
        <View style={{marginTop: 50, marginLeft: 15}}>
          <Image
            source={require('../../../assets/logo-foundation.svg')}
            style={{height: 200, width: 200, borderRadius: 100}}
          />
        </View>
        <View style={{marginHorizontal: 15, marginTop: 50}}>
          <Text style={{fontWeight: 'bold', fontSize: 24}}>Email</Text>
          <View style={{marginTop: 15, marginRight: 30}}>
            <Text>
              Please enter your registered email to log in to application
            </Text>
          </View>
          <View style={{marginTop: 30, marginLeft: -10}}>
            <Input
              labelStyle={{marginBottom: 8, color: 'black'}}
              inputStyle={{borderWidth: 1, borderColor: 'gray'}}
              label="Email"
              placeholder="e.g address@email.com"
            />
          </View>
          <View style={{marginRight: 10}}>
            <Button
              onPress={() => navigation.navigate('PasswordScreen')}
              title="Login"
              buttonStyle={{backgroundColor: 'red'}}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default EmailScreen;
