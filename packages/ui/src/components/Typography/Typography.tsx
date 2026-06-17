import { type JSX, type ReactNode } from "react";
import { Box } from "../Box";
import { textStyles } from "./Typography.css";

export type AllowedTypographyProps = keyof typeof textStyles;

type AllowedTypographyTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";

export type TypographyProps = {
  as?: Extract<keyof JSX.IntrinsicElements, AllowedTypographyTags>;
  children: ReactNode;
  fontStyle?: AllowedTypographyProps;
};

export const Typography = ({ as, children, fontStyle }: TypographyProps) => {
  const component = as || "span";

  return (
    <Box as={component} className={textStyles[fontStyle ?? "bodyMd"]}>
      {children}
    </Box>
  );
};
