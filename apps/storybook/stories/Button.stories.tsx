import { Button } from "@nexus/ui";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Nexus UI/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    variant: "primary",
    onClick: () => console.log("clicked"),
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
  },
};

export const DisabledPrimary: Story = {
  args: {
    label: "Disabled Primary",
    variant: "primary",
    disabled: true,
  },
};

export const DisabledSecondary: Story = {
  args: {
    label: "Disabled Secondary",
    variant: "secondary",
    disabled: true,
  },
};
