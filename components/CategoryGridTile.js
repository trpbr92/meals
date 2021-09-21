import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { ScreenContainer } from 'react-native-screens';

const CategoryGridTile = props => {

    return (
        <TouchableOpacity style={styles.gridItems} onPress={props.onSelect}>
<View style={{ ...styles.container, ...{backgroundColor: props.color}}}>
    <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
</View>
</TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    gridItems: {
        flex: 1,
        margin: 15,
        height: 150
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontSize: 22,
        textAlign: 'right'
    }
})

export default CategoryGridTile;