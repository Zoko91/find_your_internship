import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../theme/style";
import ProfilePicture from "./ProfilePicture";
import React from "react";

const UserHeader = ({ navigate, user }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.containerHeaderUser}
        onPress={() => {
          navigate("Details");
        }}
      >
        <View style={styles.containerHeaderUser1}>
          <ProfilePicture profilePic={user.avatar} />
        </View>
        <View style={styles.containerHeaderUser2}>
          <Text style={styles.nameUser}>{user.username}</Text>
          <Text style={styles.showProfile}>Show profile</Text>
        </View>
        <View style={styles.containerHeaderUser3}>
          <Image
            style={styles.arrowUser}
            source={require("../resources/images/Chevron.png")}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.fineLine}></View>
    </View>
  );
};

export default UserHeader;
