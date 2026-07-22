import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useMemo, useReducer } from "react";
import { useColorScheme } from "react-native";

import { themes } from "./colors";
import { initialState, reducer } from "./themeReducer";
import type { colorScheme, themeMode } from "./types";

const STORAGE_KEY = "app:storage";

interface ThemeContextValue {
  mode: themeMode;
  resolvedScheme: colorScheme;
  colors: (typeof themes)[colorScheme]["colors"];
  setTheme: (mode: themeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const deviceScheme = useColorScheme();

  // Load saved preference once, on mount
  useEffect(() => {
    let isMounted = true;

    async function loadSavedTheme() {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (isMounted && saved) {
          dispatch({ type: "HYDRATE", payload: saved as themeMode });
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

  // Persist whenever mode changes
  useEffect(() => {
    async function saveTheme() {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, state.mode);
      } catch {
        // ignore write errors
      }
    }

    saveTheme();
  }, [state.mode]);

  const resolvedScheme: colorScheme =
    state.mode === "system"
      ? deviceScheme === "dark"
        ? "dark"
        : "light"
      : state.mode;

  const colors = themes[resolvedScheme].colors;

  const value = useMemo<ThemeContextValue>(
    () => ({
      mode: state.mode,
      resolvedScheme,
      colors,
      setTheme: (mode) => dispatch({ type: "SET_THEME", payload: mode }),
      toggleTheme: () => dispatch({ type: "TOGGLE", payload: resolvedScheme }),
    }),
    [state.mode, resolvedScheme, colors],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
