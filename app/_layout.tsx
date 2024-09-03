import { Stack } from "expo-router";
import { PaperProvider, MD3LightTheme, MD3DarkTheme } from "react-native-paper";
import { useColorScheme } from "react-native";
import "../global.css";

export default function RootLayout() {
  const customTheme = {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      primary: "#4CAF50",
      secondary: "#FEE189",
      background: "#FFF8E1"
    },
  };
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? { ...MD3DarkTheme, ...customTheme } : customTheme;

  return (
    <PaperProvider theme={theme}>
      <Stack>
        <Stack.Screen name="index" options={{headerShown: false}}/>
        <Stack.Screen name="location" options={{headerShown: false}}/>
      </Stack>
    </PaperProvider>
  );
}
