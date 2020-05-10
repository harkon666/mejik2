import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import {Header, Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ArticleScreen = ({navigation}) => {
  return (
    <>
      <Header
        containerStyle={{
          maxHeight: 60,
          paddingTop: 10,
          backgroundColor: 'white',
        }}
        rightComponent={
          <Icon name="search" size={21} style={{marginRight: 10}} />
        }>
        <View style={{flexDirection: 'row', width: 400}}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>Article</Text>
        </View>
      </Header>
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <ScrollView>
          <View style={{flexDirection: 'row', height: 110, marginLeft: 10}}>
            <View style={{flex: 1}}>
              <Image
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
                style={{resizeMode: 'stretch', width: '100%', height: '100%'}}
              />
            </View>
            <View style={{flex: 2.5, marginLeft: 15, flexWrap: 'wrap'}}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>
                React native article
              </Text>
              <Text>see what u need here brooo wkkwkwkwkkwkwk</Text>
              <Text>Read more</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default ArticleScreen;
