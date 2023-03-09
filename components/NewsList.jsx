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
  const [page, setPage] = useState(0);

  const getPosts = async () => {
    try {
      const response = await fetch(
        `https://api.nytimes.com/svc/news/v3/content/all/all.json?limit=20&offset=${page}&api-key=C1NeVBIaw5xjoPcY4xVAu0YDsv3UxGsx`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );
      const json = await response.json();
      setData([...data, ...json.results]);
    } catch (error) {
      Alert.alert("Error", "Fetch was failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, [page]);

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
          style={styles.newsList}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={() => {
                setPage(0);
                setData([]);
              }}
            ></RefreshControl>
          }
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            setPage(page + 20);
          }}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("Post", item)}>
              <Post item={item} key={item.id} />
            </TouchableOpacity>
          )}
          contentContainerStyle={{ paddingBottom: 40 }}
        ></FlatList>
      </>
    );
  }
};

const styles = StyleSheet.create({
  newsList: {
    flex: 1,
  },
});

export default NewsList;
