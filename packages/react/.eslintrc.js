const config = {
  extends: ["eslint-config-custom"],
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.paths.json"],
    tsconfigRootDir: __dirname,
  },
};

module.exports = config;
