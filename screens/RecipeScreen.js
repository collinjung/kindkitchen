// const messages = useQuery(api.messages.list) || [];
// const sendMessage = useMutation(api.messages.send);
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
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
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      style={styles.container}
    >
      <ScrollView>
        {messages?.map((message, i) => (
          <Text key={i} style={styles.message}>
            <Text style={styles.author}>{message.author}: </Text>
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
        <Button
          title="Send"
          onPress={() => {
            console.log("hi");
            sendMessage({ author: "User", body: newMessageText });
            setNewMessageText("");
          }}
          disabled={!newMessageText}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  message: {
    marginBottom: 10,
  },
  author: {
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginRight: 15,
    marginBottom: 10,
    flex: 2,
  },
});

export default RecipeScreen;
