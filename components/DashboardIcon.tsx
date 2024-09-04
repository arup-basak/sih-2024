import { View, Text, Image, Pressable } from "react-native";
import React from "react";

interface IData {
  icon: string;
  heading: string;
}

interface Props {
  item: IData;
}

export default function DashboardIcon({ item }: Props) {
  const { icon, heading } = item;
  return (
    <Pressable onPress={() => {}}>
      <View className="items-center justify-center gap-2">
        <View className="p-2 bg-background rounded-full">
          <Image
            source={require("@/assets/images/icon.png")}
            style={{ height: 30, width: 30 }}
          />
        </View>
        <Text className="font-semibold text-center">{heading}</Text>
      </View>
    </Pressable>
  );
}
