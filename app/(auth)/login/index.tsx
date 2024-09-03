import { View, Text, Pressable, Touchable } from "react-native";
import React from "react";
import Logo from "@/components/Logo";
import { Button, Icon, Surface, TextInput } from "react-native-paper";
import styles from "@/styles/style";
import { useResponsiveWidth } from "react-native-responsive-dimensions";
import { router } from "expo-router";

export default function index() {
  const width = useResponsiveWidth(84);

  const handleSignIn = () => {
    router.navigate("/dashboard");
  };

  const handleSignInGoogle = () => {};
  return (
    <Surface style={styles.container}>
      <View className="items-center pt-24">
        <Text className="text-2xl">Welcome To</Text>
        <Logo />
      </View>
      <View className="bg-green p-8 absolute bottom-0 rounded-t-3xl space-y-4 pb-24">
        <Text className="text-white text-xl text-center ">
          Sign In or Create an Account
        </Text>

        <View className="space-y-2">
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
          style={{ borderRadius: 12, width }}
        >
          <Icon source={"google"} size={24} color="black" />
          <Text className="text-xs">Continue with Google</Text>
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
    </Surface>
  );
}
