import { vars } from "@nexus/tokens";
import { style, styleVariants } from "@vanilla-extract/css";

const basePill = style({
  transition: vars.transition.baseTransition,
  cursor: "default",
});

export const pillStyles = styleVariants({
  primary: [
    basePill,
    {
      background: vars.color.surface,
      borderColor: vars.color.primary,
      color: vars.color.text,
      selectors: {
        "&:hover:not(:disabled)": {
          background: vars.color.primaryHover,
          borderColor: vars.color.primaryHover,
          color: vars.color.primaryText,
        },
      },
    },
  ],
  success: [
    basePill,
    {
      background: vars.color.surface,
      borderColor: vars.color.success,
      color: vars.color.text,
      selectors: {
        "&:hover:not(:disabled)": {
          background: vars.color.success,
          borderColor: vars.color.success,
          color: vars.color.primaryText,
        },
      },
    },
  ],
  danger: [
    basePill,
    {
      background: vars.color.surface,
      borderColor: vars.color.danger,
      color: vars.color.text,
      selectors: {
        "&:hover:not(:disabled)": {
          background: vars.color.danger,
          borderColor: vars.color.danger,
          color: vars.color.primaryText,
        },
      },
    },
  ],
});

export const buttonStyles = style({
  cursor: "pointer",
  selectors: {
    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.6,
    },
    "&:focus-visible": {
      outline: `${vars.borderWidth.focusRing} ${vars.borderStyle.solid} ${vars.color.focusRing}`,
    },
  },
});
