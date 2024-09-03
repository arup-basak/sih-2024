import React from "react";
import { View, Text, Image } from "react-native";
import { Button, Surface } from "react-native-paper";
import { useRouter } from "expo-router";
import styles from "@/styles/style";

export default function Index() {
  const router = useRouter();
  const handleClick = () => {
    router.navigate("/location");
  };

  return (
    <Surface style={styles.container}>
      <View className="relative bg-[#FFEEBD] ">
        <Image
          className="object-fill w-full h-full absolute z-0 "
          source={require("../assets/images/LandingBackground.png")}
        />
        <Image
          className="object-fill w-full h-full absolute z-10 opacity-60"
          source={require("../assets/images/gradient.png")}
        />

        <View className="p-4 absolute w-full bottom-10 z-20">
          <Text className="text-5xl font-bold text-white border-b-2 border-white pb-4">
            Harvest
            <Text className="text-[#4CAF50]">Link</Text>
          </Text>
          <Text className="pt-4 text-white">
            Cultivating Connections, Harvesting Value
          </Text>
          <Text
            onPress={handleClick}
            className="w-full p-3 py-6 mt-10 bg-[#4CAF50] text-center text-md text-white text-xl font-bold rounded-3xl"
          >
            Get Started
          </Text>
          <View>
            <Text>HarvestLink</Text>
            <Text>Cultivating Connections, Harvesting Value</Text>
            <Button onPress={handleClick}>Get Started</Button>
          </View>
        </View>
      </View>
    </Surface>
  );
}
