import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

import { useTheme } from "../hooks/use-theme";

export default function ThemeTestScreen() {
  const { colors, mode, colorScheme, setTheme, toggleTheme, setSystem } =
    useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.appBackground }}>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}>
        <Text style={{ color: colors.appText, fontSize: 18 }}>
          mode: {mode}
        </Text>
        <Text style={{ color: colors.appText, fontSize: 18 }}>
          resolved: {colorScheme}
        </Text>

        <View style={{ flexDirection: "row", gap: 12, marginTop: 16 }}>
          <Pressable onPress={() => setTheme("light")}>
            <Text
              style={{
                color: colors.appText,
                borderWidth: 1,
                borderColor: colors.appText,
                padding: 8,
                borderRadius: 8,
              }}>
              Light
            </Text>
          </Pressable>
          <Pressable onPress={() => setTheme("dark")}>
            <Text
              style={{
                color: colors.appText,
                borderWidth: 1,
                borderColor: colors.appText,
                padding: 8,
                borderRadius: 8,
              }}>
              Dark
            </Text>
          </Pressable>
          <Pressable onPress={() => setSystem()}>
            <Text
              style={{
                color: colors.appText,
                borderWidth: 1,
                borderColor: colors.appText,
                padding: 8,
                borderRadius: 8,
              }}>
              System
            </Text>
          </Pressable>
          <Pressable onPress={() => toggleTheme()}>
            <Text
              style={{
                color: colors.appText,
                borderWidth: 1,
                borderColor: colors.appText,
                padding: 8,
                borderRadius: 8,
              }}>
              Toggle
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
