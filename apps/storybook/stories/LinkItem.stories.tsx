import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Box,
  LinkItem,
  NexusProvider,
  Stack,
  Typography,
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
  title: "Nexus UI/Link Item",
  component: LinkItem,
  args: {
    href: "https://example.com",
    children: (
      <Stack gap="sm">
        <Typography as="span" fontStyle="headingSm">
          Link item
        </Typography>
        <Typography as="span" fontStyle="bodyMd">
          A composite clickable surface for richer content.
        </Typography>
      </Stack>
    ),
  },
  argTypes: {
    href: {
      control: "text",
    },
    target: {
      control: "select",
      options: ["_self", "_blank", "_parent", "_top"],
    },
    rel: {
      control: "text",
    },
  },
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof LinkItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <LinkItem {...args}>
      <Stack gap="sm">
        <Typography as="span" fontStyle="headingSm">
          Design tokens
        </Typography>
        <Typography as="span" fontStyle="bodyMd">
          Browse the color, space, and typography foundations.
        </Typography>
      </Stack>
    </LinkItem>
  ),
};

export const CardLikeItem: Story = {
  args: {
    href: "/components/button",
    target: "_self",
  },
  render: (args) => (
    <LinkItem {...args}>
      <Box
        display="flex"
        flexDirection="column"
        gap="xs"
        p="md"
        borderRadius="md"
        background="surfaceMuted"
        color="text"
      >
        <Typography as="span" fontStyle="headingSm">
          Button component
        </Typography>
        <Typography as="span" fontStyle="bodyMd">
          A reusable action surface with variants and disabled states.
        </Typography>
      </Box>
    </LinkItem>
  ),
};

export const WithProvider: Story = {
  args: {
    href: "/components/link-item",
  },
  render: (args) => (
    <NexusProvider linkComponent={RouterLikeLink}>
      <LinkItem {...args}>
        <Stack gap="sm">
          <Typography as="span" fontStyle="headingSm">
            Provider-aware item
          </Typography>
          <Typography as="span" fontStyle="bodyMd">
            This route is normalized by the custom link component.
          </Typography>
        </Stack>
      </LinkItem>
    </NexusProvider>
  ),
};
