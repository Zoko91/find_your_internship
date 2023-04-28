import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "../theme/style";

const CompanyBookmark = ({ name, location, sector }) => {
  return (
    <View style={styles.styleCompany}>
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../resources/images/BookmarkFilled.png")}
        />
      </TouchableOpacity>
      <View
        style={{
          height: 50,
          width: 2,
          borderWidth: 1,
          borderColor: "#rgba(0, 0, 250, 0.15)",
          borderStyle: "dotted",
        }}
      ></View>
      <TouchableOpacity
        style={{ flexDirection: "row", flex: 4, marginLeft: 10 }}
      >
        <View>
          <Text style={{ fontSize: 14, fontWeight: "300" }}>{name}</Text>
          <Text style={{ fontSize: 12, fontWeight: "200" }}>
            {sector} - at {location}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-end",
            marginRight: 15,
          }}
        >
          <Image
            style={styles.arrowUserSetting}
            source={require("../resources/images/Chevron.png")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CompanyBookmark;
