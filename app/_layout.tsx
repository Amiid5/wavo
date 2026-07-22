import { Stack } from "expo-router";
import { ThemeProvider } from "../constants/theme/themeContext";

export default function Layout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
