import React from "react";
import { screenOptions } from "../theme/style";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfilePage from "../screens/ProfilePage";
import ProfileShow from "../screens/ProfileShow";
import ProfileInformations from "../screens/ProfileInformations";
import ProfileInternships from "../screens/ProfileInternships";
import ProfileBookmarks from "../screens/ProfileBookmarks";
import ProfilePrivacy from "../screens/ProfilePrivacy";
import ProfileHelp from "../screens/ProfileHelp";

const ProfileStack = createNativeStackNavigator();
const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={screenOptions}
    >
      <ProfileStack.Screen
        name="Account"
        component={ProfilePage}
        options={{ title: "Profile" }}
      />
      <ProfileStack.Screen
        name="Details"
        component={ProfileShow}
        options={{ title: "Details" }}
      />
      <ProfileStack.Screen
        name="Informations"
        component={ProfileInformations}
        options={{ title: "" }}
      />
      <ProfileStack.Screen
        name="Internships"
        component={ProfileInternships}
        options={{ title: "Internships" }}
      />
      <ProfileStack.Screen
        name="Bookmarks"
        component={ProfileBookmarks}
        options={{ title: "Bookmarks" }}
      />
      <ProfileStack.Screen
        name="Privacy"
        component={ProfilePrivacy}
        options={{ title: "Privacy" }}
      />
      <ProfileStack.Screen
        name="Help"
        component={ProfileHelp}
        options={{ title: "Help" }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
