import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, LinkButton, Stack, Typography } from "@nexus/ui";

const meta: Meta<typeof LinkButton> = {
  title: "Nexus UI/LinkButton",
  component: LinkButton,
  args: {
    children: "Learn more",
    href: "https://example.com",
  },
  argTypes: {
    children: {
      control: "text",
    },
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
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LinkButton>;

export const Playground: Story = {};

export const InternalNavigation: Story = {
  args: {
    children: "Go to components",
    href: "/components",
  },
};

export const ExternalNavigation: Story = {
  args: {
    children: "Open docs in new tab",
    href: "https://storybook.js.org",
    target: "_blank",
    rel: "noopener noreferrer",
  },
};

export const InParagraph: Story = {
  render: () => (
    <Box as="p" color="text">
      This is a sentence with an inline{" "}
      <LinkButton href="#">LinkButton</LinkButton> that stays aligned with
      surrounding text.
    </Box>
  ),
};

export const LinkList: Story = {
  render: () => (
    <Stack as="section" gap="sm" aria-label="Resource links">
      <LinkButton href="/guidelines">Design guidelines</LinkButton>
      <LinkButton href="/components">Component library</LinkButton>
      <LinkButton href="/tokens">Design tokens</LinkButton>
    </Stack>
  ),
};
