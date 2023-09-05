import { vars } from "@mui/core/themes/default.css";
import { ComplexStyleRule } from "@vanilla-extract/css";

export const buttonSecondary: ComplexStyleRule = {
  background: vars.color.button.secondary.default,
  color: vars.color.text.onColor,
  ":hover": {
    background: vars.color.button.secondary.hovered,
  },
  ":active": {
    background: vars.color.button.secondary.selected,
  },
  ":disabled": {
    pointerEvents: "none",
    cursor: "no-drop",
    background: vars.color.button.secondary.selected,
    color: vars.color.text.disabled,
  },
};
