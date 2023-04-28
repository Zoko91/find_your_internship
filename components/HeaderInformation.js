import { Text, TouchableOpacity, View } from "react-native";
import styles from "../theme/style";

const HeaderInformation = ({ saveInformation }) => {
  return (
    <View style={styles.headerInformation}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Edit personal info
      </Text>
      <TouchableOpacity onPress={saveInformation}>
        <Text style={styles.save}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderInformation;
