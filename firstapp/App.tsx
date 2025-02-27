/* eslint-disable @typescript-eslint/no-unused-vars */

import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Home from './src/screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './src/screens/Profile';
import Search from './src/screens/Search';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        // options={{headerShown: false}}
        options={{
          title: 'Home Screen',
          headerStyle: {backgroundColor: 'pink'},
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
