import React from "react";
import { screenOptions } from "../theme/style";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExplorePage from "../screens/ExplorePage";
import InternshipDetailPage from "../screens/InternshipDetailPage";
import LoginPage from "../screens/LoginPage";

const ExploreStack = createNativeStackNavigator();
const ExploreNavigator = ({ route }) => {
  console.log("Here in ExploreNavigator");
  console.log(route);
  const { usertest } = route.params;
  return (
    <ExploreStack.Navigator
      initialRouteName="Exploration"
      screenOptions={{
        headerShown: false,
        headerLeft: null,
      }}
      
    >
      <ExploreStack.Screen
        name="Exploration"
        component={ExplorePage}
        options={{ title: "Explore" }}
        initialParams={{ usertest: usertest }}
      />
      <ExploreStack.Screen
        name="InternshipPage"
        component={InternshipDetailPage}
        options={{
          title: "Internship",
          headerShown: true,
        }}
      />
    </ExploreStack.Navigator>
  );
};

export default ExploreNavigator;
