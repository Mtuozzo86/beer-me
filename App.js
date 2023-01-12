import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import Navbar from "./Navbar";
import RandomBeer from "./RandomBeer";

export default function App() {

  return (
    <View style={styles.container}>
      <Navbar />
      <RandomBeer />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0ec57",
    alignItems: "center",
    justifyContent: "flex-start",
  }
});
