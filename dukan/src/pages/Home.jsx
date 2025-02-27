import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AllItems from './AllItems';
import Create from './Create';

export const data = [
  {id: 1, name: 'Apple', stock: 10, unit: 'kg'},
  {id: 2, name: 'Banana', stock: 2, unit: 'dozen'},
  {id: 3, name: 'Milk', stock: 20, unit: 'liters'},
  {id: 4, name: 'Eggs', stock: 300, unit: 'pieces'},
  {id: 5, name: 'Rice', stock: 200, unit: 'kg'},
  {id: 6, name: 'Wheat Flour', stock: 150, unit: 'kg'},
  {id: 7, name: 'Sugar', stock: 80, unit: 'kg'},
  {id: 8, name: 'Salt', stock: 60, unit: 'kg'},
  {id: 9, name: 'Tea', stock: 15, unit: 'kg'},
  {id: 10, name: 'Coffee', stock: 15, unit: 'kg'},
  {id: 11, name: 'Cooking Oil', stock: 100, unit: 'liters'},
  {id: 12, name: 'Lentils', stock: 120, unit: 'kg'},
  {id: 13, name: 'Spices', stock: 40, unit: 'kg'},
  {id: 14, name: 'Potato', stock: 12, unit: 'kg'},
  {id: 15, name: 'Onion', stock: 85, unit: 'kg'},
  {id: 16, name: 'Tomato', stock: 70, unit: 'kg'},
  {id: 17, name: 'Butter', stock: 25, unit: 'kg'},
  {id: 18, name: 'Cheese', stock: 20, unit: 'kg'},
  {id: 19, name: 'Bread', stock: 50, unit: 'loaves'},
  {id: 20, name: 'Biscuits', stock: 100, unit: 'packets'},
];

const Home = () => {
  const [view, setView] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.btnContainer}>
        <Pressable
          style={[
            styles.btn,
            view === 0
              ? {backgroundColor: '#BBAB8C'}
              : {backgroundColor: '#FDF7E4'},
          ]}
          onPress={() => setView(0)}>
          <Text
            style={[
              styles.btnText,
              view === 0
                ? {color: 'white', fontWeight: 'bold'}
                : {color: '#999999'},
            ]}>
            All Items
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.btn,
            view === 1
              ? {backgroundColor: '#BBAB8C'}
              : {backgroundColor: '#FDF7E4'},
          ]}
          onPress={() => setView(1)}>
          <Text
            style={[
              styles.btnText,
              view === 1
                ? {color: 'white', fontWeight: 'bold'}
                : {color: '#999999'},
            ]}>
            Low Stock
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.btn,
            view === 2
              ? {backgroundColor: '#BBAB8C'}
              : {backgroundColor: '#FDF7E4'},
          ]}
          onPress={() => setView(2)}>
          <Text
            style={[
              styles.btnText,
              view === 2
                ? {color: 'white', fontWeight: 'bold'}
                : {color: '#999999'},
            ]}>
            Create
          </Text>
        </Pressable>
      </View>

      {view === 0 && <AllItems data={data} />}
      {view === 1 && <AllItems data={data.filter(item => item.stock <= 20)} />}
      {view === 2 && <Create />}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fcf9ef',
    padding: '4%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  btn: {
    padding: '2%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    width: 90,
    height: 40,
  },
  btnText: {
    fontSize: 16,
    textAlign: 'center',
  },
});
