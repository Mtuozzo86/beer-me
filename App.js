import React from "react";
import { NativeBaseProvider, Box, Text } from "native-base";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModalMenu from "./components/ModalMenu";
import Navbar from "./components/Navbar";
import RandomBeer from "./components/RandomBeer";
import Login from "./components/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Navbar showModal={showModal} onSetShowModal={setShowModal} />
        <ModalMenu showModal={showModal} onCloseModal={setShowModal} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          
          <Stack.Screen name="Random Beer" component={RandomBeer} />
          <Stack.Screen name="Login/Create" component={Login} />
          
        </Stack.Navigator>
      </NavigationContainer>
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
