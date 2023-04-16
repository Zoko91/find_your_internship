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

const BLOCK_SIZE = 80;

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

  // Composant permettant d'afficher chaque Entreprise
  const renderCompany = ({ item }) => {
    return (
      <TouchableOpacity>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

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
        />
      </View>
    );
  };

  const renderTopCompany = ({ item }) => {
    return (
      <View style={styles.companyTopBlock}>
        <Text>{item.name}</Text>
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
        <FlatList
          data={companies}
          renderItem={renderCompany}
          keyExtractor={(item) => item.id}
        />
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
});
