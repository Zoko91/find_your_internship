import React from "react";
import { StatusBar } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExploreNavigator from "./ExploreNavigator";
import CompaniesNavigator from "./CompaniesNavigator";
import ProfileNavigator from "./ProfileNavigator";

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      {/*<StatusBar barStyle="light-content" />*/}
      <Tab.Navigator
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
        <Tab.Screen name="Explore" component={ExploreNavigator} />
        <Tab.Screen name="Companies" component={CompaniesNavigator} />
        <Tab.Screen name="Profile" component={ProfileNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
