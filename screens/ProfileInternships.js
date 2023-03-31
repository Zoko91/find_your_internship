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
          <TextInput style={styles.inputSearch} placeholder="Search by title" />
        </View>
        {/* Ajouter un tri ordre récent ou vieux */}
        <View style={styles.fineLine3}></View>
      </View>
    );
  };

  const MyInternships = () => {
    return (
      <View style={styles.myinternships}>
        <Text style={{ fontSize: 16, marginLeft: 40, marginBottom: 10 }}>
          My internships
        </Text>
        <Internship
          title="Contrebandier stagiaire"
          brandName="Google"
          year="2021"
          duration="4 mois"
          stars="5.0"
          color="rgba(150,30,30,0.4)"
        />
        <Internship
          title="CTO of the ENSC"
          brandName="Mars Explorer"
          year="2024"
          duration="2 mois"
          stars="4.3"
          color="rgba(220,70,70,0.5)"
        />
        <Internship
          title="Vendeur à la sauvette"
          brandName="I2C"
          year="2020"
          duration="3 mois"
          stars="2.1"
          color="rgba(250,120,30,0.4)"
        />
      </View>
    );
  };

  const Internship = ({ title, brandName, year, duration, stars, color }) => {
    return (
      <View style={styles.internshipStyle}>
        <View
          style={{
            backgroundColor: color,
            width: 20,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        ></View>
        <View style={styles.containerintern}>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>{title}</Text>
          <Text>{brandName}</Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}
          >
            <Image
              style={{ height: 15, width: 15, marginRight: 5 }}
              source={require("../resources/images/clock.png")}
            />
            <Text style={{ fontSize: 12 }}>{year}</Text>
            <Image
              style={{ height: 15, width: 15, marginRight: 5, marginLeft: 15 }}
              source={require("../resources/images/sablier.png")}
            />
            <Text style={{ fontSize: 12 }}>{duration}</Text>
          </View>
        </View>
        <View
          style={{
            marginLeft: 40,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text>{stars}</Text>
          <Image
            style={styles.iconStar}
            source={require("../resources/images/star.png")}
          />
        </View>
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
