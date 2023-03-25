import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import InternshipsService from "../api/InternshipsService";

const ExplorePage = ({ navigation }) => {
  const [internships, setInternships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getInternships = async () => {
    try {
      const response = await InternshipsService.findInternships();
      setInternships(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getInternships();
  }, []);

  useEffect(() => {
    if (internships.length === 0) {
      setIsLoading(false);
    }
  }, [internships]);

  // Composant permettant d'afficher chaque Entreprise
  const renderInternship = ({ item }) => {
    return (
      <TouchableOpacity style={styles.containerInternship}>
        <View style={styles.internshipLeftSide}>
        <View style={styles.internshipLeftSideLogoContainer}>
          <Image
            style={styles.internshipLeftSideLogo}
            source={require("../resources/images/logo.min.white.png")}
          />
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
        <Text style={styles.helloHeader}> Hi Giuseppe</Text>
        <View style={styles.container}>
          <View style={styles.listContainer}>
            <FlatList
              data={internships}
              renderItem={renderInternship}
              keyExtractor={(item) => item.id}
            />
          </View>
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
  internshipLeftSideLogoContainer:{
    backgroundColor: "#303030",   
    padding: 5,
    position: "absolute",
    top: 50,
    left: 40,
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
  },
  internshipRightSideInternshipTitle: {
    fontSize: 16,
    fontWeight: 400,
    color: primaryColor,
    alignSelf: "center",
  },
});
