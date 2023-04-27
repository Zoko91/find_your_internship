import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "../screens/LoginPage";
import RootNavigator from "./RootNavigator";
import SignUpPage from "../screens/SignUpPage";
import { saveUser } from "../utils/localStorage";

const LoginStack = createNativeStackNavigator();
const LoginNavigator = () => {
  return (
    <NavigationContainer>
      <LoginStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          headerLeft: null,
          gestureEnabled: false,
        }}
      >
        <LoginStack.Screen name="Login" component={LoginPage} />
        <LoginStack.Screen name="SignUp" component={SignUpPage} />
        <LoginStack.Screen name="Root" component={RootNavigator} />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
};

export default LoginNavigator;
