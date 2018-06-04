"use strict";

const path = require("path");
const webpack = require("webpack");
const CleanPlugin = require("clean-webpack-plugin");
const UglifyPlugin = require("uglifyjs-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let config = {
  mode: process.env.NODE_ENV,
  context: path.resolve(__dirname, "src"),

  entry: {
    app: ["./js/app.js", "./scss/main.scss"]
  },

  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "dist/"
  },

  devServer: {
    open: true,
    overlay: true,
    contentBase: "./"
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["env", "stage-3"]
        }
      }
    }, {
      test: /\.scss$/,
      use: ["css-hot-loader"].concat(ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [{
          loader: "css-loader",
          options: {
            sourceMap: true
          }
        }, {
          loader: "postcss-loader",
          options: {
            ident: "postcss",
            plugins: () => [
              require("autoprefixer")()
            ]
          }
        }, {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }]
      }))
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]?[hash]",
          publicPath: "../"
        }
      }, "img-loader"]
    }, {
      test: /\.(woff|woff2|ttf|eot|otf)$/,
      use: [{
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]?[hash]",
          publicPath: "../"
        }
      }]
    }, {
      test: /\.svg$/,
      loader: "svg-url-loader"
    }]
  },

  plugins: [
    new ExtractTextPlugin("css/[name].css", {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html")
    }),
    new CleanPlugin(["dist"]),
    new CopyPlugin([{
      from: "./img",
      to: "img"
    }], {
      ignore: [{
        glob: "svg/*"
      }]
    })
  ]
};

module.exports = (env, opt) => {
  let isProduction = opt.mode === "production";

  if (isProduction) {
    config.devtool = "inline-source-map";

    config.plugins.push(
      new UglifyPlugin({
        sourceMap: true
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      }),
      new ImageminPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i
      })
    );
  }

  return config;
};