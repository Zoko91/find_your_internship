import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { stylesLogin } from "../theme/style";

const LoginButton = ({ props }) => {
  const [buttonStyle, buttonTextStyle] =
    props.isEmailValid && props.password.length > 0
      ? [stylesLogin.loginButton, stylesLogin.loginButtonText]
      : [stylesLogin.loginButtonDisabled, stylesLogin.loginButtonTextDisabled];
  return (
    <TouchableOpacity
      disabled={!props.isEmailValid}
      style={buttonStyle}
      onPress={props.login}
    >
      <Text style={buttonTextStyle}>Log In</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
