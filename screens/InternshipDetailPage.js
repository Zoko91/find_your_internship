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
  SafeAreaView,
} from "react-native";
import InternshipsService from "../api/InternshipsService";
import {vh} from '../theme/style';

const InternshipDetailPage = ({ navigation, route }) => {
  const {internship} = route.params;
  let remote;
  if (internship.remote == 2) {
    remote = "No";
  } else if (internship.remote == 1) {
    remote = "Partial";
  }
  else {
    remote = "Yes";
  }
  useEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: route.params.topBarColor },
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View  style={[styles.container, styles.centerize, styles.internshipCompanyContainer]}>
      <View style={styles.internshipCompanyLogoContainer}>
            {internship.illustration ? (
              <Image
                style={styles.internshipCompanyLogo}
                source={{ uri: internship.illustration }}
              />
            ) : (
              <Image
                style={styles.internshipCompanyLogo}
                source={require("../resources/images/logo.min.white.png")}
              />
            )}
      </View>
      <Text style={styles.companyName}>{internship.company.name}</Text>
      </View>
      <View style={[styles.container, styles.internshipInfosContainer]}>
        <Text style={styles.internshipTitle}>{internship.title}</Text>
        <Text style={styles.internshipDescription}>{internship.description}</Text>
        <View style={styles.internshipDetailsInfosContainer}>
          <Text style={styles.internshipDetailsInfosBox}>Location: {internship.country}</Text>
          <Text style={styles.internshipDetailsInfosBox}>Salary: {internship.compensation} €</Text>
          <Text style={styles.internshipDetailsInfosBox}>Grade: {internship.grade}</Text>
          <Text style={styles.internshipDetailsInfosBox}>Duration: {internship.duration} months</Text>
          <Text style={styles.internshipDetailsInfosBox}>Remote: {remote} </Text>
        
        </View>
        <Text style={styles.postedBy}>Posted by : {internship.user.username}</Text>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  centerize: {
    alignItems: "center",
    justifyContent: "center",
  },
  internshipCompanyContainer: {
    maxHeight: vh(40),
  },
  internshipCompanyLogoContainer: {
    backgroundColor: "#303030",
    position: "absolute",
    // top: 35,
    top: vh(10),
    padding: 5,
  },
  internshipCompanyLogo: {
    width: 80,
    height: 80,
    objectFit: "contain",
  },
  companyName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2B5453",
    marginTop: vh(6),
  },
  internshipInfosContainer: {
    marginTop: -vh(10),
    alignSelf: "center",
    width: "90%",
    padding: 10,
  },
  internshipTitle: {
    fontSize: 25,
    fontWeight: "500",
    color: "#2B5453",
    marginBottom: vh(3),
  },
  internshipDescription: {
    fontSize: 20,
    marginBottom: vh(3),
    width: "90%",
    alignSelf: "center",
  },
  internshipDetailsInfosContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: vh(4),
    flexDirection: "row",
    flexWrap: "wrap",
    flexBasis: "50%",
    justifyContent: "space-around",
  },
  internshipDetailsInfosBox: {
    flex: 1,
    marginVertical: 15,
    fontSize: 15,
    
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexBasis: "50%",
  },
  postedBy:{
    fontSize: 15,
    color: "gray",
    alignSelf: "flex-end",
    fontStyle: "italic",
    marginBottom: 10,
  },
});

export default InternshipDetailPage;
