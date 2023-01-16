import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function RandomBeer() {
  const [beers, setBeers] = useState([]);
  console.log(beers)


  function getRandomBeer() {
    fetch("https://api.punkapi.com/v2/beers/random")
      .then((r) => r.json())
      .then((data) => setBeers(data));
  }

  function renderStuff({ item }) {
    return (
      <View>
        <Pressable onPress={() => setBeers([])} style={{alignSelf: 'start'}}>
          <Ionicons name="arrow-back-outline" size={30} />
        </Pressable>

        <Text style={{ fontSize: 38 }}>{item.name}</Text>
        <Text>ABV: {item.abv}</Text>
        <Text style={{ fontStyle: "italic", marginTop: 16 }}>
          {item.description}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      {beers.length ? (
        <View style={styles.descriptionContainer}>
          <FlatList data={beers} renderItem={renderStuff} />
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
    alignItems: 'center'
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
