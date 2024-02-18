import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RecipeScreen from "../screens/RecipeScreen";
import ExploreStack from "../screens/ExploreScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          } else if (route.name === "ExploreStack") {
            iconName = focused ? "fast-food" : "fast-food-outline";
          } else if (route.name === "Recipe") {
            iconName = focused ? "clipboard" : "clipboard-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false, // This line hides the label for all the tabs
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          paddingTop: 8,
          backgroundColor: "#D93F50",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ExploreStack"
        component={ExploreStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Recipe"
        component={RecipeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
