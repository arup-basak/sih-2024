import { View, Text } from "react-native";
import React, { useState } from "react";
import { Button, Surface } from "react-native-paper";
import * as Location from "expo-location";

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
    <Surface>
      <View>
        <Text>Whats Your</Text>
        <Text>Location</Text>

        <Button onPress={requstLocationPermission} mode="contained-tonal">
          Allow Location Access
        </Button>
        <Button>
          <Text>Enter Location Manually</Text>
        </Button>
      </View>
    </Surface>
  );
}
