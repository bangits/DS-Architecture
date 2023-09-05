import { vars } from "@mui/core/themes/default.css";
import { ComplexStyleRule } from "@vanilla-extract/css";

export const buttonPrimary: ComplexStyleRule = {
  background: vars.color.button.primary.default,
  color: vars.color.text.onColor,

  ":hover": {
    background: vars.color.button.primary.hovered,
  },
  ":active": {
    background: vars.color.button.primary.selected,
  },
  ":disabled": {
    pointerEvents: "none",
    cursor: "no-drop",
    background: vars.color.button.disabled,
    color: vars.color.text.disabled,
  },
};
