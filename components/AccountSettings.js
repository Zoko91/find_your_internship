import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../theme/style";
import React from "react";

const AccountSettings = ({ navigate }) => {
  return (
    <View>
      <View style={styles.containerAccount}>
        <Text style={styles.headernameUser}>Account Settings</Text>
        <TouchableOpacity
          style={styles.containerAccountInside}
          onPress={() => {
            navigate("Informations");
          }}
        >
          <Image
            style={styles.iconUser}
            source={require("../resources/images/PersonIcon.png")}
          />
          <Text style={{ marginTop: 6 }}>Personal Information</Text>
          <View style={styles.containerArrowSetting}>
            <Image
              style={styles.arrowUserSetting}
              source={require("../resources/images/Chevron.png")}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.containerAccountInside}
          onPress={() => {
            navigate("Internships");
          }}
        >
          <Image
            style={styles.iconUser}
            source={require("../resources/images/InternPhoto.png")}
          />
          <Text style={{ marginTop: 6 }}>My Internships</Text>
          <View style={styles.containerArrowSetting}>
            <Image
              style={styles.arrowUserSetting}
              source={require("../resources/images/Chevron.png")}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.containerAccountInside}
          onPress={() => {
            navigate("Bookmarks");
          }}
        >
          <Image
            style={styles.iconUser}
            source={require("../resources/images/Bookmark.png")}
          />
          <Text style={{ marginTop: 6 }}>My bookmarks</Text>
          <View style={styles.containerArrowSetting}>
            <Image
              style={styles.arrowUserSetting}
              source={require("../resources/images/Chevron.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.fineLine}></View>
    </View>
  );
};

export default AccountSettings;
