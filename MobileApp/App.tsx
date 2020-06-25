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
import HomeScreen from './screens/home';
import NewsScreen from './screens/news';
import VinogradScreen from './screens/vinograd';
import BalanceScreen from './screens/balance';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('News', () => NewsScreen);
Navigation.registerComponent('Mortgage', () => HomeScreen);
Navigation.registerComponent('User', () => NewsScreen);
Navigation.registerComponent('Vinograd', () => VinogradScreen)
Navigation.registerComponent('Balance', () => BalanceScreen)


const startApp = () => {
  Promise.all([
    FontAwesome5.getImageSource('home', 25),
    FontAwesome5.getImageSource('newspaper', 25),
    FontAwesome5.getImageSource('ruble-sign', 25),
    FontAwesome5.getImageSource('user', 25),
  ]).then(([homeIcon, newsIcon, mortgageIcon, userIcon]) => {
    // это должно быть сдесь для корретной работы на ios (btw здесь тема приложения)
    Navigation.setDefaultOptions({
      statusBar: {
        backgroundColor: '#4d089a'
      },
      topBar: {
        title: {
          color: 'white'
        },
        backButton: {
          color: 'white'
        },
        background: {
          color: '#4d089a'
        }
      },
      bottomTab: {
        fontSize: 14,
        selectedFontSize: 14
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
            {
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
            }
          ]
        }
      }
    });
  })
};




export default startApp;
