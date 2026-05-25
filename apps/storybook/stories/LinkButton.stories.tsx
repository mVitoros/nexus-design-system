import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, LinkButton, Stack, Typography } from "@nexus/ui";
import type { ComponentProps } from "react";

const renderLinkButtonWithTypography = (
  args: ComponentProps<typeof LinkButton>,
) => {
  if (typeof args.children === "string") {
    return (
      <LinkButton {...args}>
        <Typography as="span" fontStyle="bodyMd">
          {args.children}
        </Typography>
      </LinkButton>
    );
  }

  return <LinkButton {...args} />;
};

const meta: Meta<typeof LinkButton> = {
  title: "Nexus UI/LinkButton",
  component: LinkButton,
  render: renderLinkButtonWithTypography,
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
      <Typography as="span" fontStyle="bodyMd">
        This is a sentence with an inline
      </Typography>{" "}
      <LinkButton href="#">
        <Typography as="span" fontStyle="bodyMd">
          LinkButton
        </Typography>
      </LinkButton>{" "}
      <Typography as="span" fontStyle="bodyMd">
        that stays aligned with surrounding text.
      </Typography>
    </Box>
  ),
};

export const LinkList: Story = {
  render: () => (
    <Stack as="section" gap="sm" aria-label="Resource links">
      <LinkButton href="/guidelines">
        <Typography as="span" fontStyle="bodyMd">
          Design guidelines
        </Typography>
      </LinkButton>
      <LinkButton href="/components">
        <Typography as="span" fontStyle="bodyMd">
          Component library
        </Typography>
      </LinkButton>
      <LinkButton href="/tokens">
        <Typography as="span" fontStyle="bodyMd">
          Design tokens
        </Typography>
      </LinkButton>
    </Stack>
  ),
};
