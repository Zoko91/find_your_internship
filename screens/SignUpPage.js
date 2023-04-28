import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { InputDisplay } from "../components/InputDisplay";
import { stylesLogin, vh } from "../theme/style.js";
import styles from "../theme/style.js";

const SignUpPage = ({ navigation }) => {
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
    setPassword(text);
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

  const signUp = async () => {
    try {
    } catch (error) {
      console.error(`Erreur lors de l'inscription: ${error.message}`);
    }
  };

  return (
    <View style={stylesLogin.container}>
      <View style={styles.workingOn}>
        <Text style={styles.textWorkInProgress}>
          Work in progress. A/B page
        </Text>
      </View>
      <Image
        style={{
          width: 100,
          height: 100,
          marginTop: vh(1),
          objectFit: "contain",
        }}
        source={require("../resources/images/logo_green.png")}
      />
      <Text style={stylesLogin.titleLogIn}>Sign Up</Text>

      <InputDisplay type={"email"} handler={handleEmailChange} />

      <InputDisplay type={"password"} handler={handlePasswordChange} />

      <TouchableOpacity
        disabled={!isEmailValid}
        style={buttonStyle}
        onPress={signUp}
      >
        <Text style={buttonTextStyle}>Sign Up</Text>
      </TouchableOpacity>

      <View style={stylesLogin.signUpContainer}>
        <Text>Already have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={stylesLogin.signUpLink}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpPage;
