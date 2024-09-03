import { View, Text, Pressable } from "react-native";
import React from "react";
import Logo from "@/components/Logo";
import { Button, Surface, TextInput } from "react-native-paper";
import styles from "@/styles/style";

export default function index() {
  const handleSignIn = () => {};

  const handleSignInGoogle = () => {};
  return (
    <Surface style={styles.container}>
      <View>
        <Text>Welcome To</Text>
        <Logo />
      </View>
      <View>
        <Text>Sign In or Create an Account</Text>
        <TextInput label="Enter Mobile No" mode="outlined" />
        <Button onPress={handleSignIn}>Sign In</Button>

        <Pressable onPress={handleSignInGoogle}>Sign In With Google</Pressable>
      </View>
    </Surface>
  );
}
