import type { Meta, StoryObj } from "@storybook/react-vite";
import { Inline, Box, Typography } from "@nexus/ui";

const meta: Meta<typeof Inline> = {
  title: "Layout/Inline",
  component: Inline,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const Item = ({ label }: { label: string }) => (
  <Box p="md" background="success" color="primaryText" borderRadius="md">
    <Typography as="span" fontStyle="bodyMd">
      {label}
    </Typography>
  </Box>
);

export const Default: Story = {
  render: () => (
    <Inline gap="md">
      <Item label="Item 1" />
      <Item label="Item 2" />
      <Item label="Item 3" />
    </Inline>
  ),
};

export const SmallGap: Story = {
  render: () => (
    <Inline gap="xs">
      <Item label="Item 1" />
      <Item label="Item 2" />
      <Item label="Item 3" />
    </Inline>
  ),
};

export const LargeGap: Story = {
  render: () => (
    <Inline gap="xl">
      <Item label="Item 1" />
      <Item label="Item 2" />
      <Item label="Item 3" />
    </Inline>
  ),
};

export const CenteredVertically: Story = {
  render: () => (
    <Inline gap="md" alignItems="center">
      <Item label="Item 1" />
      <Box p="md" background="primary" color="primaryText" borderRadius="md">
        <Typography as="span" fontStyle="bodyMd">
          Taller Item
        </Typography>
      </Box>
      <Item label="Item 3" />
    </Inline>
  ),
};

export const SpacedBetween: Story = {
  render: () => (
    <Box display="flex" background="surface" p="md" borderRadius="md">
      <Inline gap="md" justifyContent="space-between">
        <Item label="Left" />
        <Item label="Right" />
      </Inline>
    </Box>
  ),
};

export const WithPadding: Story = {
  render: () => (
    <Box p="lg" background="surface" borderRadius="md">
      <Inline gap="lg">
        <Item label="Item 1" />
        <Item label="Item 2" />
        <Item label="Item 3" />
      </Inline>
    </Box>
  ),
};

export const ButtonGroup: Story = {
  render: () => (
    <Inline gap="sm">
      <Box
        as="button"
        p="md"
        borderRadius="sm"
        background="primary"
        color="primaryText"
      >
        <Typography as="span" fontStyle="bodyMd">
          Primary
        </Typography>
      </Box>
      <Box
        as="button"
        p="md"
        borderRadius="sm"
        background="surface"
        color="text"
      >
        <Typography as="span" fontStyle="bodyMd">
          Secondary
        </Typography>
      </Box>
      <Box
        as="button"
        p="md"
        borderRadius="sm"
        background="border"
        color="text"
      >
        <Typography as="span" fontStyle="bodyMd">
          Tertiary
        </Typography>
      </Box>
    </Inline>
  ),
};

export const BreadcrumbNavigation: Story = {
  render: () => (
    <Inline gap="sm" alignItems="center">
      <Box as="a" href="#" color="primary">
        <Typography as="span" fontStyle="bodyMd">
          Home
        </Typography>
      </Box>
      <Box color="textMuted">
        <Typography as="span" fontStyle="bodyMd">
          /
        </Typography>
      </Box>
      <Box as="a" href="#" color="primary">
        <Typography as="span" fontStyle="bodyMd">
          Components
        </Typography>
      </Box>
      <Box color="textMuted">
        <Typography as="span" fontStyle="bodyMd">
          /
        </Typography>
      </Box>
      <Box color="text">
        <Typography as="span" fontStyle="bodyMd">
          Inline
        </Typography>
      </Box>
    </Inline>
  ),
};

export const AsArticle: Story = {
  render: () => (
    <Inline as="article" gap="lg">
      <Item label="Tag 1" />
      <Item label="Tag 2" />
      <Item label="Tag 3" />
      <Item label="Tag 4" />
    </Inline>
  ),
};
