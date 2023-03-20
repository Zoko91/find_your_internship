import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  containerHeaderUser: {
    marginHorizontal: 30,
    marginTop: 40,
    flexDirection: "row",
    height: 100,
  },
  containerHeaderUser1: {},
  containerHeaderUser2: { marginTop: 20, marginLeft: 15 },
  containerHeaderUser3: { flex: 1, alignItems: "flex-end", marginTop: 27 },
  nameUser: { color: "#000", fontSize: 20, fontFamily: "Manrope" },
  showProfile: { color: "#808080", fontSize: 14, fontFamily: "Manrope" },
  userProfilePicture: { width: 80, height: 80 },
  arrowUser: { width: 20, height: 20, marginLeft: 10 },
  fineLine: {
    backgroundColor: "#DDDDDD",
    height: 1,
    width: width - 80,
    alignSelf: "center",
  },
  iconUser: { width: 30, height: 30, marginRight: 10 },
  containerAccount: {
    marginHorizontal: 30,
    marginTop: 40,
    flexDirection: "column",
    minHeight: 100,
  },
  containerAccountInside: {
    marginHorizontal: 20,
    marginVertical: 20,
    flexDirection: "row",
  },
  containerArrowSetting: { flex: 1, alignItems: "flex-end", marginTop: 6 },
  arrowUserSetting: { width: 20, height: 20, marginLeft: 10 },
});

export default styles;

export const screenOptions = {
  headerStyle: {
    backgroundColor: "#f5f5f5",
    borderBottomWidth: 0,
  },
  headerTintColor: "#333333",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};
