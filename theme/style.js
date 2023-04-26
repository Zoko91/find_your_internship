import { StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get("window").height;
export const vh = (distance) => distance * (height / 100);

const width = Dimensions.get("window").width;
export const vw = (distance) => distance * (width / 100);

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
  userProfilePicture: { width: 80, height: 80, borderRadius: 40 },
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

// Use StylesSheet flatten
export const stylesLogin = StyleSheet.create({
  container: {
    marginTop: 50,
    height: "100%",
    alignItems: "center",
  },
  titleLogIn: {
    fontSize: 30,
    marginBottom: 20,
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20,
    marginTop: 20,
  },
  input: {
    padding: 10,
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#234F52",
  },
  loginButton: {
    backgroundColor: "#234F52",
    padding: 10,
    marginTop: 30,
    borderRadius: 10,
    width: "80%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonDisabled: {
    borderColor: "#827F7F",
    borderWidth: 1,
    padding: 10,
    marginTop: 30,
    borderRadius: 10,
    width: "80%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 25,
  },
  loginButtonTextDisabled: {
    color: "#827F7F",
    fontSize: 25,
  },
  separatorContainer: {
    position: "relative",
    flexDirection: "row",
  },
  horizontalBar: {
    width: "25%",
    height: 1,
    backgroundColor: "#234F52",
    marginTop: 40,
  },

  horizontalBarText: {
    top: 30,
    justifyContent: "center",
    color: "#234F52",
    marginHorizontal: 10,
  },
  signUpContainer: {
    position: "absolute",
    bottom: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpLink: {
    color: "#00B4AF",
    fontSize: 20,
    fontWeight: "500",
  },
});

export const stylesInternshipDetail = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  centerize: {
    alignItems: "center",
    justifyContent: "center",
  },
  internshipCompanyContainer: {
    maxHeight: vh(40),
  },
  internshipCompanyLogoContainer: {
    backgroundColor: "#303030",
    position: "absolute",
    // top: 35,
    top: vh(10),
    padding: 5,
  },
  internshipCompanyLogo: {
    width: 80,
    height: 80,
    objectFit: "contain",
  },
  companyName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2B5453",
    marginTop: vh(6),
  },
  internshipInfosContainer: {
    marginTop: -vh(10),
    alignSelf: "center",
    width: "90%",
    padding: 10,
  },
  internshipTitle: {
    fontSize: 25,
    fontWeight: "500",
    color: "#2B5453",
    marginBottom: vh(3),
  },
  internshipDescription: {
    fontSize: 20,
    marginBottom: vh(3),
    width: "90%",
    alignSelf: "center",
  },
  internshipDetailsInfosContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: vh(4),
    flexDirection: "row",
    flexWrap: "wrap",
    flexBasis: "50%",
    justifyContent: "space-around",
  },
  internshipDetailsInfosBox: {
    flex: 1,
    marginVertical: 15,
    fontSize: 15,

    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexBasis: "50%",
  },
  postedBy: {
    fontSize: 15,
    color: "gray",
    alignSelf: "flex-end",
    fontStyle: "italic",
    marginBottom: 10,
  },
});

const borderRadius = 10;
const primaryColor = "#303030";
const secondaryColor = "#2B5453";
// Use StylesSheet flatten
export const stylesExplorePage = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
  },
  helloHeader: {
    marginTop: vh(7),
    marginLeft: 16,
    marginBottom: 30,
    fontSize: 36,
    color: "#2B5453",
    fontWeight: 500,
  },
  searchBar: {
    justifyContent: "center",
    fontSize: 16,
    borderRadius: 50,
    borderwidth: 1,
    width: "40%",
    height: 50,
    backgroundColor: "#F5F5F5",
    marginBottom: 10,
    padding: 10,
    paddingLeft: 25,
    elevation: 2,
    shadowColor: "#2B5453",
    shadowOpacity: 0.27,
    shadowRadius: 15,
  },
  listContainer: {
    width: "90%",
  },
  containerInternship: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    minHeight: 155,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
    padding: 0,
    borderRadius: borderRadius,
  },
  internshipLeftSide: (props) => ({
    width: "20%",
    height: "100%",
    backgroundColor: props.backgroundColor,
    borderRightWidth: 1,
    borderColor: "black",
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
  }),
  internshipRightSide: {
    width: "90%",
    height: "100%",
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  },
  internshipLeftSideLogoContainer: {
    backgroundColor: "#303030",
    padding: 5,
    position: "absolute",
    top: 50,
    left: "58%",
  },
  internshipLeftSideLogo: {
    width: 41,
    height: 41,
    objectFit: "contain",
  },
  internshipRightSideCompanyName: {
    fontSize: 20,
    fontWeight: 500,
    marginLeft: 10,
    marginTop: 10,
  },
  internshipRightSideInternshipTitle: {
    marginTop: 10,
    maxWidth: "70%",
    fontSize: 16,
    fontWeight: 400,
    color: primaryColor,
    alignSelf: "center",
  },
  internshipInfos: {
    borderColor: "black",
    justifyContent: "center",
    width: "60%",
    flex: 1,
    alignSelf: "center",
  },

  internshipInfosContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    flexBasis: "50%",
    // justifyContent: "space-around",
  },
  internshipInfosIcons: {
    height: 20,
    width: 20,
  },
  internshipInfosText: {
    flex: 1,
    paddingTop: 2,
    paddingLeft: vw(2),
    verticalAlign: "middle",
    height: 20,
    marginBottom: 5,
  },
});
