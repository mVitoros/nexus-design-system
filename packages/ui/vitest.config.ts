import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: [
      {
        find: /^@nexus\/tokens$/,
        replacement: resolve(import.meta.dirname, "../tokens/src/index.ts"),
      },
      {
        find: /^@nexus\/tokens\/styles\.css$/,
        replacement: resolve(import.meta.dirname, "../tokens/src/index.ts"),
      },
    ],
  },
  test: {
    environment: "jsdom",
    include: ["**/*.{test,spec}.{ts,tsx}"],
    setupFiles: ["./test/setup.ts"],
    globals: false,
  },
});
