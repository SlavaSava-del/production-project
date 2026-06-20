import type { BuildOptions } from "./types/config.ts";
import webpack from "webpack";
import { buildPlugins } from "./buildPlugins.ts";
import { buildLoaders } from "./buildLoaders.ts";
import { buildResolvers } from "./buildResolvers.ts";
import { buildDevServer } from "./buildDevServer.ts";

export function buildWebpackConfig(
  options: BuildOptions,
): webpack.Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
