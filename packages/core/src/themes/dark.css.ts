import { createTheme } from ".";
import { tokenVars } from "../tokens/index.css";
import { ThemeValues } from "./default.css";

export const darkTheme: ThemeValues = {
  color: {
    brand: tokenVars.color.teal[500],
    button: {
      primary: {
        default: tokenVars.color.teal[500],
        hovered: tokenVars.color.teal[400],
        selected: tokenVars.color.teal[300],
      },

      secondary: {
        default: tokenVars.color.gray[500],
        hovered: tokenVars.color.gray[400],
        selected: tokenVars.color.gray[300],
      },

      disabled: tokenVars.color.gray[200],
    },
    text: {
      onColor: tokenVars.color.white.white,
      disabled: tokenVars.color.gray[400],
      default: tokenVars.color.gray[500],
      hovered: tokenVars.color.gray[400],
      selected: tokenVars.color.gray[300],
    },
    border: {
      default: tokenVars.color.gray[500],
      hovered: tokenVars.color.gray[400],
      selected: tokenVars.color.gray[300],
      disabled: tokenVars.color.gray[400],
    },
  },
  paddings: {
    left: tokenVars.padding[4],
    right: tokenVars.padding[4],
    top: tokenVars.padding[2],
    bottom: tokenVars.padding[2],
  },
  borderRadius: tokenVars.borderRadius.small,
  fontFamily: tokenVars.fonts.family,
  fontSize: tokenVars.fonts.size[14],
  fontWeight: tokenVars.fonts.weight[400],
};

export const darkThemeClassName = createTheme(darkTheme);
