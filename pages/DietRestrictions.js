import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const DietRestrictions = ({ navigation }) => {
  const allergies = [
    "Milk",
    "Eggs",
    "Fish",
    "Shellfish",
    "Tree nuts",
    "Peanuts",
    "Wheat",
    "Soybeans",
    "Sesame",
  ];

  const [selectedAllergies, setSelectedAllergies] = useState(
    allergies.reduce((acc, allergy) => {
      acc[allergy] = false;
      return acc;
    }, {})
  );

  const handleCheckBoxChange = (allergy) => {
    setSelectedAllergies((prevState) => ({
      ...prevState,
      [allergy]: !prevState[allergy],
    }));
  };

  const CustomCheckbox = ({ label, isChecked }) => (
    <TouchableOpacity
      style={styles.checkboxContainer}
      onPress={() => handleCheckBoxChange(label)}
    >
      <Ionicons
        name={isChecked ? "checkbox" : "square-outline"}
        size={24}
        color="#FF4960"
      />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );

  // to pass into database
  const getCheckedAllergies = () => {
    const checkedAllergies = Object.keys(selectedAllergies).filter(
      (allergy) => selectedAllergies[allergy]
    );
    return checkedAllergies;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.topbar}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.preferencesTitle}>Dietary Restrictions</Text>
      <Text style={{ marginBottom: 20 }}>
        By default, KindKitchen does not allow meals with raw or undercooked
        meats, eggs, and seafood.
      </Text>
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginBottom: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 10 }}>
          Allergies
        </Text>
        {allergies.map((allergy, index) => (
          <CustomCheckbox
            key={index}
            label={allergy}
            isChecked={selectedAllergies[allergy]}
          />
        ))}
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 10 }}>
        Additional Restrictions
      </Text>
      <Text style={{ marginBottom: 20, color: "#848484" }}>
        Add additional ingredient restrictions separated by a comma
      </Text>
      <TextInput
        multiline={true}
        style={{
          borderRadius: 8,
          backgroundColor: "#F6F7FB",
          flex: 1,
          padding: 10,
        }}
      />
      <Pressable
        style={styles.orderbutton}
        onPress={() => {
          const checkedAllergies = getCheckedAllergies();
          console.log(checkedAllergies);
          navigation.goBack();
        }}
      >
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 15 }}>
          Save
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 100,
    padding: 30,
  },
  preferencesTitle: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  label: {
    marginLeft: 8,
    fontSize: 15,
  },
  topbar: {
    position: "absolute",
    top: 40,
    left: 10,
    backgroundColor: "transparent",
    padding: 10,
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

export default DietRestrictions;
