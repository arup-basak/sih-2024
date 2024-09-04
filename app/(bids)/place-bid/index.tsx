import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { Button, Surface } from "react-native-paper";
import styles from "@/styles/style";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <View className="gap-14">

      <View className="bg-tertiary rounded-b-3xl">
        <View className="p-8 flex-row">
          <View className="flex-1">
            <Text className="text-3xl font-semibold">Apples</Text>
            <Text className="text-xl font-semibold text-slate-800">
              25 Cartoons
            </Text>
          </View>

          <Image
            source={require("@/assets/images/apple.png")}
            style={{ height: 200, width: 200 }}
            className="flex-1"
          />
        </View>

        <View className="p-8 flex-row border-t border-gray-500">
          <Text className="flex-1">
            Exquisite Kashmiri apples: Crisp, juicy, and aromatic mountain-grown
            delights.
          </Text>

          <Button mode="contained" className="flex-1">
            Add
          </Button>
        </View>
      </View>
      <View className="flex-row gap-4 items-center justify-center">
        <View className="items-center justify-center">
          <Text className="text-2xl font-semibold text-green">
            Current Bid:
          </Text>
          <Text className="text-4xl font-semibold text-green">$100</Text>
        </View>
        <View className="items-center justify-center">
          <Text className="text-2xl font-semibold text-green">Your Bid:</Text>
          <Text className="text-4xl font-semibold text-green">$100</Text>
        </View>
      </View>
      <View className="items-center justify-center gap-3">
        <Pressable
          onPress={() => {}}
          className="border border-red-500 p-3 text-red-500 items-center justify-center"
          style={{ borderRadius: 14, width: 200 }}
        >
          <Text>$100 Per Tap</Text>
        </Pressable>
        <Button
          buttonColor="#B60909"
          textColor="white"
          style={{ borderRadius: 14, width: 200 }}
        >
          Place Bid
        </Button>
      </View>
      </View>
    </SafeAreaView>
  );
}
