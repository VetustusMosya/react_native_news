import React from "react";
import { StyleSheet, View } from "react-native";

import NewsList from "../components/NewsList";

export default function HomeScreen({}) {
  return (
    <View style={styles.container}>
      <NewsList></NewsList>
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
