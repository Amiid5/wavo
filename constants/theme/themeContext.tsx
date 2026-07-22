import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useMemo, useReducer } from "react";
import { useColorScheme as useSystemColorScheme } from "react-native";

import { theme } from "./colors";
import { initialThemeState, reducer } from "./themeReducer";
import type { ColorScheme, Mode, ThemeSchema } from "./types";

const THEME_STORAGE = "app:theme";

interface ThemeContextValueType {
  mode: Mode;
  colorScheme: ColorScheme;
  colors: ThemeSchema["colors"];
  setTheme: (mode: Mode) => void;
  toggleTheme: () => void;
  setSystem: () => void;
}

export const ThemeContext = createContext<ThemeContextValueType | undefined>(
  undefined,
);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialThemeState);

  const systemScheme = useSystemColorScheme(); // 'light' | 'dark' | null, auto-updates

  const colorScheme = state.mode === "system" ? systemScheme === "light" ? "dark" : state.mode


  useEffect(() => {
    let isMounted = true;

    async function loadSavedTheme() {
      try {
        const stored = await AsyncStorage.getItem(THEME_STORAGE);
        if (isMounted && stored) {
          dispatch({ type: "SET_THEME", payload: stored as Mode });
        }
      } catch {
        // ignore read errors, fall back to default "system"
      }
    }

    loadSavedTheme();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    async function saveTheme() {
      try {
        await AsyncStorage.setItem(THEME_STORAGE, state.mode);
      } catch {
        // ignore write errors
      }
    }

    saveTheme();
  }, [state.mode]);

  const value = useMemo<ThemeContextValueType>(() => {
    return {
      mode: state.mode,
      colorScheme,
      colors: theme[colorScheme].colors,
      setTheme: (mode: Mode) => dispatch({ type: "SET_THEME", payload: mode }),
      toggleTheme: () =>
        dispatch({ type: "TOGGLE_THEME", payload: colorScheme }),
      setSystem: () => dispatch({ type: "SET_SYSTEM" }),
    };
  }, [state.mode, colorScheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}