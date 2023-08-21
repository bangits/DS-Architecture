import { vars } from "@my-ui/core/themes/default.css";
import { ComplexStyleRule } from "@vanilla-extract/css";

export const textFieldBase: ComplexStyleRule = {
  padding: "10px 20px",
  border: "1px solid red",
  backgroundColor: vars.color.brand,
};
