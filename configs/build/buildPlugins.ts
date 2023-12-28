import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration, ProgressPlugin } from "webpack";
import { BuildOptions } from "./types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins({ mode, paths, analyzer }: BuildOptions) {
  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      title: "Webpack Course",
      /*
            The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags. 
        */
    }),
    new MiniCssExtractPlugin(), // This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS.
  ];

  if (mode === "development") plugins.push(new ProgressPlugin()); // The ProgressPlugin provides a way to customize how progress is reported during a compilation.

  if (analyzer) plugins.push(new BundleAnalyzerPlugin());

  return plugins;
}
