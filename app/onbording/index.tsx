import { fonts } from "@/constants/design_token/typography";
import { useTheme } from "@/hooks/use-theme";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { colors } = useTheme();
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: colors.background,
          margin: 50,
          borderRadius: 20,
          boxShadow: "0px 0px 40px rgba(0,0,0,0.2)",
        }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: fonts.bold,
            padding: 50,
            color: colors.text,
          }}>
          index
        </Text>
      </View>
    </SafeAreaView>
  );
}
