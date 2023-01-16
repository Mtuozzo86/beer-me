import { useState } from "react";
import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function RandomBeer() {
  const [beers, setBeers] = useState([]);

  async function getRandomBeer() {
    const resp = await fetch("https://api.punkapi.com/v2/beers/random");
    const data = await resp.json();
    setBeers(data);
  }
  function renderStuff({ item }) {
    return (
      <View>
        <View>
          <Ionicons
            name="arrow-back-outline"
            size={38}
            onPress={() => setBeers([])}
            style={{ alignSelf: "flex-start" }}
          />
        </View>
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
          <FlatList
            data={beers}
            renderItem={renderStuff}
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
