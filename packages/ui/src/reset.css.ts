import { vars } from "@nexus/tokens";
import { style } from "@vanilla-extract/css";

export const base = style({
  margin: 0,
  padding: 0,
  border: 0,
  boxSizing: "border-box",
  fontSize: "100%",
  font: "inherit",
  verticalAlign: "baseline",
});

const list = style({
  listStyle: "none",
});

const button = style({
  outline: "none",
  transition: vars.transition.baseTransition,
  appearance: "none",
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

const table = style({
  borderCollapse: "collapse",
  borderSpacing: 0,
});

const a = style({
  textDecoration: "none",
  color: "inherit",
});

export const element = {
  button,
  ul: list,
  li: list,
  a,
  table,
};
