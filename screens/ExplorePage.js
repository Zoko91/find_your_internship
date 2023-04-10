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

const ExplorePage = ({ navigation, route }) => {
  const [internships, setInternships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  //const { usertest } = route.params;
  console.log("USER TEST :");
  //console.log(usertest);

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

  const renderInternshipInfos = ({ item }) => {
    return (
      <View style={styles.internshipInfosContainer}>
        <Text style={styles.internshipInfosText}>
          <Image
            style={styles.internshipInfosIcons}
            source={require("../resources/images/star.png")}
          />
          {item.grade}
        </Text>
        <Text style={styles.internshipInfosText}>
          <Image
            style={styles.internshipInfosIcons}
            source={require("../resources/images/location_outline.png")}
          />
          {item.country}
        </Text>
        <Text style={styles.internshipInfosText}>
          <Image
            style={styles.internshipInfosIcons}
            source={require("../resources/images/euros.png")}
          />
          {item.compensation}
        </Text>
        <Text style={styles.internshipInfosText}>
          <Image
            style={styles.internshipInfosIcons}
            source={require("../resources/images/clock.png")}
          />
          plHolder
        </Text>
      </View>
    );
  };

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
          <View style={styles.internshipInfos}>
            <FlatList
              data={[item]}
              renderItem={renderInternshipInfos}
              keyExtractor={(item) => item.id}
              numColumns={2}
              contentContainerStyle={{ flexGrow: 1 }}
            />
          </View>
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
        <View style={{ alignItems: "center" }}>
          <View style={styles.searchBar}>
            <TextInput placeholder="Search" />
          </View>
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
  searchBar: {
    justifyContent: "center",
    fontSize: 16,
    borderRadius: 50,
    borderwidth: 1,
    width: "80%",
    height: 50,
    backgroundColor: "#F5F5F5",
    marginBottom: 10,
    padding: 10,
    paddingLeft: 25,
    elevation: 2,
    shadowColor: "#2B5453",
    shadowOpacity: 0.27,
    shadowRadius: 15,
  },
  listContainer: {
    width: "80%",
    height: "100%",
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
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
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
  internshipInfos: {
    borderColor: "black",
    justifyContent: "center",
    width: "60%",
    flex: 1,
    alignSelf: "center",
  },
  internshipInfosIcons: {
    height: 20,
    width: 20,
  },
  internshipInfosContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    flexBasis: "50%",
    justifyContent: "space-around",
  },
  internshipInfosText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexBasis: "50%",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 5,
  },
});
