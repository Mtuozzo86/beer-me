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
import FilterOptions from "./FilterOptions";

export default function Search({ onCloseSearch, showSearch }) {
  const [input, setInput] = useState("");
  const [showFilterOptions, setShowFilterOptions] = useState(false);

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
          <Flex mt="3" alignItems="flex-end">
            <Text onPress={() => setShowFilterOptions(!showFilterOptions)}>
              Filters
            </Text>
          </Flex>
          {showFilterOptions && <FilterOptions />}
        </Box>
      </Slide>
    </Box>
  );
}
