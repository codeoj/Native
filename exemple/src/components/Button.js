import React from "react";
import {
   TouchableOpacity,
   Text,
   StyleSheet,
} from 'react-native';

export function Button({ onPress }) {
   return (
      <TouchableOpacity 
         style={styles.button}
         activeOpacity={0.5}
         onPress={onPress}
      >
         <Text style={ styles.buttonText }>Add</Text>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   button: {
      backgroundColor: '#A85270',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 20,
   },
   buttonText: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: 'bold',
   },
})