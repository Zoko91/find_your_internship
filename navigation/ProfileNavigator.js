import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfilePage from "../screens/ProfilePage";

const ProfileStack = createNativeStackNavigator();
const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={screenOptions}
    >
      <ProfileStack.Screen
        name="Profile"
        component={ProfilePage}
        options={{ title: "Profile" }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;