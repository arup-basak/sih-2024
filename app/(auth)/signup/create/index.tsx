import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Button, Surface, TextInput } from "react-native-paper";
import { router } from "expo-router";

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
    <Surface>
      <View>
        <TextInput
          mode="outlined"
          label="Your Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          mode="outlined"
          label="Mobile No"
          value={mobileNo}
          onChangeText={setMobileNo}
        />
        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button onPress={handleVerifyMobileNo} mode="contained-tonal">
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
