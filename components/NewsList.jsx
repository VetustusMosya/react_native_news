import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Alert,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import Post from "./Post";

const NewsList = () => {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetch(
        "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=C1NeVBIaw5xjoPcY4xVAu0YDsv3UxGsx"
      );
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      Alert.alert("Error", "Fetch was failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(getPosts, 2000);
  }, []);

  if (isLoading) {
    return (
      <ActivityIndicator
        size="large"
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      ></ActivityIndicator>
    );
  } else {
    return (
      <>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={getPosts}
            ></RefreshControl>
          }
          style={styles.newsList}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("Post", item)}>
              <Post item={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 40 }}
        ></FlatList>
      </>
    );
  }
};

const styles = StyleSheet.create({
  newsList: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
});

export default NewsList;
