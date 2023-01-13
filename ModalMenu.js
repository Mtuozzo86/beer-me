import React from "react";
import { Slide, Button, View, Box, Text } from "native-base";
export default function ModalMenu({ showModal, onCloseModal }) {
  return (
    <Slide in={showModal} placement="left">
      <Box p="4" w="100%" top={100} bg="#fff">
        <View>
          <Text>
            Top Text top top top topgjfdsg;jfldkgjf jasfjl s sljflsjfslfs f
            sjlsj jsjsjlsjlljlsjflj f sjlsfljfjjjfljsl jljsljlsjljf
            ljslsjlsjfkjlsjflj f fjjfjflss f j top
          </Text>
        </View>
        <View>
          <Text>Bottom Text</Text>
        </View>
        <Button onPress={() => onCloseModal(!showModal)}>Close</Button>
      </Box>
    </Slide>
  );
}
