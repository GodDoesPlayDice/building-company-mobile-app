import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import { Text, Image } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 20,
        margin: 10,
    }
});

const HorizontalFeatures = (props: any) => {
    return (
        <ScrollView
            horizontal={true}
        >
            <View >
                <Text>Особенности ЖК Баланс</Text>
            </View>
            <View >
                <Text>Особенности ЖК Баланс</Text>
            </View>
        </ScrollView>
    );
}

export default HorizontalFeatures; 