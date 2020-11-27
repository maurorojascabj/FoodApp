import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';

const CategoryGridTile = props => {
	const image = {uri: props.image};
	return(
		<TouchableOpacity
			style={{...styles.gridItem}}
			onPress={props.onSelect}
		>	 
			<ImageBackground
				source={image}
				style={styles.image}
				imageStyle={styles.imageStyles}
			>	
				<View style={styles.titleContainer}>
					<Text style={styles.title}>{props.title}</Text>			
				</View>
			</ImageBackground>	
		
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
		borderRadius: 20,
	},
	titleContainer:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	title:{
		color: 'white',
		backgroundColor: 'rgba(0,0,0,0.4)',
		fontSize: 15,
	},
	image:{
		width:'100%',
		height:'100%',
	},
	imageStyles:{
		borderRadius: 20
	},

});

export default CategoryGridTile;