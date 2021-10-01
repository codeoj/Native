import React, { useState } from 'react';
import { 
   View, 
   Text,
   StyleSheet, 
   TextInput,
   Platform,
   FlatList,
} from 'react-native';

import { Button } from '../components/Button';
import { ItemList } from '../components/ItemList';

export function Home() {
   const [newList, setNewList] = useState('');
   const [myList, setMyList] = useState([]);

   function handleAddNewList() {
      setMyList(oldState => [...oldState, newList]);
   }

  return(
   <View style={ styles.container }>
      <Text style={ styles.title }> Welcome, User</Text>
      <TextInput 
         style={ styles.input } 
         placeholder="Adicionar item"
         placeholderTextColor="#777"
         onChangeText={setNewList}
      />

      <Button onPress={handleAddNewList} />

      <Text style={ [styles.title, { marginVertical: 40 }] }>
         My List
      </Text>
      
      <FlatList 
         data={myList}
         keyExtractor={item => item}
         renderItem={({ item }) => (
            <ItemList list={item}/>
         )}
      />

      {/* {
         myList.map(list => (
            <ItemList list={list} key={list}/>
         ))
      } */}
   </View>
  );
};

const styles = StyleSheet.create({
   container: {
      flex: 1, 
      paddingHorizontal: 30,
      paddingVertical: 50,
      backgroundColor: '#121014',
   },
   title: {
      color: '#FFF',
      fontSize: 18,
      fontWeight: 'bold',
   },
   input: {
      backgroundColor: '#1F1E25',
      color: '#FFF',
      fontSize: 18,
      padding: Platform.OS === 'ios' ? 10 : 15,
      marginTop: 30,
      borderRadius: 7,
   },

});