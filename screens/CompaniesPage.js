import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import CompanyService from "../api/CompaniesService";
import { stylesExplorePage, vh, vw } from "../theme/style";
import InternshipsService from "../api/InternshipsService";

// Constants
const rootEndpoint = "https://jbeasse-workadventure.azurewebsites.net/api/InternshipApi/";
const BLOCK_SIZE = 80;
const companiesPhotos = {
  "Au Père Louis": require("../resources/images/companies/AuPereLouis.jpg"),
  Banana: require("../resources/images/companies/Banana.jpg"),
  Google: require("../resources/images/companies/google.jpeg"),
  I2C: require("../resources/images/companies/junior-i2C.png"),
  "Mars Explorer": require("../resources/images/companies/mars-explorer.png"),
  Quechua: require("../resources/images/companies/Quechua.jpg"),
};
/* ============================== */
const CompaniesPage = ({ navigation, route }) => {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [internshipCounts, setInternshipCounts] = useState({});
  //console.log("Here in CompaniesPage: ", route.params.usertest.email);

  const getNumberOfInternships = async (companyId) => {
    try {
      const root = rootEndpoint;
      const response = await fetch(root);
      const json = await response.json();
      const internships = await json.filter(
          (internship) => internship.companyId === companyId
      );
      return internships.length;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
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
    const counts = {};
    if (companies.length > 0) {
      fetchData().then(() => {
        setIsLoading(false);
      });
    }
  }, [companies]);

  // Call the async function to get the number of internships for each company
  const fetchData = async () => {
    const counts = {};
    for (const company of sortedCompanies) {
      const nb = await getNumberOfInternships(company.id);
      counts[company.id] = nb;
    }
    setInternshipCounts(counts);
  };

  const TopCompanies = () => {
    return (
        <View style={styles.container}>
          <Text style={styles.companiesTitle}>Top Companies</Text>
          <FlatList
              data={companies}
              horizontal={true}
              renderItem={renderTopCompany}
              keyExtractor={(item) => item.id}
              snapToInterval={2 * BLOCK_SIZE + 60} // add 10 for margin
              decelerationRate="fast"
              showsHorizontalScrollIndicator={false}
          />
        </View>
    );
  };

  const companyItem =  ({ item }) => {
    //console.log("item: ", item);
    console.log("counts:",internshipCounts[item.id]);
    const img = item.logo === null ? companiesPhotos[item.name]: { uri: item.logo }  ;
    return (
        <View style={styles.singleCompany}>
          <Image
              style={styles.singleCompanyLogo}
              source={companiesPhotos[item.name]}
          />
          <View style={styles.singleCompanyRightSide}>
            <Text style={[styles.singleCompanyText, styles.singleCompanyTitle]}>
              {item.name}
            </Text>
            <Text style={styles.singleCompanyText}>Internships : {internshipCounts[item.id]} </Text>

            <Text style={styles.singleCompanyText}>
              Company Grade : {item.companyGrade}
            </Text>
          </View>
        </View>
    );
  };

  const sortedCompanies = companies.sort(
      (c1, c2) => c2.companyGrade - c1.companyGrade
  );

  const renderTopCompany = ({ item }) => {
    //console.log("item: ", item);
    return (
        <TouchableOpacity style={styles.companyTopBlock}>
          <Image
              style={styles.photoCompany}
              source={companiesPhotos[item.name]}
          />
          <Text style={styles.companyName}>{item.name}</Text>
          <Text style={styles.companyName}>{item.companyGrade}</Text>
        </TouchableOpacity>
    );
  };

  const ListCompanies =  () => {
    //companies.sort(c=> c.name);
    return (
        <SafeAreaView style={{ flex: 1, marginTop: vh(4) }}>
          <Text style={styles.companiesTitle}>Companies</Text>
          <View style={{ alignItems: "center" }}>
            <FlatList
                data={sortedCompanies}
                style={stylesExplorePage.listContainer}
                renderItem={companyItem}
                contentInsetAdjustmentBehavior="automatic"
                contentInset={{ top: 15, bottom: 50 }}
                contentOffset={{ y: -15 }}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ flexGrow: 1 }}
            />
          </View>
        </SafeAreaView>
    );
  };

  // Final return of screen
  if (isLoading) {
    return (
        <View>
          <Text>Loading...</Text>
        </View>
    );
  } else {
    return (
        <SafeAreaView style={{ flex: 1 }}>
          <TopCompanies />
          <ListCompanies />
        </SafeAreaView>
    );
  }
};

export default CompaniesPage;

const styles = StyleSheet.create({
  container: {
    marginTop: vh(5),
    margin: 10,
  },
  block: {
    width: BLOCK_SIZE,
    height: BLOCK_SIZE,
    backgroundColor: "blue",
    margin: 5,
  },
  companyTopBlock: {
    alignItems: "center",
    justifyContent: "center",
    //    borderWidth: 1,
    //    borderColor: "blue",
    minHeight: 100,
    width: vw(26), // 100
    marginHorizontal: 20,
    marginVertical: 10,
  },
  photoCompany: {
    height: vh(12),
    width: vh(12),
    marginHorizontal: 10,
    marginTop: 5,
  },
  companyName: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  singleCompany: {
    borderWidth: 1,
    borderColor: "black",
    minHeight: 150,
    textAlign: "right",
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  singleCompanyLogo: {
    objectFit: "fill",
    height: "100%",
    width: "50%",
  },
  companiesTitle: {
    marginLeft: 5,
    borderWidth: 1,
    borderColor: "black",
    fontSize: 30,
  },
  singleCompanyRightSide: {
    width: "50%",
    paddingRight: 10,
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  singleCompanyText: {
    textAlign: "right",
  },
  singleCompanyTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
