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

const ProfileInternships = ({ navigation }) => {
  //Use the user that exists in the previous page here...
  const [user, setUser] = useState([]);

  const Filters = () => {
    return (
      <View>
        <View style={styles.resarchintern}>
          <Text style={{ fontSize: 16 }}>Research your internship</Text>
        </View>
        <View style={styles.filters}>
          <Image
            style={styles.iconLens}
            source={require("../resources/images/lens.png")}
          />
          <TextInput style={styles.input} placeholder="Search by title" />
        </View>
        {/* Ajouter un tri ordre récent ou vieux */}
      </View>
    );
  };

  const MyInternships = () => {
    return (
      <View>
        <Text>My internships</Text>
      </View>
    );
  };

  const UserInternships = () => {
    return (
      <View style={{ flex: 1 }}>
        <Filters />
        <MyInternships />
      </View>
    );
  };

  return <UserInternships />;
};

export default ProfileInternships;
