import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Center, VStack, Box, Flex } from "native-base";

export default function Result({ item }) {
  const { image_url } = item;
  return (
    <Flex direction="row" justifyContent="space-between">
      <View>
        <Text>{item.name}</Text>
        <Text>{item.abv}</Text>
      </View>
      <Image
        source={{ uri: image_url }}
        style={{ height: 300, width: 200, resizeMode: "contain" }}
        alt="Beer picture"
      />
    </Flex>
  );
}
