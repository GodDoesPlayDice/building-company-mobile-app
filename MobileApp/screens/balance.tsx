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

/* компоненты */
import Location from '../screens/components/location';
import ReadMoreText from '../screens/components/readmore-text'
import Map from '../screens/components/map';

const styles = StyleSheet.create({
    container: {
        paddingLeft: 7
    }
});


const projectDescription: string = `Жилой комплекс находится в развитом районе, на левом берегу реки Кубань напротив парка 30-летия Победы. Дорога до ул. Красной через Тургеневский мост займет нe более 15 минут нa автомобиле,и вся инфраструктура центра города в Вашем распоряжении.`

const BalanceScreen = () => {
    return (
        <>
            <HeaderImageScrollView
                maxHeight={430}
                minHeight={0}
                minOverlayOpacity={0.1}
                maxOverlayOpacity={0.6}
                fadeOutForeground
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
                <View style={styles.container}>
                    <TriggeringView /* onHide={() => console.log("text hidden")} */>
                        <View>
                            <ReadMoreText 
                                description={projectDescription}
                            />
                            <HorizontalFeatures />
                            {/* <Map /> */}
                            <Location />
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