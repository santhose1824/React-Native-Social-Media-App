import { NavigationContainer } from '@react-navigation/native';
import './gesture-handler';
import React from 'react';
import { SafeAreaView,Text } from 'react-native';
import MainNavigation from './navigation/mainnavigation';

const App = () =>{
  return (
    <NavigationContainer>
      <MainNavigation/>
    </NavigationContainer>
  ); 
}

export default App;