const webpack = require("webpack");
const path = require("path");
const env = require("./tasks/env");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const ASSET_PATH = process.env.ASSET_PATH || "/";

const fileExtensions = ["jpg", "jpeg", "png", "gif", "eot", "otf", "svg", "ttf", "woff", "woff2"];

const options = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    "themesong-options": path.join(__dirname, "src", "app", "Options", "index.js"),
    "themesong-popup": path.join(__dirname, "src", "app", "Popup", "index.js"),
    "themesong-background": path.join(__dirname, "src", "app", "Background", "index.js"),
    "themesong-content": path.join(__dirname, "src", "app", "Content", "index.js"),
  },
  chromeExtensionBoilerplate: {
    notHotReload: ["themesong-background", "themesong-content"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "builds/firefox-build"),
    clean: true,
    publicPath: ASSET_PATH,
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: new RegExp(".(" + fileExtensions.join("|") + ")$"),
        type: "asset/resource",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        exclude: /node_modules/,
      },
      { test: /\.(ts|tsx)$/, loader: "ts-loader", exclude: /node_modules/ },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "source-map-loader",
          },
          {
            loader: "babel-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: fileExtensions.map((extension) => "." + extension).concat([".js", ".jsx", ".ts", ".tsx", ".css"]),
  },
  plugins: [
    new webpack.DefinePlugin({
      STORE_URL: JSON.stringify("https://addons.mozilla.org/firefox/addon/themesong-for-youtube-music/"),
    }),
    new CleanWebpackPlugin({ verbose: false }),
    new webpack.ProgressPlugin(),
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/firefox-mv2.json",
          to: path.join(__dirname, "builds/firefox-build/manifest.json"),
          toType: "template",
          force: true,
        },
        {
          from: "src/assets/",
          to: path.join(__dirname, "builds/firefox-build/assets"),
          force: true,
        },
        {
          from: "src/_locales/",
          to: path.join(__dirname, "builds/firefox-build/_locales"),
          force: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "app", "Options", "index.html"),
      filename: "options.html",
      chunks: ["themesong-options"],
      cache: false,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "app", "Popup", "index.html"),
      filename: "popup.html",
      chunks: ["themesong-popup"],
      cache: false,
    }),
  ],
  infrastructureLogging: {
    level: "info",
  },
};

if (env.NODE_ENV === "development") {
  options.devtool = "cheap-module-source-map";
} else {
  options.optimization = {
    minimize: true,
    minimizer: [new TerserPlugin()],
  };
}

module.exports = options;
