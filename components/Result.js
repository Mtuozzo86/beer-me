import { View, Text } from "react-native";
import React from "react";
import { Center, VStack, Box } from "native-base";

export default function Result({ item }) {
  return (
    <VStack>
        <Box h="20" rounded="md" shadow={3}>
      <Text>{item.name}</Text>
      </Box>
    </VStack>
  );
}
