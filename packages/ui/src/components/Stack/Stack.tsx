import type { ReactNode, JSX } from "react";
import type { AlignItems, JustifyContent, Space } from "../../sprinkles.css";
import { Box } from "../Box";

type AllowedStackElements = "div" | "section" | "article";

export type StackProps = {
  as?: Extract<keyof JSX.IntrinsicElements, AllowedStackElements>;
  children: ReactNode;
  gap?: Space;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
};

export const Stack = ({ children, ...rest }: StackProps) => {
  return (
    <Box {...rest} display="flex" flexDirection="column">
      {children}
    </Box>
  );
};
