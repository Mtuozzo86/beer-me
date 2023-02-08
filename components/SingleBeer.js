import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as RootNavigation from "../RootNavigation";

export default function SingleBeer({ onAddFavoriteBeer, item, onGoBack }) {
  const [toggleHeart, setToggleHeart] = useState(false);

  function handleLikeBeer(item) {
    onAddFavoriteBeer(item);
  }

  return (
    <View>
      <View
        style={{
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Ionicons
          name="arrow-back-outline"
          size={38}
          onPress={() => {
            onGoBack("go back");
          }}
        />
        <Ionicons
          name={toggleHeart ? "heart" : "heart-outline"}
          size={38}
          color="red"
          onPress={() => {
            handleLikeBeer(item), setToggleHeart(!toggleHeart);
          }}
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
