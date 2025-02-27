import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AllItems = ({data}) => {
  console.log('dataj===', data);

  return (
    <View style={{height: '85%'}}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.headingText}>Available Stock</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={[
              styles.itemContainer,
              {
                backgroundColor: item.stock <= 20 && '#ffcccc',
                borderWidth: 1,
                marginBottom: 10,
                borderRadius: 5,
                padding: 10,
              },
            ]}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>
              {item.stock} {item.unit}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default AllItems;

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padingHorizontal: 15,
    paddingVertical: 15,
  },
  headingText: {
    fontWeight: '500',
    fontSize: 18,
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
  },
});
