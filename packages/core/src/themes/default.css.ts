import { createTheme } from "@vanilla-extract/css";
import { tokenVars } from "../tokens/index.css";

export const defaultTheme = {
  color: {
    brand: tokenVars.color.teal[500],
    button: {
      primary: {
        default: tokenVars.color.teal[500],
        hovered: tokenVars.color.teal[600],
        selected: tokenVars.color.teal[700],
      },

      secondary: {
        default: tokenVars.color.gray[500],
        hovered: tokenVars.color.gray[600],
        selected: tokenVars.color.gray[700],
      },

      disabled: tokenVars.color.gray[200],
    },
    text: {
      onColor: tokenVars.color.white.white,
      disabled: tokenVars.color.gray[400],
      default: tokenVars.color.gray[500],
      hovered: tokenVars.color.gray[600],
      selected: tokenVars.color.gray[900],
    },
    border: {
      default: tokenVars.color.gray[500],
      hovered: tokenVars.color.gray[400],
      selected: tokenVars.color.gray[300],
      disabled: tokenVars.color.gray[400],
    }
  },
  borderRadius: tokenVars.borderRadius.small,
};

export type ThemeValues = typeof defaultTheme;

export const [defaultThemeClassName, vars] = createTheme(defaultTheme);