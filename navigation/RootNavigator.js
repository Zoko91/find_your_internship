import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExploreNavigator from "./ExploreNavigator";
import CompaniesNavigator from "./CompaniesNavigator";
import ProfileNavigator from "./ProfileNavigator";
import { loadUser } from "../utils/localStorage";

const Root = createBottomTabNavigator();

const RootNavigator = ({ route, user }) => {
  const { usertest } = route.params;

  return (
    <Root.Navigator
      screenOptions={({ route }) => ({
        // Icons will be different if the tab is focused
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Explore") {
            iconName = focused ? "search-sharp" : "search-outline";
          } else if (route.name === "Companies") {
            iconName = focused ? "md-business" : "md-business-outline";
          } else if (route.name === "Profile") {
            iconName = focused
              ? "ios-person-circle"
              : "ios-person-circle-outline";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#2B5453",
        tabBarInactiveTintColor: "#808080",
        // Hiding tab navigator header to show only stack header
        headerShown: false,
      })}
    >
      <Root.Screen
        name="Explore"
        component={ExploreNavigator}
        initialParams={{ usertest: usertest }}
      />
      <Root.Screen
        name="Companies"
        component={CompaniesNavigator}
        initialParams={{ usertest: usertest }}
      />
      <Root.Screen
        name="Profile"
        component={ProfileNavigator}
        initialParams={{ usertest: usertest }}
        //options={{ unmountOnBlur: true }} // Permet le rechargement de la page au clic sur la tabbar de Profile
      />
    </Root.Navigator>
  );
};

export default RootNavigator;
