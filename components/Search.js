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
  FormControl,
} from "native-base";
import { useNavigation } from '@react-navigation/native';

import React, { useState } from "react";
import FilterOptions from "./FilterOptions";

export default function Search({ onCloseSearch, showSearch, onSearch}) {
  const navigation = useNavigation()
  const [input, setInput] = useState("");
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  function handleSearchSubmit() {
    navigation.navigate("Search Results", {input: input}),
    setInput('')
    onCloseSearch(false)
    onSearch(input)
  }

  return (
    <Box>
      <Slide in={showSearch} placement="right">
        <Box p="4" top={100} bg="#fff" shadow={8} w="100%">
          <FormControl>
            <Flex direction="row">
              <Input
                value={input}
                onSubmitEditing={handleSearchSubmit}
                w={175}
                onChangeText={text => setInput(text)}
                placeholder="Search a drink"
              />
              <Button ml={4} bg="#fdc500" onPress={handleSearchSubmit}>
                <Text>Search</Text>
              </Button>
            </Flex>
          </FormControl>
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
