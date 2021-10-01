import React from "react";
import {
   TouchableOpacity,
   Text,
   StyleSheet,
} from 'react-native';

export function ItemList({ list }) {
   return(
      <TouchableOpacity style={ styles.buttonList }>
         <Text style={ styles.textList }>
            {list}
         </Text>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   buttonList: {
      backgroundColor: '#1F1E25',
      padding: 15,
      borderRadius: 50,
      alignItems: 'center',
      marginVertical: 10,
   },
   textList: {
      color: '#FFF',
      fontSize: 18,
      fontWeight: 'bold',
   },
})