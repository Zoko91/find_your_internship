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
    console.log(isEmailValid);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };


  const InputDisplay = ({ type }) => {
    return type == "email" ? (
        <View style={styles.inputContainer}>
          <Text style={{color:'#2B5453', marginLeft:3}}>Email</Text>
          <View style={styles.inputSection}>
            {/* <Image
          style={{ width: 20, height: 20 }}
          source={require("../resources/images/email.png")}
        /> */}
            <TextInput
                style={styles.input}
                onSubmitEditing={(event) => {handleEmailChange(event.nativeEvent.text);}}
                placeholder="Enter your email address"
            />
          </View>
        </View>
    ) : (
        <View style={styles.inputContainer}>
          <Text style={{color:'#2B5453', marginLeft:3}}>Password</Text>
          <View style={styles.inputSection}>
            {/* <Image
          style={{ width: 20, height: 20 }}
          source={require("../resources/images/email.png")}
        /> */}
            <TextInput
                style={styles.input}
                onSubmitEditing={(event) => {handlePasswordChange(event.nativeEvent.text);}}
                secureTextEntry={true}
                placeholder="Password"
            />
          </View>
        </View>
    );
  };

  return (
      <View style={styles.container}>
        <Image
            style={{ width: 100, height: 100, marginTop: 50,objectFit: "contain"}}
            source={require("../resources/images/logo_green.png")}
        />
        <Text style={styles.titleLogIn}>Login to WorkAdventure</Text>
        <InputDisplay type={"email"}/>
        <InputDisplay type={"password"}/>

        <TouchableOpacity style={styles.loginButton} >
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
        <View style={styles.separatorContainer}>
          <View style={styles.horizontalBar}></View>
          <Text style={styles.horizontalBarText}>Or login with</Text>
          <View style={styles.horizontalBar}></View>
        </View>

        <View style={styles.signUpContainer}>
          <Text>Don't have an account yet ?</Text>
          <TouchableOpacity  onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>

      </View>

  );
};

export default LoginPage;

// Use StylesSheet flatten
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    height: "100%",
    alignItems: "center",
  },
  titleLogIn: {
    fontSize: 30,
    marginBottom: 20,
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20,
    marginTop: 20,
  },
  input: {
    padding: 10,
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#234F52",
  },
  loginButton: {
    backgroundColor: "#234F52",
    padding: 10,
    marginTop: 30,
    borderRadius: 10,
    width: "80%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 25,
  },
  separatorContainer: {
    position: "relative",
    flexDirection: "row",
  },
  horizontalBar: {
    width: "25%",
    height: 1,
    backgroundColor: "#234F52",
    marginTop: 40,
  },

  horizontalBarText: {
    top: 30,
    justifyContent: "center",
    color: "#234F52",
    marginHorizontal: 10,
  },
  signUpContainer: {
    position: "absolute",
    bottom: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpLink: {
    color:'#00B4AF',
    fontSize: 20,
    fontWeight: "500",
  },
});
