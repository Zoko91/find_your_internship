import React from "react";
import { screenOptions } from "../theme/style";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "../screens/LoginPage";

const LoginStack = createNativeStackNavigator();
const LoginNavigator = () => {
  return (
    <NavigationContainer>
      <LoginStack.Navigator
        initialRouteName="Login"
        screenOptions={screenOptions}
      >
        <LoginStack.Screen
          name="Login"
          component={LoginPage}
          options={{ title: "", headerShown: false, tabBarVisible: false }}
        />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
};

export default LoginNavigator;
