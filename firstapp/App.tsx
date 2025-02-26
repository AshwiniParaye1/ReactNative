import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const App = () => {
  const [text, setText] = useState('');

  const [submittedText, setSubmittedText] = useState('');

  const handleSubmit = () => {
    setSubmittedText(text);
    setText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hey, Native People</Text>

      <TextInput
        placeholder="Enter your name..."
        style={styles.input}
        value={text}
        onChangeText={setText}
      />

      <Button title="Submit" onPress={handleSubmit} />

      {submittedText && <Text>Result: {submittedText}</Text>}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});
