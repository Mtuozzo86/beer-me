import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Pressable,
  Animated,
  FlatList
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useEffect, useState } from "react";
import "./styles.css";
<ion-icon name="beer-outline"></ion-icon>;

export default function App() {
  const [beers, setBeers] = useState([]);
  console.log(beers);
  const rando = beers.map((beer) => {
    return (
      <View key={beer.id}>
        <Text>{beer.name}</Text>
        <Text>{beer.id}</Text>
        <Text>{beer.description}</Text>
      </View>
    );
  });
  console.log(rando);

  function getRandomBeer() {
    fetch("https://api.punkapi.com/v2/beers/random")
      .then((r) => r.json())
      .then((data) => setBeers(data));
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.beerButton} onPress={() => getRandomBeer()}>
          <Ionicons name="beer" size={70} color="#0b0a07" />
        </Pressable>
      </View>
      <View>{rando}</View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0ec57",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: 120,
    height: 120,
    marginHorizontal: 60,
    borderWidth: 5,
    borderColor: "#0b0a07",
    borderRadius: 100,
    padding: 3,
  },
  beerButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
