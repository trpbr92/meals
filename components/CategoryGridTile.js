import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const CategoryGridTile = props => {
    return (
        <TouchableOpacity 
        style={styles.gridItems}
        onPress={()=>  {props.onSelect}}>
<View>
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
    }
})

export default CategoryGridTile;