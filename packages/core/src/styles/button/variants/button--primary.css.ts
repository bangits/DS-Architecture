import { vars } from "@my-ui/core/themes/default.css";
import { white } from "@my-ui/core/tokens/colors/white";
import { tokenVars } from "@my-ui/core/tokens/index.css";
import { ComplexStyleRule } from "@vanilla-extract/css";

export const buttonPrimary: ComplexStyleRule = {
    background: vars.color.button.primary.states.default,
    color: white.white,
    
    ':hover': {
        background: vars.color.button.primary.states.hover
    },
    ':active': {
        background: vars.color.button.primary.states.selected
    },
    ':disabled': {
        pointerEvents: "none",
        cursor: "no-drop",
        background: vars.color.button.primary.states.disabled,
        color: tokenVars.color.gray[400]
    }
};
