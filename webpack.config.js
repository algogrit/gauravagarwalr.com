import path from "path";

import webpack from "webpack";
import ExtractTextPlugin from "extract-text-webpack-plugin";

var outputConfig = {
  publicPath: "/", // @todo make this dynamic
  path: path.join(process.cwd(), "dist"),
  filename: "phenomic/[name].js",
  chunkFilename: "phenomic/[name].chunk.js"
}

if(process.env.PHENOMIC_ENV === "static") {
  outputConfig["filename"] = "phenomic/[name].[chunkhash:8].js";
  outputConfig["chunkFilename"] = "phenomic/[name].[chunkhash:8].chunk.js";
}

module.exports = (config: PhenomicConfig) => ({
  entry: {
    [config.bundleName]: [
      process.env.PHENOMIC_ENV !== "static" &&
        require.resolve("webpack-hot-middleware/client"),
      process.env.PHENOMIC_ENV !== "static" &&
        require.resolve("react-hot-loader/patch"),
      "./App.js"
    ].filter(item => item)
  },
  output: outputConfig,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
        options: {
          babelrc: false,
          presets: [require.resolve("@phenomic/babel-preset")],
          plugins: [require.resolve("react-hot-loader/babel")]
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: require.resolve("style-loader"),
          use: require.resolve("css-loader")
        })
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          }, {
            loader: "css-loader" // translates CSS into CommonJS
          }, {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "phenomic/[name].[contenthash:8].css",
      disable: process.env.PHENOMIC_ENV !== "static"
    }),
    process.env.PHENOMIC_ENV !== "static" &&
      new webpack.HotModuleReplacementPlugin(),
    process.env.NODE_ENV === "production" &&
      new webpack.optimize.UglifyJsPlugin()
  ].filter(item => item),

  resolve: {
    // react-native(-web) | react-primitives
    extensions: [".web.js", ".js", ".json"],
    alias: {
      "react-native": "react-native-web"
    }
  },

  // eslint-disable-next-line max-len
  // https://github.com/facebookincubator/create-react-app/blob/fbdff9d722d6ce669a090138022c4d3536ae95bb/packages/react-scripts/config/webpack.config.prod.js#L279-L285
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty"
  }
});
