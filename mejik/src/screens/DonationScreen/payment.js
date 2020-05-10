import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Header, Image, Button, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

const PaymentScreen = ({navigation}) => {
  const list = [
    {
      name: 'Amy Farha',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President',
    },
    // more items
  ];

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
        centerComponent={
          <Text style={{fontWeight: 'bold', fontSize: 20}}>
            Proof Of Transfer
          </Text>
        }
      />
      <ScrollView>
        <View style={{alignItems: 'center', backgroundColor: 'white'}}>
          <View style={{marginHorizontal: 10, alignItems: 'center'}}>
            <Image
              source={{
                uri: 'https://www.aturduit.com/uploads/id/logos/bca-logo.png',
              }}
              style={{width: 140, height: 140}}
            />
            <Text style={{color: 'gray', marginBottom: 10}}>
              Virtual Account
            </Text>
            <Text style={{marginBottom: 20, fontSize: 18, fontWeight: 'bold'}}>
              0001-2846-1819-2910
            </Text>
            <Text style={{color: 'gray', marginBottom: 10}}>Name Holder</Text>
            <Text style={{marginBottom: 40, fontSize: 16, fontWeight: 'bold'}}>
              Mejik Foundation
            </Text>
          </View>
        </View>
        <View style={{backgroundColor: 'white', height: '100%', marginTop: 10}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              marginLeft: 15,
              marginTop: 15,
            }}>
            Bill Summary
          </Text>
          {list.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{source: {uri: l.avatar_url}}}
              title={l.name}
              subtitle={l.subtitle}
              bottomDivider
              rightElement={
                <>
                  <Text style={{fontWeight: 'bold', marginRight: 30}}>2X</Text>
                  <Text style={{fontWeight: 'bold', color: 'red'}}>
                    Rp300.000
                  </Text>
                </>
              }
            />
          ))}
          <View
            style={{marginHorizontal: 15, marginTop: 10, flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold'}}>Total</Text>
            <Text
              style={{marginLeft: 'auto', color: 'red', fontWeight: 'bold'}}>
              Rp600.000
            </Text>
          </View>
          <View
            style={{
              margin: 15,
              borderWidth: 2,
              borderColor: 'red',
              borderRadius: 10,
              borderStyle: 'dashed',
              alignItems: 'center',
            }}>
            <Icon
              name="file-image"
              size={40}
              style={{color: 'gray', marginTop: 30, marginBottom: 20}}
            />
            <Button
              buttonStyle={{
                backgroundColor: 'red',
                borderRadius: 5,
                marginBottom: 30,
              }}
              title="Upload Photo"
            />
          </View>
          <View style={{marginHorizontal: 15}}>
            <Button
              onPress={() => navigation.navigate('BottomTabNavigator')}
              buttonStyle={{
                backgroundColor: 'red',
                borderRadius: 5,
                marginBottom: 15,
              }}
              title="Confirmation"
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default PaymentScreen;
