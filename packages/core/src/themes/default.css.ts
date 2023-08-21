import { createTheme } from "@vanilla-extract/css";
import { tokenVars } from "../tokens/index.css";

export const defaultTheme = {
  color: {
    brand: tokenVars.color.gray[100],
  },
};

export type ThemeValues = typeof defaultTheme;

export const [defaultThemeClassName, vars] = createTheme(defaultTheme);
