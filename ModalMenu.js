import React from "react";
// import {
//   Alert,
//   StyleSheet,
//   Text,
//   Pressable,
//   View,
//   Modal,
// } from "react-native";
import {
  Slide,
  Button,
  Alert,
  VStack,
  Heading,
  Divider,
  Center,
  NativeBaseProvider,
  Box,
  Text,
} from "native-base";
export default function ModalMenu({ showModal, onCloseModal }) {
  return (
    <Slide in={showModal} placement="left">
      <Box
        p="1"
        w="90%"
        top='10'

        bg="blue.50"
      >
        Due to government restrictions around COVID- 19, you may experience a
        delay in your delivery. Due to government restrictions around COVID- 19,
        you may experience a delay in your delivery. Due to government
        restrictions around COVID- 19, you may experience a delay in your
        delivery. Due to government restrictions around COVID- 19, you may
        experience a delay in your delivery. Due to government restrictions
        around COVID- 19, you may experience a delay in your delivery.
        <Button onPress={() => onCloseModal(!showModal)}>Close</Button>
      </Box>
    </Slide>
  );
}
