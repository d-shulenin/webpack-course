import { BuildOptions } from "./types";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    static: "./build",
    port: options.devServerPort,
    historyApiFallback: true,
    /*
        Use webpack with a development server that provides live reloading. This should be used for development only.
        It uses webpack-dev-middleware under the hood, which provides fast in-memory access to the webpack assets.
    */
  };
}
