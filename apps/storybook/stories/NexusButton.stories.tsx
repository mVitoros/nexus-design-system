import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@nexus/ui";

const meta: Meta<typeof Button> = {
  title: "Nexus UI/Button",
  component: Button,
  args: {
    label: "Click me",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const CustomLabel: Story = {
  args: {
    label: "Primary Action",
  },
};
