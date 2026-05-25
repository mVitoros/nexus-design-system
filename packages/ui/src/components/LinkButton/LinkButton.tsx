import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { Box } from "../Box";
import { linkButtonStyles } from "./LinkButton.css";

type LinkButtonType<T extends ElementType = "a"> = {
  as?: T;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

export const LinkButton = <T extends ElementType = "a">({
  children,
  as,
  ...rest
}: LinkButtonType<T>) => {
  const component = (as ?? "a") as T;

  const nativeProps = rest as Omit<
    ComponentPropsWithoutRef<T>,
    "as" | "children"
  >;

  const className =
    typeof nativeProps.className === "string"
      ? `${linkButtonStyles} ${nativeProps.className}`
      : linkButtonStyles;

  return (
    <Box
      as={component}
      {...nativeProps}
      className={className}
      color="primaryLink"
      position="relative"
      display="inline-block"
    >
      {children}
    </Box>
  );
};
