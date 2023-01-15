import React from "react";
import { NativeBaseProvider, Box, Text } from "native-base";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import ModalMenu from "./components/ModalMenu";
import Navbar from "./components/Navbar";
import RandomBeer from "./components/RandomBeer";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Navbar onSetShowModal={setShowModal} showModal={showModal} />
        <RandomBeer />
        <ModalMenu showModal={showModal} onCloseModal={setShowModal} />
        {/* <StatusBar style="auto" currentHeight /> */}
      </View>
     </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
