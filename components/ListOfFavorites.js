import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useState} from 'react'

export default function ListOfFavorites({beer}) {
    console.log('list of favorites: ', beer)
    
  return (
    <View>
      <Text>ListOfFavorites</Text>
      <FlatList 
        data={beer}
        renderItem={({item}) => <Text style={{ fontSize: 38 }}>{item.name}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({})