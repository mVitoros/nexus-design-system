import { vars } from "@nexus/tokens";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { mediaQueries } from "./breakpoints";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": mediaQueries.tablet },
    desktop: { "@media": mediaQueries.desktop },
    wide: { "@media": mediaQueries.wide },
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "block", "inline", "inline-block", "flex", "grid"],
    position: [
      "absolute",
      "fixed",
      "relative",
      "initial",
      "inherit",
      "unset",
      "static",
      "sticky",
    ],
    flexDirection: ["row", "column"],
    justifyContent: [
      "flex-start",
      "center",
      "flex-end",
      "space-between",
      "space-around",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    gap: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    borderRadius: vars.radius,
    background: vars.color,
    color: vars.color,
  },
  shorthands: {
    p: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    m: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
  },
});

const staticProperties = defineProperties({
  properties: {
    borderColor: vars.color,
    borderWidth: ["1px", "2px", "3px"],
    borderStyle: ["solid"],
  },
  shorthands: {
    border: ["borderWidth", "borderStyle", "borderColor"],
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  staticProperties,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];

export type Space = keyof (typeof vars)["space"];
export type AlignItems = Parameters<typeof sprinkles>[0]["alignItems"];
export type JustifyContent = Parameters<typeof sprinkles>[0]["justifyContent"];
export type ResponsiveSpace = Sprinkles["gap"];

export type IconSize = keyof (typeof vars)["icon"]["size"];
export type StrokeWidth = keyof (typeof vars)["icon"]["strokeWidth"];
export type IconColor = keyof (typeof vars)["icon"]["color"];
