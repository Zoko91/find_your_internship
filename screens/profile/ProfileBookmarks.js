import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "../../theme/style.js";
import Company from "../../components/CompanyBookmark";
import InternshipBookmark from "../../components/InternshipBookmark";
import UserBookmarks from "../../components/UserBookmarks";

const ProfileBookmarks = ({ navigation, route }) => {
  //Use the user that exists in the previous page here...
  const [user, setUser] = useState([]);

  return <UserBookmarks />;
};

export default ProfileBookmarks;
