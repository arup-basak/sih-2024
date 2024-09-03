import { View, Text } from "react-native";
import React from "react";
import { Button, Surface, TextInput } from "react-native-paper";
import styles from "@/styles/style";

export default function index() {
  return (
    <Surface style={styles.container}>
      <View className="p-4 space-y-4">
        <Text className="text-2xl text-green w-full text-center font-semibold">
          ADD A PRODUCT
        </Text>
        <TextInput
          mode="outlined"
          theme={{ roundness: 8 }}
          placeholder="Enter Product Description"
        />
        <TextInput
          mode="outlined"
          theme={{ roundness: 8 }}
          placeholder="Enter Product Price"
        />
        <Button mode="contained">Upload</Button>
      </View>
    </Surface>
  );
}
