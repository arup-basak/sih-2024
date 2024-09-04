import { View, Text, Image } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { router } from "expo-router";

interface IData {
  bestseller: boolean;
  title: string;
  price: string;
  src: string;
}

interface Props {
  item: IData;
}

export default function DashboardCard({ item }: Props) {
  const { bestseller, title, price, src } = item;
  return (
    <View className="bg-secondary rounded-3xl m-2 border border-slate-500">
      <View className="p-5 pt-16 relative">
        {bestseller && (
          <View className="absolute top-5 right-0 bg-green p-2 rounded-l">
            <Text className="text-white">Bestseller</Text>
          </View>
        )}
        <View className="flex-row items-start justify-between">
          <Text className="text-xl font-semibold">{title}</Text>
          <Image
            source={require("@/assets/images/chilli.png")}
            style={{ height: 70, width: 150 }}
          />
        </View>
      </View>

      <View className="p-5 flex-row items-center justify-center border-t border-gray-500 border-opacity-30">
        <Text className="flex-1 text-lg">{price}</Text>
        <Button
          mode="contained"
          className="flex-1"
          style={{ borderRadius: 12 }}
          onPress={() => router.navigate("/create-bid")}
        >
          Add
        </Button>
      </View>
    </View>
  );
}
