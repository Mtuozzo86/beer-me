import React from "react";
import { NativeBaseProvider} from "native-base";
import { useState } from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationRef } from "./RootNavigation";
import ModalMenu from "./components/ModalMenu";
import Navbar from "./components/Navbar";
import RandomBeer from "./components/RandomBeer";
import Login from "./components/Login";
import ListOfFavorites from "./components/ListOfFavorites";

const Stack = createNativeStackNavigator();

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState("");
  const [favorites, setFavorites] = useState([])
  
  function handleFavoriteBeer(thing) {
    const newBeer = thing
    setFavorites([...favorites, newBeer])
  }

  return (
    <NativeBaseProvider>
      <NavigationContainer ref={navigationRef}>
        <Navbar showModal={showModal} onSetShowModal={setShowModal} />
        <ModalMenu
          showModal={showModal}
          onCloseModal={setShowModal}
          theUser={user}
        />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Random Beer">
            {(props) => <RandomBeer {...props} onAddFavoriteBeer={handleFavoriteBeer}
            favorites={favorites}
            />}
          </Stack.Screen>
          <Stack.Screen name="Login/Create">
            {(props) => <Login {...props} onHandleUser={setUser} />}
          </Stack.Screen>
          <Stack.Screen name="Favorites">
            {(props) => <ListOfFavorites {...props} beer={favorites}/>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}