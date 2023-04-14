import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import UsersService from "../api/UsersService";
import styles from "../theme/style.js";

const ProfileHelp = ({ navigation,route }) => {
  //Use the user that exists in the previous page here...
  const [user, setUser] = useState([]);
  console.log("Here in ProfileHelp: ", route.params.usertest.email);

  const UserHelp = () => {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 7 }}>
          {/*<View style={styles.workingOn}>*/}
          {/*  <Text style={styles.textWorkInProgress}>*/}
          {/*    Work in progress. A/B page*/}
          {/*  </Text>*/}
          {/*</View>*/}
          <View>
            <Text style={styles.privacyTitle2}>Hi Joseph,</Text>
            <Text style={styles.privacyTitle3}>how can we help ?</Text>
          </View>
          <Text style={styles.descHelp}>This application was built by</Text>
          <Text style={styles.descHelp2}>Tristan G. and</Text>
          <Text style={styles.descHelp2}>Joseph B.</Text>
          <Text style={{ marginHorizontal: 25, marginTop: 20 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
            aliquet libero, a hendrerit dolor eleifend sit amet. Quisque at
            magna in neque sollicitudin euismod. Sed sed dui semper, ultricies
            lorem a, condimentum augue. In eget nulla vel mauris ullamcorper
            vestibulum sed ac augue. Vivamus eget consequat nulla. Donec
            tincidunt turpis eget justo tristique, non volutpat nisl accumsan.
            Fusce posuere luctus elit eu faucibus. Donec et mi id tellus
            tristique ultricies eu a erat. Maecenas semper ligula vel leo
            bibendum, vel tincidunt justo pretium. Vestibulum malesuada cursus
            mauris non varius. Donec pretium bibendum libero, sed interdum justo
            faucibus eget.
          </Text>
        </View>

        <View style={styles.blackbox}>
          <Text style={styles.privacyTitle4}>Need to get in touch ?</Text>
          <TouchableOpacity style={styles.contactus}>
            <Text style={styles.privacyTitle5}>Contact us</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return <UserHelp />;
};

export default ProfileHelp;
