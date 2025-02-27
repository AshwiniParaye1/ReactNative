/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, fontWeight: 500, marginBottom: 20}}>
        Home
      </Text>
      <Button
        title="Visit Profile"
        onPress={() => navigation.navigate('Profile', {id: 1, name: 'Ashwini'})}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
