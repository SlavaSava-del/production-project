import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import type { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const lessLoader = {
    test: /\.less$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            namedExport: false,
            localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64]",
          },
        },
      },
      "less-loader",
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescriptLoader, lessLoader];
}
