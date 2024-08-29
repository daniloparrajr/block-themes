// WordPress webpack config.
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

// Plugins.
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

// Utilities.
// eslint-disable-next-line no-undef
const path = require("path");

const { fromProjectRoot } = require("@wordpress/scripts/utils/file");
const { getWordPressSrcDirectory } = require("@wordpress/scripts/utils");
const { sync: glob } = require("fast-glob");

function getStylesEntryPoints() {
  // Checks whether any block metadata files can be detected in the defined source directory.
  const stylePaths = glob("styles/**/*.scss", {
    absolute: false,
    cwd: fromProjectRoot(getWordPressSrcDirectory()),
  });

  let entryPoints = {};

  if (stylePaths.length > 0) {
    for (const stylePath of stylePaths) {
      let fileName = path.basename(stylePath, path.extname(stylePath));

      entryPoints = {
        ...entryPoints,
        ...{
          [path.join(path.dirname(stylePath), fileName)]: path.resolve(
            fromProjectRoot(getWordPressSrcDirectory()),
            stylePath,
          ),
        },
      };
    }
  }

  return entryPoints;
}

// Add any new entry points by extending the webpack config.
module.exports = {
  ...defaultConfig,
  ...{
    entry: {
      ...getStylesEntryPoints(),
      "scripts/block-variations": path.resolve(
        process.cwd(),
        "src/scripts",
        "block-variations.js",
      ),
    },

    plugins: [
      // Include WP's plugin config.
      ...defaultConfig.plugins.filter(
        (plugin) => plugin.constructor.name !== "RtlCssPlugin",
      ),
      // Removes the empty `.js` files generated by webpack but
      // sets it after WP has generated its `*.asset.php` file.
      new RemoveEmptyScriptsPlugin({
        stage: RemoveEmptyScriptsPlugin.STAGE_AFTER_PROCESS_PLUGINS,
      }),
    ],
  },
};
