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
      <Text style={styles.title}>My Plates</Text>
      <CarouselCards />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 30,
  },
});

export default HomeScreen;
