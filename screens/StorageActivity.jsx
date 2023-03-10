import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
  Button,
  ToastAndroid,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Post from "../components/Post";

export default function StorageScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const openPost = (item) => {
    navigation.navigate("PostScreen", item);
  };

  const getPosts = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const value = await AsyncStorage.multiGet(keys);
      setData(value);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const deletePost = async (item) => {
    try {
      await AsyncStorage.removeItem(item.slug_name);
      console.log(item.slug_name);
      ToastAndroid.show("Deleted", ToastAndroid.SHORT);
    } catch (error) {
      console.log(error);
    } finally {
      getPosts();
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.newsList}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => {
              getPosts();
            }}
          ></RefreshControl>
        }
        data={data}
        renderItem={({ item }) => {
          const [, jsonPost] = item;
          const post = JSON.parse(jsonPost);
          return (
            <TouchableOpacity onPress={() => openPost(post)}>
              <Post
                item={post}
                key={item.slug_name}
                fun={deletePost}
                action={"DELETE"}
              />
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={{ paddingBottom: 40 }}
      ></FlatList>
      <Button
        onPress={async () => {
          try {
            await AsyncStorage.clear();
          } catch (e) {}
          ToastAndroid.show("Clean", ToastAndroid.SHORT);
        }}
        title="Clean Storage"
        color="#567b95"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
  },
  newsList: {
    flex: 1,
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
