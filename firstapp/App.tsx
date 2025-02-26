import {StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
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
      <View style={[styles.box3, {backgroundColor: 'blue'}]} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  box1: {
    width: 80,
    height: 80,
    backgroundColor: 'red',
    // alignSelf: 'flex-start',
  },
  box2: {
    width: 80,
    height: 80,
    backgroundColor: 'yellow',
  },
  box3: {
    width: 80,
    height: 80,
    backgroundColor: 'green',
  },
});
