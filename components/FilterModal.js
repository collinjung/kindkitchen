import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";

const FilterModal = ({
  modalVisible,
  setModalVisible,
  selectedCuisines,
  setSelectedCuisines,
  selectedDiets,
  setSelectedDiets,
}) => {
  cuisines = [
    "Asian",
    "Western",
    "Mediterranean",
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
  ];
  diet_types = [
    "Vegan",
    "Vegetarian",
    "Kosher",
    "Halal",
    "Gluten-free",
    "Pescetarian",
  ];
  const toggleCuisine = (cuisine) => {
    if (selectedCuisines.includes(cuisine)) {
      setSelectedCuisines(selectedCuisines.filter((c) => c !== cuisine));
    } else {
      setSelectedCuisines([...selectedCuisines, cuisine]);
    }
  };

  const toggleDiet = (diet) => {
    if (selectedDiets.includes(diet)) {
      setSelectedDiets(selectedDiets.filter((d) => d !== diet));
    } else {
      setSelectedDiets([...selectedDiets, diet]);
    }
  };
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
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  selectedCuisines.includes(cuisine) && styles.selectedOption,
                ]}
                onPress={() => toggleCuisine(cuisine)}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedCuisines.includes(cuisine) && styles.selectedOption,
                  ]}
                >
                  {cuisine}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Diet</Text>
          <View style={styles.buttonContainer}>
            {diet_types.map((diet_type, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  selectedDiets.includes(diet_type) && styles.selectedOption,
                ]}
                onPress={() => toggleDiet(diet_type)} // Fix applied here
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedDiets.includes(diet_type) && styles.selectedOption, // Use styles.selectedOptionText for text
                  ]}
                >
                  {diet_type}
                </Text>
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
    justifyContent: "flex-start",
    marginBottom: 20,
  },
  optionButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#D93F50",
    marginBottom: 10,
    marginRight: 5,
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
  selectedOption: {
    backgroundColor: "#D93F50", // or any highlight color
    borderColor: "transparent",
    color: "white",
  },
});

export default FilterModal;
