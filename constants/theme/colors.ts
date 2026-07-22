import { palette } from "./palette";
import type { ColorScheme, ThemeSchema } from "./types";

const light: ThemeSchema = {
  colorScheme: "light",
  colors: {
    appBackground: palette.white,
    appText: palette.black,
  },
};

const dark: ThemeSchema = {
  colorScheme: "dark",
  colors: {
    appBackground: palette.black,
    appText: palette.white,
  },
};

export const theme: Record<ColorScheme, ThemeSchema> = {
  light,
  dark,
};
