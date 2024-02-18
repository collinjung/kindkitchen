import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation, StackActions } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Image,
  Pressable,
  Modal,
} from "react-native";
import OrderMealScreen from "./OrderMealScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

// CARD RENDER LOGIC
const Card = ({
  foodName,
  ingredients,
  provider,
  description,
  tags,
  image,
}) => {
  return (
    <View style={cardStyles.card}>
      <Image source={{ uri: image }} style={cardStyles.image} />
      <View style={cardStyles.textContainer}>
        <Text style={cardStyles.foodName}>{foodName}</Text>
        <Text style={cardStyles.provider}>by {provider}</Text>
        {/* <Text style={cardStyles.ingredients}>Ingredients: {ingredients.join(", ")}</Text> */}
        {/* <Text style={cardStyles.description}>{description}</Text> */}
        <View style={cardStyles.tagsContainer}>
          {tags.map((tag, index) => (
            <View key={index} style={cardStyles.tagBubble}>
              <Text style={cardStyles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#f6f7fb",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginVertical: 10,
    marginRight: 10,
    overflow: "hidden",
    width: 200,
    height: 200,
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },
  textContainer: {
    padding: 10,
  },
  foodName: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  provider: {
    fontSize: 14,
    color: "#848484",
  },
  // ingredients: {
  //   fontSize: 14,
  //   marginBottom: 5,
  // },
  // description: {
  //   fontSize: 14,
  //   marginBottom: 5,
  // },
  tags: {
    fontSize: 12,
    color: "grey",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
    alignItems: "center",
  },
  tagBubble: {
    backgroundColor: "#E8E8E8",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 4,
    marginTop: 4,
  },
  tagText: {
    fontSize: 12,
    color: "#333",
  },
});

const ExploreScreen = () => {
  const navigation = useNavigation();
  // const [modalVisible, setModalVisible] = useState(false);

  const weeklyitems = useQuery(api.exploreFood.get) || [];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topsection}>
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
            <Text style={{ marginRight: 2, fontWeight: "bold" }}>
              All times
            </Text>
            <Ionicons name="chevron-down" size={15} />
          </View>
        </View>
        <View style={styles.filtersection}>
          <Pressable
            style={styles.filter}
            // onPress={() => setModalVisible(true)}
          >
            <Text style={{ color: "#D93F50", marginRight: 5 }}>Filter</Text>
            <Ionicons name="filter" color="#D93F50" />
          </Pressable>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Weekly Items</Text>
        <ScrollView horizontal={true}>
          {weeklyitems.map((item, index) => (
            <Pressable key={index} onPress={() => navigation.navigate("Order")}>
              <Card
                foodName={item.foodName}
                description={item.description}
                ingredients={item.ingredients}
                provider={item.provider}
                tags={item.tags}
                image={item.image}
              />
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Special Items</Text>
        <ScrollView style={styles.scrollView} horizontal={true}>
          {weeklyitems.map(
            (
              item,
              index // Assuming you have a 'specialitems' array
            ) => (
              <Pressable
                key={index}
                onPress={() => navigation.navigate("Order")}
              >
                <Card
                  foodName={item.foodName}
                  description={item.description}
                  ingredients={item.ingredients}
                  provider={item.provider}
                  tags={item.tags}
                  image={item.image}
                />
              </Pressable>
            )
          )}
        </ScrollView>
      </View>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Filter Options Here</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal> */}
    </SafeAreaView>
  );
};

const Stack = createNativeStackNavigator();

export default function ExploreStack() {
  return (
    <Stack.Navigator initialRouteName="Explore">
      <Stack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Order" component={OrderMealScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  // scrollView: {
  //   width: '100%',
  // },
  section: {
    marginBottom: 20, // Add some space between the sections
    display: "flex",
    flex: 1,
    marginLeft: 20,
  },
  topsection: {
    marginTop: 10,
    padding: 20,
    display: "flex",
    width: "100%",
    flex: 0.5,
    flexDirection: "column",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  locationtime: {
    display: "flex",

    flex: 1,
  },
  location: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  time: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  filtersection: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  filter: {
    backgroundColor: "#FBD9E2",
    display: "flex",
    width: "33%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 8,
  },
});