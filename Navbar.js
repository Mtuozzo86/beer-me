import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFonts } from 'expo-font';

export default function Navbar() {
  const [fontsLoaded] = useFonts({
    'Rowdies-Bold': require('./assets/fonts/Rowdies-Bold.ttf')
  })
  return (
 
    <View style={styles.container}>
      <Ionicons name="menu-outline"size={24}/>
      <Text style={styles.appName}>Beer me!</Text>
      <Ionicons name="search-outline" size={24}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%', 
    height: 40,
    padding: 5, 
    boxShadow: "0px 0px 10px black"
  },
  appName: {
    fontSize: 30,
    textAlign: 'center',
    width: 160,
    fontFamily: 'Rowdies-Bold'
  }
})