import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import InternshipsService from "../api/InternshipsService";
import UsersService from "../api/UsersService";
import { stylesLogin } from "../theme/style.js";

export const InputDisplay = ({ type, handler }) => {
  return type == "email" ? (
    <View style={stylesLogin.inputContainer}>
      <Text style={{ color: "#2B5453", marginLeft: 3 }}>Email</Text>
      <View style={stylesLogin.inputSection}>
        {/* <Image
          style={{ width: 20, height: 20 }}
          source={require("../resources/images/email.png")}
        /> */}
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
        {/* <Image
          style={{ width: 20, height: 20 }}
          source={require("../resources/images/email.png")}
        /> */}
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
