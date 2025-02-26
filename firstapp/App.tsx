/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <ScrollView
      contentContainerStyle={{gap: 10}}
      horizontal
      style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 50,
  },
  box1: {
    width: 80,
    height: 80,
    backgroundColor: 'red',
    borderRadius: 50,
  },
  box2: {
    width: 80,
    height: 80,
    backgroundColor: 'yellow',
    flexGrow: 1,
    borderRadius: 50,
  },
  box3: {
    width: 80,
    height: 80,
    backgroundColor: 'green',
    borderRadius: 50,
  },
});
