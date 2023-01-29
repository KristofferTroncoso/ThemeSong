process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";
process.env.ASSET_PATH = "/";

const webpack = require("webpack");
const config = require("../webpack.config");

delete config.chromeExtensionBoilerplate;

config.mode = "production";

webpack(config, function (err) {
  if (err) throw err;
});
