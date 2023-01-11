import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import Navbar from "./Navbar";

export default function App() {
  const [beers, setBeers] = useState([]);

  function getRandomBeer() {
    fetch("https://api.punkapi.com/v2/beers/random")
      .then((r) => r.json())
      .then((data) => setBeers(data));
  }

  function renderStuff({ item }) {
    return (
      <Pressable style={styles.description} onPress={() => setBeers([])}>
        <Text style={{ fontSize: 38 }}>{item.name}</Text>
        <Text>ABV: {item.abv}</Text>
        <Text style={{ fontStyle: "italic", marginTop: 16 }}>
          {item.description}
        </Text>
      </Pressable>
    );
  }

  return (
    
      <View style={styles.container}>
      <Navbar />
        {beers.length ? (
          <View style={styles.descriptionContainer}>
            <FlatList data={beers} renderItem={renderStuff} />
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.beerButton}
              onPress={() => getRandomBeer()}
            >
              <Ionicons name="beer" size={70} color="#0b0a07" />
            </Pressable>
          </View>
        )}

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
  descriptionContainer: {
    borderWidth: 1,
    width: 300,
    padding: 10,
  },
  description: {},
});
