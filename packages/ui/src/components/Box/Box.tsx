import {
  forwardRef,
  type ComponentPropsWithRef,
  type ElementType,
  type ReactNode,
} from "react";
import { sprinkles, type Sprinkles } from "../../sprinkles.css";
import { Icon } from "../Icon";
import { vars } from "@nexus/tokens";

type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>["ref"];

export type BoxProps<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
} & Omit<ComponentPropsWithRef<T>, "as" | "children"> &
  Sprinkles;

export const BoxInner = <T extends ElementType>(
  { as, children, ...rest }: BoxProps<T>,
  ref: PolymorphicRef<T>,
) => {
  const Component = as || "div";

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

  const { className, ...otherNativeProps } = nativeProps;

  const mergedClasses =
    typeof className === "string" && className.length > 0
      ? `${classes} ${className}`
      : classes;

  return (
    <Component {...otherNativeProps} className={mergedClasses} ref={ref}>
      {children}
      <Icon name="home" />
    </Component>
  );
};

const BoxBase = forwardRef(BoxInner);

BoxBase.displayName = "Box";

// Workaround for TypeScript limitations: forwardRef loses polymorphic generic + ref inference.
// This cast restores correct prop typing for polymorphic components.
export const Box = BoxBase as <T extends ElementType = "div">(
  props: BoxProps<T> & { ref?: ComponentPropsWithRef<T>["ref"] },
) => React.JSX.Element;
