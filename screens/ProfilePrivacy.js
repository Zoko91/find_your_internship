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

const ProfilePrivacy = ({ navigation }) => {
  //Use the user that exists in the previous page here...
  const [user, setUser] = useState([]);

  const UserPrivacy = () => {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Text style={styles.privacyTitle}>Privacy policy</Text>
        </View>
        <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
          <View style={{ flex: 10 }}>
            <Text style={{ color: "black", fontWeight: "300", fontSize: 14 }}>
              Request your personal data
            </Text>
            <Text
              style={{
                color: "rgba(40,40,40,0.8)",
                fontWeight: "200",
                fontSize: 12,
              }}
            >
              We'll create a file for you to download your personal data
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flex: 2,
              justifyContent: "center",
              alignItems: "flex-end",
              marginRight: 10,
            }}
          >
            <Image
              style={styles.arrowUserSetting}
              source={require("../resources/images/Chevron.png")}
            />
          </TouchableOpacity>
          {/* Request your data*/}
        </View>
        <View></View>
      </View>
    );
  };

  return <UserPrivacy />;
};

export default ProfilePrivacy;
