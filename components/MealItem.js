import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';


const MealItem = props => {
    return(
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectedMeal}>
              <View>
                <View style={{...styles.mealRow, ...styles.mealHeader}}>
                  <ImageBackground 
                    source={{uri: props.image}}
                    style={styles.bgImage}
                  >
                    <View style={styles.titleContainer}>
                      <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                    </View>
                  </ImageBackground>
                </View>
              	<View style={{...styles.mealRow, ...styles.mealDetail}}>
                  <Text>{props.duration}min</Text>
                  <Text>{props.complexity.toUpperCase()}</Text>
                  <Text>{props.affordability.toUpperCase()}</Text>
              	</View>
            	</View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    overflow: 'hidden',
  },
  mealRow:{
    flexDirection: 'row',
  }, 
  mealHeader:{
    height:'85%',
  },
  mealDetail:{
    paddingHorizontal: 10,
    justifyContent:'space-between',
    alignItems: 'center',
    height:'15%'
  },
  bgImage:{
    width:'100%',
    height:'100%',
    justifyContent:'flex-end'
  },
  titleContainer:{
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title:{
    fontSize:20,
    textAlign: 'center',
    color: 'white',
  },  
});

export default MealItem;