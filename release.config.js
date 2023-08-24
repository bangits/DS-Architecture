const config = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/npm",
      {
        pkgRoot: "packages/react",
        npmPublish: false,
      },
    ],
    [
      "@semantic-release/npm",
      {
        pkgRoot: "packages/core",
        npmPublish: false,
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["packages/core/package.json", "packages/react/package.json"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};

module.exports = config;
