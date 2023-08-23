import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path, { dirname, join } from "path";
import { UserConfig, mergeConfig } from "vite";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
const getAbsolutePath = (value: string) => {
  return dirname(require.resolve(join(value, "package.json")));
};

const packagesPath = path.resolve(__dirname, "../../../packages");

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal(config: UserConfig) {
    return mergeConfig(config, {
      plugins: [vanillaExtractPlugin()],
      resolve: {
        alias: {
          "@my-ui/react": path.resolve(packagesPath, "./react/src"),
          "@my-ui/core": path.resolve(packagesPath, "./core/src"),
        },
      },
    } as UserConfig);
  },
};

export default config;