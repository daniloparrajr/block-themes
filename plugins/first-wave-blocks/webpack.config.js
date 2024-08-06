const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const DependencyExtractionWebpackPlugin = require("@wordpress/dependency-extraction-webpack-plugin");

/**
 * Externalize 'scripts' that are registered outside the plugin
 *
 * @param {string} request Requested module
 *
 * @return {(string|undefined)} Script global
 */
function requestToExternal(request) {
  if (request === "gsap") {
    return request;
  }
}

/**
 * Externalize 'scripts' that are registered outside the plugin
 *
 * @param {string} request Requested module
 *
 * @return {(string|undefined)} Script global
 */
function requestToExternalModule(request) {
  if (request === "gsap") {
    return request;
  }
}

/**
 * Generate custom script config based on @wp-scripts default script config.
 *
 * @param  config string
 * @return {*&{entry: (*&{blocks: string, "media-text": string}), plugins: *[]}}
 */
function generateScriptConfig(config) {
  /**
   * https://samhermes.com/posts/customize-default-wp-scripts-config/
   */
  return {
    ...config,
    plugins: [
      ...config.plugins.filter(
        (plugin) =>
          plugin.constructor.name !== "DependencyExtractionWebpackPlugin",
      ),
      new DependencyExtractionWebpackPlugin({
        injectPolyfill: true,
        requestToExternal,
      }),
    ],
  };
}

/**
 * Generate custom script config based on @wp-scripts default script config.
 *
 * @param  config string
 * @return {*&{entry: (*&{blocks: string, "media-text": string}), plugins: *[]}}
 */
function generateModuleConfig(config) {
  /**
   * https://samhermes.com/posts/customize-default-wp-scripts-config/
   */
  return {
    ...config,

    // These lines are necessary to enable module compilation at time-of-writing:
    output: { module: true },
    experiments: { outputModule: true },

    plugins: [
      ...config.plugins.filter(
        (plugin) =>
          plugin.constructor.name !== "DependencyExtractionWebpackPlugin",
      ),
      new DependencyExtractionWebpackPlugin({
        // With modules, use `requestToExternalModule`:
        requestToExternalModule,
      }),
    ],
  };
}

/*
 * If the --experimental-modules flag is active @wp-scripts config will return an array of configs.
 * Only update the script config.
 */
if (Array.isArray(defaultConfig)) {
  const [scriptConfig, moduleConfig] = defaultConfig;
  module.exports = [
    generateScriptConfig(scriptConfig),
    generateModuleConfig(moduleConfig),
  ];
} else {
  module.exports = generateScriptConfig(defaultConfig);
}
