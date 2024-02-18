import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";

const FilterModal = ({ modalVisible, setModalVisible }) => {
  cuisines = [
    "Korean",
    "Japanese",
    "Chinese",
    "Indian",
    "Mexican",
    "Thai",
    "Greek",
    "Italian",
    "French",
    "Caribbean",
    "American",
  ];
  diet_types = [
    "Vegan",
    "Vegetarian",
    "Kosher",
    "Halal",
    "Gluten-free",
    "Pescetarian",
  ];
  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Filter</Text>

          <Text style={styles.sectionTitle}>Cuisine</Text>
          <View style={styles.buttonContainer}>
            {cuisines.map((cuisine, index) => (
              <TouchableOpacity key={index} style={styles.optionButton}>
                <Text style={styles.optionText}>{cuisine}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Diet</Text>
          <View style={styles.buttonContainer}>
            {diet_types.map((diet_type, index) => (
              <TouchableOpacity key={index} style={styles.optionButton}>
                <Text style={styles.optionText}>{diet_type}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={styles.applyButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.applyText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    width: "90%", // Set a fixed width or percentage as per your design
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  optionButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#D93F50",
    marginBottom: 10,
  },
  optionText: {
    color: "#D93F50",
    textAlign: "center",
  },
  applyButton: {
    backgroundColor: "#D93F50",
    borderRadius: 20,
    padding: 15,
  },
  applyText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default FilterModal;
