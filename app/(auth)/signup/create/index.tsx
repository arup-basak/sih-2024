import { View, Text, Pressable } from "react-native";
import React from "react";
import { Surface, TextInput } from "react-native-paper";
import { router } from "expo-router";

export default function index() {
  return (
    <Surface>
      <View>
        <TextInput mode="outlined" label="Your Name" />
        <TextInput mode="outlined" label="Mobile No" />
        <TextInput mode="outlined" label="Password" />
      </View>
      <View>
        <Text>Already have an account?</Text>
        <Pressable onPress={() => router.navigate("/login")}>
          Sign In Instead
        </Pressable>
      </View>
    </Surface>
  );
}
