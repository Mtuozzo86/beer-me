import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { Center, VStack, Box, Flex, Divider } from "native-base";

export default function ListOfFavorites({ beer }) {
  return (
    <View style={styles.container}>
      <Text>ListOfFavorites</Text>
      <FlatList
        data={beer}
        renderItem={({ item }) => (
          <View>
            <Flex
              direction="row"
              justifyContent="space-between"
              style={{ marginBottom: 10, padding: 14 }}
            >
              <View style={{ width: "75%" }}>
                <Text style={{ fontSize: 24 }}>{item.name}</Text>
                <Text>ABV: {item.abv}</Text>
              </View>
              <View style={{ width: "25%" }}>
                <Image
                  source={{ uri: item.image_url }}
                  style={{ height: 90, width: "100%", resizeMode: "contain" }}
                  alt="Beer picture"
                />
              </View>
            </Flex>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    // alignItems: "center",
  },
});
