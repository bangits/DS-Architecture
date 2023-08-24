import { radius } from "@my-ui/core/tokens/radius/radius";
import { spacing } from "@my-ui/core/tokens/spacings/spacing";
import { fonts } from "@my-ui/core/tokens/typography/fonts";
import { ComplexStyleRule } from "@vanilla-extract/css";

export const buttonBase: ComplexStyleRule = {
  fontFamily: fonts.inter.family,
  fontSize: fonts.inter.size[14],
  paddingTop: spacing[2],
  paddingBottom: spacing[2],
  paddingLeft: spacing[4],
  paddingRight: spacing[4],
  borderRadius: radius.small,
  border: "none",
  fontWeight: fonts.inter.weight[400],
};
