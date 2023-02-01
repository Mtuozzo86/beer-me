import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useState} from 'react'

export default function ListOfFavorites({beer}) {
    console.log('list of favorites: ', beer)
    
  return (
    <View style={styles.container}>
      <Text>ListOfFavorites</Text>
      <FlatList 
        data={beer}
        renderItem={({item}) => <Text style={{ fontSize: 24}}>{item.name}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center', 
    alignItems: 'center'
  }
})