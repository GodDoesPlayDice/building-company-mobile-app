import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Image, Card, Icon, Button } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

const VinogradScreen = () => {
    return (
        <HeaderImageScrollView
            maxHeight={300}
            minHeight={0}
            headerImage={require("./images/v.png")}
            /* renderForeground={() => (
                <View style={{
                    height: 150,
                    justifyContent: "center",
                    alignItems: "center"
                }} >
                    <TouchableOpacity>
                        <Text style={{
                            backgroundColor: "white",
                            fontSize: 30
                        }}>ЖК Виноград 2</Text>
                    </TouchableOpacity>
                </View>
            )} */
        >
            <View style={{ height: 1000 }}>
                <TriggeringView onHide={() => console.log("text hidden")}>
                    <Text>Тут контент для винограда</Text>
                </TriggeringView>
            </View>
        </HeaderImageScrollView>
    );
}

VinogradScreen.options = {
    topBar: {
        visible: true,
        title: {
            text: "ЖК Виноград 2"
        }
    }
};

export default VinogradScreen;