import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Post = ({ item, key, fun, action }) => {
  item.multimedia
    ? ([, { url }, ,] = item.multimedia)
    : (url =
        "https://pbs.twimg.com/profile_images/1456677404957683719/5oNFcjNQ_400x400.jpg");

  function cutTitle(text, limit) {
    text = text.trim();
    if (text.length <= limit) return text;
    text = text.slice(0, limit);
    lastSpace = text.lastIndexOf(" ");
    if (lastSpace > 0) {
      text = text.substr(0, lastSpace);
    }
    return text + "...";
  }

  return (
    <View style={styles.container} key={key}>
      <Image style={styles.imagine} source={{ uri: `${url}` }} />
      <View style={styles.details}>
        <Text style={styles.text}>{cutTitle(item.title, 70)}</Text>
        <TouchableOpacity style={styles.button} onPress={() => fun(item)}>
          <Text style={styles.like}>{action}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    color: "black",
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  details: {
    height: "100%",
    flex: 1,
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "transparent",
    alignSelf: "flex-end",
  },
  imagine: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 10,
    marginRight: 10,
  },
  text: {
    flex: 1,
    fontSize: 18,
  },
  like: {
    color: "grey",
    fontSize: 10,
  },
});

export default Post;
