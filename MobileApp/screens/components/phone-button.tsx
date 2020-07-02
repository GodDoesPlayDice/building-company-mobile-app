const { Navigation } = require('react-native-navigation');
import React from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';


/* кнопка позвонить в хэдере */
const PhoneBtn = () => {
  return (
    <Button
      onPress={() => {
        Navigation.showModal({
          stack: {
            children: [{
              component: {
                name: 'Modal',
                passProps: {
                  text: 'stack with one child'
                },
                options: {
                  topBar: {
                    title: {
                      text: 'Modal'
                    },
                    rightButtons: [],
                  }
                }
              }
            }]
          }
        })
      }
      }
      type='clear'
      icon={
        <Icon
          name="phone"
          size={25}
          color="black"
        />
      }
    />
  );
};

export default PhoneBtn;