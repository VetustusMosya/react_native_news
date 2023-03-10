import React from "react";
import { StyleSheet, View } from "react-native";

import NewsList from "../components/NewsList";

export default function HomeScreen({ navigation }) {
  const openPost = (item) => {
    navigation.navigate("PostScreen", item);
  };

  return (
    <View style={styles.container}>
      <NewsList navigation={navigation} openPost={openPost}></NewsList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
  },
  imag: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  header: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});
