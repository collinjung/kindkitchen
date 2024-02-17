import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width + 10;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({ item, index }) => {
  return (
    <ScrollView>
      <View style={styles.container} key={index}>
        <Image source={{ uri: item.imgUrl }} style={styles.image} />
        <Text style={styles.header}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </View>
      <View
        style={{
          paddingTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>{item.info}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDD3E1",
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default CarouselCardItem;
