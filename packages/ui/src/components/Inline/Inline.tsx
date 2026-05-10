import type { ReactNode, JSX } from "react";
import type { AlignItems, JustifyContent, Space } from "../../sprinkles.css";
import { Box } from "../Box";

type AllowedInlineElements = "div" | "section" | "article";

export type InlineProps = {
  as?: Extract<keyof JSX.IntrinsicElements, AllowedInlineElements>;
  children: ReactNode;
  gap?: Space;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
};

export const Inline = ({ children, ...rest }: InlineProps) => {
  return (
    <Box {...rest} display="flex" flexDirection="row">
      {children}
    </Box>
  );
};
