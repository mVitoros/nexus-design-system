import { vars } from "@nexus/tokens";
import { styleVariants } from "@vanilla-extract/css";
import { mediaQueries } from "../../breakpoints";

type TypographyLeaf = (typeof vars.typography)["heading"]["xl"];

const responsiveTypography = (
  mobile: TypographyLeaf,
  tablet: TypographyLeaf = mobile,
  desktop: TypographyLeaf = tablet,
  wide: TypographyLeaf = desktop,
) => ({
  ...mobile,
  "@media": {
    [mediaQueries.tablet]: tablet,
    [mediaQueries.desktop]: desktop,
    [mediaQueries.wide]: wide,
  },
});

export const textStyles = styleVariants({
  headingXl: responsiveTypography(
    vars.typography.heading.lg,
    vars.typography.heading.xl,
  ),
  headingLg: responsiveTypography(
    vars.typography.heading.md,
    vars.typography.heading.lg,
  ),
  headingMd: responsiveTypography(
    vars.typography.heading.sm,
    vars.typography.heading.md,
  ),
  headingSm: responsiveTypography(
    vars.typography.body.md,
    vars.typography.heading.sm,
  ),
  bodyMd: responsiveTypography(
    vars.typography.body.sm,
    vars.typography.body.md,
  ),
  bodySm: responsiveTypography(
    vars.typography.body.xs,
    vars.typography.body.sm,
  ),
  bodyXs: responsiveTypography(vars.typography.body.xs),
});
