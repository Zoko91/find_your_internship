import { Image, Text, View } from "react-native";
import { stylesExplorePage } from "../theme/style";
import React from "react";

const RenderInternshipInfos = ({ item }) => {
  return (
    <View style={stylesExplorePage.internshipInfosContainer}>
      <View style={{ flexDirection: "row", width: "50%" }}>
        <Image
          style={stylesExplorePage.internshipInfosIcons}
          source={require("../resources/images/star.png")}
        />
        <Text style={stylesExplorePage.internshipInfosText}>{item.grade}</Text>
      </View>
      <View style={{ flexDirection: "row", width: "50%" }}>
        <Image
          style={stylesExplorePage.internshipInfosIcons}
          source={require("../resources/images/location_outline.png")}
        />
        <Text style={stylesExplorePage.internshipInfosText}>
          {item.country}
        </Text>
      </View>
      <View style={{ flexDirection: "row", width: "50%" }}>
        <Image
          style={stylesExplorePage.internshipInfosIcons}
          source={require("../resources/images/euros.png")}
        />
        <Text style={stylesExplorePage.internshipInfosText}>
          {item.compensation}
        </Text>
      </View>
      <View style={{ flexDirection: "row", width: "50%" }}>
        <Image
          style={stylesExplorePage.internshipInfosIcons}
          source={require("../resources/images/clock.png")}
        />
        <Text style={stylesExplorePage.internshipInfosText}>
          {item.duration}
        </Text>
      </View>
    </View>
  );
};

export default RenderInternshipInfos;
