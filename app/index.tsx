import React from "react";
import { SafeAreaView, Text, View } from "react-native";

import { Link } from "expo-router";
import { useTheme } from "../hooks/use-theme";

export default function ThemeTestScreen() {
  const { colors, setTheme, toggleTheme } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}>
        <Link href={"/onbording"}>
          <Text style={{ color: colors.text }}>
            hello navigate to onbording screen
          </Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
