import { createTheme } from "@vanilla-extract/css";
import { tokenVars } from "../tokens/index.css";

export const defaultTheme = {
  color: {
    brand: tokenVars.color.teal[500],
    button: {
      primary: {
        states: {
          default: tokenVars.color.teal[500],
          hover: tokenVars.color.teal[600],
          selected: tokenVars.color.teal[700],
          disabled: tokenVars.color.gray[200],
        },
      },
      secondary: {
        states: {
          default: tokenVars.color.gray[500],
          hover: tokenVars.color.gray[600],
          selected: tokenVars.color.gray[700],
          disabled: tokenVars.color.gray[400],
        },
      },
      tertiary: {
        states: {
          default: tokenVars.color.gray[500],
          hover: tokenVars.color.gray[600],
          selected: tokenVars.color.gray[700],
          disabled: tokenVars.color.gray[200],
        },
      },
      link: {
        states: {
          default: tokenVars.color.gray[500],
          hover: tokenVars.color.gray[600],
          selected: tokenVars.color.gray[700],
          disabled: tokenVars.color.gray[200],
        },
      },
    },
  },
};

export type ThemeValues = typeof defaultTheme;

export const [defaultThemeClassName, vars] = createTheme(defaultTheme);
