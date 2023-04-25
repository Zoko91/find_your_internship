import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  Image,
  Linking,
  TextInput,
  FlatList,
  Alert,
  TouchableOpacity,
} from "react-native";
import UsersService from "../api/UsersService";
import styles from "../theme/style.js";

const ProfileHelp = ({ navigation, route }) => {
  //Use the user that exists in the previous page here...
  const [user, setUser] = useState([]);
  console.log("Here in ProfileHelp: ", route.params.usertest.email);

  const UserHelp = () => {
    const url = "mailto:support@example.com";
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 7 }}>
          {/*<View style={styles.workingOn}>*/}
          {/*  <Text style={styles.textWorkInProgress}>*/}
          {/*    Work in progress. A/B page*/}
          {/*  </Text>*/}
          {/*</View>*/}
          <View>
            <Text style={styles.privacyTitle2}>
              Hi {route.params.usertest.username},
            </Text>
            <Text style={styles.privacyTitle3}>how can we help ?</Text>
          </View>
          <Text style={styles.descHelp}>This application was built by</Text>
          <Text style={styles.descHelp2}>Tristan G. and</Text>
          <Text style={styles.descHelp2}>Joseph B.</Text>
          <Text style={{ marginHorizontal: 25, marginTop: 20 }}>
            Welcome to the{" "}
            <Text style={{ fontWeight: "600" }}>Get Help page!</Text> {"\n"}If
            you're having trouble using our app or have questions about the
            internships listed, you've come to the right place.{"\n\n"}
            Our team is here to assist you in any way we can. Be sure to provide
            as much detail as possible so we can better assist you. {"\n\n\n"}If
            there's anything we can do to make your experience better, please
            don't hesitate to reach out to us on this page. {"\n"}Thank you for
            using our app and we look forward to hearing from you soon!
          </Text>
        </View>

        <View style={styles.blackbox}>
          <Text style={styles.privacyTitle4}>Need to get in touch ?</Text>
          <TouchableOpacity style={styles.contactus} onPress={handlePress}>
            <Text style={styles.privacyTitle5}>Contact us</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return <UserHelp />;
};

export default ProfileHelp;
