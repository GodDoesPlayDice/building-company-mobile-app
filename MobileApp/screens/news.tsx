import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { ListItem } from 'react-native-elements'

const list: any = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

// Settings screen declaration - this is the screen we'll be pushing into the stack
const NewsScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Новости компании</Text>
      <View>
        {
          list.map((l: any, i: any) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url } }}
              title={l.name}
              subtitle={l.subtitle}
              bottomDivider
            />
          ))
        }
      </View >
    </View>
  );
}

NewsScreen.options = {
  topBar: {
    title: {
      text: 'Новости'
    }
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});

export default NewsScreen;