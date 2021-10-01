import React from "react";
import {
   TouchableOpacity,
   TouchableOpacityProps,
   Text,
   StyleSheet,
} from 'react-native';

type ButtonProps = TouchableOpacityProps;

export function Button({ ...rest } : ButtonProps) {
   return (
      <TouchableOpacity 
         style={styles.button}
         {...rest}
      >
         <Text style={ styles.buttonText }>
            Add
         </Text>
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