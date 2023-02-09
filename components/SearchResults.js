import { View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

import Result from "./Result";

export default function SearchResults({ route }) {
  const [results, setResults] = useState([]);
  const { input } = route.params;

  const searchAlphabetically = results.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${input}`)
      .then((r) => r.json())
      .then((data) => setResults(data));
  }, [input]);

  return (
        <View>
          <FlatList
            data={searchAlphabetically}
            renderItem={({ item }) => <Result item={item} />}
          />
        </View>
  );
}
