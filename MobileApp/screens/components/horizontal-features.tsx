import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native';
import { Text, Image } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        backgroundColor: "#fff",
    },
    title: {
        paddingLeft: 8
    },
    horisontalScroll: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingTop: 8,
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
        <Text style={styles.title} h4>Особенности объекта</Text>
        <ScrollView
            horizontal={true}
            contentContainerStyle={styles.horisontalScroll}
            showsHorizontalScrollIndicator={false}
        >
            <View style={styles.title}>
            </View>
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
                    <Text style={styles.featureLabel}>
                        Выгодное
                    </Text>
                    <Text style={styles.featureLabel}>
                        местопложение
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.featureContainer}>
                    <Image
                        style={styles.featureImage}
                        source={require('../images/v.png')} />
                    <Text style={styles.featureLabel}>
                        Технологии
                    </Text>
                    <Text style={styles.featureLabel}>
                        строительства
                    </Text>
                </View>
            </TouchableOpacity>
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
        </ScrollView>
    </View>
);

export default HorizontalFeatures; 