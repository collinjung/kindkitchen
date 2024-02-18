import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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

// CARD RENDER LOGIC
const Card = ({ foodName, ingredients, provider, description, tags, image }) => {
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
    backgroundColor: '#f6f7fb',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginVertical: 10,
    marginRight: 10,
    overflow: 'hidden',
    width: 200,
    height: 200,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 10,
  },
  foodName: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  provider: {
    fontSize: 14,
    color: '#848484',
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
    color: 'grey',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    alignItems: 'center',
  },
  tagBubble: {
    backgroundColor: '#E8E8E8',
    borderRadius: 15, 
    paddingHorizontal: 10, 
    paddingVertical: 5, 
    marginRight: 4, 
    marginTop: 4,
  },
  tagText: {
    fontSize: 12,
    color: '#333', 
  },
});


const ExploreScreen = () => {
  const navigation = useNavigation();

  const weeklyitems = [
    {
      foodName: "Veggie Plate",
      ingredients: ["Cucumbers", "Eggs", "Tomato", "Cauliflower", "Broccoli"],
      description: "A yummy vegetarian plate.",
      tags: ["Vegetarian"],
      provider: "IvanPlate",
      image:
        "https://www.shutterstock.com/image-vector/vector-illustration-fried-eggs-vegetables-600nw-1519043639.jpg",
    },
    {
      foodName: "Salmon Bowl",
      ingredients: ["Salmon", "Rice", "Furikake", "Soy Sauce"],
      description: "A nutritious salmon rice bowl with plenty of protein and a savory kick",
      tags: ["Asian", "Pescetarian"],
      provider: "AsianBitesbyJeff",
      image:
        "https://www.shutterstock.com/image-vector/vector-illustration-fried-eggs-vegetables-600nw-1519043639.jpg",
    },
    {
      foodName: "Veggie Plate",
      ingredients: ["Cucumbers", "Eggs", "Tomato", "Cauliflower", "Broccoli"],
      description: "A yummy vegetarian plate.",
      tags: [],
      provider: "HomeHelen",
      image:
        "https://www.shutterstock.com/image-vector/vector-illustration-fried-eggs-vegetables-600nw-1519043639.jpg",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Weekly Items</Text>
        <ScrollView horizontal={true}>
          {weeklyitems.map((item, index) => (
            <Pressable key={index} onPress={() => navigation.navigate('Order')}>
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
          {weeklyitems.map((item, index) => ( // Assuming you have a 'specialitems' array
            <Pressable key={index} onPress={() => navigation.navigate('Order')}>
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
    </SafeAreaView>
  );
  
};

const Stack = createNativeStackNavigator();

export default function ExploreStack() {
  return (
    <Stack.Navigator initialRouteName="Explore">
        <Stack.Screen name="Explore" component={ExploreScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Order" component={OrderMealScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
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
    // backgroundColor: 'red',
    display: 'flex',
    flex: '1',
    marginLeft: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

