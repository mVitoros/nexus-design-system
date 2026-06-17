import { vars } from "@nexus/tokens";
import { style } from "@vanilla-extract/css";

export const textLinkStyles = style({
  color: vars.color.primaryLink,
  display: "inline-block",
  position: "relative",
  width: "max-content",
  textDecoration: "none",
  selectors: {
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: "1px",
      height: "1px",
      background: "currentColor",
    },
    "&:hover": {
      opacity: 0.8,
    },
  },
});
