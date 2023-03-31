import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Checkbox from "expo-checkbox";
import UsersService from "../api/UsersService";
import styles from "../theme/style.js";

const ProfileInformations = ({ navigation }) => {
  //Use the user that exists in the previous page here...
  const [user, setUser] = useState([]);
  const [isSetMailUpdates, setMailUpdates] = useState(false);
  const [isSetPromoMail, setPromoMail] = useState(false);
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

  const Bloc = ({ placeholder }) => {
    return (
      <View style={styles.bloc}>
        <Text style={styles.placeholder}>{placeholder}</Text>
        <TextInput style={styles.personalinput}></TextInput>
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
        <Bloc placeholder="Username" />
        <Bloc placeholder="Email" />
        <Bloc placeholder="Password" />
        <View style={styles.fineLine2}></View>
        <Preferences />
      </View>
    );
  };

  return <UserInformations />;
};

export default ProfileInformations;
