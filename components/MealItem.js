import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

const MealItem = props => {
    return (
        <View style={styles.MealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
          <View>
              <View style={{...styles.mealRow, ...styles.mealHeader}}>
                  <ImageBackground source={{uri: props.image}} style={styles.bgImage}/>
            <Text>{props.title}</Text>
              </View>
              <View style={{...styles.mealRow, ...styles.mealDetail}}>
                  <Text>{props.duration} minutes</Text>
                  <Text>{props.complexity.toUpperCase()}</Text>
                  <Text>{props.affordability.toUpperCase()}</Text>
              </View>
          </View>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    MealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#ccc'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '90%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    bgImage: {
        width: '100%',
        height: '100%'
    }
})

export default MealItem;