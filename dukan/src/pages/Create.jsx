import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Create = ({data, setdata}) => {
  const [itemName, setItemName] = useState('');
  const [stock, setStock] = useState('');
  const [editing, setediting] = useState(false);
  const [editItemId, seteditItemId] = useState(null);

  const handleAddItem = () => {
    const newDataItem = {
      id: Date.now(),
      name: itemName,
      stock: stock,
      unit: 'packets',
    };

    setdata([...data, newDataItem]);

    setItemName('');
    setStock('');
    setediting(false);
  };

  const handleDeleteItem = id => {
    setdata(data.filter(item => item.id !== id));
  };

  const handleEditItem = item => {
    setediting(true);
    setItemName(item.name);
    seteditItemId(item.id);
  };

  const handleUpdateItem = () => {
    setdata(
      data.map(item =>
        item.id === editItemId ? {...item, name: itemName, stock: stock} : item,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter an item name..."
        style={styles.input}
        value={itemName}
        onChangeText={item => setItemName(item)}></TextInput>
      <TextInput
        placeholder="Enter available stock value..."
        style={styles.input}
        value={stock}
        onChangeText={item => setStock(item)}></TextInput>

      <Pressable
        style={styles.btn}
        onPress={() => (editing ? handleUpdateItem() : handleAddItem())}>
        <Text style={styles.btnText}>
          {editing ? 'Edit Item' : 'Add Item in the Stock'}{' '}
        </Text>
      </Pressable>

      <View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>All Available Items </Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View
              style={[
                styles.itemContainer,
                {
                  backgroundColor: item.stock <= 20 ? '#ffcccc' : '#ccf4cc',
                  borderWidth: 1,
                  marginBottom: 10,
                  borderRadius: 5,
                  padding: 10,
                },
              ]}>
              <Text style={styles.itemText}>{item.name}</Text>

              <View
                style={{
                  flexDirection: 'row',
                  gap: 20,
                }}>
                <Text style={styles.itemText}>
                  {item.stock} {item.unit}
                </Text>
                <Text
                  style={styles.itemText}
                  onPress={() => handleEditItem(item)}>
                  Edit
                </Text>
                <Pressable onPress={() => handleDeleteItem(item.id)}>
                  <Text style={styles.itemText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '2%',
    gap: 10,
    height: '60%',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  btn: {
    padding: '4%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#BBAB8C',
    alignSelf: 'center',
    marginTop: 8,
  },
  btnText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padingHorizontal: 15,
    paddingVertical: 15,
  },
  headingText: {
    fontWeight: '500',
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padingHorizontal: 15,
  },
  itemText: {
    fontWeight: '400',
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
  },
});
