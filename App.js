import { NativeBaseProvider } from "native-base";
import { useState, useEffect } from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationRef } from "./RootNavigation";
import ModalMenu from "./components/ModalMenu";
import Navbar from "./components/Navbar";
import RandomBeer from "./components/RandomBeer";
import Login from "./components/Login";
import ListOfFavorites from "./components/ListOfFavorites";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";

const Stack = createNativeStackNavigator();

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [user, setUser] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [allDrinks, setAllDrinks] = useState([]);

  //Call the APIs and combine them on app load
  useEffect(() => {
    Promise.all([
      fetch("https://api.punkapi.com/v2/beers"),
      fetch("https://api.sampleapis.com/beers/ale"),
      fetch("https://api.sampleapis.com/beers/stouts"),
    ])
      .then(([punkApi, ale, stouts]) =>
        Promise.all([punkApi.json(), ale.json(), stouts.json()])
      )
      .then(([punkApi, ale, stouts]) => {
        const collected = [...punkApi, ...ale, ...stouts];
        //Make new ID's for data being pulled in since we are pulling from 3 separate APIs
        let newId = 1;
        setAllDrinks(
          collected.map((beer) => {
            return {
              ...beer,
              id: newId++,
            };
          })
        );
      });
  }, []);

  function handleFavoriteBeer(clicked) {
    setFavorites(
      favorites.includes(clicked)
        ? favorites.filter((beer) => beer !== clicked)
        : [...favorites, clicked]
    );
  }

  return (
    <NativeBaseProvider>
      <NavigationContainer ref={navigationRef}>
        <Navbar
          showModal={showModal}
          onSetShowModal={setShowModal}
          onSetShowSearch={setShowSearch}
          showSearch={showSearch}
        />
        <ModalMenu
          showModal={showModal}
          onCloseModal={setShowModal}
          theUser={user}
        />
        <Search showSearch={showSearch} onCloseSearch={setShowSearch} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Random Beer">
            {(props) => (
              <RandomBeer
                {...props}
                onAddFavoriteBeer={handleFavoriteBeer}
                favorites={favorites}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Login/Create">
            {(props) => <Login {...props} onHandleUser={setUser} />}
          </Stack.Screen>
          <Stack.Screen name="Favorites">
            {(props) => <ListOfFavorites {...props} beer={favorites} />}
          </Stack.Screen>
          <Stack.Screen
            name="Search Results"
            component={SearchResults}
            initialParams={{ allDrinks }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
