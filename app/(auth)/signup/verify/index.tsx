import { View, Text } from "react-native";
import React from "react";
import { Button, Surface } from "react-native-paper";

export default function index() {
  return (
    <Surface>
      <View>
        <Text>Verify with OTP sent to 7044797802 </Text>
        <Button>Continue</Button>
        <Text>Didn't receive the OTP?</Text>
      </View>
    </Surface>
  );
}
