import { useCallback, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function Navbar({ onSetShowModal, showModal, showSearch, onSetShowSearch }) {
  const [fontsLoaded] = useFonts({
    "Rowdies-Bold": require("../assets/fonts/Rowdies-Bold.ttf"),
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
          console.log(showModal)
          onSetShowModal(!showModal);
        }}
      >
        <Ionicons
          name={!showModal ? "menu-outline" : "arrow-back-outline"}
          size={30}
        />
      </Pressable>
      <Text style={styles.appName}>Beer me!</Text>
      <Pressable onPress={() => {
        onSetShowSearch(!showSearch)
        
      }}>
        <Ionicons name="search-outline" size={30} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 80,
    padding: 5,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    backgroundColor: "#fdc500",
    paddingTop: 30,
  },
  appName: {
    fontSize: 30,
    textAlign: "center",
    width: 160,
    fontFamily: "Rowdies-Bold",
  },
});
