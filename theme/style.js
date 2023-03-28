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
  headernameUser: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  containerHeaderUser1: {},
  containerHeaderUser2: { marginTop: 20, marginLeft: 15 },
  containerHeaderUser3: { flex: 1, alignItems: "flex-end", marginTop: 27 },
  nameUser: { color: "#000", fontSize: 20 },
  showProfile: { color: "#808080", fontSize: 14 },
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
  profilePicture: { width: 140, height: 140 },
  containerProfile: {
    marginTop: 50,
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  containerCamera: {
    position: "absolute",
    bottom: 0,
    right: 110,
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  hiMatt: { fontSize: 20, fontWeight: 300, marginTop: 20, textAlign: "center" },
  descriptionShow: {
    fontSize: 15,
    fontWeight: 300,
    marginTop: 20,
    textAlign: "center",
    lineHeight: 22,
  },
  recentPostHeader: {
    marginLeft: 30,
    fontWeight: 500,
    fontSize: 22,
    marginTop: 30,
    marginBottom: 40,
  },
  post: {
    width: width - 62,
    alignSelf: "center",
    borderColor: "#3B3B3B",
    borderWidth: 1,
    height: 60,
    borderRadius: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
  },
  iconCompany: { width: 50, height: 20 },
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
