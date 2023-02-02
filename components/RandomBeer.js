import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import SingleBeer from "./SingleBeer";


export default function RandomBeer({onAddFavoriteBeer}) {
  const [beers, setBeers] = useState([]);


  async function getRandomBeer() {
    const resp = await fetch("https://api.punkapi.com/v2/beers/random");
    const data = await resp.json();
    setBeers(data);
  }

  function handleGoBack(params) {
    setBeers([])
  }

  function renderRandomBeer({ item }) {
    return (
      <SingleBeer item={item} onAddFavoriteBeer={onAddFavoriteBeer} onGoBack={handleGoBack}/>
      
    );
  }

  return (
    <View style={styles.buttonContainer}>
      {beers.length ? (
        <View style={styles.descriptionContainer}>
          <FlatList
            data={beers}
            renderItem={renderRandomBeer}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      ) : (
        <View>
          <Pressable style={styles.beerButton} onPress={() => getRandomBeer()}>
            <Ionicons name="beer" size={70} color="#0b0a07" />
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  beerButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 120,
    borderWidth: 5,
    borderColor: "#0b0a07",
    borderRadius: 100,
    backgroundColor: "#fdc500",
  },
  descriptionContainer: {
    flex: 1,
    padding: 10,
  },
});
