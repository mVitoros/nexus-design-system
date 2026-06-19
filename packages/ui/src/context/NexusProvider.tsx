import {
  createContext,
  forwardRef,
  useContext,
  type ComponentPropsWithRef,
  type ComponentType,
  type ForwardRefRenderFunction,
  type ReactNode,
  type Ref,
} from "react";

export type LinkComponentProps = ComponentPropsWithRef<"a"> & {
  href: string;
};

export const createLinkComponent = (
  render: ForwardRefRenderFunction<HTMLAnchorElement, LinkComponentProps>,
) => ({ __forwardRef__: forwardRef(render) }) as const;

export type LinkComponentType =
  | ReturnType<typeof createLinkComponent>
  | ComponentType<LinkComponentProps>;

type NexusProviderType = {
  children: ReactNode;
  linkComponent?: LinkComponentType;
};

const DefaultLinkComponent = createLinkComponent((props, ref) => {
  return <a {...props} ref={ref} />;
});

const LinkComponentContext =
  createContext<LinkComponentType>(DefaultLinkComponent);

export const useLinkComponentContext = (
  ref?: Ref<HTMLAnchorElement>,
): ComponentType<LinkComponentProps> => {
  const linkComponent = useContext(LinkComponentContext);

  const hasForwardRef =
    typeof linkComponent === "object" &&
    linkComponent !== null &&
    "__forwardRef__" in linkComponent;

  if (ref && !hasForwardRef) {
    console.warn(
      "You are trying to pass a ref, while the Custom Link implementation you provided in NexusProvider does not support refs. This will cause refs to be dropped. Please provide a Custom link component that supports refs",
    );
  }

  if (hasForwardRef) {
    return linkComponent.__forwardRef__;
  }

  return linkComponent;
};

export const NexusProvider = ({
  linkComponent,
  children,
}: NexusProviderType) => {
  const ContextLinkComponent = useContext(LinkComponentContext);

  return (
    <LinkComponentContext.Provider
      value={linkComponent || ContextLinkComponent}
    >
      {children}
    </LinkComponentContext.Provider>
  );
};
