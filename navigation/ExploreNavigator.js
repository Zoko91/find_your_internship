import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExplorePage from "../screens/ExplorePage";
import InternshipDetailPage from "../screens/explore/InternshipDetailPage";

const ExploreStack = createNativeStackNavigator();
const ExploreNavigator = ({ route }) => {
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
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </ExploreStack.Navigator>
  );
};

export default ExploreNavigator;
