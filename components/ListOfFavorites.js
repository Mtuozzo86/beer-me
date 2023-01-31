import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'

export default function ListOfFavorites({beer}) {
    console.log('list of favorites: ', beer)
    
  return (
    <View>
      <Text>ListOfFavorites</Text>
      {/* <View>{favorites}</View> */}
    </View>
  )
}

const styles = StyleSheet.create({})