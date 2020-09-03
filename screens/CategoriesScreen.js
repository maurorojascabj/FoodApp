//Pantalla para seleccionar una categoría de comida
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Image} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';


const CategoriesScreen = props => {
    const renderGridItem = itemData => {
        return(
            <CategoryGridTile 
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={()=>{
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: { //Envían parametros a la pantalla que apunta routeName
                            categoryId: itemData.item.id,      
                        },
                    });
                }}
            />
        );
    };
    return (
        <FlatList 
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2} />
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Categorías',
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
});

export default CategoriesScreen;

