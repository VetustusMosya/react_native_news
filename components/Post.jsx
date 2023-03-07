import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Post = ({ item }) => {
  const [
    {
      "media-metadata": [, , { url }],
    },
  ] = item.media;
  return (
    <View style={styles.container}>
      <Image style={styles.imagine} source={{ uri: `${url}` }} />
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    color: "black",
    paddingBottom: 10,
  },
  imagine: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 10,
    marginRight: 10,
  },
  text: {
    width: "60%",
    fontSize: 18,
  },
});

export default Post;
