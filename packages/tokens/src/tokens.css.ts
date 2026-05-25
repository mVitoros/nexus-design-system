import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const primitiveColors = {
  slate: {
    0: "#f8f9fa",
    1: "#f1f3f5",
    2: "#e9ecef",
    3: "#dee2e6",
    4: "#ced4da",
    5: "#adb5bd",
    6: "#868e96",
    7: "#495057",
    8: "#343a40",
    9: "#212529",
  },
  blue: {
    0: "#e7f5ff",
    1: "#d0ebff",
    2: "#a5d8ff",
    3: "#74c0fc",
    4: "#4dabf7",
    5: "#339af0",
    6: "#228be6",
    7: "#1c7ed6",
    8: "#1971c2",
    9: "#1864ab",
  },
  red: {
    0: "#fff5f5",
    1: "#ffe3e3",
    2: "#ffc9c9",
    3: "#ffa8a8",
    4: "#ff8787",
    5: "#ff6b6b",
    6: "#fa5252",
    7: "#f03e3e",
    8: "#e03131",
    9: "#c92a2a",
  },
  green: {
    0: "#ebfbee",
    1: "#d3f9d8",
    2: "#b2f2bb",
    3: "#8ce99a",
    4: "#69db7c",
    5: "#51cf66",
    6: "#40c057",
    7: "#37b24d",
    8: "#2f9e44",
    9: "#2b8a3e",
  },
} as const;

export const primitiveSpace = {
  none: "0",
  xxs: "0.25rem",
  xs: "0.5rem",
  sm: "0.75rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  xxl: "3rem",
  xxxl: "4rem",
} as const;

export const primitiveRadius = {
  sm: "0.25rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  full: "999px",
} as const;

export const primitiveTypography = {
  fontFamily: {
    sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    mono: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", monospace',
  },
  fontSize: {
    0: "12px",
    1: "14px",
    2: "16px",
    3: "18px",
    4: "20px",
    5: "22px",
    6: "24px",
  },
  fontWeight: {
    regular: 400,
    bold: 600,
    bolder: 900,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    loose: 1.8,
  },
};

export type TypohgraphyTypes = typeof primitiveTypography;

const sharedTypography = {
  heading: {
    xl: {
      fontFamily: primitiveTypography.fontFamily.sans,
      fontSize: primitiveTypography.fontSize[6],
      fontWeight: String(primitiveTypography.fontWeight.bolder),
      lineHeight: String(primitiveTypography.lineHeight.tight),
    },
    lg: {
      fontFamily: primitiveTypography.fontFamily.sans,
      fontSize: primitiveTypography.fontSize[5],
      fontWeight: String(primitiveTypography.fontWeight.bold),
      lineHeight: String(primitiveTypography.lineHeight.tight),
    },
    md: {
      fontFamily: primitiveTypography.fontFamily.sans,
      fontSize: primitiveTypography.fontSize[4],
      fontWeight: String(primitiveTypography.fontWeight.bold),
      lineHeight: String(primitiveTypography.lineHeight.tight),
    },
    sm: {
      fontFamily: primitiveTypography.fontFamily.sans,
      fontSize: primitiveTypography.fontSize[3],
      fontWeight: String(primitiveTypography.fontWeight.bold),
      lineHeight: String(primitiveTypography.lineHeight.tight),
    },
  },
  body: {
    md: {
      fontFamily: primitiveTypography.fontFamily.sans,
      fontSize: primitiveTypography.fontSize[2],
      fontWeight: String(primitiveTypography.fontWeight.regular),
      lineHeight: String(primitiveTypography.lineHeight.normal),
    },
    sm: {
      fontFamily: primitiveTypography.fontFamily.sans,
      fontSize: primitiveTypography.fontSize[1],
      fontWeight: String(primitiveTypography.fontWeight.regular),
      lineHeight: String(primitiveTypography.lineHeight.normal),
    },
    xs: {
      fontFamily: primitiveTypography.fontFamily.sans,
      fontSize: primitiveTypography.fontSize[0],
      fontWeight: String(primitiveTypography.fontWeight.regular),
      lineHeight: String(primitiveTypography.lineHeight.normal),
    },
  },
} as const;

export const vars = createThemeContract({
  color: {
    background: null,
    surface: null,
    surfaceMuted: null,
    border: null,
    text: null,
    textMuted: null,
    primary: null,
    primaryHover: null,
    primaryText: null,
    primaryLink: null,
    success: null,
    danger: null,
    focusRing: null,
  },
  space: {
    xxs: null,
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    xxl: null,
  },
  radius: {
    sm: null,
    md: null,
    lg: null,
    full: null,
  },
  typography: {
    heading: {
      xl: {
        fontFamily: null,
        fontSize: null,
        fontWeight: null,
        lineHeight: null,
      },
      lg: {
        fontFamily: null,
        fontSize: null,
        fontWeight: null,
        lineHeight: null,
      },
      md: {
        fontFamily: null,
        fontSize: null,
        fontWeight: null,
        lineHeight: null,
      },
      sm: {
        fontFamily: null,
        fontSize: null,
        fontWeight: null,
        lineHeight: null,
      },
    },
    body: {
      md: {
        fontFamily: null,
        fontSize: null,
        fontWeight: null,
        lineHeight: null,
      },
      sm: {
        fontFamily: null,
        fontSize: null,
        fontWeight: null,
        lineHeight: null,
      },
      xs: {
        fontFamily: null,
        fontSize: null,
        fontWeight: null,
        lineHeight: null,
      },
    },
  },
});

export const lightTheme = createTheme(vars, {
  color: {
    background: primitiveColors.slate[0],
    surface: "#ffffff",
    surfaceMuted: primitiveColors.slate[1],
    border: primitiveColors.slate[3],
    text: primitiveColors.slate[9],
    textMuted: primitiveColors.slate[7],
    primary: primitiveColors.blue[6],
    primaryHover: primitiveColors.blue[7],
    primaryText: "#ffffff",
    primaryLink: primitiveColors.blue[9],
    success: primitiveColors.green[6],
    danger: primitiveColors.red[6],
    focusRing: primitiveColors.blue[3],
  },
  space: {
    xxs: primitiveSpace.xxs,
    xs: primitiveSpace.xs,
    sm: primitiveSpace.sm,
    md: primitiveSpace.md,
    lg: primitiveSpace.lg,
    xl: primitiveSpace.xl,
    xxl: primitiveSpace.xxl,
  },
  radius: {
    sm: primitiveRadius.sm,
    md: primitiveRadius.md,
    lg: primitiveRadius.lg,
    full: primitiveRadius.full,
  },
  typography: sharedTypography,
});

export const darkTheme = createTheme(vars, {
  color: {
    background: primitiveColors.slate[9],
    surface: primitiveColors.slate[8],
    surfaceMuted: primitiveColors.slate[7],
    border: primitiveColors.slate[6],
    text: primitiveColors.slate[0],
    textMuted: primitiveColors.slate[3],
    primary: primitiveColors.blue[4],
    primaryHover: primitiveColors.blue[3],
    primaryText: primitiveColors.slate[9],
    primaryLink: primitiveColors.slate[8],
    success: primitiveColors.green[4],
    danger: primitiveColors.red[4],
    focusRing: primitiveColors.blue[2],
  },
  space: {
    xxs: primitiveSpace.xxs,
    xs: primitiveSpace.xs,
    sm: primitiveSpace.sm,
    md: primitiveSpace.md,
    lg: primitiveSpace.lg,
    xl: primitiveSpace.xl,
    xxl: primitiveSpace.xxl,
  },
  radius: {
    sm: primitiveRadius.sm,
    md: primitiveRadius.md,
    lg: primitiveRadius.lg,
    full: primitiveRadius.full,
  },
  typography: sharedTypography,
});
