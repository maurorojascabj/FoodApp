//Pantalla de comida por categoria
import React from 'react' ;
import {View, StyleSheet, FlatList} from 'react-native';

import {CATEGORIES, MEALS} from '../data/dummy-data';

import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {
	const catId = props.navigation.getParam('categoryId'); //Recuperamos los parametros de la pantalla anterior
	const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
	
	const displayedMeals = MEALS.filter(
		meal => meal.categoryIds.indexOf(catId) >= 0 
	)

	const renderMealsItem = itemData => {
		return(
			<MealItem 
				title={itemData.item.title}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				image={itemData.item.imageUrl}
				onSelectedMeal = {()=>{
					props.navigation.navigate({
						routeName: 'MealDetail',
						params: {
							mealId: itemData.item.id
						},
					});
				}}
			/>
		)
	};

	return (
		<View style={styles.screen}>
			<FlatList
				data = {displayedMeals}
				renderItem = {renderMealsItem}
				style={{width:'100%'}}
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