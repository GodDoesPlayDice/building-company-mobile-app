/**
 * @format
 */

/* import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App); */
const { Navigation } = require('react-native-navigation');
const React = require('react');
const { View, Text, Button, StyleSheet } = require('react-native');
import HomeScreen from './screens/home'
import NewsScreen from './screens/news'


Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('News', () => NewsScreen);
Navigation.registerComponent('Mortgage', () => HomeScreen);
Navigation.registerComponent('User', () => NewsScreen);


Navigation.events().registerAppLaunchedListener(async () => {
	// это должно быть сдесь для корретной работы на ios (btw это тема приложения)
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
										options: {
											textColor: '#4d089a'
										}
									}
								},
							]
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
							]
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
							]
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
							]
						}
					}
				]
			}
		}
	});
});
