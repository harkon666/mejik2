import React from 'react';
import {View, Text} from 'react-native';
import {Image, Header, Button} from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome5';

const SettingScreen = ({navigation}) => {
  return (
    <View>
      <Header
        backgroundColor="red"
        containerStyle={{height: 150}}
        centerComponent={
          <View style={{height: 120, width: 120, marginTop: 50}}>
            <View style={{}}>
              <Image
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
                style={{borderRadius: 100, width: '100%', height: '100%'}}
              />
            </View>
          </View>
        }
      />
      <View style={{backgroundColor: 'white', height: 150, elevation: -10}}>
        <Text
          style={{
            fontSize: 24,
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: 40,
          }}>
          John Doe
        </Text>
        <Text style={{textAlign: 'center', color: 'gray'}}>
          johnDoe@email.com
        </Text>
        <Text style={{textAlign: 'center', color: 'gray'}}>081231421</Text>
      </View>
      <View
        style={{
          marginVertical: 10,
          height: 100,
          backgroundColor: 'white',
        }}>
        <Button
          onPress={() => navigation.navigate('HistoryScreen')}
          buttonStyle={{backgroundColor: 'white', marginTop: 5}}
          titleStyle={{color: 'black', marginRight: 'auto'}}
          icon={
            <Icon
              size={24}
              name="history"
              style={{marginRight: 15, marginLeft: 10}}
            />
          }
          title="Donation History"
        />
        <Button
          buttonStyle={{
            backgroundColor: 'white',
            marginTop: 5,
          }}
          titleStyle={{color: 'black', marginRight: 'auto'}}
          title="Change Password"
          icon={
            <Icon
              size={24}
              name="unlock-alt"
              style={{marginRight: 15, marginLeft: 10}}
            />
          }
        />
      </View>
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <Button
          buttonStyle={{
            backgroundColor: 'white',
            marginTop: 5,
          }}
          titleStyle={{color: 'red', marginRight: 'auto'}}
          title="Logout"
          icon={
            <Icon
              size={24}
              name="sign-out-alt"
              style={{marginRight: 15, marginLeft: 10, color: 'red'}}
            />
          }
        />
      </View>
    </View>
  );
};

export default SettingScreen;
