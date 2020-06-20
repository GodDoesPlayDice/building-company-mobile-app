import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

// Settings screen declaration - this is the screen we'll be pushing into the stack
const NewsScreen = () => {
    return (
        <View style={styles.root}>
            <Text>Новости компании</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'whitesmoke'
    }
});

export default NewsScreen;