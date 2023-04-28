import { Image } from "react-native";
import styles from "../theme/style";
import React from "react";

const ProfilePicture = ({ profilePic }) => {
  return profilePic === null ? (
    <Image
      style={styles.userProfilePicture}
      source={require("../resources/images/PDP.png")}
    />
  ) : (
    <Image
      style={styles.userProfilePicture}
      source={{
        uri: profilePic,
      }}
    />
  );
};

export default ProfilePicture;
