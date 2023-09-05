import { vars } from "@mui/core/themes/default.css";
import { ComplexStyleRule } from "@vanilla-extract/css";

export const buttonBase: ComplexStyleRule = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  fontFamily: vars.fontFamily,
  fontSize: vars.fontSize,
  paddingTop: vars.paddings.top,
  paddingBottom: vars.paddings.bottom,
  paddingLeft: vars.paddings.left,
  paddingRight: vars.paddings.right,
  borderRadius: vars.borderRadius,
  border: "none",
  fontWeight: vars.fontWeight,
};
