import React from "react";
import { Alert, StyleSheet, Text, Pressable, View, Button } from "react-native";
import Modal from "react-native-modal";
export default function ModalMenu({ showModal, onCloseModal }) {
  return (
    <View style={styles.container}>
      <Modal
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        isVisible={showModal}
      >
        <Text>I am modal</Text>
        <Pressable onPress={onCloseModal('!showModal')}>
          <Button title="Hide modal"/>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 150,
    height: 150,
  },
});
