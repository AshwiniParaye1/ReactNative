/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Profile = ({navigation}) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, fontWeight: 500, marginBottom: 20}}>
        Profile
      </Text>
      <Button
        title="Visit Search"
        onPress={() => navigation.navigate('Search')}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
