import React from 'react';
import { View, Text, StyleSheet} from 'react-native'

const CategoriesScreen = props => {
    return (
        <View styles={style.screen}>
            <Text>The Categories Screen!</Text>
        </View>
    );
}

const style = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;