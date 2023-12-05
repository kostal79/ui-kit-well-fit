import path from "path";
import webpack from "webpack";


const config: webpack.Configuration = {
  mode: "production",
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    library: {
      type: "umd"
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts'],
  },
  externals: {
    react: "react"
  },
  devtool: 'inline-source-map',
};

export default config