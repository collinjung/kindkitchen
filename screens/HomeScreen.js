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
    <SafeAreaView style={styles.container}>
      <CarouselCards />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
    // padding: 50,
  },
});

export default HomeScreen;
