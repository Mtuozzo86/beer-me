import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  Pressable,
  View,
  Button,
  Modal,
} from "react-native";
// import Modal from "react-native-modal";
export default function ModalMenu({ showModal, onCloseModal }) {
  return (
    <View>
      <Modal animationType="slide" isVisible={showModal} transparent={true}>
        {/* <Text>I am modal</Text>
        <Button onPress={() => onCloseModal(false)} title="Hide modal" /> */}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {},
});
