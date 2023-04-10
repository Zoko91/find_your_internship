import React from "react";
import RootNavigator from "./navigation/RootNavigator";
import LoginPage from "./screens/LoginPage";
import LoginNavigator from "./navigation/LoginNavigator";

export default function App() {
  // return <LoginPage />;
  // return <RootNavigator />;
  return <LoginNavigator />;
}
