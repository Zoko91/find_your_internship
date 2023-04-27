import React, { useState } from "react";
import {
  Text,
  View,
  Alert,
  TouchableOpacity,
  NativeModules,
} from "react-native";
import Checkbox from "expo-checkbox";
import styles from "../../theme/style.js";
import InputBloc from "../../components/InputBloc";
import { saveUser } from "../../utils/localStorage";

const ProfileInformations = ({ navigation, route }) => {
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

  const SaveInformations = async () => {
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
    // updatedUser.internships.forEach((internship) => {
    //   internship.user = updatedUser;
    // });
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

  const HeaderInformation = () => {
    return (
      <View style={styles.headerInformation}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Edit personal info
        </Text>
        <TouchableOpacity onPress={SaveInformations}>
          <Text style={styles.save}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const Preferences = () => {
    return (
      <View style={styles.preferences}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Preferences</Text>
        <View style={styles.viewcheckbox}>
          <Checkbox
            style={styles.checkbox}
            value={isSetMailUpdates}
            onValueChange={setIsSetMailUpdates}
            color={isSetMailUpdates ? "#428A42" : undefined}
          />
          <Text style={styles.mailingtext}>Agree to receive mail updates</Text>
        </View>
        <View style={styles.viewcheckbox}>
          <Checkbox
            style={styles.checkbox}
            value={isSetPromoMail}
            onValueChange={setIsSetPromoMail}
            color={isSetPromoMail ? "#428A42" : undefined}
          />
          <Text style={styles.mailingtext}>Promotional mailing list</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <HeaderInformation />
      <InputBloc placeholder={"Username"} handler={handleUsername} />
      <InputBloc placeholder={"Email"} handler={setEmail} />
      <InputBloc placeholder={"Password"} handler={setPassword} />
      <View style={styles.fineLine2}></View>
      <Preferences />
    </View>
  );
};

export default ProfileInformations;
