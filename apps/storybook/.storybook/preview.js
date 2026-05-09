import React from "react";
import { lightTheme } from "@nexus/tokens";
import "@nexus/tokens/styles.css";
import "@nexus/ui/styles.css";

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  decorators: [
    (Story) =>
      React.createElement(
        "div",
        {
          className: lightTheme,
          style: { minHeight: "100vh", padding: "1rem" },
        },
        React.createElement(Story),
      ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
