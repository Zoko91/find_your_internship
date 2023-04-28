import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "../../theme/style.js";

const ProfilePrivacy = ({ navigation, route }) => {
  const ComponentPrivacy = ({ title, description }) => {
    return (
      <View style={{ marginBottom: 30 }}>
        <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
          <View style={{ flex: 10 }}>
            <Text
              style={{
                color: "black",
                fontWeight: "300",
                fontSize: 16,
                marginBottom: 5,
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                color: "rgba(40,40,40,0.8)",
                fontWeight: "200",
                fontSize: 14,
              }}
            >
              {description}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flex: 2,
              justifyContent: "center",
              alignItems: "flex-end",
              marginRight: 10,
            }}
          >
            <Image
              style={styles.arrowUserSetting}
              source={require("../../resources/images/Chevron.png")}
            />
          </TouchableOpacity>
          {/* Request your data*/}
        </View>
        <View style={styles.fineLinePrivacy}></View>
      </View>
    );
  };

  const UserPrivacy = () => {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.workingOn}>
          <Text style={styles.textWorkInProgress}>
            Work in progress. A/B page
          </Text>
        </View>
        <View>
          <Text style={styles.privacyTitle}>Privacy policy</Text>
        </View>
        <ComponentPrivacy
          title="Request your personal data"
          description="We'll create a file for you to download your personal data"
        />
        <ComponentPrivacy
          title="Delete your account"
          description="This will permanently delete your account and your data, in accordation with applicable law."
        />
        <ComponentPrivacy
          title="Request our privacy guidelines"
          description="Ask for our deepest secrets. Your data is our money, so we'll be happy to keep it longer. But you can ask for what we're doing with them ;)"
        />
        <View></View>
      </View>
    );
  };

  return <UserPrivacy />;
};

export default ProfilePrivacy;
