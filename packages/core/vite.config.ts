import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    alias: {
      "@mui/core": path.resolve(__dirname, "./src"),
    },
    coverage: {
      all: true,
      exclude: ["src/**/*.index.ts"],
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
  },
  plugins: [vanillaExtractPlugin()],
});
