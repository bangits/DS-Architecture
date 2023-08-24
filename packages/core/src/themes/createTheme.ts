import { createTheme as veCreateTheme } from "@vanilla-extract/css";
import { ThemeValues } from ".";
import { vars } from "./default.css";

export const createTheme = (themeValues: ThemeValues): string =>
  veCreateTheme(vars, themeValues);
