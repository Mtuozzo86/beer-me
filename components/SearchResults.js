import { View, Text, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'

export default function SearchResults({route}) {
    const [results, setResults] = useState([])
    const {input} = route.params
    useEffect(() => {
        fetch(`https://api.punkapi.com/v2/beers?beer_name=${input}`)
        .then(r => r.json())
        .then(data => setResults(data))
    })
  return (
    <View>
      <FlatList 
      data={results}
      renderItem={({item}) => (
        <Text onPress={() => console.log(item.name)}>{item.name}</Text>
      )}
      keyExtractor={item => item.id}
      />
    </View>
  )
}