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

const OrderMealScreen = ({ route, navigation }) => {
  const {
    foodName,
    description,
    ingredients,
    provider,
    tags,
    date,
    time,
    image,
  } = route.params;
  const [isPressed, setIsPressed] = useState(false);

  const onPressHandler = () => {
    setIsPressed(!isPressed);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.top}>
          <Image source={{ uri: image }} style={styles.image} />
          <TouchableOpacity
            style={styles.topbar}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <Text style={styles.foodName}>{foodName}</Text>
          <View style={styles.time}>
            <Ionicons name="time" size={15} color="black" />
            <Text style={{ fontWeight: "bold", marginLeft: 2 }}>
              Date: {date}, Time: {time}
            </Text>
          </View>
          <Text style={styles.description}>{description}</Text>

          <View style={styles.box}>
            <Text style={styles.header}>From the Cook</Text>
            <Text
              style={{ fontSize: 15, fontWeight: "bold", marginBottom: 10 }}
            >
              {provider}
            </Text>
            <Text style={{ marginBottom: 10 }}>
              Hi guys! I’m hosting a virtual dinner to those who order on
              Tuesday February 20th 6PM-8PM. Feel free to RSVP below. I hope you
              enjoy my bahn mi :)
            </Text>
            <TouchableOpacity
              style={[styles.button, isPressed ? styles.buttonPressed : null]}
              onPress={onPressHandler}
            >
              <Text
                style={{
                  color: isPressed ? "white" : "#FF4960",
                  marginRight: 3,
                }}
              >
                RSVP
              </Text>
              {isPressed ? (
                <Ionicons name="checkmark" size={15} color="white" />
              ) : (
                <Ionicons name="people" size={15} color="#FF4960" />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <Text style={styles.header}>Ingredients</Text>
            {ingredients.map((item, index) => (
              <Text key={index}>{item}</Text>
            ))}
          </View>
        </View>
        <TouchableOpacity
          style={styles.orderbutton}
          onPress={() =>
            navigation.navigate("Order2", {
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
            Order
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topbar: {
    position: "absolute",
    top: 40,
    left: 10,
    backgroundColor: "transparent",
    padding: 10,
  },
  body: {
    flex: 3,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  image: {
    width: "100%",
    resizeMode: "cover",
    height: "100%",
  },
  top: {
    height: 150,
  },
  foodName: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: "bold",
  },
  time: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  box: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F6F7FB",
    marginBottom: 10,
    padding: 20,
    borderRadius: 8,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#FBD9E2",
    width: "25%",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  description: {
    marginBottom: 10,
  },

  buttonPressed: {
    backgroundColor: "green",
    borderColor: "green",
  },
  orderbutton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    padding: 15,
    margin: 20,
    backgroundColor: "#FF4960",
  },
});

export default OrderMealScreen;
