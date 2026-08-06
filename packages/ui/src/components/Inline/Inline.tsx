import type { ReactNode, JSX } from "react";
import type {
  AlignItems,
  JustifyContent,
  ResponsiveSpace,
} from "../../sprinkles.css";
import { Box } from "../Box";

type AllowedInlineElements = "div" | "section" | "article";

export type InlineProps = {
  as?: Extract<keyof JSX.IntrinsicElements, AllowedInlineElements>;
  children: ReactNode;
  gap?: ResponsiveSpace;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
};

export const Inline = ({ children, gap, ...rest }: InlineProps) => {
  return (
    <Box
      {...rest}
      display="flex"
      flexDirection="row"
      gap={gap ?? { mobile: "sm", tablet: "md", desktop: "lg" }}
    >
      {children}
    </Box>
  );
};
