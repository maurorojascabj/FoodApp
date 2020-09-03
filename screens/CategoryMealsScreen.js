//Pantalla de comida por categoria
import React from 'react' ;
import {View, Text, StyleSheet, Button} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';


const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId'); //Recuperamos los parametros de la pantalla anterior
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return (
        <View style={styles.screen}>
            <Text>Pantalla de Comidas por Categorías</Text>
            <Button
                title='Ir a Detalles!'
                onPress={ () => {
                    props.navigation.navigate({routeName: 'MealDetail'});
                }}
                />
        </View>
    );
};

CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId'); //
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return{
        headerTitle: selectedCategory.title,
    };
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
});

export default CategoryMealsScreen;