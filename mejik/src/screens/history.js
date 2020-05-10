import React from 'react';
import {View, Text} from 'react-native';

import {Header, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HistoryScreen = ({navigation}) => {
  const list = [
    {
      name: 'Amy Farha',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President',
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman',
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
            onPress={() => navigation.goBack()}
            name="chevron-left"
            size={21}
            style={{marginRight: 10}}
          />
        }
        centerComponent={
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>History</Text>
        }
        rightComponent={
          <Icon name="search" size={21} style={{marginRight: 10}} />
        }
      />
      <View style={{height: '100%', backgroundColor: 'white'}}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{source: {uri: l.avatar_url}}}
            title={l.name}
            subtitle={l.subtitle}
            bottomDivider
            rightTitle={'Rp.600.000'}
            rightTitleStyle={{fontWeight: 'bold', color: 'red'}}
          />
        ))}
      </View>
    </>
  );
};

export default HistoryScreen;
