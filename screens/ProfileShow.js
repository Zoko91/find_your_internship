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

// Description of the page:
// This page is used to show the user's profile, his most recent post and to change his profile picture as well.

const ProfileShow = ({ navigation }) => {
  //Use the user that exists in the previous page here...
  const [user, setUser] = useState([]);

  const Description = () => {
    return (
      <View>
        <View style={styles.containerProfile}>
          <Image
            style={styles.profilePicture}
            source={require("../resources/images/PDP.png")}
          />
          <View style={styles.containerCamera}>
            <Image source={require("../resources/images/camera.png")} />
          </View>
        </View>
      </View>
    );
  };

  const UserShow = () => {
    return (
      <View style={{ flex: 1 }}>
        <Description />
      </View>
    );
  };

  return <UserShow />;
};

export default ProfileShow;
