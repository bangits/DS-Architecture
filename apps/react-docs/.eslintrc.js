const config = {
  extends: ["eslint-config-custom"],
  parserOptions: {
    project: ["tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
};

module.exports = config;
