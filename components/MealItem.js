import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

const MealItem = props => {
    return (
        <View style={styles.MealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
          <View>
              <View style={{...styles.mealRow, ...styles.mealHeader}}>
                  <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
            </ImageBackground>
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
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden'  
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 20,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center'
    }
})

export default MealItem;