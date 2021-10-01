import React from "react";
import {
   TouchableOpacity,
   TouchableOpacityProps,
   Text,
   StyleSheet,
} from 'react-native';

interface ItemListProps extends TouchableOpacityProps {
   list: string;
}

export function ItemList({ list, ...rest } : ItemListProps) {
   return(
      <TouchableOpacity 
         style={ styles.buttonList }
         {...rest}
      >
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