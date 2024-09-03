import { View, Text, Pressable } from "react-native";
import React from "react";
import Logo from "@/components/Logo";
import { Surface, Button } from "react-native-paper";
import { router } from "expo-router";
import styles from "@/styles/style";

export default function index() {
  return (
    <Surface style={styles.container}>
      <View>
        <Text>{"Look Like you're new to"}</Text>
        <Logo />
      </View>

      <View>
        <Text>{"Let's create an account for you"}</Text>
      </View>

      <Button onPress={() => router.navigate("/signup/create")}>Proceed to create an account</Button>

      <View>
        <Text>Already have an account?</Text>
        <Pressable onPress={() => router.navigate("/login")}>
          Sign in with another email or mobile
        </Pressable>
      </View>
    </Surface>
  );
}
