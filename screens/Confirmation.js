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
import map from "../assets/map.png";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

const Confirmation = ({ route, navigation }) => {
  const {
    foodName,
    description,
    image,
    date,
    time,
    ingredients,
    provider,
    tags,
  } = route.params;

  const addPlateFn = useMutation(api.userPlates.addPlate);

  const handleClick = () => {
    addPlateFn(plateData);
    navigation.reset({
      index: 0,
      routes: [{ name: "My Plates" }],
    });
  };

  const plateData = {
    foodName: foodName,
    ingredients: ingredients,
    description: description,
    tags: tags,
    provider: provider,
    date: date,
    time: time,
    image: image,
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <TouchableOpacity
        style={styles.topbar}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={30} color="black" />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image source={map} style={styles.image} />
      </View>
      <View style={styles.box}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 40,
            marginBottom: 10,
            color: "#FF4960",
          }}
        >
          Order Sent!
        </Text>
        <View
          style={{
            display: "flex",
            flex: 0.3,
            flexDirection: "row",
            marginBottom: 20,
            width: "100%",
          }}
        >
          <View style={styles.locationtime}>
            <View style={styles.location}>
              <Ionicons name="location" style={{ marginRight: 2 }} size={15} />
              <Text style={{ marginRight: 2, fontWeight: "bold" }}>
                459 Lagunita Dr
              </Text>
            </View>
            <View style={styles.time}>
              <Ionicons name="time" style={{ marginRight: 2 }} size={15} />
              <Text style={{ marginRight: 2, fontWeight: "bold" }}>{time}</Text>
            </View>
            <View style={styles.time}>
              <Ionicons name="person" style={{ marginRight: 2 }} size={15} />
              <Text style={{ marginRight: 2, fontWeight: "bold" }}>
                {provider}
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <View
              style={{ display: "flex", flexDirection: "row", padding: 10 }}
            >
              <Ionicons name="call" style={{ marginRight: 5 }} size={20} />
              <Ionicons name="chatbox" style={{ marginRight: 2 }} size={20} />
            </View>
          </View>
        </View>

        <View style={styles.foodDescription}>
          <Image
            source={{ uri: image }}
            style={{ width: "25%", resizeMode: "cover", marginRight: 5 }}
          />
          <View style={styles.textContainer}>
            <Text
              style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}
            >
              {foodName}
            </Text>
            <Text style={{ color: "#848484", marginBottom: 10 }}>
              by {provider}
            </Text>
            <Text
              style={{ color: "#848484", marginBottom: 10 }}
              numberOfLines={2}
            >
              {description}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.orderbutton} onPress={handleClick}>
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 15 }}>
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    display: "flex",
    flex: 1,
  },
  image: {
    width: "100%",
    resizeMode: "cover",
  },
  box: {
    display: "flex",
    flex: 2,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "white",
  },
  locationtime: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 10,
    flex: 1,
  },
  location: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  topbar: {
    position: "absolute",
    top: 40,
    left: 10,
    backgroundColor: "transparent",
    padding: 10,
    zIndex: 1,
  },
  foodDescription: {
    display: "flex",
    flex: 0.4,
    flexDirection: "row",
    marginBottom: 10,
  },
  message: {
    display: "flex",
    flex: 1,
  },
  orderbutton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    padding: 15,
    marginTop: 10,
    width: "100%",
    backgroundColor: "#FF4960",
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
  },
});

export default Confirmation;
