const path = require("path");

module.exports = {
  entry: "./src/index.js",
  target: "node",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
};
