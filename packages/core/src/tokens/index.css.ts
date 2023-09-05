import { createGlobalTheme } from "@vanilla-extract/css";
import * as colors from "./colors";
import { radius } from "./radius/radius";
import { spacing } from "./spacings/spacing";
import { fonts } from "./typography/fonts";

export const tokenVars = createGlobalTheme(":root", {
  color: {
    ...colors,
  },
  borderRadius: {
    ...radius,
  },
  padding: {
    ...spacing,
  },
  fonts: {
    ...fonts,
  },
});
