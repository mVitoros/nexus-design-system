import { Icon } from "@nexus/ui";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Nexus UI/Icon",
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: "home",
    size: "regular",
    strokeWidth: "regular",
    color: "brand",
  },
};
