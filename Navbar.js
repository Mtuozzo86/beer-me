import { useCallback, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import ModalMenu from "./ModalMenu";

export default function Navbar({ onSetShowModal }) {
  const [fontsLoaded] = useFonts({
    "Rowdies-Bold": require("./assets/fonts/Rowdies-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Pressable
        onPress={() => {
          onSetShowModal(true);
        }}
      >
        <Ionicons name="menu-outline" size={24} />
      </Pressable>
      <Text style={styles.appName}>Beer me!</Text>
      <Ionicons name="search-outline" size={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 70,
    padding: 5,
    marginTop: 40,
    borderBottomWidth: 2,
  },
  appName: {
    fontSize: 30,
    textAlign: "center",
    width: 160,
    fontFamily: "Rowdies-Bold",
  },
});
