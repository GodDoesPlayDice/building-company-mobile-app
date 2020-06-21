import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

// Home screen declaration
const HomeScreen = (props: any) => {
  return (
    <View style={styles.root}>
      <Text>Строительная компания Регион строй</Text>
      <Button
        title='Новости компании'
        color='#710ce3'
        onPress={() => Navigation.push(props.componentId, {
          component: {
            name: 'News',
            options: {
              topBar: {
                title: {
                  text: 'News'
                }
              }
            }
          }
        })} />
    </View>
  );
};
HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
    }
  }
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});

export default HomeScreen;