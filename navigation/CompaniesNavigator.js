import React from "react";
import { screenOptions } from "../theme/style";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CompaniesPage from "../screens/CompaniesPage";

const CompaniesStack = createNativeStackNavigator();
const CompaniesNavigator = ({ route }) => {
  const { usertest } = route.params;
  return (
    <CompaniesStack.Navigator
      initialRouteName="Companies"
      screenOptions={screenOptions}
    >
      <CompaniesStack.Screen
        name="Company"
        component={CompaniesPage}
        initialParams={{ usertest: usertest }}
        options={{
          title: "Companies",
          headerShown: false,
        }}
      />
    </CompaniesStack.Navigator>
  );
};

export default CompaniesNavigator;
