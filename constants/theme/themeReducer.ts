import type { ThemeAction, ThemeState } from "./types";

export const initialThemeState: ThemeState = {
  mode: "system",
};

export function reducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, mode: action.payload };
    case "TOGGLE_THEME":
      return { ...state, mode: action.payload === "dark" ? "light" : "dark" };
    case "SET_SYSTEM":
      return { ...state, mode: "system" };
    default:
      return state;
  }
}
