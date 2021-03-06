/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
declare const global: { HermesInternal: null | {} };
const { Navigation } = require('react-native-navigation');

import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { View, Text } from 'react-native';

/* компоненты */
import PhoneBtn from './screens/components/phone-button'
/* экраны */
import HomeScreen from './screens/home';
import NewsScreen from './screens/news';
import VinogradScreen from './screens/vinograd';
import BalanceScreen from './screens/balance';

const SampleModal = () => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}


Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('News', () => NewsScreen);
Navigation.registerComponent('Mortgage', () => HomeScreen);
/* Navigation.registerComponent('User', () => NewsScreen); */
Navigation.registerComponent('Vinograd', () => VinogradScreen)
Navigation.registerComponent('Balance', () => BalanceScreen)
/* кнопка позвонить */
Navigation.registerComponent('PhoneButton', () => PhoneBtn)
Navigation.registerComponent('Modal', () => SampleModal)

const startApp = () => {
  Promise.all([
    FontAwesome5.getImageSource('home', 25),
    FontAwesome5.getImageSource('newspaper', 25),
    FontAwesome5.getImageSource('ruble-sign', 25),
    /* FontAwesome5.getImageSource('user', 25), */
  ]).then(([homeIcon, newsIcon, mortgageIcon,/*  userIcon */]) => {
    // это должно быть сдесь для корретной работы на ios (btw здесь тема приложения)
    Navigation.setDefaultOptions({
      statusBar: {
        backgroundColor: '#4d089a'
      },
      topBar: {
        hideOnScroll: false,
        title: {
          color: 'black'
        },
        backButton: {
          color: 'black'
        },
        rightButtons: [
          {
            id: "id",
            text: 'позвонить',
            component: {
              name: 'PhoneButton'
            }
          }
        ],
        background: {
          color: 'white'
        }
      },
      bottomTab: {
        fontSize: 12,
        selectedFontSize: 12
      },
    });
    Navigation.setRoot({
      root: {
        bottomTabs: {
          /* запрет на гор. ориентацию */
          options: {
            layout: {
              orientation: ['portrait']
            }
          },
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Home',
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    text: "Проекты",
                    icon: homeIcon
                  }
                }
              }
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'News'
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    text: "Новости",
                    icon: newsIcon
                  }
                }
              }
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Mortgage'
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    text: "Ипотека",
                    icon: mortgageIcon
                  }
                }

              }
            },
            /* {
              stack: {
                children: [
                  {
                    component: {
                      name: 'User'
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    text: "Кабинет",
                    selectedTextColor: '#4d089a',
                    icon: userIcon
                  }
                }
              }
            } */
          ]
        }
      }
    });
  })
};




export default startApp;
