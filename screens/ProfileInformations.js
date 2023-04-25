import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Alert,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Checkbox from "expo-checkbox";
import UsersService from "../api/UsersService";
import styles from "../theme/style.js";

const ProfileInformations = ({ navigation, route }) => {
  //Use the user that exists in the previous page here...
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSetMailUpdates, setMailUpdates] = useState(false);
  const [isSetPromoMail, setPromoMail] = useState(false);
  console.log("Here in ProfileInformations: ", route.params.usertest.email);
  console.log(route.params.usertest);
  const SaveInformations = async () => {
    const updatedUser = {
      ...route.params.usertest,
      email: email,
      username: username,
      password: password,
      promoMail: isSetPromoMail,
      mailUpdate: isSetMailUpdates,
    };
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
        if (!response.ok) {
          Alert.alert(
            "There was a problem with the update of the credentials !"
          );
        }
      });
    } catch (error) {
      console.error(`Erreur lors de la connexion: ${error.message}`);
    }
  };

  const HeaderInformation = () => {
    return (
      <View style={styles.headerInformation}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Edit personal info
        </Text>
        <Text style={styles.save}>Save</Text>
      </View>
    );
  };

  const Bloc = ({ placeholder, setfunction }) => {
    return (
      <View style={styles.bloc}>
        <Text style={styles.placeholder}>{placeholder}</Text>
        <TextInput
          onChangeText={(text) => setfunction(text)}
          style={styles.personalinput}
        ></TextInput>
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
            onValueChange={setMailUpdates}
            color={isSetMailUpdates ? "#428A42" : undefined}
          />
          <Text style={styles.mailingtext}>Agree to receive mail updates</Text>
        </View>
        <View style={styles.viewcheckbox}>
          <Checkbox
            style={styles.checkbox}
            value={isSetPromoMail}
            onValueChange={setPromoMail}
            color={isSetPromoMail ? "#428A42" : undefined}
          />
          <Text style={styles.mailingtext}>Promotional mailing list</Text>
        </View>
      </View>
    );
  };

  const UserInformations = () => {
    return (
      <View style={{ flex: 1 }}>
        <HeaderInformation />
        <Bloc placeholder="Username" setfunction={setUsername} />
        <Bloc placeholder="Email" setfunction={setEmail} />
        <Bloc placeholder="Password" setfunction={setPassword} />
        <View style={styles.fineLine2}></View>
        <Preferences />
      </View>
    );
  };

  return <UserInformations />;
};

export default ProfileInformations;
