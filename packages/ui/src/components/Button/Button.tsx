import type { ComponentPropsWithoutRef } from "react";
import { Box } from "../Box";
import { buttonVariants } from "./Button.css";
import { Typography } from "../Typography";
import { extractStyles } from "../../utils/componentUtilities";

export type ButtonVariants = keyof typeof buttonVariants;

export type ButtonType = {
  label: string;
  variant?: ButtonVariants;
  type?: ComponentPropsWithoutRef<"button">["type"];
  disabled?: boolean;
} & Omit<ComponentPropsWithoutRef<"button">, "disabled" | "children" | "type">;

export const Button = ({
  label,
  variant = "primary",
  type = "button",
  disabled = false,
  ...rest
}: ButtonType) => {
  const [styles, nativeProps] = extractStyles(buttonVariants[variant], rest);

  return (
    <Box
      as="button"
      type={type}
      className={styles}
      px={{ mobile: "sm", tablet: "md", desktop: "lg" }}
      py={{ mobile: "xs", tablet: "sm", desktop: "md" }}
      disabled={disabled}
      {...nativeProps}
    >
      <Typography>{label}</Typography>
    </Box>
  );
};
