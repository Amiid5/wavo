import { palette } from "./palette";
import type { colorScheme, themeSchema } from "./types";

const light: themeSchema = {
  scheme: "light",
  colors: {
    background: palette.white,
    text: palette.black,
    borderColor: palette.red,
  },
};

const dark: themeSchema = {
  scheme: "dark",
  colors: {
    background: palette.black,
    text: palette.white,
    borderColor: palette.white,
  },
};

export const themes: Record<colorScheme, themeSchema> = { light, dark };
