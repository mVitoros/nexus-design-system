import { forwardRef, type Ref } from "react";
import {
  useLinkComponentContext,
  type LinkComponentProps,
} from "../../context/NexusProvider";
import { Typography } from "../Typography";
import { extractStyles } from "../../utils/componentUtilities";
import { textLinkStyles } from "./LinkText.css";

export type LinkTextType = {
  label: string;
  className?: string;
} & LinkComponentProps;

export const LinkText = forwardRef(
  ({ href, label, ...rest }: LinkTextType, ref: Ref<HTMLAnchorElement>) => {
    const LinkComponent = useLinkComponentContext(ref);

    const [styles, nativeProps] = extractStyles(textLinkStyles, rest);

    return (
      <LinkComponent href={href} ref={ref} className={styles} {...nativeProps}>
        <Typography>{label}</Typography>
      </LinkComponent>
    );
  },
);

LinkText.displayName = "LinkText";
