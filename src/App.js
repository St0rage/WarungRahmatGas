import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, Button } from 'react-native';
import Router from './router';


export default function App() {
  return (
      <NavigationContainer>
        <Router />
      </NavigationContainer>
  );
}