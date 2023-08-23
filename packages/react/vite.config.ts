import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
    alias: {
      "@my-ui/react": path.resolve(__dirname, "./src"),
      "@my-ui/core": path.resolve(__dirname, "../core/src"),
    },
  },
  plugins: [react(), vanillaExtractPlugin()],
});
