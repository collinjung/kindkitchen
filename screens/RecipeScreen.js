// const messages = useQuery(api.messages.list) || [];
// const sendMessage = useMutation(api.messages.send);
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useQuery, useAction } from "convex/react";
import { api } from "../convex/_generated/api";

const RecipeScreen = () => {
  const messages = useQuery(api.messages.list) || [];
  const sendMessage = useAction(api.openai.chat);
  const [newMessageText, setNewMessageText] = useState("");

  return (
    <KeyboardAvoidingView
      behavior="height"
      // keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      style={styles.container}
    >
      <ScrollView>
        {messages?.map((message, i) => (
          <Text key={i} style={styles.message}>
            <Text style={styles.author}>
              {message.author === "user" ? "User" : "OpenPlate AI"}:{" "}
            </Text>
            <Text>{message.body ?? "..."}</Text>
          </Text>
        ))}
      </ScrollView>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={styles.input}
          value={newMessageText}
          onChangeText={(text) => setNewMessageText(text)}
          placeholder="Write a message…"
        />
        <TouchableOpacity
          title="Send"
          style={[
            styles.button,
            { backgroundColor: newMessageText ? "#EC6969" : "#D6D6D6" },
          ]}
          onPress={() => {
            sendMessage({ author: "user", body: newMessageText });
            setNewMessageText("");
          }}
          disabled={!newMessageText}
        >
          <Text style={{ color: newMessageText ? "white" : "gray" }}>
            Enter
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  button: {
    // borderWidth: 2,
    borderRadius: 15,
    borderColor: "#D93F50",
    flex: 1,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  message: {
    marginBottom: 10,
  },
  author: {
    fontWeight: "bold",
  },
  input: {
    borderWidth: 3,
    borderRadius: 15,
    borderColor: "#D93F50",
    padding: 14,
    marginRight: 15,
    marginBottom: 10,
    flex: 3,
  },
});

export default RecipeScreen;
