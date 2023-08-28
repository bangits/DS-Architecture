import { vars } from "@mui/core/themes/default.css";
import { white } from "@mui/core/tokens/colors/white";
import { tokenVars } from "@mui/core/tokens/index.css";
import { ComplexStyleRule } from "@vanilla-extract/css";

export const buttonPrimary: ComplexStyleRule = {
  background: vars.color.button.primary.states.default,
  color: white.white,

  ":hover": {
    background: vars.color.button.primary.states.hover,
  },
  ":active": {
    background: vars.color.button.primary.states.selected,
  },
  ":disabled": {
    pointerEvents: "none",
    cursor: "no-drop",
    background: vars.color.button.primary.states.disabled,
    color: tokenVars.color.gray[400],
  },
};
