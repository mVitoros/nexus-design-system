import type { ReactNode, JSX } from "react";
import Box from "../Box/Box";
import type { AlignItems, JustifyContent, Space } from "../../sprinkles.css";

type AllowedStackElements = "div" | "section" | "article";

type StackProps = {
  as?: Extract<keyof JSX.IntrinsicElements, AllowedStackElements>;
  children: ReactNode;
  gap?: Space;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
};

const Stack = ({ children, ...rest }: StackProps) => {
  return (
    <Box {...rest} display="flex" flexDirection="column">
      {children}
    </Box>
  );
};

export default Stack;
