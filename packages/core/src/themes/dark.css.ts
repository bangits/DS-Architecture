import { createTheme } from ".";
import { tokenVars } from "../tokens/index.css";
import { ThemeValues } from "./default.css";

export const darkTheme: ThemeValues = {
  color: {
    brand: tokenVars.color.teal[500],
    button: {
      primary: {
        states: {
          default: tokenVars.color.teal[500],
          hover: tokenVars.color.teal[400],
          selected: tokenVars.color.teal[300],
          disabled: tokenVars.color.gray[200],
        },
      },
      secondary: {
        states: {
          default: tokenVars.color.gray[500],
          hover: tokenVars.color.gray[400],
          selected: tokenVars.color.gray[300],
          disabled: tokenVars.color.gray[200],
        },
      },
      tertiary: {
        states: {
          default: tokenVars.color.gray[500],
          hover: tokenVars.color.gray[400],
          selected: tokenVars.color.gray[200],
          disabled: tokenVars.color.gray[200],
        },
      },
      link: {
        states: {
          default: tokenVars.color.gray[500],
          hover: tokenVars.color.gray[400],
          selected: tokenVars.color.gray[300],
          disabled: tokenVars.color.gray[200],
        },
      },
    },
  },
};

export const darkThemeClassName = createTheme(darkTheme);
