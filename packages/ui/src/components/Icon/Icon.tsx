import { vars } from "@nexus/tokens";
import { iconRegistry, type IconName } from "../../icons/iconRegistry";
import {
  type IconColor,
  type IconSize,
  type StrokeWidth,
} from "../../sprinkles.css";
import type { LucideProps } from "lucide-react";

export type IconProps = {
  name: IconName;
  size?: IconSize;
  strokeWidth?: StrokeWidth;
  color?: IconColor;
  ariaLabel?: string;
} & Omit<
  LucideProps,
  | "name"
  | "size"
  | "strokeWidth"
  | "color"
  | "absoluteStrokeWidth"
  | "aria-label"
>;

export const Icon = ({
  name,
  size = "regular",
  strokeWidth = "regular",
  color = "brand",
  ariaLabel,
  ...rest
}: IconProps) => {
  const IconComponent = iconRegistry[name];

  return (
    <IconComponent
      size={vars.icon.size[size]}
      strokeWidth={vars.icon.strokeWidth[strokeWidth]}
      color={vars.icon.color[color]}
      aria-label={ariaLabel}
      role={ariaLabel ? "img" : undefined}
      aria-hidden={ariaLabel ? false : true}
      {...rest}
    />
  );
};
