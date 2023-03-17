import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CompaniesPage from "../screens/CompaniesPage";

const CompaniesStack = createNativeStackNavigator();
const CompaniesNavigator = () => {
  return (
    <CompaniesStack.Navigator
      initialRouteName="Companies"
      screenOptions={screenOptions}
    >
      <CompaniesStack.Screen
        name="Companies"
        component={CompaniesPage}
        options={{ title: "Companies" }}
      />
    </CompaniesStack.Navigator>
  );
};

export default CompaniesNavigator;