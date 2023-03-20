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
    const [isLoading, setIsLoading] = useState(true);

    const getCompanies = async () => {
        try {
          const response = await CompanyService.findCompanies();
          setCompanies(response);

        } catch (error) {
          console.error(error);
        }
    };

    const renderCompany = ({item}) => {
        return (
          <TouchableOpacity>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        );
      };

      useEffect( () => {
         getCompanies()
        ;

    }, []);
    useEffect( () => {
        console.log(companies);
        if (companies.length === 0){
            setIsLoading(false);
        }

    }, [companies]);


    if (isLoading) {
        return (
          <View>
            <Text>Loading...</Text>
          </View>
        );
      }
    else{
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