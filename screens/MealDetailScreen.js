//Contiene los detalles de la comida seleccionada
import React from 'react' ;
import {View, Text, StyleSheet} from 'react-native';

const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Pantalla de Detalles por Comidas</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
});

export default MealDetailScreen;