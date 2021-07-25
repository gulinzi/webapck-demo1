const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackBundleAnalyzerPlugin = require("webpack-bundle-analyzer");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: "./src/index.js",
    // main: "./src/main.js",
  },
  // 提取公用的包
  optimization: {
    // usedExports: true,
    // webpack runtime bundle
    // runtimeChunk: "single",
    // 保持本位变化，其他hash不变化
    moduleIds: "deterministic",
    // 抽取公用包
    // splitChunks: {
    //   chunks: "all",
    //   cacheGroups: {
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: "vendors",
    //       chunks: "all",
    //     },
    //   },
    // },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  plugins: [
    // 编译进度
    new webpack.ProgressPlugin(),
    // 生成html
    new HtmlWebpackPlugin({
      title: "demo1-cache",
    }),
    // 抽离css
    new MiniCssExtractPlugin(),
    // 资源分析
    // new WebpackBundleAnalyzerPlugin(),
  ],
  module: {
    rules: [
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/i,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
