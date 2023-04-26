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
import { vh, stylesInternshipDetail } from "../theme/style";

const InternshipDetailPage = ({ navigation, route }) => {
  const { internship } = route.params;
  let remote;
  if (internship.remote == 2) {
    remote = "No";
  } else if (internship.remote == 1) {
    remote = "Partial";
  } else {
    remote = "Yes";
  }
  useEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: route.params.topBarColor },
    });
  }, [navigation]);

  return (
    <SafeAreaView style={stylesInternshipDetail.container}>
      <View
        style={[
          stylesInternshipDetail.container,
          stylesInternshipDetail.centerize,
          stylesInternshipDetail.internshipCompanyContainer,
        ]}
      >
        <View style={stylesInternshipDetail.internshipCompanyLogoContainer}>
          {internship.illustration ? (
            <Image
              style={stylesInternshipDetail.internshipCompanyLogo}
              source={{ uri: internship.illustration }}
            />
          ) : (
            <Image
              style={stylesInternshipDetail.internshipCompanyLogo}
              source={require("../resources/images/logo.min.white.png")}
            />
          )}
        </View>
        <Text style={stylesInternshipDetail.companyName}>
          {internship.company.name}
        </Text>
      </View>
      <View
        style={[
          stylesInternshipDetail.container,
          stylesInternshipDetail.internshipInfosContainer,
        ]}
      >
        <ScrollView>
          <Text style={stylesInternshipDetail.internshipTitle}>
            {internship.title}
          </Text>
          <Text style={stylesInternshipDetail.internshipDescription}>
            {internship.description}
          </Text>
          <View style={stylesInternshipDetail.internshipDetailsInfosContainer}>
            <Text style={stylesInternshipDetail.internshipDetailsInfosBox}>
              Location: {internship.country}
            </Text>
            <Text style={stylesInternshipDetail.internshipDetailsInfosBox}>
              Salary: {internship.compensation} €
            </Text>
            <Text style={stylesInternshipDetail.internshipDetailsInfosBox}>
              Grade: {internship.grade}
            </Text>
            <Text style={stylesInternshipDetail.internshipDetailsInfosBox}>
              Duration: {internship.duration} months
            </Text>
            <Text style={stylesInternshipDetail.internshipDetailsInfosBox}>
              Remote: {remote}{" "}
            </Text>
          </View>
          <Text style={stylesInternshipDetail.postedBy}>
            Posted by : {internship.user.username}
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default InternshipDetailPage;
