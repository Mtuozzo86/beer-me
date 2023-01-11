import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Pressable,
  Animated,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";

export default function App() {
  const [beers, setBeers] = useState([]);
  const rando = beers.map((beer) => {
    return (
      <Pressable
        style={{ textAlign: "center", textAlign: "center", width: "80%" }}
        key={beer.id}
        onPress={() => setBeers([])}
      >
        <Text style={{ fontWeight: 900, fontSize: 38 }}>{beer.name}</Text>
        <Text>ABV: {beer.id}</Text>
        <Text style={{ fontStyle: "italic", marginTop: 16 }}>
          {beer.description}
        </Text>
      </Pressable>
    );
  });

  function getRandomBeer() {
    fetch("https://api.punkapi.com/v2/beers/random")
      .then((r) => r.json())
      .then((data) => setBeers(data));
  }

  return (
    <View style={styles.container}>
      {beers.length ? (
        <View style={styles.descriptionContainer}>
          <FlatList
            
            data={beers}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => setBeers([])}
                style={{
                  textAlign: "center",
                  width: "80%",
                }}
              >
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
              </Pressable>
            )}
          />
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <Pressable style={styles.beerButton} onPress={() => getRandomBeer()}>
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
  descriptionContainer: {
    marginTop: 100
  },
});
