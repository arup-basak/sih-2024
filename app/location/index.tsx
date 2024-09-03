import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { Button, Surface } from "react-native-paper";
import * as Location from "expo-location";
import styles from "@/styles/style";
import { router } from "expo-router";

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
    <Surface style={styles.container}>
      <View className="space-y-4 p-4">
        <View>
          <Text className="text-2xl font-semibold text-center">Whats Your</Text>
          <Text className="text-3xl font-semibold text-center">Location</Text>
        </View>

        <View className="items-center justify-center" style={{ height: 350 }}>
          <Image
            source={require("@/assets/images/location.png")}
            style={{ height: 250, width: 250 }}
          />
        </View>

        <View>
          <Button
            onPress={requstLocationPermission}
            mode="contained"
            style={{ borderRadius: 12 }}
          >
            Allow Location Access
          </Button>
          <Button onPress={() => router.navigate("/login")}>
            <Text>Enter Location Manually</Text>
          </Button>
        </View>
      </View>
    </Surface>
  );
}
