const webpack = require("webpack");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");

const config = {
  entry: path.resolve(__dirname, "app/App.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
    filename: "bundle.js",
  },
  target: ["web", "es5"],
  resolve: {
    extensions: [".mjs", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/html/index.html",
      title: "Expense Manager",
    }),
    new InjectManifest({
      swSrc: path.resolve(__dirname, "app", "sw.js"),
      swDest: path.resolve(__dirname, "public", "sw.js"),
    }),
    new WebpackPwaManifest({
      name: "Expense Manage",
      short_name: "SRF",
      description: "Expense Manage",
      background_color: "#ffffff",
      inject: true,
      fingerprints: true,
      ios: true,
      crossorigin: null,
      icons: [
        {
          src: path.resolve("app/icon/icon.png"),
          sizes: [96, 128, 192, 256, 384, 512, 1024],
        },
      ],
    }),
  ],
};

module.exports = config;
