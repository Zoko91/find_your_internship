import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import InternshipsService from "../api/InternshipsService";
import UsersService from "../api/UsersService";
import { InputDisplay } from "../components/InputDisplay";
import { stylesLogin } from "../theme/style.js";

const LoginPage = ({ navigation }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isConnectionValid, setIsConnectionValid] = useState(true);
  const endpoint = "https://jbeasse-workadventure.azurewebsites.net/";

  const handleEmailChange = (text) => {
    setEmail(text);
    // regular expression for email format checking
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsEmailValid(emailRegex.test(text));
  };
  const handlePasswordChange = (text) => {
    //console.log(text);
    setPassword(text);
  };
  const navigate = (name, user) => {
    navigation.navigate(name, { usertest: user });
  };

  const buttonStyle =
    isEmailValid && password.length > 0
      ? stylesLogin.loginButton
      : stylesLogin.loginButtonDisabled;
  
  const buttonTextStyle =
    isEmailValid && password.length > 0
      ? stylesLogin.loginButtonText
      : stylesLogin.loginButtonTextDisabled;
  useEffect(() => {
    if (!isConnectionValid) {
      Alert.alert("Email or password incorrect.");
      setIsConnectionValid(true);
    }
  }, [isConnectionValid]);

  const login = async () => {
    try {
      const response = await fetch(
        "https://jbeasse-workadventure.azurewebsites.net/api/UserApi/authenticate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ Email: email, Password: password }),
        }
      ).then(async (response) => {
        if (!response.ok) {
          setIsConnectionValid(false);
        } else {
          const responseData = await response.json().then((data) => {
            navigate("Root", data);
          });
        }
      });
    } catch (error) {
      console.error(`Erreur lors de la connexion: ${error.message}`);
    }
  };

  return (
    <View style={stylesLogin.container}>
      <Image
        style={{ width: 100, height: 100, marginTop: 50, objectFit: "contain" }}
        source={require("../resources/images/logo_green.png")}
      />
      <Text style={stylesLogin.titleLogIn}>Login to WorkAdventure</Text>

      <InputDisplay type={"email"} handler={handleEmailChange} />

      <InputDisplay type={"password"} handler={handlePasswordChange} />

        <TouchableOpacity
          disabled={!isEmailValid}
          style={buttonStyle}
          onPress={login} >
          <Text style={buttonTextStyle}>Log In</Text>          
        </TouchableOpacity>

      <View style={stylesLogin.separatorContainer}>
        <View style={stylesLogin.horizontalBar}></View>
        <Text style={stylesLogin.horizontalBarText}>Or login with</Text>
        <View style={stylesLogin.horizontalBar}></View>
      </View>

      <View style={stylesLogin.signUpContainer}>
        <Text>Don't have an account yet ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={stylesLogin.signUpLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPage;
