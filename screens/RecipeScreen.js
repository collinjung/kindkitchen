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
import Ionicons from "@expo/vector-icons/Ionicons";

const MessageRender = ({ message }) => {
  const data =
    message.author === "user"
      ? {
          author: "User",
          icon: "person-circle-outline",
          color: "white",
          align: "flex-end",
          m: 40,
        }
      : {
          author: "OpenPlate AI",
          icon: "happy-outline",
          color: "#FF7E7E",
          align: "flex-start",
          m: 0,
        };
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        marginLeft: data.m,
      }}
    >
      {data.author === "OpenPlate AI" ? (
        <Ionicons
          name={data.icon}
          size={40}
          color={"tomato"}
          style={{ marginTop: 3 }}
        />
      ) : null}
      <View style={[styles.message, { backgroundColor: data.color }]}>
        <Text>
          {data.author === "User" ? null : (
            <Text style={styles.author}>{data.author}: </Text>
          )}
          <Text>{message.body ?? "..."}</Text>
        </Text>
      </View>
      {data.author === "User" ? (
        <Ionicons
          name={data.icon}
          size={40}
          color={"tomato"}
          style={{ marginTop: 3 }}
        />
      ) : null}
    </View>
  );
};

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
          <MessageRender key={i} message={message} />
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
    borderColor: "#FF4960",
    flex: 1,
    // marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  message: {
    padding: 20,
    display: "flex",
    borderRadius: 20,
    margin: 5,
    justifyContent: "center",
    width: 250,
  },
  author: {
    fontWeight: "bold",
  },
  input: {
    borderWidth: 3,
    borderRadius: 15,
    borderColor: "#FF4960",
    padding: 14,
    marginRight: 15,
    // marginBottom: 10,
    flex: 3,
  },
});

export default RecipeScreen;
