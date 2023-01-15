import React from "react";
import {
  Slide,
  Button,
  View,
  Box,
  Text,
  Center,
  VStack,
  Pressable,
} from "native-base";
export default function ModalMenu({ showModal, onCloseModal }) {
  return (
    <Slide in={showModal} placement="left">
      <Box p="4" w="100%" top={100} bg="#fff" shadow={8}>
        <VStack space={4} alignItems="stretch">
          <Center w="64" h="10" bg="#fdc500" rounded="md" shadow={3}>
            <Text>Home</Text>
          </Center>
          <Center w="64" h="10" bg="#fdc500" rounded="md" shadow={3}>
            <Text>Favorites</Text>
          </Center>
          <Pressable>
            <Center w="64" h="10" bg="#fdc500" rounded="md" shadow={3}>
              <Text>More options...</Text>
            </Center>
          </Pressable>

          <Button onPress={() => onCloseModal(!showModal)}>Close</Button>
        </VStack>
      </Box>
    </Slide>
  );
}
