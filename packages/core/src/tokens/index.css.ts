import { createGlobalTheme } from "@vanilla-extract/css";
import * as colors from "./colors";

export const tokenVars = createGlobalTheme(":root", {
  color: colors,
});
