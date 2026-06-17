import { vars } from "@nexus/tokens";
import { style, styleVariants } from "@vanilla-extract/css";

const baseButton = style({
  appearance: "none",
  borderStyle: "solid",
  borderWidth: "1px",
  cursor: "pointer",
  transition:
    "background-color 160ms ease, color 160ms ease, border-color 160ms ease",
  selectors: {
    "&:focus-visible": {
      outline: `2px solid ${vars.color.focusRing}`,
      outlineOffset: "2px",
    },
    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.6,
    },
  },
});

export const buttonVariants = styleVariants({
  primary: [
    baseButton,
    {
      background: vars.color.primary,
      borderColor: vars.color.primary,
      borderRadius: vars.radius.sm,
      color: vars.color.primaryText,
      selectors: {
        "&:hover:not(:disabled)": {
          background: vars.color.primaryHover,
          borderColor: vars.color.primaryHover,
        },
      },
    },
  ],
  secondary: [
    baseButton,
    {
      background: vars.color.surface,
      borderColor: vars.color.border,
      borderRadius: vars.radius.sm,
      color: vars.color.text,
      selectors: {
        "&:hover:not(:disabled)": {
          background: vars.color.surfaceMuted,
          borderColor: vars.color.textMuted,
        },
      },
    },
  ],
});
