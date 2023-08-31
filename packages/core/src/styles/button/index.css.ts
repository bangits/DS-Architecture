import { recipe } from "@vanilla-extract/recipes";
import { buttonBase } from "./base.css";
import { buttonLink } from "./variants/button--link.css";
import { buttonPrimary } from "./variants/button--primary.css";
import { buttonSecondary } from "./variants/button--secondary.css";
import { buttonTertiary } from "./variants/button--tertiary.css";

const variants = {
  variant: {
    primary: buttonPrimary,
    secondary: buttonSecondary,
    tertiary: buttonTertiary,
    link: buttonLink,
  },
};

export type ButtonVariants = keyof typeof variants.variant;

export const button = recipe({
  base: buttonBase,
  variants,
});
