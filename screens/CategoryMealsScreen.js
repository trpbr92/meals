import React from 'react';
import { View, Text, StyleSheet} from 'react-native'

const CategoryMealsScreen = props => {
    return (
        <View styles={style.screen}>
            <Text>The Category Meals Screen!</Text>
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

export default CategoryMealsScreen;