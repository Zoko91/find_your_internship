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
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleEmailChange = (text) => {
    setEmail(text);
    // regular expression for email format checking
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsEmailValid(emailRegex.test(text));
  };
  // const InputDisplay = ({ type }) => {
  //   return type == "email" ? (
  //     <View style={styles.inputContainer}>
  //       <Text>Email</Text>
  //       <View style={styles.inputSection}>
  //         {/* <Image
  //         style={{ width: 20, height: 20 }}
  //         source={require("../resources/images/email.png")}
  //       /> */}
  //         <TextInput
  //           style={styles.input}
  //           onChangeText={handleEmailChange}
  //           value={""}
  //           placeholder="Enter your email address"
  //           keyboardType="numeric"
  //         />
  //       </View>
  //     </View>
  //   ) : (
  //     <View style={styles.inputContainer}>
  //       <Text>Email</Text>
  //       <View style={styles.inputSection}>
  //         {/* <Image
  //         style={{ width: 20, height: 20 }}
  //         source={require("../resources/images/email.png")}
  //       /> */}
  //         <TextInput
  //           style={styles.input}
  //           onChangeText={handleEmailChange}
  //           value={""}
  //           placeholder="Enter your email address"
  //           keyboardType="numeric"
  //         />
  //       </View>
  //     </View>
  //   );
  // };
  return (
    <View>
      <Image
        style={{ width: 100, height: 100, marginTop: 50 }}
        source={require("../resources/images/logo_green.png")}
      />
      <Text>Login to WorkAdventure</Text>
      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <View style={styles.inputSection}>
          {/* <Image
            style={{ width: 20, height: 20 }}
            source={require("../resources/images/email.png")}
          /> */}
          <TextInput
            style={styles.input}
            onChangeText={handleEmailChange}
            value={""}
            placeholder="Enter your email address"
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text>Password</Text>
        <View style={styles.inputSection}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            value={""}
            secureTextEntry={true}
            placeholder="Password"
            keyboardType="numeric"
          />
        </View>
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
