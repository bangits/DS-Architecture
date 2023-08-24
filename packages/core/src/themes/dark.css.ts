import { createTheme } from ".";
import { tokenVars } from "../tokens/index.css";
import { ThemeValues } from "./default.css";

export const darkTheme: ThemeValues = {
  color: {
    brand: tokenVars.color.gray[900],
  },
};

export const darkThemeClassName = createTheme(darkTheme);
