import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const SettingItem = ({ icon, title, nav }) => (
    <TouchableOpacity
      style={styles.settingItem}
      onPress={() => navigation.navigate(nav)}
    >
      <Ionicons name={icon} size={24} color="black" />
      <Text style={styles.settingText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.preferencesTitle}>Preferences</Text>
      <View style={styles.header}>
        <Ionicons
          name="person-circle"
          size={60}
          color="gray"
          style={styles.profileIcon}
        />
        <View style={styles.headerTextContainer}>
          <Text
            style={[styles.preferenceText, styles.boldText, styles.smallerText]}
          >
            Collin Jung
          </Text>
          <Text style={styles.userEmail}>cjung2@stanford.edu</Text>
        </View>
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.preferencesRow}>
          <TouchableOpacity
            style={styles.preferenceBox}
            onPress={() => navigation.navigate("Favorites")}
          >
            <Ionicons name="heart" size={45} color="#FF4960" />
            <Text
              style={[
                styles.preferenceText,
                styles.boldText,
                styles.smallerText,
              ]}
            >
              Favorites
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.preferenceBox}
            onPress={() => navigation.navigate("OrderHistory")}
          >
            <Ionicons name="receipt" size={45} color="#FF4960" />
            <Text
              style={[
                styles.preferenceText,
                styles.boldText,
                styles.smallerText,
              ]}
            >
              Order History
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.settingsContainer}>
          <SettingItem icon="key" title="Account Details" nav="Account" />
          <SettingItem icon="person" title="Profile" nav="ProfileDetails" />
          <SettingItem icon="lock-closed" title="Privacy" nav="Privacy" />
          <SettingItem
            icon="restaurant"
            title="Dietary Restrictions"
            nav="Dietary"
          />
          <SettingItem
            icon="notifications"
            title="Notifications"
            nav="Notifs"
          />
          <SettingItem icon="help-circle" title="FAQ" nav="FAQ" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 100,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  profileIcon: {
    marginRight: 10,
  },
  headerTextContainer: {
    flex: 1,
  },
  preferencesTitle: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    paddingHorizontal: 10,
  },
  userEmail: {
    color: "grey",
    marginTop: 5,
  },
  scrollView: {
    width: "100%",
  },
  scrollViewContent: {
    alignItems: "center",
  },
  preferencesRow: {
    flexDirection: "row",
    padding: 10,
  },
  preferenceBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginHorizontal: 5,
    backgroundColor: "#F6F7FB",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#F6F7FB",
  },
  preferenceText: {
    fontSize: 18,
    marginTop: 5,
  },
  boldText: {
    fontWeight: "bold",
  },
  smallerText: {
    fontSize: 14,
  },
  settingsContainer: {
    marginTop: 10,
    backgroundColor: "#F6F7FB",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#F6F7FB",
    width: "93%",
    alignSelf: "center",
    padding: 5,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  settingText: {
    fontSize: 18,
    marginLeft: 10,
  },
  iconOutline: {
    position: "absolute",
    borderWidth: 1,
    borderColor: "black",
  },
  dietaryRestrictionsContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  dietaryRestrictionsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 16,
  },
});

export default ProfileScreen;
