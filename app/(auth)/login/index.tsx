import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import Logo from "@/components/Logo";
import { Button, Surface, TextInput } from "react-native-paper";
import styles from "@/styles/style";

export default function index() {
  const handleSignIn = () => {};

  const handleSignInGoogle = () => {};
  return (
    <Surface style={styles.container}>
      <View className="w-full flex justify-center items-center py-24 bg-[#FFEEBD]">
        <Text className="text-2xl font-medium mb-4">Welcome To</Text>
        <Logo />
      </View>
      <View className="bg-[#4CAF50] h-full rounded-t-3xl py-20 px-10">
        <Text className="text-white text-2xl font-semibold mb-8">
          Sign In or Create an Account
        </Text>
        <TextInput label="Enter Mobile No" mode="outlined" />
        <Button
          mode="contained"
          onPress={handleSignIn}
          buttonColor="#FFD814"
          textColor="black"
          className="my-4"
        >
          Continue
        </Button>
        <Button onPress={handleSignIn}>Sign In</Button>

        <Text
          className="bg-white w-full p-3 font-semibold rounded-lg text-center"
          onPress={handleSignInGoogle}
        >
          Sign In With Google
        </Text>
        <Text
          className="bg-white w-full p-3 font-semibold rounded-lg text-center mt-4"
          onPress={handleSignInGoogle}
        >
          Sign In With Apple
        </Text>
      </View>
    </Surface>
  );
}
