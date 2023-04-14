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

const ProfileShow = ({ navigation, route }) => {
  //Use the user that exists in the previous page here...
  const [user, setUser] = useState([]);
  console.log("Here in ProfileShow: ", route.params.usertest.email);

  const Description = () => {
    return (
      <View>
        <View style={styles.containerProfile}>
          <Image
            style={styles.profilePicture}
            source={require("../resources/images/PDP_2.png")}
          />
          <View style={styles.containerCamera}>
            <Image source={require("../resources/images/camera.png")} />
          </View>
        </View>
        <Text style={styles.hiMatt}>
          Hi, I'm {route.params.usertest.username}
        </Text>
        <Text style={styles.descriptionShow}>
          {route.params.usertest.description}
        </Text>
      </View>
    );
  };

  const RecentPost = () => {
    return (
      <View>
        <Text style={styles.recentPostHeader}>Most recent Post</Text>
      </View>
    );
  };

  const Post = () => {
    return (
      <View style={styles.post}>
        <Image
          style={styles.iconCompany}
          source={require("../resources/images/IBM.png")}
        />
        <Text style={{ fontSize: 16 }}>CEO Intern</Text>
        <View style={styles.grade}>
          <Text style={{ fontSize: 16 }}>5.0</Text>
          <Image
            style={styles.iconStar}
            source={require("../resources/images/star.png")}
          />
        </View>
        <Image
          style={styles.arrowUserSetting}
          source={require("../resources/images/Chevron.png")}
        />
      </View>
    );
  };

  const UserShow = () => {
    return (
      <View style={{ flex: 1 }}>
        <Description />
        <RecentPost />
        <Post />
      </View>
    );
  };

  return <UserShow />;
};

export default ProfileShow;
