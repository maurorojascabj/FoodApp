
import 'react-native-gesture-handler'; //Esto se debe agregar siempre para react-navigation
import React from 'react';
import {StyleSheet} from 'react-native';

import MealsNavigator from './navigation/MealsNavigator';

const App: () => React$Node = () => {
  return (
    <>
    <MealsNavigator/>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
