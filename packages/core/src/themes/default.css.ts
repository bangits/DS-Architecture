import { createTheme } from "@vanilla-extract/css";
import { colorsRed100 } from "../tokens/color";

export const defaultTheme = {
  color: {
    brand: colorsRed100,
  },
};

export type ThemeValues = typeof defaultTheme;

export const [defaultThemeClassName, vars] = createTheme(defaultTheme);
