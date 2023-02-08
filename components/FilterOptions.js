import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function FilterOptions() {
  return (
    <View>
      <Text>ABV</Text>
      <Text>IBU</Text>
      <Text>EBC</Text>
      <Text>Yeast</Text>
      <Text>Brew Date</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 3
  }
})


//IBU = Bitterness