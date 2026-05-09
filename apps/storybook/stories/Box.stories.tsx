import { Box } from "@nexus/ui";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Box> = {
  title: "Nexus UI/Box",
  component: Box,
  args: {
    as: "div",
    children: "Box content",
    p: "md",
    background: "surfaceMuted",
    borderRadius: "md",
  },
  argTypes: {
    as: {
      control: "select",
      options: ["div", "section", "a", "button", "input"],
    },
    children: { control: "text" },
    p: {
      control: "select",
      options: ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"],
    },
    background: {
      control: "select",
      options: [
        "background",
        "surface",
        "surfaceMuted",
        "border",
        "text",
        "textMuted",
        "primary",
        "primaryHover",
        "primaryText",
        "success",
        "danger",
        "focusRing",
      ],
    },
    borderRadius: {
      control: "select",
      options: ["sm", "md", "lg", "full"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Playground: Story = {
  render: (args) => {
    if (args.as === "input") {
      const { children: _children, ...inputArgs } = args;
      return <Box {...inputArgs} />;
    }

    return <Box {...args} />;
  },
};

export const AsAnchor: Story = {
  args: {
    as: "a",
    href: "https://example.com",
    children: "Anchor Box",
    color: "primary",
    background: "surface",
    p: "sm",
    borderRadius: "sm",
  },
};

export const AsButton: Story = {
  args: {
    as: "button",
    type: "button",
    children: "Button Box",
    color: "primaryText",
    background: "primary",
    borderRadius: "md",
    px: "md",
    py: "sm",
  },
};

export const AsInputCheckbox: Story = {
  render: () => (
    <Box display="flex" alignItems="center" gap="sm">
      <Box as="input" type="checkbox" aria-labelledby="id1" />
      <Box as="label" id="id1">
        Accept terms
      </Box>
    </Box>
  ),
};

export const ResponsiveSpacing: Story = {
  args: {
    as: "div",
    children: "Resize viewport to see spacing change",
    p: { mobile: "xs", tablet: "md", desktop: "xl" },
    background: "surfaceMuted",
    borderRadius: "md",
  },
};

export const CardRowLayout: Story = {
  render: () => (
    <Box
      display="flex"
      gap="md"
      p="md"
      background="surfaceMuted"
      borderRadius="md"
    >
      <Box background="surface" p="md" borderRadius="sm" color="text">
        Card A
      </Box>
      <Box background="surface" p="md" borderRadius="sm" color="text">
        Card B
      </Box>
    </Box>
  ),
};

export const SpacingScalePreview: Story = {
  render: () => (
    <Box display="grid" gap="sm">
      <Box background="surfaceMuted" p="xxs" borderRadius="sm">
        p="xxs"
      </Box>
      <Box background="surfaceMuted" p="xs" borderRadius="sm">
        p="xs"
      </Box>
      <Box background="surfaceMuted" p="sm" borderRadius="sm">
        p="sm"
      </Box>
      <Box background="surfaceMuted" p="md" borderRadius="sm">
        p="md"
      </Box>
      <Box background="surfaceMuted" p="lg" borderRadius="sm">
        p="lg"
      </Box>
      <Box background="surfaceMuted" p="xl" borderRadius="sm">
        p="xl"
      </Box>
      <Box background="surfaceMuted" p="xxl" borderRadius="sm">
        p="xxl"
      </Box>
    </Box>
  ),
};

export const PolymorphicShowcase: Story = {
  render: () => (
    <Box display="grid" gap="sm">
      <Box as="div" background="surfaceMuted" p="sm" borderRadius="sm">
        div element
      </Box>
      <Box as="section" background="surfaceMuted" p="sm" borderRadius="sm">
        section element
      </Box>
      <Box as="a" href="https://example.com" color="primary">
        anchor element
      </Box>
      <Box
        as="button"
        type="button"
        background="primary"
        color="primaryText"
        px="md"
        py="xs"
        borderRadius="sm"
      >
        button element
      </Box>
    </Box>
  ),
};
