import React from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function PostScreen({ route }) {
  const item = route.params;
  const [
    {
      caption,
      "media-metadata": [, , { url }],
    },
  ] = item.media;
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: `${url}` }} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.abstract}</Text>
          <Text style={styles.text}>{caption}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    height: 293,
    width: "100%",
    borderRadius: 15,
    marginBottom: 20,
  },
  title: {
    fontWeight: 700,
    fontSize: 24,
  },
  text: {
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
    fontSize: 18,
  },
});
