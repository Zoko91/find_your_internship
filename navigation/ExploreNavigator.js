import React from "react";
import { screenOptions } from "../theme/style";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExplorePage from "../screens/ExplorePage";

const ExploreStack = createNativeStackNavigator();
const ExploreNavigator = () => {
  return (
    <ExploreStack.Navigator
      initialRouteName="Explore"
      screenOptions={screenOptions}
    >
      <ExploreStack.Screen
        name="Exploration"
        component={ExplorePage}
        options={{ title: "Explore" }}
      />
    </ExploreStack.Navigator>
  );
};

export default ExploreNavigator;
