import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "../theme/style";

const PickerImage = ({ navigation, route, handler }) => {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      handler(result.assets[0].uri);
    }
  };

  return (
    <TouchableOpacity
      style={styles.containerCamera}
      onPress={() => pickImage()}
    >
      <Image source={require("../resources/images/camera.png")} />
    </TouchableOpacity>
  );
};

export default PickerImage;

const stylesPicker = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00A",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    color: "#841584",
    padding: 10,
    margin: 10,
    width: 200,
    height: 50,
  },
});
