// const messages = useQuery(api.messages.list) || [];
// const sendMessage = useMutation(api.messages.send);
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

const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Hello world</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChatScreen;
