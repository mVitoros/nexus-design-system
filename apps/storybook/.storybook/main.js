/** @type { import('@storybook/react-vite').StorybookConfig } */
import { resolve } from "node:path";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/react-vite",
  viteFinal: (config, { configType }) => {
    config.plugins = config.plugins || [];
    config.plugins.push(vanillaExtractPlugin());

    if (configType === "DEVELOPMENT") {
      config.resolve = config.resolve || {};
      config.resolve.alias = [
        ...(config.resolve.alias || []),
        {
          find: /^@nexus\/ui$/,
          replacement: resolve(
            import.meta.dirname,
            "../../../packages/ui/src/index.ts",
          ),
        },
        {
          find: /^@nexus\/ui\/styles\.css$/,
          replacement: resolve(
            import.meta.dirname,
            "../../../packages/ui/src/index.ts",
          ),
        },
        {
          find: /^@nexus\/tokens$/,
          replacement: resolve(
            import.meta.dirname,
            "../../../packages/tokens/src/index.ts",
          ),
        },
        {
          find: /^@nexus\/tokens\/styles\.css$/,
          replacement: resolve(
            import.meta.dirname,
            "../../../packages/tokens/src/index.ts",
          ),
        },
      ];
    }

    return config;
  },
};
export default config;
