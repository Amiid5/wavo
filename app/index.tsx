import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

import { useTheme } from "../hooks/use-theme";

export default function ThemeTestScreen() {
  const { colors, resolvedScheme } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style={resolvedScheme === "dark" ? "light" : "dark"} />

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}>
        <Text style={{ color: colors.text }}>hello</Text>
      </View>
    </SafeAreaView>
  );
}
