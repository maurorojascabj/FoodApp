//Pantalla para seleccionar una categoría de comida
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors';


const CategoriesScreen = props => {
    const renderGridItem = itemData => {
        return(
            <TouchableOpacity
                style={styles.gridItem}
                onPress={ () => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: { //Envían parametros a la pantalla que apunta routeName
                            categoryId: itemData.item.id,      
                        },
                    });
            }}>
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} num={2} />
    );
};

CategoriesScreen.navigationOptions = {//Header de la pantalla Categorías
    headerTitle: 'Categorías',
    headerStyle: {
        backgroundColor: Colors.primaryColor,
    },
    headerTintColor: 'white',
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    gridItem:{
        flex: 1,
        margin: 15,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        /*Borders
        borderWidth: 2,
        borderRadius: 30,*/
        //
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.26,
        shadowRadius: 6,
        elevation: 5,
        backgroundColor:'white',
        padding: 20,
        borderRadius: 20,

    },
});

export default CategoriesScreen;

