import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native';
import { Text, Image } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
    horisontalScroll: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingTop: 10,
        paddingBottom: 5,
    },
    featureContainer: {
        paddingRight: 10
    },
    featureImage: {
        width: 165,
        height: 95,
        borderRadius: 8
    },
    featureLabel: {
        paddingTop: 2,
        textAlign: 'left',
        fontSize: 14,
        fontWeight: '500'
    }

});

const HorizontalFeatures = (props: object) => (
    <View style={styles.container}>
        <Text h4>Особенности объекта</Text>
        <ScrollView
            horizontal={true}
            contentContainerStyle={styles.horisontalScroll}
            showsHorizontalScrollIndicator={false}
        >
            <TouchableOpacity>
                <View style={styles.featureContainer}>
                    <Image
                        style={styles.featureImage}
                        source={require('../images/v.png')} />
                    <Text style={styles.featureLabel}>
                        Удобные
                    </Text>
                    <Text style={styles.featureLabel}>
                        планировки
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.featureContainer}>
                    <Image
                        style={styles.featureImage}
                        source={require('../images/v.png')} />
                    <Text style={styles.featureLabel}>Выгодное расположение</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.featureContainer}>
                    <Image
                        style={styles.featureImage}
                        source={require('../images/v.png')} />
                    <Text style={styles.featureLabel}>Технологии</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.featureContainer}>
                    <Image
                        style={styles.featureImage}
                        source={require('../images/v.png')} />
                    <Text style={styles.featureLabel}>Удобные планировки</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    </View>
);

export default HorizontalFeatures; 