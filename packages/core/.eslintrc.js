const config = {
  extends: ["eslint-config-custom"],
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.eslint.json"],
    tsconfigRootDir: __dirname,
  },
};

module.exports = config;
