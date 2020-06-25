import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Image, Card, Icon, Button, Text, Tile } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
/* import HorizontalFeatures from './components/horizontal-features'; */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 20,
        margin: 10,
    }
});

const BalanceScreen = () => {
    return (
        <HeaderImageScrollView
            maxHeight={300}
            minHeight={0}
            /* headerImage={require("./images/b.jpg")} */
            renderForeground={() => (
                <Tile
                    imageSrc={require('./images/b.jpg')}
                    title="Жилой комплекс Баланс"
                    featured
                    caption=""
                    titleStyle={{
                        fontSize: 35
                    }}
                />
/*                 <View style={{
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
                </View> */
            )}
        >
    <View>
        <TriggeringView /* onHide={() => console.log("text hidden")} */>
            <View style={styles.container}>
                <Text h4>Особенности ЖК Баланс</Text>
            </View>
        </TriggeringView>
    </View>
        </HeaderImageScrollView >
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