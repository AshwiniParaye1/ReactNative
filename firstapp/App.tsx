import {
  Text,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import React from 'react';

const App = () => {
  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';

  const backgroundColor = isDarkMode ? 'black' : 'white';
  const textColor = isDarkMode ? 'white' : 'black';

  const style = {
    container: {
      marginTop: 50,
      marginLeft: 20,
      marginRight: 20,
    },
  };

  return (
    <SafeAreaView style={[style.container, {backgroundColor: backgroundColor}]}>
      <Text style={[styles.headingText, {color: textColor}]}>
        Hello, Native People
      </Text>

      <Image
        style={styles.imageContainer}
        source={{
          uri: 'https://plus.unsplash.com/premium_photo-1676009547155-32d75ba9d089?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
      />

      <Button title="Normal Button" />

      <TouchableOpacity style={styles.touchableBtn}>
        <Text style={[styles.touchableText, {color: textColor}]}>
          Touchable Opacity
        </Text>
      </TouchableOpacity>

      <Pressable style={styles.pressableBtn}>
        <Text style={[styles.pressableText, {color: textColor}]}>
          Pressable Button
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  imageContainer: {
    width: 200,
    height: 200,
    marginBottom: 20,
    alignSelf: 'center',
  },
  button: {
    borderRadius: 20,
  },

  headingText: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  pressableBtn: {
    backgroundColor: 'purple',
    marginTop: 20,
    padding: 10,
    borderRadius: 6,
  },

  pressableText: {
    fontSize: 17,
    fontWeight: 'medium',
    textAlign: 'center',
  },

  touchableBtn: {
    backgroundColor: 'green',
    marginTop: 20,
    padding: 10,
    borderRadius: 6,
  },
  touchableText: {
    fontSize: 17,
    fontWeight: 'medium',
    textAlign: 'center',
  },
});
