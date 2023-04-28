import React, { useState } from "react";
import { View, Alert, NativeModules } from "react-native";
import styles from "../../theme/style.js";
import InputBloc from "../../components/InputBloc";
import { saveUser } from "../../utils/localStorage";
import HeaderInformation from "../../components/HeaderInformation";
import Preferences from "../../components/Preferences";

const ProfileInformation = ({ navigation, route }) => {
  //Use the user that exists in the previous page here...
  const user = route.params.usertest;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSetMailUpdates, setIsSetMailUpdates] = useState(user.mailUpdate);
  const [isSetPromoMail, setIsSetPromoMail] = useState(user.promoMail);

  const handleUsername = (text) => {
    setUsername(text);
  };

  const saveInformation = async () => {
    // --------------------- Explication  ---------------------
    // Cette fonction permet de sauvegarder les informations de l'utilisateur
    // Elle appelle une méthode PUT du back end. Elle ne modifie que les champs des Inputs
    // Elle a également besoin de tous les informations obligatoires du User.

    const updatedUser = {
      id: user.id,
      username: user.username,
      email: user.email,
      password: user.password,
      description: user.description,
      avatar: user.avatar,
      mailUpdate: isSetMailUpdates,
      promoMail: isSetPromoMail,
    };

    if (username !== "") {
      updatedUser.username = username;
    }
    if (email !== "") {
      updatedUser.email = email;
    }
    if (password !== "") {
      updatedUser.password = password;
    }

    try {
      const response = await fetch(
        "https://jbeasse-workadventure.azurewebsites.net/api/UserApi/" +
          route.params.usertest.id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      ).then(async (response) => {
        if (response.ok) {
          // --------------------- Explication  ---------------------
          // Lorsque les informations sont changées, déconnecte l'utilisateur
          // pour qu'il puisse se reconnecter avec ses nouvelles informations

          Alert.alert(
            "Validé !",
            "Les changements ont bien été pris en compte. Vous allez être déconnecté.",
            [
              {
                text: "OK",
                onPress: () => {
                  NativeModules.DevSettings.reload();
                },
              },
            ]
          );
        }
      });
    } catch (error) {
      console.error(`Erreur lors de l'envoi de données: ${error.message}`);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <HeaderInformation saveInformation={saveInformation} />
      <InputBloc placeholder={"Username"} handler={handleUsername} />
      <InputBloc placeholder={"Email"} handler={setEmail} />
      <InputBloc placeholder={"Password"} handler={setPassword} />
      <View style={styles.fineLine2}></View>
      <Preferences
        setIsSetMailUpdates={setIsSetMailUpdates}
        isSetMailUpdates={isSetMailUpdates}
        setIsSetPromoMail={setIsSetPromoMail}
        isSetPromoMail={isSetPromoMail}
      />
    </View>
  );
};

export default ProfileInformation;
