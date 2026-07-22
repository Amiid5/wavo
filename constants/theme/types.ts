type ColorScheme = "light" | "dark";
type Mode = ColorScheme | "system";

type ThemeAction =
  | { type: "SET_THEME"; payload: Mode }
  | { type: "TOGGLE_THEME"; payload: ColorScheme } // payload = currently resolved scheme
  | { type: "SET_SYSTEM" };

interface ThemeState {
  mode: Mode; // user's stored preference — can be "system"
}

interface ThemeSchema {
  colorScheme: ColorScheme; // resolved value actually rendered
  colors: {
    appBackground: string;
    appText: string;
  };
}

export type { ColorScheme, Mode, ThemeAction, ThemeSchema, ThemeState };
