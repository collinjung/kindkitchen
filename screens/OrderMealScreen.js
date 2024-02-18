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
import { useNavigation, StackActions } from "@react-navigation/native";

const OrderMealScreen = ({ route, navigation }) => {
  // Extracting parameters from the route
  if (route.params) {
    const { foodName, description, ingredients, provider, tags, image } =
      route.params;

    return (
      <View style={styles.container}>
        <Text style={styles.foodName}>{foodName}</Text>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OrderMealScreen;
