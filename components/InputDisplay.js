import React from "react";
import { Text, View, TextInput } from "react-native";
import { stylesLogin } from "../theme/style.js";

export const InputDisplay = ({ type, handler }) => {
  return type == "email" ? (
    <View style={stylesLogin.inputContainer}>
      <Text style={{ color: "#2B5453", marginLeft: 3 }}>Email</Text>
      <View style={stylesLogin.inputSection}>
        <TextInput
          style={stylesLogin.input}
          onChangeText={(text) => {
            handler(text);
          }}
          placeholder="Enter your email address"
        />
      </View>
    </View>
  ) : (
    <View style={stylesLogin.inputContainer}>
      <Text style={{ color: "#2B5453", marginLeft: 3 }}>Password</Text>
      <View style={stylesLogin.inputSection}>
        <TextInput
          style={stylesLogin.input}
          onChangeText={(text) => handler(text)}
          secureTextEntry={true}
          placeholder="Password"
        />
      </View>
    </View>
  );
};
