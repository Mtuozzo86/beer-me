import { useCallback } from 'react';
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function Navbar() {
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
    <View style={styles.container}  onLayout={onLayoutRootView}>
      <Ionicons name="menu-outline" size={24} />
      <Text style={styles.appName}>Beer me!</Text>
      <Ionicons name="search-outline" size={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
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
