import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import CompanyService from "../api/CompaniesService";
import { stylesExplorePage, vh, vw } from "../theme/style";
import LoadingPage from "../components/LoadingPage.js";

// Constants
const rootEndpoint =
  "https://jbeasse-workadventure.azurewebsites.net/api/InternshipApi/";
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
  const [companyAverageCompensation, setCompanyAverageCompensation] = useState(
    {}
  );

  const getIntenshipsInfosForCompany = async (companyId) => {
    try {
      const root = rootEndpoint;
      const response = await fetch(root);
      const json = await response.json();
      const internships = await json.filter(
        (internship) => internship.companyId === companyId
      );
      let total = 0;
      internships.forEach((internship) => {
        const compensation = JSON.parse(internship.compensation);
        total = total + compensation;
      });

      let average = total / internships.length;
      return {
        count: internships.length,
        average: average,
      };
    } catch (error) {
      console.error(error);
      return error;
    }
  };

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
    const averages = {};
    for (const company of sortedCompanies) {
      const infos = await getIntenshipsInfosForCompany(company.id);
      counts[company.id] = infos.count;
      averages[company.id] = infos.average;
    }
    setInternshipCounts(counts);
    setCompanyAverageCompensation(averages);
  };

  const TopCompanies = () => {
    const slicedCompanies = companies.slice(1, 6); // Only display 5 companies
    return (
      <View style={styles.container}>
        <Text style={styles.companiesTitle}>Top Companies</Text>
        <FlatList
          data={slicedCompanies}
          horizontal={true}
          renderItem={renderTopCompany}
          keyExtractor={(item) => item.id}
          snapToInterval={2 * (BLOCK_SIZE + 60)} // add 60 for margin right and left
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  const companyItem = ({ item }) => {
    const img =
      item.logo === null ? companiesPhotos[item.name] : { uri: item.logo };
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
          <Text style={styles.singleCompanyText}>
            Internships : {internshipCounts[item.id]}
          </Text>
          <Text style={styles.singleCompanyText}>
            Company Grade : {item.companyGrade}
          </Text>
          <Text style={styles.singleCompanyText}>
            Average pay : {companyAverageCompensation[item.id]}€
          </Text>
        </View>
      </View>
    );
  };

  const sortedCompanies = companies.sort(
    (c1, c2) => c2.companyGrade - c1.companyGrade
  );

  const renderTopCompany = ({ item }) => {
    const textInfo = {
      4: "Best rated",
      1: "Most eco-friendly",
      5: "Most internships",
      2: "Most popular",
      6: "Highest paid",
    };
    return (
      <TouchableOpacity style={styles.companyTopBlock}>
        <Image
          style={styles.photoCompany}
          source={companiesPhotos[item.name]}
        />

        <Text style={styles.companyName}>{item.name}</Text>
        <Text
          style={[
            {
              marginTop: 0,
              fontWeight: 300,
              fontSize: 12,
            },
          ]}
        >
          {textInfo[item.id]}
        </Text>
      </TouchableOpacity>
    );
  };

  const ListCompanies = () => {
    return (
      <SafeAreaView style={[styles.container, { flex: 1, marginTop: vh(0) }]}>
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
    return <LoadingPage />;
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={[stylesExplorePage.helloHeader, { marginBottom: -vh(2) }]}>
          Companies
        </Text>
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
    minWidth: vw(26), // 100

    borderColor: "rgba(10,10,10,0.2)",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  photoCompany: {
    height: vh(12),
    width: vh(12),
    //marginHorizontal: 10,
    marginTop: 5,
  },
  companyName: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: -5,
  },
  singleCompany: {
    minHeight: 100,
    textAlign: "right",
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",

    borderWidth: 1,
    borderColor: "rgba(10,10,10,0.2)",
    borderStyle: "dotted",
  },
  singleCompanyLogo: {
    objectFit: "cover",
    height: "100%",
    width: "50%",
  },
  companiesTitle: {
    marginLeft: 5,
    paddingBottom: 10,
    fontSize: 25,
  },
  singleCompanyRightSide: {
    width: "50%",
    paddingRight: 10,
    paddingTop: 10,
    justifyContent: "top",
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
