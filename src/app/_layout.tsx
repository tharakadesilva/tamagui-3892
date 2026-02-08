import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { TamaguiProvider } from "tamagui";
import { config } from "./tamagui.config";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return <TamaguiProvider config={config} defaultTheme={colorScheme ?? "light"}>
    <Stack />
  </TamaguiProvider>;
}
