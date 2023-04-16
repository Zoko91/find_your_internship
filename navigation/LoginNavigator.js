import React from "react";
import { screenOptions } from "../theme/style";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "../screens/LoginPage";
import RootNavigator from "./RootNavigator";
import SignUpPage from "../screens/SignUpPage";

const LoginStack = createNativeStackNavigator();
const LoginNavigator = () => {
  return (
    <NavigationContainer>
      <LoginStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          headerLeft: null,
        }}
      >
        <LoginStack.Screen name="Login" component={LoginPage} />
        <LoginStack.Screen name="SignUp"
          component={ SignUpPage } 
          options={{headerShown: true}}
        />
        <LoginStack.Screen name="Root" component={RootNavigator} />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
};

export default LoginNavigator;
