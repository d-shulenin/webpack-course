import { BuildOptions } from "./types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";

export function buildLoaders({ mode }: BuildOptions): ModuleOptions["rules"] {
  // const isDev = mode === "development";
  return [
    {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        // "style-loader",
        //**** */
        MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        {
          loader: "css-loader",
          // options: {
          //   modules: {
          //     localIdentName: isDev
          //       ? "[path][name]__[local]"
          //       : "[hash:base64:8]",
          //   },
          // },
        },
        // Compiles Sass to CSS
        "sass-loader",
      ],
    },
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
      options: {
        transpileOnly: true,
      },
    },
    {
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: "asset/resource",
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
          },
        },
      ],
    },
  ]; //Loaders are evaluated/executed from right to left (or from bottom to top)
}
