import { vars } from "@mui/core/themes/default.css";
import { tokenVars } from "@mui/core/tokens/index.css";
import { ComplexStyleRule } from "@vanilla-extract/css";

export const buttonTertiary: ComplexStyleRule = {
    background: "transparent",
    color: vars.color.button.tertiary.states.default,
    
    ':hover': {
        color: vars.color.button.tertiary.states.disabled
    },
    ':active': {
        background: vars.color.button.primary.states.selected
    },
    ':disabled': {
        pointerEvents: "none",
        cursor: "no-drop",
        color: tokenVars.color.gray.disabledText
    }
};
