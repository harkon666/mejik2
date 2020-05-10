import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {Header, Avatar, Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TargetDonateScreen = ({navigation}) => {
  const [choose, setChoose] = React.useState(0);
  const [choosePerson, setChoosePerson] = React.useState(0);
  const [chooseTimeline, setChooseTimeline] = React.useState(0);
  const list = ['All', 'Panti Asuhan', 'Janda', 'Pengangguran', 'Duda'];
  const tl = ['1X', '2X', '3X', '4X', '5X'];
  const amount = [
    'Rp100.000',
    'Rp300.000',
    'Rp500.000',
    'Rp1.000.000',
    'Rp1.500.000',
    'Rp2.000.000',
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
            onPress={() => navigation.navigate('BottomTabNavigator')}
            name="times"
            size={28}
            style={{marginRight: 10}}
          />
        }
        centerComponent={
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>Donation</Text>
        }
        rightComponent={
          <Icon
            onPress={() => navigation.navigate('HistoryScreen')}
            name="history"
            size={21}
            style={{marginRight: 10}}
          />
        }
      />
      <View style={{height: '100%', backgroundColor: 'white'}}>
        <View style={{marginHorizontal: 10}}>
          <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 24}}>
            Donation Target
          </Text>
          <SafeAreaView style={{height: 30, marginVertical: 15}}>
            <ScrollView horizontal>
              {list.map((val, i) => (
                <View
                  key={i}
                  style={
                    choose === i
                      ? {
                          height: 25,
                          borderWidth: 1,
                          borderColor: 'red',
                          borderRadius: 100,
                        }
                      : null
                  }>
                  <Text
                    onPress={() => setChoose(i)}
                    style={
                      choose === i
                        ? {marginHorizontal: 20, fontSize: 16, color: 'red'}
                        : {marginHorizontal: 20, fontSize: 16}
                    }
                    key={i}>
                    {val}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </SafeAreaView>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {[1, 2, 3, 4, 5].map((val, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => setChoosePerson(i)}
                style={
                  choosePerson === i
                    ? {
                        borderWidth: 1,
                        borderColor: 'red',
                        alignItems: 'center',
                        width: '30%',
                        marginHorizontal: 3,
                      }
                    : {
                        alignItems: 'center',
                        width: '30%',
                        marginHorizontal: 3,
                      }
                }>
                <Avatar
                  source={{
                    uri:
                      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                  }}
                  showAccessory
                  size="medium"
                  rounded
                  containerStyle={{marginTop: 5}}
                />
                <Text style={{fontWeight: 'bold', marginVertical: 10}}>
                  John Doe
                </Text>
                <Text style={{marginVertical: 5}}>Lansia</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              onPress={() => setChoosePerson(0)}
              style={
                choosePerson === 11
                  ? {
                      borderWidth: 1,
                      borderColor: 'red',
                      alignItems: 'center',
                      width: '30%',
                      marginHorizontal: 3,
                    }
                  : {
                      alignItems: 'center',
                      width: '30%',
                      marginHorizontal: 3,
                    }
              }>
              <Icon
                name="arrow-circle-right"
                style={{color: 'red', marginTop: 25}}
                size={35}
              />
              <Text
                style={{fontWeight: 'bold', marginTop: 25, marginBottom: 10}}>
                John Doe
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 15}}>
            <Input
              labelStyle={{marginBottom: 8, color: 'black', right: 10}}
              inputStyle={{
                right: 10,
                borderWidth: 1,
                borderColor: 'gray',
                backgroundColor: 'gray',
              }}
              label="Donation Amount"
              placeholder="e.g Rp.100.000"
            />
          </View>
          <SafeAreaView style={{height: 30}}>
            <ScrollView horizontal>
              {amount.map((val, i) => (
                <View
                  key={i}
                  style={
                    choose === i
                      ? {
                          height: 25,
                          borderWidth: 1,
                          borderColor: 'red',
                          borderRadius: 100,
                        }
                      : null
                  }>
                  <Text
                    onPress={() => setChoose(i)}
                    style={
                      choose === i
                        ? {marginHorizontal: 20, fontSize: 16, color: 'red'}
                        : {marginHorizontal: 20, fontSize: 16}
                    }
                    key={i}>
                    {val}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </SafeAreaView>
          <View style={{marginVertical: 10}}>
            <Text
              style={{fontWeight: 'bold', fontSize: 24, flexDirection: 'row'}}>
              Timeline
            </Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              {tl.map((val, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => setChooseTimeline(i)}
                  style={
                    chooseTimeline === i
                      ? {
                          alignItems: 'center',
                          borderColor: 'red',
                          borderWidth: 1,
                          borderRadius: 100,
                          width: 40,
                          height: 40,
                          marginHorizontal: 10,
                        }
                      : {
                          alignItems: 'center',
                          width: 40,
                          height: 40,
                          marginHorizontal: 10,
                        }
                  }>
                  <Text style={{marginTop: 8}}>{val}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold'}}>Total Donation</Text>
            <Text style={{marginLeft: 'auto', color: 'red'}}>Rp600.000</Text>
          </View>
          <Button
            onPress={() => navigation.navigate('PaymentScreen')}
            title="Continue"
            buttonStyle={{backgroundColor: 'red', height: 45, marginTop: 10}}
          />
        </View>
      </View>
    </>
  );
};

export default TargetDonateScreen;
