import React from "react";
import { screenOptions } from "../theme/style";
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
        name="Company"
        component={CompaniesPage}
        options={{ title: "Companies" }}
      />
    </CompaniesStack.Navigator>
  );
};

export default CompaniesNavigator;
