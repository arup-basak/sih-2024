import { View, Text, Pressable } from "react-native";
import React from "react";
import Logo from "@/components/Logo";
import { Button, Icon, TextInput } from "react-native-paper";
import styles from "@/styles/style";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function index() {

  const handleSignIn = () => {
    router.navigate("/dashboard");
  };

  const handleSignInGoogle = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View className="items-center pt-48">
        <Text className="text-3xl">Welcome To</Text>
        <Logo size="large" />
      </View>

      <View className="bg-green p-8 absolute w-full justify-center bottom-0 rounded-t-3xl gap-6 pb-24">
        <Text className="text-white text-2xl text-center">
          Sign In or Create an Account
        </Text>

        <View className="gap-2">
          <Text className="text-white text-center">
            Enter mobile number or email
          </Text>
          <TextInput mode="outlined" theme={{ roundness: 12 }} />
          <Button
            onPress={handleSignIn}
            mode="contained"
            style={{ borderRadius: 12 }}
            buttonColor="#FFD814"
            textColor="black"
          >
            Continue
          </Button>
        </View>

        <View>
          <Text className="text-white text-center">Or</Text>
        </View>

        <Pressable
          onPress={handleSignInGoogle}
          className="bg-white w-fit p-3 flex-row gap-2 items-center justify-center"
          style={{ borderRadius: 12, width: 350 }}
        >
          <Icon source={"google"} size={24} color="black" />
          <Text className="text-sm">Continue with Google</Text>
        </Pressable>

        <View className="flex-row items-center justify-center gap-2">
          <Pressable onPress={() => router.navigate("/signup")}>
            <View className="flex-row gap-2">
              <Text className="text-white">{"Don't Have Account?"}</Text>
              <Text className="text-[#FFD814]">{"Sign Up"}</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
