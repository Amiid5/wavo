export type colorScheme = "light" | "dark";
export type themeMode = colorScheme | "system";

export type themeAction =
  | { type: "SET_THEME"; payload: themeMode }
  | { type: "TOGGLE"; payload: colorScheme }
  | { type: "HYDRATE"; payload: themeMode };

export interface ThemeState {
  mode: themeMode;
}

export interface themeSchema {
  scheme: colorScheme;
  colors: {
    background: string;
    text: string;
    borderColor: string;
  };
}
