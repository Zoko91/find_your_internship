import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import InternshipsService from "../api/InternshipsService";
import UsersService from "../api/UsersService";

const ExplorePage = ({ navigation }) => {
  const [internships, setInternships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  const getNeededInfos = async () => {
    try {
      const responseInternship = await InternshipsService.findInternships();
      const responseUser = await UsersService.findUserById(1);
      setUser(responseUser);
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
  }, [internships, user]);

  // Composant permettant d'afficher chaque Stage
  const renderInternship = ({ item }) => {
    return (
      <TouchableOpacity style={styles.containerInternship}>
        <View style={styles.internshipLeftSide}>
          <View style={styles.internshipLeftSideLogoContainer}>
            {item.illustration ? (
              <Image
                style={styles.internshipLeftSideLogo}
                source={{ uri: item.illustration }}
              />
            ) : (
              <Image
                style={styles.internshipLeftSideLogo}
                source={require("../resources/images/logo.min.white.png")}
              />
            )}
          </View>
        </View>
        <View style={styles.internshipRightSide}>
          <Text style={styles.internshipRightSideCompanyName}>
            {item.company.name}
          </Text>
          <Text style={styles.internshipRightSideInternshipTitle}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text style={styles.helloHeader}> Hi {user.username}</Text>
        {/* 
        <ScrollView contentContainerStyle={styles.container}>*/}
        <View style={styles.listContainer}>
          <FlatList
            data={internships}
            renderItem={renderInternship}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ flexGrow: 1 }}
          />
        </View>
        {/*
        </ScrollView> */}
      </View>
    );
  }
};

export default ExplorePage;

const borderRadius = 10;
const primaryColor = "#303030";
const secondaryColor = "#2B5453";
// Use StylesSheet flatten
const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
  },
  helloHeader: {
    marginTop: 60,
    marginLeft: 16,
    marginBottom: 30,
    fontSize: 36,
    color: "#2B5453",
    fontWeight: 500,
  },
  listContainer: {
    width: "80%",
  },
  containerInternship: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    minHeight: 155,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
    padding: 0,
    borderRadius: borderRadius,
  },
  internshipLeftSide: {
    width: "20%",
    height: "100%",
    backgroundColor: "#2B5453",
    borderRightWidth: 1,
    borderColor: "black",
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
  },
  internshipRightSide: {
    width: "90%",
    height: "100%",
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  },
  internshipLeftSideLogoContainer: {
    backgroundColor: "#303030",
    padding: 5,
    position: "absolute",
    top: 50,
    left: "58%",
  },
  internshipLeftSideLogo: {
    width: 41,
    height: 41,

    objectFit: "contain",
  },
  internshipRightSideCompanyName: {
    fontSize: 20,
    fontWeight: 500,
    marginLeft: 10,
    marginTop: 10,
  },
  internshipRightSideInternshipTitle: {
    marginTop: 10,
    maxWidth: "70%",
    fontSize: 16,
    fontWeight: 400,
    color: primaryColor,
    alignSelf: "center",
  },
});
