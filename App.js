import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

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
  },
});
