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

const ProfilePage = ({ navigation }) => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUser = async () => {
    try {
      const response = await UsersService.findUserById(1);
      setUser(response);
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = (name) => {
    navigation.navigate(name);
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (user.length === 0) {
      setIsLoading(false);
    }
  }, [user]);

  const LoadingComponent = () => {
    return (
      <TouchableOpacity>
        <Text>Loading ...</Text>
      </TouchableOpacity>
    );
  };

  const UserHeader = () => {
    return (
      <View>
        <TouchableOpacity
          style={styles.containerHeaderUser}
          onPress={() => {
            navigate("Details");
          }}
        >
          <View style={styles.containerHeaderUser1}>
            <Image
              style={styles.userProfilePicture}
              source={require("../resources/images/PDP.png")}
            />
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

  const AccountSettings = () => {
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
  const Support = () => {
    return (
      <View>
        <View style={styles.containerAccount}>
          <Text style={styles.headernameUser}>Support</Text>
          <View style={styles.containerAccountInside}>
            <Image
              style={styles.iconUser}
              source={require("../resources/images/files.png")}
            />
            <Text style={{ marginTop: 6 }}>Pivacy policy</Text>
            <View style={styles.containerArrowSetting}>
              <Image
                style={styles.arrowUserSetting}
                source={require("../resources/images/Chevron.png")}
              />
            </View>
          </View>
          <View style={styles.containerAccountInside}>
            <Image
              style={styles.iconUser}
              source={require("../resources/images/help.png")}
            />
            <Text style={{ marginTop: 6 }}>Get help</Text>
            <View style={styles.containerArrowSetting}>
              <Image
                style={styles.arrowUserSetting}
                source={require("../resources/images/Chevron.png")}
              />
            </View>
          </View>
        </View>
        {/* <View style={styles.fineLine}></View> */}
      </View>
    );
  };

  const UserPage = () => {
    return (
      <View style={{ flex: 1 }}>
        <UserHeader />
        <AccountSettings />
        <Support />
      </View>
    );
  };

  return isLoading ? <LoadingComponent /> : <UserPage />;
};

export default ProfilePage;
