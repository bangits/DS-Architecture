import { createTheme } from "@vanilla-extract/css";
import { tokenVars } from "../tokens/index.css";
import { ThemeValues, vars } from "./default.css";

export const darkTheme: ThemeValues = {
  color: {
    brand: tokenVars.color.gray[900],
  },
};

export const darkThemeClassName = createTheme(vars, darkTheme);
