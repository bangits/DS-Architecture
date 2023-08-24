import { vars } from "@my-ui/core/themes/default.css";
import { tokenVars } from "@my-ui/core/tokens/index.css";
import { ComplexStyleRule } from "@vanilla-extract/css";

export const buttonLink: ComplexStyleRule = {
    background: "transparent",
    color: vars.color.button.tertiary.states.default,
    borderBottom: `1px solid ${vars.color.button.link.states.default}`,
    borderRadius: 0,
    
    ':hover': {
        borderBottom: `1px solid ${vars.color.button.link.states.hover}`,
        color: vars.color.button.link.states.hover
    },
    ':active': {
        borderBottom: `1px solid ${vars.color.button.link.states.selected}`,
        color: vars.color.button.link.states.selected
    },
    ':disabled': {
        borderBottom: `1px solid ${tokenVars.color.gray[200]}`,
        pointerEvents: "none",
        cursor: "no-drop",
        color: tokenVars.color.gray[200]
    }
};
