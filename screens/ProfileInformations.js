import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import UsersService from "../api/UsersService";
import styles from "../theme/style.js";

const ProfileInformations = ({ navigation }) => {
  //Use the user that exists in the previous page here...
  const [user, setUser] = useState([]);

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

  const Bloc = () => {
    return (
      <View style={styles.bloc}>
        <Text style={styles.placeholder}>Username</Text>
      </View>
    );
  };

  const UserInformations = () => {
    return (
      <View style={{ flex: 1 }}>
        <HeaderInformation />
        <Bloc />
      </View>
    );
  };

  return <UserInformations />;
};

export default ProfileInformations;
