import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import UsersService from "../api/UsersService";
import styles from "../theme/style.js";

const ProfileBookmarks = ({ navigation }) => {
  //Use the user that exists in the previous page here...
  const [user, setUser] = useState([]);

  const Internship = ({ title, company, username }) => {
    return (
      <View style={styles.styleInternship}>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../resources/images/Bookmark.png")}
          />
        </TouchableOpacity>
        <View
          style={{
            height: 50,
            width: 2,
            borderWidth: 1,
            borderColor: "#rgba(250, 0, 0, 0.15)",
            borderStyle: "dotted",
          }}
        ></View>
        <TouchableOpacity
          style={{ flexDirection: "row", flex: 4, marginLeft: 10 }}
        >
          <View>
            <Text style={{ fontSize: 14, fontWeight: "300" }}>{title}</Text>
            <Text style={{ fontSize: 12, fontWeight: "200" }}>
              {company} - by {username}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
              marginRight: 15,
            }}
          >
            <Image
              style={styles.arrowUserSetting}
              source={require("../resources/images/Chevron.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const Company = ({ name, location, sector }) => {
    return (
      <View style={styles.styleCompany}>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../resources/images/Bookmark.png")}
          />
        </TouchableOpacity>
        <View
          style={{
            height: 50,
            width: 2,
            borderWidth: 1,
            borderColor: "#rgba(0, 0, 250, 0.15)",
            borderStyle: "dotted",
          }}
        ></View>
        <TouchableOpacity
          style={{ flexDirection: "row", flex: 4, marginLeft: 10 }}
        >
          <View>
            <Text style={{ fontSize: 14, fontWeight: "300" }}>{name}</Text>
            <Text style={{ fontSize: 12, fontWeight: "200" }}>
              {sector} - at {location}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
              marginRight: 15,
            }}
          >
            <Image
              style={styles.arrowUserSetting}
              source={require("../resources/images/Chevron.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const UserBookmarks = () => {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.halfIntern}>
          <Text>Internships</Text>
          <ScrollView>
            <Internship
              title="Administrateur réseau"
              company="Google"
              username="Thomas C."
            />
            <Internship
              title="Vidangeur de toilettes"
              company="KFC"
              username="Joseph B."
            />
            <Image
              style={styles.arrowgif}
              source={require("../resources/images/arrow.gif")}
            />
          </ScrollView>
        </View>
        <View style={styles.halfCompany}>
          <Text>Companies</Text>
          <ScrollView>
            <Company name="Google" location="Paris" sector="Innovation & CS" />
            <Company
              name="IBM"
              location="Bordeaux"
              sector="Intern's formation program"
            />
            <Image
              style={styles.arrowgif}
              source={require("../resources/images/arrow.gif")}
            />
          </ScrollView>
        </View>
      </View>
    );
  };

  return <UserBookmarks />;
};

export default ProfileBookmarks;
