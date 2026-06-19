import { style } from "@vanilla-extract/css";

export const itemLinkStyles = style({
  display: "block",
  textDecoration: "none",
  color: "inherit",
  selectors: {
    "&:hover": {
      opacity: 0.8,
    },
  },
});
