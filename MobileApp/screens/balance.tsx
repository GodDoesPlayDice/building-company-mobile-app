import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Image, Card, Icon, Button, Text } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import HorizontalFeatures from './components/horizontal-features';
import MapView, { Marker } from 'react-native-maps';

import ReadMore from 'react-native-read-more-text';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        padding: 20,
        margin: 10,
    },
    sectionName: {
        paddingTop: 10,
        paddingLeft: 6
    },
    textContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.05)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        marginHorizontal: 5,
        paddingTop: 10,
        paddingLeft: 6,
        backgroundColor: '#fff',
    },
    cardText: {
        fontSize: 15,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

class DescriptionCard extends React.Component {
    render() {
        return (
            <View >
                <View style={styles.card}>
                    <ReadMore
                        numberOfLines={2}
                        onReady={this._handleTextReady}>
                        <Text style={styles.cardText}>
                            Жилой комплекс находится в развитом районе, на левом берегу
                            реки Кубань напротив парка 30-летия Победы. Дорога до ул.
                            Красной через Тургеневский мост займет нe более 15 минут нa
                            автомобиле,и вся инфраструктура центра города в Вашем
                            распоряжении. Кроме того, в пешей доступности от жилого
                            комплекса современная школа, детский сад и крупные гипермаркеты.
                        </Text>
                    </ReadMore>
                </View>
            </View>
        );
    }
    _handleTextReady = () => {
        console.log('ready!');
    }
}


const MapForBalance = (props: any) => {
    return (
        <>
            <View style={styles.sectionName}>
                <Text h4>Местоположение</Text>
            </View>

            <View style={{
                paddingTop: 300,
                marginTop: 20
            }}>
                <MapView
                    style={styles.map}
                    showsUserLocation={true}
                    followsUserLocation={true}
                    /* showsMyLocationButton={true} */
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        </>
    );
}


const BalanceScreen = () => {
    return (
        <>
            <HeaderImageScrollView
                maxHeight={370}
                minHeight={0}
                minOverlayOpacity={0.1}
                maxOverlayOpacity={0.6}
                headerImage={require("./images/b.jpg")}
                renderFixedForeground={() => (
                    <View style={{
                        height: 150,
                        justifyContent: "center",
                        alignItems: "center"
                    }} >
                        <Text style={{
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            fontSize: 35
                        }}>
                            Жилой комплекс Баланс
                        </Text>
                    </View>
                )}
            >
                <View style={{ height: 1000 }}>
                    <TriggeringView /* onHide={() => console.log("text hidden")} */>
                        <View>
                            <DescriptionCard />
                            <HorizontalFeatures />
                            <MapForBalance />
                        </View>
                    </TriggeringView>
                </View>
            </HeaderImageScrollView >
        </>
    );
}



BalanceScreen.options = {
    topBar: {
        visible: true,
        title: {
            text: "ЖК Баланс"
        }
    }
};

export default BalanceScreen;