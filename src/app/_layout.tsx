import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { TamaguiProvider } from "tamagui";
import { config } from "./tamagui.config";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return <TamaguiProvider config={config} defaultTheme={colorScheme === "dark" ? "dark" : "light"}>
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack />
    </ThemeProvider>
  </TamaguiProvider>;
}
