import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native';
import { Text, Image } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-evenly",
        backgroundColor: "#fff",
        padding: 5,
    },
    feature: {
        padding: 5
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

const HorizontalFeatures = (props: any) => {
    return (
        <>
            <View style={{
                paddingTop: 10,
                paddingBottom: 5,
                paddingLeft: 6
            }}>
                <Text h4>Особенности объекта</Text>
            </View>
            <ScrollView
                horizontal={true}
                contentContainerStyle={styles.container}
                showsHorizontalScrollIndicator={false}
            >
                <TouchableOpacity>
                    <View style={styles.feature}>
                        <Image
                            style={styles.featureImage}
                            source={require('./images/v.png')}
                        />
                        <Text style={styles.featureLabel}>Удобные планировки</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.feature}>
                        <Image
                            style={styles.featureImage}
                            source={require('./images/v.png')}
                        />
                        <Text style={styles.featureLabel}>Выгодное расположение</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.feature}>
                        <Image
                            style={styles.featureImage}
                            source={require('./images/v.png')}
                        />
                        <Text style={styles.featureLabel}>Технологии</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.feature}>
                        <Image
                            style={styles.featureImage}
                            source={require('./images/v.png')}
                        />
                        <Text style={styles.featureLabel}>Удобные планировки</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </>
    );
}

export default HorizontalFeatures; 