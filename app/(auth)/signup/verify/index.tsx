import { View, Text } from "react-native";
import React from "react";
import { Button, Surface } from "react-native-paper";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { router } from "expo-router";
import styles from "@/styles/style";

export default function index() {
  return (
    <Surface style={styles.container}>
      <View className="h-full p-12 gap-4 pt-24">
        <Text className="text-2xl font-semibold text-center">Verify with OTP sent to 7044797802</Text>
        <OTPInputView pinCount={4} />
        <Button
          mode="contained"
          onPress={() => router.navigate("/dashboard")}
          style={{ borderRadius: 12 }}
        >
          Continue
        </Button>
        <Text>Didn't receive the OTP?</Text>
      </View>
    </Surface>
  );
}
