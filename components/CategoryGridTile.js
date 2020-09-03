import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CategoryGridTile = props => {
    return(
        <TouchableOpacity
            style={{...styles.gridItem, ...{backgroundColor:props.color}}}
            onPress={props.onSelect}
        >
            <View>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    gridItem:{
        flex: 1,
        margin: 15,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        //iOS
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.26,
        shadowRadius: 6,
        //
        elevation: 5, //Android
        backgroundColor:'white',
        padding: 20,
        borderRadius: 20,

    },
});

export default CategoryGridTile;