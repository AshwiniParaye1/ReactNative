/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Home from './src/screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './src/screens/Profile';
import Search from './src/screens/Search';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

// const StackNavigator = () => {
//   return (
//     <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen
//         name="Search"
//         component={Search}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Home"
//         component={Home}
//         // options={{headerShown: false}}
//         options={{
//           title: 'Home Screen',
//           headerStyle: {backgroundColor: 'pink'},
//         }}
//       />
//       <Stack.Screen
//         name="Profile"
//         component={Profile}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );
// };

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: '#dadada',
        tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({size, color}) => (
            <Entypo name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({size, color}) => (
            <AntDesign name="search1" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
