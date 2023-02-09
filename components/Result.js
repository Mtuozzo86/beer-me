import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Center, VStack, Box, Flex, Divider } from "native-base";

export default function Result({ item }) {

  const { image_url: image } = item;

  return (
    <View>
      <Flex
        direction="row"
        justifyContent="space-between"
        style={{ marginBottom: 45, padding: 14 }}
      >
        <View style={{ width: "75%" }}>
          <Text style={{ fontSize: 24 }}>{item.name}</Text>
          <Text>ABV: {item.abv}</Text>
          <Text style={{ paddingRight: 18 }}>{item.description} </Text>
        </View>
        <View style={{ width: "25%" }}>
          <Image
            source={{ uri: image }}
            style={{ height: 200, width: "100%", resizeMode: "contain" }}
            alt="Beer picture"
          />
        </View>
      </Flex>
      <Divider bg="grey" thickness="2" mx="5" orientation="horizontal" />
    </View>
  );
}
