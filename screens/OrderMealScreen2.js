import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const OrderMealScreen2 = ({ route, navigation }) => {
  const { foodName, description, image, ingredients, provider, tags } =
    route.params;
  const [isPressed, setIsPressed] = useState(false);

  const onPressHandler = () => {
    setIsPressed(!isPressed);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Text>Delivery To:</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default OrderMealScreen2;
