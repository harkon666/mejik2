import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const BottomTabFooter = ({state, descriptors, navigation}) => {
  const [active, setActive] = useState(1);
  return (
    <View
      style={{
        height: 60,
        flexWrap: 'wrap-reverse',
        flexDirection: 'row',
        backgroundColor: 'white',
      }}>
      <View
        onTouchStart={() => {
          setActive(1);
          navigation.navigate('ArticleScreen');
        }}
        style={{flex: 1, marginBottom: 100}}>
        <View style={{alignItems: 'center'}}>
          <Icon
            color={active === 1 ? 'red' : 'black'}
            name={'list-alt'}
            solid
            size={30}
          />
          <Text>Article</Text>
        </View>
      </View>
      <View
        onTouchStart={() => navigation.navigate('DonationScreen')}
        style={{flex: 1, marginBottom: 80, marginTop: 15}}>
        <View style={{alignItems: 'center'}}>
          <Icon name={'ribbon'} solid size={40} />
          <Text>Donate</Text>
        </View>
      </View>
      <View
        onTouchStart={() => {
          setActive(3);
          navigation.navigate('SettingScreen');
        }}
        style={{flex: 1, marginBottom: 100}}>
        <View style={{alignItems: 'center'}}>
          <Icon
            color={active === 3 ? 'red' : 'black'}
            name={'cog'}
            solid
            size={30}
          />
          <Text>Setting</Text>
        </View>
      </View>
    </View>
  );
};

export default BottomTabFooter;
