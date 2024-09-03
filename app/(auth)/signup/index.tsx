import { View, Text, Pressable } from "react-native";
import React from "react";
import Logo from "@/components/Logo";
import { Surface, Button } from "react-native-paper";
import { router } from "expo-router";
import styles from "@/styles/style";

export default function index() {
  return (
    <Surface style={styles.container}>
      <View className="h-full items-center gap-12 pt-24">
        <View className="items-center justify-center space-y-2">
          <Text className="text-2xl font-semibold">
            {"Look Like you're new to"}
          </Text>
          <Logo />
        </View>

        <View className="items-center justify-center space-y-4">
          <Text className="text-xl font-semibold">
            {"Let's create an account for you"}
          </Text>
          <Button
            onPress={() => router.navigate("/signup/create")}
            mode="contained"
          >
            Proceed to create an account
          </Button>
        </View>

        <View className="absolute bottom-12 items-center justify-center">
          <Text>Already have an account?</Text>
          <Pressable onPress={() => router.navigate("/login")}>
            <Text className="text-green">
              Sign in with another email or mobile
            </Text>
          </Pressable>
        </View>
      </View>
    </Surface>
  );
}
