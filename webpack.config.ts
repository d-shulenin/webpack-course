import webpack from "webpack";
import { buildWebpack } from "./configs/build/buildWebpack";
import { BuildMode } from "./configs/build/types";
import path from "path";

interface EnvVariables {
  mode: BuildMode;
  devServerPort: number;
  analyzer: boolean;
}

export default (env: EnvVariables): webpack.Configuration =>
  buildWebpack({
    mode: env.mode ?? "development",
    devServerPort: env.devServerPort ?? 8080,
    analyzer: env.analyzer,
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      output: path.resolve(__dirname, "build"),
      html: path.resolve(__dirname, "public", "index.html"),
      src: path.resolve(__dirname, "src"),
    },
  });
