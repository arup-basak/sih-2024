import { View, Text } from "react-native";
import React from "react";

interface Props {
  color?: "black" | "white";
  size?: "medium" | "large";
}

export default function Logo({ color = "black", size = "medium" }: Props) {
  const textSize = size === "medium" ? "text-3xl" : "text-4xl";
  return (
    <View className="flex-row">
      <Text className={`${color === "black" ? "text-black" : "text-white"} ${textSize} font-semibold`}>
        Harvest
      </Text>
      <Text className={`text-green ${textSize} font-semibold`}>Link</Text>
    </View>
  );
}
