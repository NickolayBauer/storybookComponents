module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.vue$/,
        loader: "vue-docgen-loader",
        enforce: "post",
      },
    ],
  },
};
