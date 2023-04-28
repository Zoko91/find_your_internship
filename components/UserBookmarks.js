import { Image, ScrollView, Text, View } from "react-native";
import styles from "../theme/style";
import InternshipBookmark from "./InternshipBookmark";
import CompanyBookmark from "./CompanyBookmark";

const UserBookmarks = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.workingOn}>
        <Text style={styles.textWorkInProgress}>
          Work in progress. A/B page
        </Text>
      </View>
      <View style={styles.halfIntern}>
        <Text>Internships</Text>
        <ScrollView>
          <InternshipBookmark
            title="Administrateur réseau"
            company="Google"
            username="Thomas C."
          />
          <InternshipBookmark
            title="Employé polyvalent"
            company="KFC"
            username="Joseph B."
          />
          <Image
            style={styles.arrowgif}
            source={require("../resources/images/arrow.gif")}
          />
        </ScrollView>
      </View>
      <View style={styles.halfCompany}>
        <Text>Companies</Text>
        <ScrollView>
          <CompanyBookmark
            name="Google"
            location="Paris"
            sector="Innovation & CS"
          />
          <CompanyBookmark
            name="IBM"
            location="Bordeaux"
            sector="Intern's formation program"
          />
          <Image
            style={styles.arrowgif}
            source={require("../resources/images/arrow.gif")}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default UserBookmarks;
