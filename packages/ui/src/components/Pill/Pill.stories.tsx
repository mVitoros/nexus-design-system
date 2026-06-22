import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pill } from "./Pill";
import { Inline } from "../Inline";

const meta = {
  title: "Nexus UI/Pill",
  component: Pill,
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Pill",
  },
};

export const DecorativePillVariety: Story = {
  args: {
    label: "Pill",
  },
  render: () => (
    <Inline gap="md">
      <Pill label="Design" />
      <Pill label="System" variant="danger" />
      <Pill label="Pill" variant="success" />
      <Pill label="Component" />
    </Inline>
  ),
};

export const AsInteractableButtons: Story = {
  args: {
    label: "Pill",
  },
  render: () => (
    <Inline gap="md">
      <Pill label="Design" onClick={() => console.log("clicked")} />
      <Pill
        label="System"
        variant="danger"
        onClick={() => console.log("clicked")}
      />
      <Pill
        label="Pill"
        variant="success"
        onClick={() => console.log("clicked")}
      />
      <Pill label="Component" onClick={() => console.log("clicked")} disabled />
    </Inline>
  ),
};
