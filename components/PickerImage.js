import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "../theme/style";
import { saveUser } from "../utils/localStorage";

const PickerImage = ({ user, handler }) => {
  // --------------------- Explication  ---------------------
  // Composant qui définit le sélecteur d'image qui permet de changer sa Photo de profil
  const saveImageToProfile = async (lienImage) => {
    // --------------------- Explication  ---------------------
    // Défini le comportement du bouton caméra qui permet de changer la Photo de profil de l'utilisateur
    // Effectue plusieurs actions importantes:
    // 1) Modifie l'url de l'image de l'utilisateur à l'aide d'une méthode PUT du BackEnd
    // 2) Ajoute l'image au BackEnd (serveur ASP.NET à l'aide d'une méthode POST formData)
    // 3) Modifie l'image de l'utilisateur également en local pour un affichage dynamique

    //  ---- NewPic est le lien de l'image récupérable par URL (Internet)
    // Il est défini dans le wwwroot de notre BackEnd
    // Ce dernier est unique car il commence forcément par l'ID de l'utilisateur
    const newPic =
      "https://jbeasse-workadventure.azurewebsites.net/images/" +
      user.id +
      "_" +
      lienImage.split("/").pop();

    const updatedUser = {
      id: user.id,
      username: user.username,
      email: user.email,
      password: user.password,
      description: user.description,
      avatar:
        "https://jbeasse-workadventure.azurewebsites.net/images/" +
        user.id +
        "_" +
        lienImage.split("/").pop(),
    };
    // Méthode mettant à jour l'URL (avatar) de l'utilisateur
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
      ).then(async (resp) => {
        user.avatar = newPic;
        // saveUser(user); => AsyncStorage, not implemented yet

        if (resp.ok) {
          console.log("Image enregistrée");
        }
      });
    } catch (error) {
      console.error(`Erreur lors de l'upload de l'image: ${error.message}`);
    }
  };
  // Méthode téléversant l'image au backend de notre serveur ASP.NET Core MVC
  const uploadImage = async (uri) => {
    let formData = new FormData();
    formData.append("userId", user.id);
    formData.append("image", {
      uri,
      type: "image/jpeg",
      name: uri.split("/").pop(),
    });

    try {
      let response = await fetch(
        "https://jbeasse-workadventure.azurewebsites.net/api/UserApi/upload-image",
        {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  // pickImage défini le composant permettant de sélectionner une image dans la galerie
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      saveImageToProfile(result.assets[0].uri);
      handler(result.assets[0].uri);
      uploadImage(result.assets[0].uri);
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
