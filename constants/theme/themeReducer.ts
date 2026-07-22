import type { themeAction, ThemeState } from "./types";

export const initialState: ThemeState = {
  mode: "system",
};

export function reducer(state: ThemeState, action: themeAction): ThemeState {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, mode: action.payload };
    case "TOGGLE":
      // action.payload is the currently-resolved scheme (light/dark),
      // passed in by the provider — this is what makes toggle correct
      // even when state.mode is "system"
      return { ...state, mode: action.payload === "dark" ? "light" : "dark" };
    case "HYDRATE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
}
