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

  const UserInformations = () => {
    return <View style={{ flex: 1 }}></View>;
  };

  return <UserInformations />;
};

export default ProfileInformations;
