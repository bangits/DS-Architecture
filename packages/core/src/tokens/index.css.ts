import { createGlobalTheme } from "@vanilla-extract/css";
import * as colors from "./colors";
import { radius } from "./radius/radius";

export const tokenVars = createGlobalTheme(":root", {
  color: {
    ...colors,
  },
  borderRadius: {
    ...radius
  }
});
