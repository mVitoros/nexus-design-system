import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig(({ command }) => ({
  plugins: [react(), vanillaExtractPlugin()],
  resolve:
    command === "serve"
      ? {
          alias: [
            {
              find: /^@nexus\/tokens$/,
              replacement: resolve(
                import.meta.dirname,
                "../tokens/src/index.ts",
              ),
            },
            {
              find: /^@nexus\/tokens\/styles\.css$/,
              replacement: resolve(
                import.meta.dirname,
                "../tokens/src/index.ts",
              ),
            },
          ],
        }
      : undefined,
  build: {
    lib: {
      entry: resolve(import.meta.dirname, "src/index.ts"),
      name: "NexusUI",
      fileName: "nexus-ui",
    },
    rolldownOptions: {
      external: ["react", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react/jsx-runtime": "ReactJsxRuntime",
        },
      },
    },
  },
}));
