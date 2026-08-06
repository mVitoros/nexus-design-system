export const breakpoints = {
  mobile: 0,
  tablet: 740,
  desktop: 992,
  wide: 1200,
} as const;

export const breakPointNames = Object.keys(breakpoints) as Array<
  keyof typeof breakpoints
>;

export type Breakpoint = keyof typeof breakpoints;

export const mediaQueries = {
  tablet: `screen and (min-width: ${breakpoints.tablet}px)`,
  desktop: `screen and (min-width: ${breakpoints.desktop}px)`,
  wide: `screen and (min-width: ${breakpoints.wide}px)`,
} as const;
