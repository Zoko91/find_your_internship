import React from "react";
import { useState, useEffect } from "react";
import LoginNavigator from "./navigation/LoginNavigator";
import LoadingPage from "./screens/LoadingPage";
import TestPage from "./screens/TestPage";
import ExplorePage from "./screens/ExplorePage";
import { loadUser, resetUser } from "./utils/localStorage";
import ExploreNavigator from "./navigation/ExploreNavigator";
import RootNavigator from "./navigation/RootNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  // Ideas list, initially empty
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load ideas only during initial component mounting
  // useEffect(() => {
  //   // Uncomment to clear user from local storage
  //   resetUser();
  //   // loadUser((loadedUser) => {
  //   //   // Update state after loading
  //   //   setUser(loadedUser);
  //   // });

  //   loadUser(setUser);
  // }, []);

  // useEffect(() => {
  //   if (user.length !== 0) {
  //     console.log("USE EFFECT");
  //     // setIsLoading(false);
  //     console.log(user);
  //   }
  // }, [user]);

  // const Stack = createNativeStackNavigator();
  // return (
  //   <NavigationContainer>
  //     {isLoading === true ? <LoginNavigator /> : <RootNavigator user={user} />}
  //   </NavigationContainer>
  // );

  // user != [] ? console.log(user) : console.log("user is empty");
  // return user == {} ? <LoginNavigator /> : <ExploreNavigator route={user} />;
  return <LoginNavigator />;
  // return <TestPage />;
}
