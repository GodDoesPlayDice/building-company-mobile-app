import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;

// Home screen declaration
const HomeScreen = (props: any) => {
  return (
    <View style={styles.root}>
      <Text>Строительная компания Регион строй</Text>
      {myIcon}
      <Button
        title='Новости компании'
        color='#710ce3'
        onPress={() => Navigation.push(props.componentId, {
          component: {
            name: 'News',
          }
        })} />
    </View>
  );
};

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Объекты'
    }
  },
  bottomTab: {
    text: 'Объекты'
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