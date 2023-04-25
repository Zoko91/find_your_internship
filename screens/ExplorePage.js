import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import InternshipsService from "../api/InternshipsService";
import UsersService from "../api/UsersService";
import styles, { stylesExplorePage } from "../theme/style.js";
import LoadingPage from "./LoadingPage.js";

const ExplorePage = ({ navigation, route }) => {
  const [internships, setInternships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  const [searchTextTitle, setSearchTextTitle] = useState("");
  const [searchTextCompany, setSearchTextCompany] = useState("");
  const [filteredInternships, setFilteredInternships] = useState([]);

  const getNeededInfos = async () => {
    try {
      const responseInternship = await InternshipsService.findInternships();
      setUser(route.params.usertest);
      setInternships(responseInternship);
      setFilteredInternships(responseInternship);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNeededInfos();
  }, []);

  useEffect(() => {
    if (internships.length === 0) {
      setIsLoading(false);
    }
  }, [internships, user]);
  useEffect(() => {
    setFilteredInternships(
      internships.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTextTitle.toLowerCase()) &&
          item.company.name
            .toLowerCase()
            .includes(searchTextCompany.toLowerCase())
      )
    );
  }, [searchTextTitle, searchTextCompany]);

  const renderInternshipInfos = ({ item }) => {
    return (
      <View style={stylesExplorePage.internshipInfosContainer}>
        <Text style={stylesExplorePage.internshipInfosText}>
          <Image
            style={stylesExplorePage.internshipInfosIcons}
            source={require("../resources/images/star.png")}
          />
          {item.grade}
        </Text>
        <Text style={stylesExplorePage.internshipInfosText}>
          <Image
            style={stylesExplorePage.internshipInfosIcons}
            source={require("../resources/images/location_outline.png")}
          />
          {item.country}
        </Text>
        <Text style={stylesExplorePage.internshipInfosText}>
          <Image
            style={stylesExplorePage.internshipInfosIcons}
            source={require("../resources/images/euros.png")}
          />
          {item.compensation}
        </Text>
        <Text style={stylesExplorePage.internshipInfosText}>
          <Image
            style={stylesExplorePage.internshipInfosIcons}
            source={require("../resources/images/clock.png")}
          />
          plHolder
        </Text>
      </View>
    );
  };

  // Composant permettant d'afficher chaque Stage
  const renderInternship = ({ item }) => {
    const backgroundColor = item.id % 2 === 0 ? "#234F52" : "#A029B4";
    // console.log("item");
    // console.log(item);
    return (
      <TouchableOpacity
        style={stylesExplorePage.containerInternship}
        onPress={() => {
          navigation.navigate("InternshipPage", {
            internship: item,
            topBarColor: backgroundColor,
          });
        }}
      >
        <View style={stylesExplorePage.internshipLeftSide({ backgroundColor })}>
          <View style={stylesExplorePage.internshipLeftSideLogoContainer}>
            {item.illustration ? (
              <Image
                style={stylesExplorePage.internshipLeftSideLogo}
                source={{ uri: item.illustration }}
              />
            ) : (
              <Image
                style={stylesExplorePage.internshipLeftSideLogo}
                source={require("../resources/images/logo.min.white.png")}
              />
            )}
          </View>
        </View>
        <View style={stylesExplorePage.internshipRightSide}>
          <Text style={stylesExplorePage.internshipRightSideCompanyName}>
            {item.company.name}
          </Text>
          <Text style={stylesExplorePage.internshipRightSideInternshipTitle}>
            {item.title}
          </Text>
          {/* Commentaire: Scroll view Nécéssaire */}
          <View style={stylesExplorePage.internshipInfos}>
            <FlatList
              data={[item]}
              renderItem={renderInternshipInfos}
              keyExtractor={(item) => item.id}
              numColumns={2}
              contentContainerStyle={{ flexGrow: 1 }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const Filters = ({ prompt }) => {
    const [inputValue, setInputValue] = useState("");
    return (
      <View>
        <View style={stylesExplorePage.searchBar}>
          <TextInput
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
            style={styles.inputSearch}
            onSubmitEditing={() => {
              if (prompt === "by Title") {
                setSearchTextTitle(inputValue);
              } else if (prompt === "by Company") {
                setSearchTextCompany(inputValue);
              }
            }}
            placeholder={`Search Interships ${prompt}`}
          />
        </View>
        {/* Ajouter un tri ordre récent ou vieux */}
      </View>
    );
  };

  if (isLoading) {
    return <LoadingPage />;
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={stylesExplorePage.helloHeader}> Hi {user.username}</Text>
        <SafeAreaView style={{ alignItems: "center", flex: 1 }}>
          <Filters prompt="by Title" />
          <Filters prompt="by Company" />
          <FlatList
            data={filteredInternships}
            renderItem={({ item }) => renderInternship({ item })}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ flexGrow: 1 }}
            style={stylesExplorePage.listContainer}
            contentInsetAdjustmentBehavior="automatic"
            contentInset={{ top: 15, bottom: 50 }}
            contentOffset={{ y: -15 }}
          />
        </SafeAreaView>
      </SafeAreaView>
    );
  }
};

export default ExplorePage;
