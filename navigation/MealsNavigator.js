import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import Color from '../constants/Colors';

const MealsNavigator = createStackNavigator(
    { //Crear el stack clave-valor para cada item de navegación
        Categories: CategoriesScreen,
        CategoryMeals: CategoryMealsScreen,
        MealDetail: MealDetailScreen,
    },{
        defaultNavigationOptions: {//Opciones por default para todos los headers de cada screen
            headerStyle:{
                backgroundColor: Color.primaryColor,
            },
            headerTintColor:'white',
            headerTitleAlign: 'center',
        },
    },

);



export default createAppContainer(MealsNavigator);



