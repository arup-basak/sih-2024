import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Button, Surface, TextInput } from "react-native-paper";
import { router } from "expo-router";
import styles from "@/styles/style";

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
    <Surface style={styles.container}>
      <View>
        <TextInput
          mode="outlined" theme={{ roundness: 8 }}
          label="Your Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          mode="outlined" theme={{ roundness: 8 }}
          label="Mobile No"
          value={mobileNo}
          onChangeText={setMobileNo}
        />
        <TextInput
          mode="outlined" theme={{ roundness: 8 }}
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button onPress={handleVerifyMobileNo} mode="contained">
          Verify Mobile No
        </Button>
      </View>
      <View>
        <Text>Already have an account?</Text>
        <Pressable onPress={() => router.navigate("/login")}>
          Sign in Instead
        </Pressable>
      </View>
    </Surface>
  );
}
