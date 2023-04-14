import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CompanyService from "../api/CompaniesService";

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
      </View>
    );
  }
};

export default CompaniesPage;
