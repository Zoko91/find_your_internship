import React from "react";
import { Text, View, TextInput } from "react-native";
import styles from "../theme/style.js";

const InputBloc = ({ placeholder, handler }) => {
  return (
    <View style={styles.bloc}>
      <Text style={styles.placeholder}>{placeholder}</Text>
      <TextInput
        onChangeText={(text) => handler(text)}
        style={styles.personalinput}
      />
    </View>
  );
};

export default InputBloc;
