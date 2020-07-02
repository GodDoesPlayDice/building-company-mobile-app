import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Text } from 'react-native-elements';

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    sectionName: {
        paddingTop: 10,
        paddingLeft: 6
    },
});

const Map = (props: any) => {
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

export default Map;