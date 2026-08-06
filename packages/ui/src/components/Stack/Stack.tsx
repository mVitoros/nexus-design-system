import type { ReactNode, JSX } from "react";
import type {
  AlignItems,
  JustifyContent,
  ResponsiveSpace,
} from "../../sprinkles.css";
import { Box } from "../Box";

type AllowedStackElements = "div" | "section" | "article";

export type StackProps = {
  as?: Extract<keyof JSX.IntrinsicElements, AllowedStackElements>;
  children: ReactNode;
  gap?: ResponsiveSpace;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
};

export const Stack = ({ children, gap, ...rest }: StackProps) => {
  return (
    <Box
      {...rest}
      display="flex"
      flexDirection="column"
      gap={gap ?? { mobile: "sm", tablet: "md", desktop: "lg" }}
    >
      {children}
    </Box>
  );
};
