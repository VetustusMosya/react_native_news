import React from "react";
import { Text, View } from "react-native";

export default function PostScreen({ route }) {
  const item = route.params;
  return (
    <View>
      <Text>
        {/* {console.log()} */}
        {item.title}
      </Text>
    </View>
  );
}
