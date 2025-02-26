/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  const dummy = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      image: 'https://source.unsplash.com/200x200/?portrait,man',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      image: 'https://source.unsplash.com/200x200/?portrait,woman',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mikejohnson@example.com',
      image: 'https://source.unsplash.com/200x200/?portrait,male',
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emilydavis@example.com',
      image: 'https://source.unsplash.com/200x200/?portrait,female',
    },
    {
      id: 5,
      name: 'Robert Brown',
      email: 'robertbrown@example.com',
      image: 'https://source.unsplash.com/200x200/?portrait,face',
    },
    {
      id: 6,
      name: 'Sophia Wilson',
      email: 'sophiawilson@example.com',
      image: 'https://source.unsplash.com/200x200/?portrait,woman,face',
    },
    {
      id: 7,
      name: 'Daniel Martinez',
      email: 'danielmartinez@example.com',
      image: 'https://source.unsplash.com/200x200/?portrait,man,face',
    },
    {
      id: 8,
      name: 'Olivia Taylor',
      email: 'oliviataylor@example.com',
      image: 'https://source.unsplash.com/200x200/?portrait,female',
    },
    {
      id: 9,
      name: 'William Anderson',
      email: 'williamanderson@example.com',
      image: 'https://source.unsplash.com/200x200/?portrait,male',
    },
    {
      id: 10,
      name: 'Ava Thomas',
      email: 'avathomas@example.com',
      image: 'https://source.unsplash.com/200x200/?portrait,woman',
    },
    {
      id: 11,
      name: 'James Lee',
      email: 'jameslee@example.com',
      image: 'https://source.unsplash.com/200x200/?portrait,man',
    },
    {
      id: 12,
      name: 'Mia Harris',
      email: 'miaharris@example.com',
      image: 'https://source.unsplash.com/200x200/?portrait,female,smile',
    },
    {
      id: 13,
      name: 'Benjamin Clark',
      email: 'benjaminclark@example.com',
      image: 'https://source.unsplash.com/200x200/?portrait,male,beard',
    },
    {
      id: 14,
      name: 'Charlotte Lewis',
      email: 'charlottelewis@example.com',
      image: 'https://source.unsplash.com/200x200/?portrait,woman,glasses',
    },
    {
      id: 15,
      name: 'Henry Walker',
      email: 'henrywalker@example.com',
      image: 'https://source.unsplash.com/200x200/?portrait,man,young',
    },
    {
      id: 16,
      name: 'Amelia Hall',
      email: 'ameliahall@example.com',
      image: 'https://source.unsplash.com/200x200/?portrait,female,young',
    },
    {
      id: 17,
      name: 'Lucas Allen',
      email: 'lucasallen@example.com',
      image: 'https://source.unsplash.com/200x200/?portrait,man,smile',
    },
    {
      id: 18,
      name: 'Harper Scott',
      email: 'harperscott@example.com',
      image: 'https://source.unsplash.com/200x200/?portrait,woman,smile',
    },
    {
      id: 19,
      name: 'Elijah King',
      email: 'elijahking@example.com',
      image: 'https://source.unsplash.com/200x200/?portrait,male,face',
    },
    {
      id: 20,
      name: 'Lily Wright',
      email: 'lilywright@example.com',
      image: 'https://source.unsplash.com/200x200/?portrait,female,face',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={dummy}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image
              style={{width: 40, height: 40, borderRadius: 50}}
              source={{
                uri: 'https://plus.unsplash.com/premium_photo-1738449261730-2bc6a8ab40b5?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
            />
            <Text>Name:</Text>
            <Text>Email:</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={<View style={{height: 10}} />}
        numColumns={3}
        columnWrapperStyle={{gap: 10}}
        // extraData={}
        // horizontal
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#dadafb',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
  },
});
