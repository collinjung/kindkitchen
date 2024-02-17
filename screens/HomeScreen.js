import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
} from "react-native";
import CarouselCards from "../components/CarouselCards";

const HomeScreen = () => {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.text}>Home Screen</Text>
    // </View>
    <SafeAreaView style={styles.container}>
      <CarouselCards />
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 20,
//   },
// });

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
});

export default HomeScreen;
