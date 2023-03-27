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
      <View style={styles.inputContainer}>
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

// Use StylesSheet flatten
const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    padding: 10,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#234F52",
  },
});
