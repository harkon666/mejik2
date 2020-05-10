import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const BottomTabFooter = ({state, descriptors, navigation}) => {
  const [active, setActive] = useState(1);
  return (
    <View
      style={{
        height: 60,
        flexDirection: 'row',
        backgroundColor: 'white',
      }}>
      <View
        onTouchStart={() => {
          setActive(1);
          navigation.navigate('ArticleScreen');
        }}
        style={{flex: 1}}>
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
        style={{
          flex: 1,
          bottom: 30,
          paddingBottom: 30,
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <View
            style={{
              borderRadius: 100,
              backgroundColor: 'red',
              height: 60,
              width: 60,
              alignItems: 'center',
            }}>
            <Icon
              onPress={() => {
                setActive(2);
                navigation.navigate('TargetDonateScreen');
              }}
              color="white"
              style={{marginTop: 10}}
              name={'ribbon'}
              solid
              size={35}
            />
          </View>
          <Text style={{top: 2}}>Donate</Text>
        </View>
      </View>
      <View
        onTouchStart={() => {
          setActive(3);
          navigation.navigate('SettingScreen');
        }}
        style={{flex: 1}}>
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
