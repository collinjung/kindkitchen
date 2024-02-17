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

const Card = ({ foodName, ingredients, description, tags, image }) => {
  return (
    <View style={cardStyles.card}>
      <Image source={{ uri: image }} style={cardStyles.image} />
      <View style={cardStyles.textContainer}>
        <Text style={cardStyles.foodName}>{foodName}</Text>
        <Text style={cardStyles.ingredients}>Ingredients: {ingredients.join(", ")}</Text>
        <Text style={cardStyles.description}>{description}</Text>
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
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginVertical: 10,
    marginHorizontal: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  textContainer: {
    padding: 10,
  },
  foodName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ingredients: {
    fontSize: 14,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  tags: {
    fontSize: 12,
    color: 'grey',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    alignItems: 'center',
  },
  tagBubble: {
    backgroundColor: '#E8E8E8', // Light gray background for the bubble
    borderRadius: 15, // Rounded corners
    paddingHorizontal: 10, // Horizontal padding inside the bubble
    paddingVertical: 5, // Vertical padding inside the bubble
    margin: 4, // Margin around each bubble
  },
  tagText: {
    fontSize: 12,
    color: '#333', // Dark text color for contrast
  },
});


const OrderScreen = () => {
  const data = [
    {
      foodName: "Veggie Plate",
      ingredients: ["Cucumbers", "Eggs", "Tomato", "Cauliflower", "Broccoli"],
      description: "A yummy vegetarian plate.",
      tags: ["Vegetarian"],
      image:
        "https://www.shutterstock.com/image-vector/vector-illustration-fried-eggs-vegetables-600nw-1519043639.jpg",
    },
    {
      foodName: "Veggie Plate",
      ingredients: ["Cucumbers", "Eggs", "Tomato", "Cauliflower", "Broccoli"],
      description: "A yummy vegetarian plate.",
      tags: [""],
      image:
        "https://www.shutterstock.com/image-vector/vector-illustration-fried-eggs-vegetables-600nw-1519043639.jpg",
    },
    {
      foodName: "Veggie Plate",
      ingredients: ["Cucumbers", "Eggs", "Tomato", "Cauliflower", "Broccoli"],
      description: "A yummy vegetarian plate.",
      tags: [""],
      image:
        "https://www.shutterstock.com/image-vector/vector-illustration-fried-eggs-vegetables-600nw-1519043639.jpg",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {data.map((item, index) => (
          <Card
            key={index}
            foodName={item.foodName}
            description={item.description}
            ingredients={item.ingredients} // Include this line
            tags={item.tags} // Include this line
            image={item.image}
          />
        ))}
       </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
    // padding: 50,
  },
  scrollView: {
    width: '100%',
  },
});

export default OrderScreen;
