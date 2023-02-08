import { View, Text, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { VStack } from "native-base";
import Result from "./Result";

export default function SearchResults({ route }) {
  const [results, setResults] = useState([]);
  const { input } = route.params;
  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${input}`)
      .then((r) => r.json())
      .then((data) => setResults(data));
  }, [input]);

  return (
    <ScrollView>
        <View>
          <FlatList
            data={results}
            renderItem={({ item }) => <Result item={item} />}
          />
        </View>
    </ScrollView>
  );
}
