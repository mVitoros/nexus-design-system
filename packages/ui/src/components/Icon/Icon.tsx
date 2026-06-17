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
  absoluteStrokeWidth?: boolean;
} & Omit<
  LucideProps,
  "name" | "size" | "strokeWidth" | "color" | "absoluteStrokeWidth"
>;

export const Icon = ({
  name,
  size = "regular",
  strokeWidth = "regular",
  color = "brand",
  absoluteStrokeWidth = false,
  ...rest
}: IconProps) => {
  const IconComponent = iconRegistry[name];

  return (
    <IconComponent
      size={vars.icon.size[size]}
      strokeWidth={vars.icon.strokeWidth[strokeWidth]}
      color={vars.icon.color[color]}
      absoluteStrokeWidth={absoluteStrokeWidth}
      {...rest}
    />
  );
};
