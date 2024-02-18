import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import CarouselCards from "../components/CarouselCards";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#D93F50",
          flex: 1,
          width: "100%",
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30,
          marginBottom: 15,
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Image
          source={require("../utils/collin.jpg")}
          style={{
            width: 75,
            height: 75,
            borderRadius: 50,
            marginLeft: 20,
            marginTop: 40,
          }}
        />
        <View style={{ marginTop: 30, marginLeft: 20, width: 270 }}>
          <Text style={{ color: "white", fontSize: 20 }}>Hello,</Text>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>
            Collin
          </Text>
          <Text style={{ marginTop: 10, color: "white", fontSize: 18 }}>
            Here are your upcoming meals:
          </Text>
        </View>
      </View>
      <View style={{ flex: 3 }}>
        <CarouselCards />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default HomeScreen;
