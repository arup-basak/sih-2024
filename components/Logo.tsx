import { View, Text } from "react-native";
import React from "react";

interface Props {
  color?: "black" | "white";
}

export default function Logo({ color = "black" }: Props) {
  return (
    <View className="flex-row">
      <Text className={`${color === "black" ? "text-black" : "text-white"} text-3xl font-semibold`}>
        Harvest
      </Text>
      <Text className="text-green text-3xl font-semibold">Link</Text>
    </View>
  );
}
