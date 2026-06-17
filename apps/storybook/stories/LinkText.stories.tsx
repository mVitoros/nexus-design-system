import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Box,
  LinkText,
  Typography,
  NexusProvider,
  createLinkComponent,
} from "@nexus/ui";

const RouterLikeLink = createLinkComponent(
  ({ href, children, ...props }, ref) => {
    const normalizedHref = href.startsWith("/") ? `/app${href}` : href;

    return (
      <a {...props} href={normalizedHref} ref={ref} data-provider-link="true">
        {children}
      </a>
    );
  },
);

const meta = {
  title: "Nexus UI/Link",
  component: LinkText,
  args: {
    href: "https://example.com",
    label: "Read the docs",
  },
  argTypes: {
    href: {
      control: "text",
    },
    label: {
      control: "text",
    },
    target: {
      control: "select",
      options: ["_self", "_blank", "_parent", "_top"],
    },
    rel: {
      control: "text",
    },
    children: {
      control: "text",
    },
  },
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof LinkText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const External: Story = {
  args: {
    href: "https://storybook.js.org",
    label: "Open Storybook",
    target: "_blank",
    rel: "noopener noreferrer",
  },
};

export const InlineInText: Story = {
  render: () => (
    <Box as="p" color="text">
      <Typography as="span" fontStyle="bodyMd">
        Browse the
      </Typography>{" "}
      <LinkText href="#" label="component docs" />{" "}
      <Typography as="span" fontStyle="bodyMd">
        for more details.
      </Typography>
    </Box>
  ),
};

export const WithProvider: Story = {
  args: {
    href: "/components/link",
    label: "Provider-aware link",
  },
  render: (args) => (
    <NexusProvider linkComponent={RouterLikeLink}>
      <LinkText {...args} />
    </NexusProvider>
  ),
};
