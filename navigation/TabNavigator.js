import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RecipeScreen from "../screens/RecipeScreen";
import ExploreStack from "../screens/ExploreScreen";

import DietRestrictions from "../pages/DietRestrictions";
import AccountDetails from "../pages/AccountDetails";
import ProfileDetails from "../pages/ProfileDetails";
import FAQ from "../pages/FAQ";
import Privacy from "../pages/Privacy";
import Notifications from "../pages/Notifications";
import OrderHistory from "../pages/OrderHistory";
import Favorites from "../pages/Favorites";

import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const ProfileStack = createNativeStackNavigator();

function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="Home" component={ProfileScreen} />
      <ProfileStack.Screen name="Favorites" component={Favorites} />
      <ProfileStack.Screen name="OrderHistory" component={OrderHistory} />
      <ProfileStack.Screen name="Account" component={AccountDetails} />
      <ProfileStack.Screen name="ProfileDetails" component={ProfileDetails} />
      <ProfileStack.Screen name="Privacy" component={Privacy} />
      <ProfileStack.Screen name="Dietary" component={DietRestrictions} />
      <ProfileStack.Screen name="Notifs" component={Notifications} />
      <ProfileStack.Screen name="FAQ" component={FAQ} />
    </ProfileStack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "My Plates") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          } else if (route.name === "Find Plates") {
            iconName = focused ? "fast-food" : "fast-food-outline";
          } else if (route.name === "Recipes") {
            iconName = focused ? "clipboard" : "clipboard-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: true, // This line hides the label for all the tabs
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          paddingTop: 8,
          backgroundColor: "#FF4960",
        },
      })}
    >
      <Tab.Screen
        name="My Plates"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Find Plates"
        component={ExploreStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Recipes"
        component={RecipeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
