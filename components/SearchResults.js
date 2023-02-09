import { View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

import Result from "./Result";

export default function SearchResults({ route }) {
  const [allResults, setAllResults] = useState([]);
  const [punkApi, setPunkApi] = useState([]);
  const [stouts, setStouts] = useState([]);
  const [ale, setAle] = useState([]);
  console.log('ales:', ale.length)
  console.log('stouts:', stouts.length)
  console.log('punk api:', punkApi.length)
  console.log('altogether:',allResults.length)
  const { input } = route.params;

  // CURRENTLY HANDLING FROM PUNK API
  const searchAlphabetically = punkApi.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  // useEffect(() => {
  //   fetch(`https://api.punkapi.com/v2/beers?beer_name=${input}`)
  //     .then((r) => r.json())
  //     .then((data) => setPunkApi(data));
  // }, [input]);

  useEffect(() => {
    Promise.all([
      fetch(`https://api.punkapi.com/v2/beers?beer_name=${input}`),
      fetch("https://api.sampleapis.com/beers/ale"),
      fetch("https://api.sampleapis.com/beers/stouts"),
    ])
      .then(([punkApi, ale, stouts]) =>
        Promise.all([punkApi.json(), ale.json(), stouts.json()])
      )
      .then(([punkApi, ale, stouts]) => {
        setPunkApi(punkApi);
        setAle(ale);
        setStouts(stouts);
        setAllResults([punkApi,ale,stouts])
      });
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
