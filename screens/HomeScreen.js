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
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
    display: 'flex',
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  }
});

export default HomeScreen;
