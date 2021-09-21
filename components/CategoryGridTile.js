import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { ScreenContainer } from 'react-native-screens';

const CategoryGridTile = props => {
    return (
        <TouchableOpacity 
        style={styles.gridItems}
        onPress={()=>  {props.onSelect}}>
<View style={{ ...styles.container, ...{backgroundColor: props.color}}}>
    <Text>{props.title}</Text>
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
        flex: 1
    }
})

export default CategoryGridTile;