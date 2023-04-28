import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { stylesLogin } from "../theme/style.js";

const LoadingPage = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 200, height: 200, objectFit: "contain" }}
        source={require("../resources/images/logo_green.png")}
      />
      <View style={stylesLogin.signUpContainer}>
        <Text>by</Text>
        <Text style={stylesLogin.signUpLink}>Joseph & Tristan</Text>
      </View>
    </View>
  );
};

export default LoadingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
