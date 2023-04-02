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
    justifyContent: "space-between",
    padding: 20,
    flexDirection: "row",
  },
  iconCompany: { width: 50, height: 20 },
  iconStar: { width: 25, height: 25, marginTop: -5, marginLeft: 5 },
  grade: { flexDirection: "row" },
  save: {
    textDecorationLine: "underline",
    textDecorationColor: "#3B3B3B",
    fontSize: 16,
  },
  headerInformation: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 40,
    marginTop: 40,
  },
  bloc: {
    borderColor: "#8D8D8D",
    borderWidth: 1,
    marginHorizontal: 40,
    marginTop: 40,
    height: 70,
    borderRadius: 8,
  },
  placeholder: { color: "#878787", marginTop: 5, marginLeft: 10 },
  fineLine2: {
    marginTop: 50,
    backgroundColor: "#DDDDDD",
    height: 1,
    width: width - 80,
    alignSelf: "center",
  },
  preferences: { marginHorizontal: 40, marginTop: 40 },
  viewcheckbox: {
    flexDirection: "row",
    marginTop: 40,
    alignItems: "center",
  },
  checkbox: {
    borderRadius: 2,
    marginRight: 20,
    marginLeft: 10,
    height: 30,
    width: 30,
  },
  mailingtext: { fontSize: 16, letterSpacing: 0.5 },
  iconLens: { height: 30, width: 30, marginRight: 10 },
  filters: {
    marginHorizontal: 40,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    padding: 5,
    borderRadius: 8,
    flexDirection: "row",
  },
  resarchintern: {
    marginTop: 30,
    marginLeft: 40,
    marginBottom: 10,
  },
  personalinput: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  myinternships: { marginTop: 30 },
  fineLine3: {
    marginTop: 30,
    backgroundColor: "#DDDDDD",
    height: 1,
    width: width - 80,
    alignSelf: "center",
  },
  internshipStyle: {
    marginVertical: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#DDDDDD",
    height: 80,
    marginHorizontal: 40,
    flexDirection: "row",
  },
  borderinternship: {
    backgroundColor: "rgba(150,30,30,0.4)",
    width: 20,
    borderRadius: 10,
  },
  containerintern: {
    width: 170,
    marginLeft: 10,
    marginTop: 10,
  },
  inputSearch: {
    width: width - 140,
  },
  halfIntern: {
    flex: 2,
    padding: 20,
  },
  halfCompany: { flex: 2, padding: 20 },
  styleCompany: {
    height: 50,
    borderColor: "#DDDDDD",
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  styleInternship: {
    height: 50,
    borderColor: "#DDDDDD",
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  arrowgif: {
    justifyContent: "center",
    alignSelf: "center",
    height: 30,
    width: 30,
  },
  privacyTitle: {
    marginHorizontal: 25,
    marginTop: 40,
    marginBottom: 50,
    fontSize: 25,
    fontWeight: "500",
  },
  privacyTitle2: {
    marginHorizontal: 25,
    marginTop: 40,
    fontSize: 25,
    fontWeight: "500",
  },
  privacyTitle3: {
    marginHorizontal: 25,
    fontSize: 25,
    fontWeight: "500",
  },
  privacyTitle4: {
    marginHorizontal: 25,
    fontSize: 20,
    fontWeight: "500",
    color: "white",
    marginVertical: 20,
  },
  privacyTitle5: {
    fontSize: 20,
    fontWeight: "400",
    color: "black",
    alignSelf: "center",
    justifyContent: "center",
  },
  fineLinePrivacy: {
    marginTop: 30,
    backgroundColor: "#DDDDDD",
    height: 1,
    width: width - 40,
    alignSelf: "center",
  },
  workingOn: {
    backgroundColor: "rgba(250,70,90,0.6)",
    height: 15,
    alignItems: "center",
  },
  textWorkInProgress: {
    marginHorizontal: 10,
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
  searchHelp: {
    marginHorizontal: 25,
    marginTop: 30,
    height: 50,
    borderColor: "rgba(200,200,200,0.2)",
    backgroundColor: "rgba(200,200,200,0.1)",
    borderRadius: 20,
    borderWidth: 2,
  },
  blackbox: { flex: 2, backgroundColor: "#000000" },
  contactus: {
    marginHorizontal: 25,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: "center",
  },
  descHelp: { marginHorizontal: 25, marginTop: 50 },
  descHelp2: { marginHorizontal: 25 },
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
