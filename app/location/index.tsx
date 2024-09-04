import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import * as Location from "expo-location";
import styles from "@/styles/style";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const requstLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View className="space-y-4 p-4 pt-48">
        <View>
          <Text className="text-3xl font-semibold text-center">Whats Your</Text>
          <Text className="text-4xl font-semibold text-center">Location</Text>
        </View>

        <View className="items-center justify-center" style={{ height: 350 }}>
          <Image
            source={require("@/assets/images/location.png")}
            style={{ height: 300, width: 300 }}
          />
        </View>
      </View>
      <View className="absolute bottom-8 items-center justify-center w-full">
        <Button
          onPress={requstLocationPermission}
          mode="contained"
          style={{ borderRadius: 12, width: 300 }}
        >
          Allow Location Access
        </Button>
        <Button onPress={() => router.navigate("/login")}>
          <Text>Enter Location Manually</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
