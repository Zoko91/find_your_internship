import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import CompanyService from "../api/CompaniesService";
import { stylesExplorePage } from "../theme/style";

const BLOCK_SIZE = 80;
const companiesPhotos = {
  "Au Père Louis": require("../resources/images/companies/AuPereLouis.jpg"),
  Banana: require("../resources/images/companies/Banana.jpg"),
  Google: require("../resources/images/companies/google.jpeg"),
  I2C: require("../resources/images/companies/junior-i2C.png"),
  "Mars Explorer": require("../resources/images/companies/mars-explorer.png"),
  Quechua: require("../resources/images/companies/Quechua.jpg"),
};
const CompaniesPage = ({ navigation, route }) => {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log("Here in CompaniesPage: ", route.params.usertest.email);

  const getCompanies = async () => {
    try {
      const response = await CompanyService.findCompanies();
      setCompanies(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCompanies();
  }, []);

  useEffect(() => {
    if (companies.length === 0) {
      setIsLoading(false);
    }
  }, [companies]);

  const TopCompanies = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={companies}
          horizontal={true}
          renderItem={renderTopCompany}
          keyExtractor={(item) => item.id}
          snapToInterval={BLOCK_SIZE + 60} // add 10 for margin
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  const renderTopCompany = ({ item }) => {
    return (
      <View style={styles.companyTopBlock}>
        <Image
          style={styles.photoCompany}
          source={companiesPhotos[item.name]}
        />
      </View>
    );
  };

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View>
        <TopCompanies />
      </View>
    );
  }
};

export default CompaniesPage;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
    height: 120,
  },
  block: {
    width: BLOCK_SIZE,
    height: BLOCK_SIZE,
    backgroundColor: "blue",
    margin: 5,
  },
  companyTopBlock: {
    borderWidth: 1,
    borderColor: "blue",
    height: 100,
    width: 100,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  photoCompany: {
    height: 80,
    width: 80,
    marginHorizontal: 10,
    marginTop: 5,
  },
});
