//Contendrá los filtros aplicables a cada receta
import React from 'react' ;
import {View, Text, StyleSheet} from 'react-native';

const FiltersScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Pantalla de Filtros</Text>
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

export default FiltersScreen;