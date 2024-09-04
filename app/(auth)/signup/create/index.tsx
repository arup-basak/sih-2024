import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Button, Surface, TextInput } from "react-native-paper";
import { router } from "expo-router";
import styles from "@/styles/style";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
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
    <SafeAreaView style={styles.container}>
      <View className="h-full items-center gap-12 pt-24">
        <View className="items-center justify-center space-y-2">
          <Text className="text-2xl font-semibold">{"Create an account"}</Text>
        </View>
        <View className="gap-3">
          <TextInput
            mode="outlined"
            theme={{ roundness: 8 }}
            label="Your Name"
            value={name}
            onChangeText={setName}
            style={{ width: 350 }}
          />
          <TextInput
            mode="outlined"
            theme={{ roundness: 8 }}
            label="Mobile No"
            value={mobileNo}
            onChangeText={setMobileNo}
            style={{ width: 350 }}
          />
          <TextInput
            mode="outlined"
            theme={{ roundness: 8 }}
            label="Password"
            value={password}
            onChangeText={setPassword}
            style={{ width: 350 }}
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
    </SafeAreaView>
  );
}
