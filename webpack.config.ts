import webpack from "webpack";
import { buildWebpack } from "./configs/build/buildWebpack";
import path from "path";
import { BuildOptions } from "configs/build/types";

export default (env: Partial<BuildOptions>): webpack.Configuration =>
  buildWebpack({
    mode: env.mode ?? "development",
    devServerPort: env.devServerPort ?? 8080,
    analyzer: env.analyzer,
    platform: env.platform,
    statoscope: env.statoscope,
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      output: path.resolve(__dirname, "build"),
      html: path.resolve(__dirname, "public", "index.html"),
      src: path.resolve(__dirname, "src"),
    },
  });
