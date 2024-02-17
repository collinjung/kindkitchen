import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RecipeScreen from "../screens/RecipeScreen";
import OrderScreen from "../screens/OrderScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
<ion-icon name="home-outline"></ion-icon>;

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Profile") {
            iconName = "person-circle-outline";
          } else if (route.name === "Order") {
            iconName = "fast-food-outline";
          } else if (route.name === "Recipe") {
            iconName = "clipboard-outline";
          }
          return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: "pink",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Order" component={OrderScreen} />
      <Tab.Screen name="Recipe" component={RecipeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
