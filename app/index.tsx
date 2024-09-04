import React from "react";
import { View, Text, Image } from "react-native";
import { Button, Surface } from "react-native-paper";
import { useRouter } from "expo-router";
import styles from "@/styles/style";
import Logo from "@/components/Logo";
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";

export default function Index() {
  const AnimatedLinearGradient =
    Animated.createAnimatedComponent(LinearGradient);
  const router = useRouter();
  const handleClick = () => {
    router.navigate("/location");
  };

  return (
    <Surface style={styles.container}>
      <View className="relative items-center">
        <View className="absolute -bottom-[30rem] w-full h-full items-center justify-center">
          <Image
            source={require("@/assets/images/LandingBackground.png")}
            style={{ height: 584, width: 288 }}
          />
        </View>

        <AnimatedLinearGradient
          colors={["rgba(255,255,255, 0)", "rgba(0,0,0, 1)"]}
          style={{
            position: "absolute",
            top: 500,
            left: 0,
            right: 0,
            height: 500,
          }}
        />
      </View>
      <View className="absolute space-y-2 bottom-12 gap-2 items-center justify-center w-full">
        <Logo color="white" />
        <Text className="text-white text-sm">
          Cultivating Connections, Harvesting Value
        </Text>

        <Button
          mode="contained"
          style={{ borderRadius: 12, width: 300, padding: 2 }}
          onPress={handleClick}
        >
          Get Started
        </Button>
      </View>
    </Surface>
  );
}
