import { View, Text } from "react-native";
import React, { useState } from "react";
import { Button, Surface } from "react-native-paper";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  const handleClick = () => {
    router.navigate("/location");
  };
  
  return (
    <Surface>
      <View>
        <Text>HarvestLink</Text>
        <Text>Cultivating Connections, Harvesting Value</Text>
        <Button onPress={handleClick}>Get Started</Button>
      </View>
    </Surface>
  );
}
