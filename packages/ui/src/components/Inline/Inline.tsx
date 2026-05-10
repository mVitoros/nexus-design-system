import type { ReactNode, JSX } from "react";
import Box from "../Box/Box";
import type { AlignItems, JustifyContent, Space } from "../../sprinkles.css";

type AllowedInlineElements = "div" | "section" | "article";

type InlineProps = {
  as?: Extract<keyof JSX.IntrinsicElements, AllowedInlineElements>;
  children: ReactNode;
  gap?: Space;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
};

const Inline = ({ children, ...rest }: InlineProps) => {
  return (
    <Box {...rest} display="flex" flexDirection="row">
      {children}
    </Box>
  );
};

export default Inline;
