import React from 'react';
import { Dimensions, StyleSheet, SafeAreaView, ScrollView, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Text, Image, Divider } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 5,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    height: 95,
    width: screenWidth,
  },
  textAddress: {
    paddingTop: 5,
    fontSize: 16,
  }
});

const Location = (props: object) => {
  return (
    <View style={styles.container}>
      <Text h4>Местоположение</Text>
      <View style={styles.imageContainer}>
        <TouchableOpacity>
          <ImageBackground
            style={styles.image}
            imageStyle={{borderRadius: 8}}
            source={require('../images/v.png')}
          >
          <Text style={{color: "white"}}>Смотреть на карте</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      {/* <Divider style={{ backgroundColor: 'blue' }} /> */}
      <Text style={styles.textAddress}>
        пос. Новая Адыгея, ул. Тургенева, д. 11
      </Text>
    </View>
  );
}

export default Location;