import { BuildOptions } from "./types";
import StatoscopeWebpackPlugin from "@statoscope/webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration, DefinePlugin, ProgressPlugin } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins({
  mode,
  paths,
  analyzer,
  platform,
  statoscope,
}: BuildOptions) {
  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      title: "Webpack Course",
      /*
            The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags. 
        */
    }),
    new MiniCssExtractPlugin(), // This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS.
    new DefinePlugin({ __PLATFORM__: JSON.stringify(platform) }), // The DefinePlugin replaces variables in your code with other values or expressions at compile time.
    new ForkTsCheckerWebpackPlugin(), // Speeds up TypeScript type checking (by moving it to a separate process)
  ];

  if (mode === "development") plugins.push(new ProgressPlugin()); // The ProgressPlugin provides a way to customize how progress is reported during a compilation.

  if (analyzer) plugins.push(new BundleAnalyzerPlugin());

  if (statoscope) plugins.push(new StatoscopeWebpackPlugin());

  return plugins;
}
