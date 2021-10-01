import React from "react";
import {
   TouchableOpacity,
   TouchableOpacityProps,
   Text,
   StyleSheet,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
   title: string
}

export function Button({ title, ...rest } : ButtonProps) {
   return (
      <TouchableOpacity 
         style={styles.button}
         activeOpacity={0.5}
         {...rest}
      >
         <Text style={ styles.buttonText }>
            {title}
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