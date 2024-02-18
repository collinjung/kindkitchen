import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import map from "../assets/map.png";

const OrderMealScreen2 = ({ route, navigation }) => {
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

  const DismissKeyboardHOC = (Comp) => {
    return ({ children, ...props }) => (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Comp {...props}>{children}</Comp>
      </TouchableWithoutFeedback>
    );
  };
  const DismissKeyboardView = DismissKeyboardHOC(View);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 10 }}>
            Delivery To:
          </Text>
          <View style={styles.locationtime}>
            <View style={styles.location}>
              <Ionicons name="location" style={{ marginRight: 2 }} size={15} />
              <Text style={{ marginRight: 2, fontWeight: "bold" }}>
                459 Lagunita Dr
              </Text>
              <Ionicons name="chevron-down" size={15} />
            </View>
            <View style={styles.time}>
              <Ionicons name="time" style={{ marginRight: 2 }} size={15} />
              <Text style={{ marginRight: 2, fontWeight: "bold" }}>{time}</Text>
              <Ionicons name="chevron-down" size={15} />
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

          <View style={styles.message}>
            <Text
              style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}
            >
              Send a warm message
            </Text>
            <TextInput
              multiline={true}
              placeholder="Write a message here..."
              style={{
                height: 140,
                borderRadius: 8,
                backgroundColor: "#F6F7FB",
                padding: 10,
              }}
            />
          </View>

          <TouchableOpacity
            style={styles.orderbutton}
            onPress={() =>
              navigation.navigate("Confirmation", {
                foodName,
                description,
                ingredients,
                provider,
                date,
                time,
                tags,
                image,
              })
            }
          >
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 15 }}>
              Send Order
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    display: "flex",
    flex: 1,
  },
  image: {
    width: 400,
    height: 400,

    resizeMode: "cover",
  },
  box: {
    display: "flex",
    flex: 2,
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  locationtime: {
    display: "flex",
    flex: 0.3,
    marginBottom: 10,
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
    flex: 0.5,
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
    backgroundColor: "#FF4960",
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
  },
});

export default OrderMealScreen2;
