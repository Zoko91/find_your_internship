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

const LoginPage = ({ navigation }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <View>
      <Image
        style={{ width: 100, height: 100, marginTop: 50 }}
        source={require("../resources/images/logo_green.png")}
      />
      <Text>Login to WorkAdventure</Text>
      <View>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={""}
          placeholder="placeholder"
          keyboardType="numeric"
        />
      </View>
    </View>
  );
};

export default LoginPage;

const borderRadius = 10;
const primaryColor = "#303030";
const secondaryColor = "#2B5453";
// Use StylesSheet flatten
const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
  },
  input: {
    padding: 10,
    height: 40,
  },
});
