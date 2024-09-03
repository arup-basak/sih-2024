import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Button, Surface, TextInput } from "react-native-paper";
import { router } from "expo-router";
import styles from "@/styles/style";
import { useResponsiveWidth } from "react-native-responsive-dimensions";

export default function index() {
  const width = useResponsiveWidth(80);

  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");

  const handleVerifyMobileNo = () => {
    const userData = {
      name: name,
      pass: password,
      mob: mobileNo,
    };
    console.log(JSON.stringify(userData, null, 2));
    router.navigate("/signup/verify");
  };

  return (
    <Surface style={styles.container}>
      <View className="h-full items-center gap-12 pt-24">
        <View className="space-y-2">
          <TextInput
            mode="outlined"
            theme={{ roundness: 8 }}
            label="Your Name"
            value={name}
            onChangeText={setName}
            style={{ width }}
          />
          <TextInput
            mode="outlined"
            theme={{ roundness: 8 }}
            label="Mobile No"
            value={mobileNo}
            onChangeText={setMobileNo}
            style={{ width }}
          />
          <TextInput
            mode="outlined"
            theme={{ roundness: 8 }}
            label="Password"
            value={password}
            onChangeText={setPassword}
            style={{ width }}
            secureTextEntry
          />

          <Button
            onPress={handleVerifyMobileNo}
            mode="contained"
            style={{ borderRadius: 12, marginTop: 18 }}
          >
            Verify Mobile No
          </Button>
        </View>

        <View className="absolute bottom-12 items-center justify-center">
          <Text>Already have an account?</Text>
          <Pressable onPress={() => router.navigate("/login")}>
            <Text className="text-green">Sign in Instead</Text>
          </Pressable>
        </View>
      </View>
    </Surface>
  );
}
