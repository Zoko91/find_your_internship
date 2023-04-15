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

const InternshipDetailPage = ({ navigation, route }) => {
  useEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: route.params.topBarColor },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>{route.params.internship.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    color: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default InternshipDetailPage;
