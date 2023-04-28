import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { InputDisplay } from "../components/InputDisplay";
import { stylesLogin } from "../theme/style.js";
import { loadUser, saveUser } from "../utils/localStorage";
import LoadingPage from "../components/LoadingPage";
import LoginButton from "../components/LoginButton";

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
    setPassword(text);
  };
  const navigate = (name, user) => {
    navigation.navigate(name, { usertest: user });
  };

  const [buttonStyle, buttonTextStyle] =
    isEmailValid && password.length > 0
      ? [stylesLogin.loginButton, stylesLogin.loginButtonText]
      : [stylesLogin.loginButtonDisabled, stylesLogin.loginButtonTextDisabled];

  useEffect(() => {
    if (!isConnectionValid) {
      Alert.alert("Email or password incorrect.");
      setIsConnectionValid(true);
    }
  }, [isConnectionValid]);

  // --------------------- Explication  ---------------------
  // Fonction qui appelle l'API du serveur ASP .NET
  // Cette fonction vérifie si l'utilisateur existe avec le bon couple mot de passe/adresse email
  // Renvoie l'utilisateur si oui puis ce dernier est passé dans la route afin d' l'utiliser sur toutes les pages
  // Ou renvoie une erreur qui devient une Alert si ces derniers ne sont corrects

  const login = async () => {
    setLoggedIn(true);
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
          setLoggedIn(false);
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
  return !loggedIn ? (
    <View style={stylesLogin.container}>
      <Image
        style={{ width: 100, height: 100, marginTop: 50, objectFit: "contain" }}
        source={require("../resources/images/logo_green.png")}
      />
      <Text style={stylesLogin.titleLogIn}>Login to WorkAdventure</Text>

      <InputDisplay type={"email"} handler={handleEmailChange} />

      <InputDisplay type={"password"} handler={handlePasswordChange} />

      <LoginButton
        props={{ isEmailValid: isEmailValid, password: password, login: login }}
      />

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
  ) : (
    <LoadingPage />
  );
};

export default LoginPage;
