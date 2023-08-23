const config = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    // [
    //   "@semantic-release/git",
    //   {
    //     assets: ["dist/react/src/*.ts", "dist/react/src/*.tsx"],
    //     message:
    //       "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
    //   },
    // ],
    // "@semantic-release/github",
  ],
};

module.exports = config;
