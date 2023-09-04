import { vars } from "@mui/core/themes/default.css";
import { ComplexStyleRule } from "@vanilla-extract/css";

export const buttonLink: ComplexStyleRule = {
  background: "transparent",
  color: vars.color.text.default,
  borderBottom: `1px solid ${vars.color.border.default}`,
  borderRadius: 0,

  ":hover": {
    borderBottom: `1px solid ${vars.color.border.hovered}`,
    color: vars.color.text.hovered
  },
  ":active": {
    borderBottom: `1px solid ${vars.color.border.selected}`,
    color: vars.color.text.selected
  },
  ":disabled": {
    borderBottom: `1px solid ${vars.color.border.disabled}`,
    pointerEvents: "none",
    cursor: "no-drop",
    color: vars.color.text.disabled,
  },
};
