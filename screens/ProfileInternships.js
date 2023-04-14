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
import InternshipsService from "../api/InternshipsService";
import styles from "../theme/style.js";

const ProfileInternships = ({ navigation, route }) => {
  //Use the user that exists in the previous page here...
  const [internships, setInternships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const colors = [
    "rgba(150,30,30,0.4)",
    "rgba(220,70,70,0.5)",
    "rgba(250,120,30,0.4)",
  ];
  console.log("Here in Internships: ", route.params.usertest.email);
  const getNeededInfos = async () => {
    try {
      const responseInternship =
        await InternshipsService.findInternshipByUserId(
          route.params.usertest.id
        );
      setInternships(responseInternship);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getNeededInfos();
  }, []);

  useEffect(() => {
    if (internships.length === 0) {
      setIsLoading(false);
    }
  }, [internships]);

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
        <FlatList
          data={internships}
          renderItem={({ item, index }) => (
            <Internship
              item={item}
              color={index < 3 ? colors[index] : "gray"}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  };

  const Internship = ({ item, color }) => {
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
          <Text style={{ fontSize: 15, fontWeight: "500" }}>{item.title}</Text>
          <Text>{item.company.name}</Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}
          >
            <Image
              style={{ height: 15, width: 15, marginRight: 5 }}
              source={require("../resources/images/clock.png")}
            />
            <Text style={{ fontSize: 12 }}>{item.year}</Text>
            <Image
              style={{ height: 15, width: 15, marginRight: 5, marginLeft: 15 }}
              source={require("../resources/images/sablier.png")}
            />
            <Text style={{ fontSize: 12 }}>{item.duration}</Text>
          </View>
        </View>
        <View
          style={{
            marginLeft: 40,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text>{item.grade}</Text>
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
  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return <UserInternships />;
  }
};

export default ProfileInternships;
