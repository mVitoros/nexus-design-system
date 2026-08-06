import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Stack, Typography } from "@nexus/ui";
import { vars } from "@nexus/tokens";

const capitalize = (value: string) => value[0]?.toUpperCase() + value.slice(1);

const typographyOptions = Object.entries(vars.typography).flatMap(
  ([key, value]) =>
    Object.keys(value).map(
      (key2) =>
        `${key}${capitalize(key2)}` as NonNullable<
          React.ComponentProps<typeof Typography>["fontStyle"]
        >,
    ),
);

const meta: Meta<typeof Typography> = {
  title: "Nexus UI/Typography",
  component: Typography,
  args: {
    as: "span",
    children: "The quick brown fox jumps over the lazy dog",
    fontStyle: "bodyMd",
  },
  argTypes: {
    as: {
      control: "select",
      options: ["span", "h1", "h2", "h3", "h4", "h5", "h6"],
    },
    children: {
      control: "text",
    },
    fontStyle: {
      control: "select",
      options: typographyOptions,
    },
  },
  parameters: {
    layout: "padded",
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Stack gap="md" as="section">
      {typographyOptions.map((fontStyle) => (
        <Box key={fontStyle} as="div">
          <Typography as="span" fontStyle={fontStyle}>
            {fontStyle}
          </Typography>
        </Box>
      ))}
    </Stack>
  ),
};

export const HeadingScale: Story = {
  render: () => (
    <Stack gap="sm" as="section">
      <Typography as="h1" fontStyle="headingXl">
        Heading XL
      </Typography>
      <Typography as="h2" fontStyle="headingLg">
        Heading LG
      </Typography>
      <Typography as="h3" fontStyle="headingMd">
        Heading MD
      </Typography>
      <Typography as="h4" fontStyle="headingSm">
        Heading SM
      </Typography>
    </Stack>
  ),
};

export const BodyScale: Story = {
  render: () => (
    <Stack gap="xs" as="section">
      <Typography as="span" fontStyle="bodyMd">
        Body MD - Main reading text
      </Typography>
      <Typography as="span" fontStyle="bodySm">
        Body SM - Secondary text
      </Typography>
      <Typography as="span" fontStyle="bodyXs">
        Body XS - Fine print
      </Typography>
    </Stack>
  ),
};

export const ResponsivePreview: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Typography scales up at tablet and desktop breakpoints with intrinsic defaults.",
      },
    },
  },
  render: () => (
    <Stack gap="sm" as="section">
      <Typography as="h2" fontStyle="headingLg">
        Responsive Heading
      </Typography>
      <Typography as="span" fontStyle="bodyMd">
        Resize the viewport to observe larger typography at tablet and desktop
        breakpoints.
      </Typography>
    </Stack>
  ),
};
