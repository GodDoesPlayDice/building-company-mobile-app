import React from 'react';
import ReadMore from 'react-native-read-more-text';
import { StyleSheet, View, } from 'react-native';
import { Text } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingLeft: 8,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 15,
    },
});


const ReadMoreText = (props: any) => {
    return (
        <View >
            <View style={styles.container}>
                <ReadMore
                    numberOfLines={2}
                /* onReady={this._handleTextReady} */
                >
                    <Text style={styles.text}>
                        {props.description}
                    </Text>
                </ReadMore>
            </View>
        </View>
    );
    /* _handleTextReady = () => {
        console.log('ready!');
    } */
}
export default ReadMoreText;