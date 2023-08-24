import { createTheme } from "@vanilla-extract/css";
import { ThemeValues } from "./default.css";
import { colorsRed100 } from "../tokens/color";

export const darkTheme: ThemeValues = {
  color: {
    brand: colorsRed100,
  },
};

export const darkThemeClassName = createTheme(darkTheme);
