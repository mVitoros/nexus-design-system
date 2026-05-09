import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { sprinkles, type Sprinkles } from "../sprinkles.css";

type BoxProps<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children"> &
  Sprinkles;

const Box = <T extends ElementType>({ as, children, ...rest }: BoxProps<T>) => {
  const sprinklesProps: Record<string, unknown> = {};
  const nativeProps: Record<string, unknown> = {};

  for (const key in rest) {
    if (sprinkles.properties.has(key as keyof Sprinkles)) {
      sprinklesProps[key] = rest[key];
    } else {
      nativeProps[key] = rest[key];
    }
  }

  const classes = sprinkles(sprinklesProps);

  const Component = as || "div";

  return children ? (
    <Component className={classes} {...nativeProps}>
      {children}
    </Component>
  ) : (
    <Component className={classes} {...nativeProps} />
  );
};

export default Box;
