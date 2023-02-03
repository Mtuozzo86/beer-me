import {
  Slide,
  Button,
  Box,
  Text,
  Center,
  VStack,
  Pressable,
  View,
  Input,
  Flex,
} from "native-base";

import React, { useState } from "react";

export default function Search({ onCloseSearch, showSearch }) {
  const [input, setInput] = useState("");
  function handleInputSearch(e) {
    setInput(e.target.value);
  }
  return (
    <Box>
      <Slide in={showSearch} placement="right">
        <Box p="4" top={100} bg="#fff" shadow={8}>
          <Flex direction="row">
            <Input onChange={handleInputSearch} placeholder="Search a drink" />
            <Button ml={4} bg="#fdc500">
              <Text>Search</Text>
            </Button>
          </Flex>
        </Box>
      </Slide>
    </Box>
  );
}
