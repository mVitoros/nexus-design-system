import { useState, type MouseEvent } from "react";
import { Box, type BoxAs } from "../Box";
import { Icon } from "../Icon";
import { Typography } from "../Typography";
import { buttonStyles, pillStyles } from "./Pill.css";
import { Inline } from "../Inline";

export type PillVariant = keyof typeof pillStyles;

export type PillProps = {
  label: string;
  variant?: PillVariant;
  isActive?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

export const Pill = ({
  label,
  variant = "primary",
  isActive: controlledIsActive,
  disabled = false,
  onClick,
}: PillProps) => {
  const isControlled = controlledIsActive !== undefined;
  const isInteractive = !!onClick;

  const [uncontrolledIsActive, setUncontrolledIsActive] = useState(false);

  const isActive = isControlled ? controlledIsActive : uncontrolledIsActive;

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!isControlled) {
      setUncontrolledIsActive((prev) => !prev);
    }
    onClick?.(e);
  };

  const interactionProps = isInteractive
    ? {
        as: "button" as BoxAs<"button">,
        type: "button",
        disabled,
        onClick: handleOnClick,
        "aria-pressed": isActive,
      }
    : { as: "div" as BoxAs<"div"> };

  return (
    <Box
      {...interactionProps}
      className={`${pillStyles[variant]} ${isInteractive ? buttonStyles : ""}`}
      borderRadius="lg"
      borderStyle="solid"
      borderWidth="1px"
      display="inline-block"
      px={{ mobile: "sm", tablet: "md", desktop: "lg" }}
      py={{ mobile: "xxs", tablet: "xs", desktop: "sm" }}
    >
      <Inline gap={{ mobile: "xxs", tablet: "xs", desktop: "sm" }}>
        <Typography fontStyle="bodySm">{label}</Typography>
        {isInteractive && isActive && (
          <Icon name="close" size="small" color="inherit" />
        )}
      </Inline>
    </Box>
  );
};
