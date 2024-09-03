import { View, Text } from "react-native";
import React from "react";
import { Button, Surface, TextInput } from "react-native-paper";
import styles from "@/styles/style";

export default function index() {
  return (
    <Surface style={styles.container}>
      <View>
        <Text>Add a Product</Text>
        <TextInput mode="outlined" placeholder="Enter Product Description" />
        <TextInput mode="outlined" placeholder="Enter Product Price" />
        <Button>Upload</Button>
      </View>
    </Surface>
  );
}
