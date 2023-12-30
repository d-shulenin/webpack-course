import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types";
import webpack from "webpack";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const isDev = options.mode === "development";
  return {
    mode: options.mode, //Providing the mode configuration option tells webpack to use its built-in optimizations accordingly.
    entry: options.paths.entry,
    /*
        A rule to consider: one entry point per HTML page. SPA: one entry point, MPA: multiple entry points.
        entry: {
          home: './src/home.js',
          about: './src/about.js',
          contact: './src/contact.js',
        }
    */
    output: {
      filename: "[name].bundle.js",
      chunkFilename: "[name].bundle.js",
      /*
            [name] = entry name (by default 'main')
            The [contenthash] substitution will add a unique hash based on the content of an asset. When the asset's content changes, [contenthash] will change as well.
        */
      path: options.paths.output,
      clean: true,
      /*
            In general it's good practice to clean the /dist folder before each build, so that only used files will be generated.
        */
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    devServer: buildDevServer(options),
    devtool: isDev && "inline-source-map",
    /*
        In order to make it easier to track down errors and warnings, JavaScript offers source maps, which map your compiled code back to your original source code. If an error originates from b.js, the source map will tell you exactly that.
    */
  };
}
