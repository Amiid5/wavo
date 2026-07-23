import { useTheme } from "@/hooks/use-theme";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { ThemeProvider } from "../constants/theme/themeContext";

SplashScreen.preventAutoHideAsync();
function StatusBarCombonnets() {
  const { resolvedScheme } = useTheme();
  return <StatusBar style={resolvedScheme === "dark" ? "light" : "dark"} />;
}
export default function Layout() {
  const [fontLoaded] = useFonts({
    "sora-thin": require("../assets/fonts/Sora-Thin.ttf"),
    "sora-light": require("../assets/fonts/Sora-Light.ttf"),
    "sora-regular": require("../assets/fonts/Sora-Regular.ttf"),
    "sora-medium": require("../assets/fonts/Sora-Medium.ttf"),
    "sora-bold": require("../assets/fonts/Sora-Bold.ttf"),
    "sora-semiBold": require("../assets/fonts/Sora-SemiBold.ttf"),
    "sora-extraBold": require("../assets/fonts/Sora-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <StatusBarCombonnets />
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
