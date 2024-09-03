import { View, Text, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { Button, Surface } from "react-native-paper";
import * as Location from "expo-location";

export default function index() {
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

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

        <Button>Allow Location Access</Button>
        <Pressable>Enter Location Manually</Pressable>
      </View>
    </Surface>
  );
}
