import React from "react";
import { screenOptions } from "../theme/style";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfilePage from "../screens/ProfilePage";
import ProfileShow from "../screens/profile/ProfileShow";
import ProfileInformation from "../screens/profile/ProfileInformation";
import ProfileInternships from "../screens/profile/ProfileInternships";
import ProfileBookmarks from "../screens/profile/ProfileBookmarks";
import ProfilePrivacy from "../screens/profile/ProfilePrivacy";
import ProfileHelp from "../screens/profile/ProfileHelp";

const ProfileStack = createNativeStackNavigator();
const ProfileNavigator = ({ route }) => {
  const { usertest } = route.params;
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={screenOptions}
    >
      <ProfileStack.Screen
        name="Account"
        component={ProfilePage}
        options={{ title: "Profile" }}
        initialParams={{ usertest: usertest }}
      />
      <ProfileStack.Screen
        name="Details"
        component={ProfileShow}
        options={{ title: "Details" }}
        initialParams={{ usertest: usertest }}
      />
      <ProfileStack.Screen
        name="Informations"
        component={ProfileInformation}
        options={{ title: "" }}
        initialParams={{ usertest: usertest }}
      />
      <ProfileStack.Screen
        name="Internships"
        component={ProfileInternships}
        options={{ title: "Internships" }}
        initialParams={{ usertest: usertest }}
      />
      <ProfileStack.Screen
        name="Bookmarks"
        component={ProfileBookmarks}
        options={{ title: "Bookmarks" }}
        initialParams={{ usertest: usertest }}
      />
      <ProfileStack.Screen
        name="Privacy"
        component={ProfilePrivacy}
        options={{ title: "" }}
        initialParams={{ usertest: usertest }}
      />
      <ProfileStack.Screen
        name="Help"
        component={ProfileHelp}
        options={{ title: "Help" }}
        initialParams={{ usertest: usertest }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
