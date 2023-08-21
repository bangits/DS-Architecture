import { recipe } from "@vanilla-extract/recipes";
import { buttonBase } from "./base.css";
import { buttonDisabled } from "./variants/button--disabled.css";

export const button = recipe({
  base: buttonBase,

  variants: {
    disabled: {
      true: buttonDisabled,
    },
  },
});
