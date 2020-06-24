import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Image, Card, Icon, Button } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';

/* // Home screen declaration
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
          }
        })} />
    </View>
  );
}; */

const logoVinograd = {
  uri: 'https://жк-виноградъ.рф/img/build/2006/lit_all_01.jpg',
  width: 64,
  height: 64
};
const logoBalans= {
  uri: 'https://жк-виноградъ.рф/img/build/2006/lit_all_01.jpg',
  width: 64,
  height: 64
};

const HomeScreen = (props: any) => (
  <ScrollView>
    <Card
      title='ЖК Баланс'
      image={logoBalans}>
      <Text style={{ marginBottom: 10 }}>
        Жилой комплекс класса комфорт плюс на берегу реки Кубань.
        </Text>
      <Button
        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        title='Подробнее' 
        onPress={() => Navigation.push(props.componentId, {
          component: {
            name: 'News',
          }
        })}
        />
    </Card>
    <Card
      title='ЖК Виноград 2'
      image={logoVinograd}>
      <Text style={{ marginBottom: 10 }}>
        Жилой комплекс комфорт класса прямо за ИКЕА Парком.
        </Text>
      <Button
        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        title='Подробнее' 
        onPress={() => Navigation.push(props.componentId, {
          component: {
            name: 'News',
          }
        })}
        />
    </Card>
  </ScrollView>
);

HomeScreen.options = {
  topBar: {
    visible: false,
    title: {
      text: 'Все проекты'
    }
  }
};

export default HomeScreen;