import React, { useState } from "react";
import { View, TextInput } from "react-native";
import styles, { stylesExplorePage } from "../theme/style.js";

const Filters = ({ prompt, handler }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <View style={stylesExplorePage.searchBar}>
      <TextInput
        value={inputValue}
        onChangeText={(text) => {
          setInputValue(text);
          handler(text);
        }}
        style={styles.inputSearch}
        onSubmitEditing={() => {
          if (prompt === "Title") {
            handler(inputValue);
          } else if (prompt === "Company") {
            handler(inputValue);
          }
        }}
        placeholder={`${prompt}`}
      />
    </View>
  );
};

export default Filters;
