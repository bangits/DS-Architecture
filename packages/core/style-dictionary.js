const StyleDictionary = require('style-dictionary');
const fs = require('fs');

function createBackup() {
  fs.cp("./src/tokens", `./src/tokens_backup/${Date.now()}/`, { recursive: true }, () => {});
}

const filters = ['color', 'dimension', 'spacing', 'borderRadius', 'opacity', 'fontFamilies', 'lineHeights', 'letterSpacing', 'paragraphSpacing', 'fontWeights', 'fontSizes']

filters.forEach((filter) => {
  StyleDictionary.registerFilter({
    name: filter,
    matcher: (token) => token.type === filter,
  })
})


StyleDictionary.registerTransformGroup({
  name: 'my-transforms',
  transforms: ['name/cti/camel']
})

const sd = StyleDictionary.extend({
  source: [
    "./tokens.json"
  ],
  platforms: {
    js: {
      buildPath: "./src/tokens/",
      transformGroup: 'my-transforms',
      files: filters.map((filter) => ({
          name: filter,
          filter: filter,
          destination: `${filter}.ts`,
          format: "javascript/es6",
          options: {outputReferences: true}
      }))
    }
  }
});

// createBackup();
sd.cleanAllPlatforms();
sd.buildAllPlatforms();

