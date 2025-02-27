import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import Home from './src/pages/Home';

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});
