import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../theme/style";
import React from "react";

const Support = ({ navigate }) => {
  return (
    <View>
      <View style={styles.containerAccount}>
        <Text style={styles.headernameUser}>Support</Text>
        <TouchableOpacity
          style={styles.containerAccountInside}
          onPress={() => {
            navigate("Privacy");
          }}
        >
          <Image
            style={styles.iconUser}
            source={require("../resources/images/files.png")}
          />
          <Text style={{ marginTop: 6 }}>Privacy policy</Text>
          <View style={styles.containerArrowSetting}>
            <Image
              style={styles.arrowUserSetting}
              source={require("../resources/images/Chevron.png")}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.containerAccountInside}
          onPress={() => {
            navigate("Help");
          }}
        >
          <Image
            style={styles.iconUser}
            source={require("../resources/images/help.png")}
          />
          <Text style={{ marginTop: 6 }}>Get help</Text>
          <View style={styles.containerArrowSetting}>
            <Image
              style={styles.arrowUserSetting}
              source={require("../resources/images/Chevron.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Support;
