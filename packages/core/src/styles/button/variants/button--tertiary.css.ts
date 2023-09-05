import { vars } from "@mui/core/themes/default.css";
import { ComplexStyleRule } from "@vanilla-extract/css";

export const buttonTertiary: ComplexStyleRule = {
  background: "transparent",
  color: vars.color.text.default,

  ":hover": {
    color: vars.color.text.hovered,
  },
  ":active": {
    color: vars.color.text.selected,
  },
  ":disabled": {
    pointerEvents: "none",
    cursor: "no-drop",
    color: vars.color.text.disabled,
  },
};
