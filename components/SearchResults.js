import { View, FlatList } from "react-native";
import React, { useState } from "react";

import Result from "./Result";

export default function SearchResults({ route }) {
  const { input, allDrinks } = route.params;
  

  const searchAlphabetically = allDrinks.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const searched = searchAlphabetically.filter((beer) =>
    beer.name.toLowerCase().includes(input.toLowerCase())
  );


  return (
    <View>
      <FlatList
        data={searched}
        renderItem={({ item }) => <Result item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}