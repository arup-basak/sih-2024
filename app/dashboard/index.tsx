import { View, Text } from "react-native";
import React from "react";
import { Surface } from "react-native-paper";
import styles from "@/styles/style";

export default function index() {
  return (
    <Surface style={styles.container}>
      <View>
        <Text>index</Text>
      </View>
    </Surface>
  );
}
