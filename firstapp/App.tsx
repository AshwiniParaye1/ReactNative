import {StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  box1: {
    width: 80,
    height: 80,
    backgroundColor: 'red',
  },
  box2: {
    width: 80,
    height: 80,
    backgroundColor: 'yellow',
    flexGrow: 1,
  },
  box3: {
    width: 80,
    height: 80,
    backgroundColor: 'green',
  },
});
