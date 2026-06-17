import { forwardRef, type ReactElement, type Ref } from "react";
import {
  useLinkComponentContext,
  type LinkComponentProps,
} from "../../context/NexusProvider";
import { extractStyles } from "../../utils/componentUtilities";
import { itemLinkStyles } from "./LinkItem.css";

type LinkItemProps = {
  children: ReactElement;
  className?: string;
} & LinkComponentProps;

export const LinkItem = forwardRef(
  ({ href, children, ...rest }: LinkItemProps, ref: Ref<HTMLAnchorElement>) => {
    const LinkComponent = useLinkComponentContext(ref);

    const [styles, nativeProps] = extractStyles(itemLinkStyles, rest);

    return (
      <LinkComponent href={href} ref={ref} className={styles} {...nativeProps}>
        {children}
      </LinkComponent>
    );
  },
);

LinkItem.displayName = "LinkItem";
