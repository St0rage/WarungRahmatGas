import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductHome, ProductManagement } from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='ProductManagement'>
            <Stack.Screen name="ProductHome" component={ProductHome} options={{ headerShown: false }} />
            <Stack.Screen name="ProductManagement" component={ProductManagement} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router