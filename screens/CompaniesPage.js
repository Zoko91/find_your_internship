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

const CompaniesPage = ({ navigation }) => {

    const [companies, setCompanies] = useState([]);

    const getCompanies = async () => {
        try {
          const response = await CompanyService.findCompanies();
          setCompanies(response);
        } catch (error) {
          console.error(error);
        }
    };

    const renderCompany = (item) => {
        return (
          <TouchableOpacity>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        );
      };

      useEffect(() => {
        getCompanies();
    }, []);

  return (
    <View>
        <FlatList
          data={companies}
          renderItem={renderCompany}
          keyExtractor={(item) => item.id}
        />
    </View>
  );
};

export default CompaniesPage;