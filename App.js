import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import ModalMenu from "./ModalMenu";

import Navbar from "./Navbar";
import RandomBeer from "./RandomBeer";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.container}>
      <Navbar onSetShowModal={setShowModal} />
      <RandomBeer />
      <StatusBar style="auto" />
      {showModal && (
        <ModalMenu showModal={showModal} onCloseModal={setShowModal} />
      )}
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
