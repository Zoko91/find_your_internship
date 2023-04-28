import { Text, View } from "react-native";
import styles from "../theme/style";
import Checkbox from "expo-checkbox";

const Preferences = ({
  isSetMailUpdates,
  setIsSetMailUpdates,
  isSetPromoMail,
  setIsSetPromoMail,
}) => {
  return (
    <View style={styles.preferences}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Preferences</Text>
      <View style={styles.viewcheckbox}>
        <Checkbox
          style={styles.checkbox}
          value={isSetMailUpdates}
          onValueChange={setIsSetMailUpdates}
          color={isSetMailUpdates ? "#428A42" : undefined}
        />
        <Text style={styles.mailingtext}>Agree to receive mail updates</Text>
      </View>
      <View style={styles.viewcheckbox}>
        <Checkbox
          style={styles.checkbox}
          value={isSetPromoMail}
          onValueChange={setIsSetPromoMail}
          color={isSetPromoMail ? "#428A42" : undefined}
        />
        <Text style={styles.mailingtext}>Promotional mailing list</Text>
      </View>
    </View>
  );
};

export default Preferences;
