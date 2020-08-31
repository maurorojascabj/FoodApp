//Pantalla de comida por categoria
import React from 'react' ;
import {View, Text, StyleSheet, Button} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId'); //Recuperamos los parametros de la pantalla anterior
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return (
        <View style={styles.screen}>
            <Text>Pantalla de Categorías por Comidas</Text>
            <Button title='Ir a Detalles!' onPress={ () => {
               props.navigation.navigate({routeName: 'MealDetail'});
            }} />
        </View>
    );
};

CategoryMealsScreen.NavigationOptions = {
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
});

export default CategoryMealsScreen;