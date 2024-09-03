import { View, Text, Pressable } from "react-native";
import React from "react";
import { Button, Surface } from "react-native-paper";
import styles from "@/styles/style";

export default function index() {
  return (
    <Surface style={styles.container}>
      <View>
        <Text>Current Bid</Text>
        <Text>Your Bid</Text>
      </View>
      <View>
        <Pressable>$100 Per Tap</Pressable>
        <Button>Place Bid</Button>
      </View>
    </Surface>
  );
}
