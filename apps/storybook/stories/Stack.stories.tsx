import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack, Box, Typography } from "@nexus/ui";

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const Item = ({ label }: { label: string }) => (
  <Box p="md" background="primary" color="primaryText" borderRadius="md">
    <Typography as="span" fontStyle="bodyMd">
      {label}
    </Typography>
  </Box>
);

export const Default: Story = {
  render: () => (
    <Stack gap="md">
      <Item label="Item 1" />
      <Item label="Item 2" />
      <Item label="Item 3" />
    </Stack>
  ),
};

export const SmallGap: Story = {
  render: () => (
    <Stack gap="xs">
      <Item label="Item 1" />
      <Item label="Item 2" />
      <Item label="Item 3" />
    </Stack>
  ),
};

export const LargeGap: Story = {
  render: () => (
    <Stack gap="xl">
      <Item label="Item 1" />
      <Item label="Item 2" />
      <Item label="Item 3" />
    </Stack>
  ),
};

export const CenteredContent: Story = {
  render: () => (
    <Stack gap="md" alignItems="center">
      <Item label="Item 1" />
      <Item label="Item 2" />
      <Item label="Item 3" />
    </Stack>
  ),
};

export const StretchItems: Story = {
  render: () => (
    <Stack gap="md" alignItems="stretch">
      <Item label="Stretched 1" />
      <Item label="Stretched 2" />
      <Item label="Stretched 3" />
    </Stack>
  ),
};

export const SpacedEvenly: Story = {
  render: () => (
    <Stack gap="md" justifyContent="space-between">
      <Item label="Item 1" />
      <Item label="Item 2" />
      <Item label="Item 3" />
    </Stack>
  ),
};

export const LargeGapExample: Story = {
  render: () => (
    <Stack gap="xxl">
      <Item label="Item 1" />
      <Item label="Item 2" />
      <Item label="Item 3" />
    </Stack>
  ),
};

export const AsSection: Story = {
  render: () => (
    <Stack as="section" gap="lg">
      <Typography as="h2" fontStyle="headingMd">
        Section Title
      </Typography>
      <Item label="Content 1" />
      <Item label="Content 2" />
      <Item label="Content 3" />
    </Stack>
  ),
};
