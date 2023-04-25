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
  Alert,
  NativeModules,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "../theme/style";

const PickerImage = ({ user, handler }) => {
  const SaveImageToProfile = async (lienImage) => {
    const updatedUser = {
      id: user.id,
      username: user.username,
      email: user.email,
      password: user.password,
      description: user.description,
      avatar: lienImage,
    };
    try {
      const response = await fetch(
        "https://jbeasse-workadventure.azurewebsites.net/api/UserApi/" +
          user.id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      ).then(async (response) => {
        if (response.ok) {
          console.log("Image enregistrée");
        }
      });
    } catch (error) {
      console.error(`Erreur lors de l'upload de l'image: ${error.message}`);
    }
  };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      SaveImageToProfile(result.assets[0].uri);
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
