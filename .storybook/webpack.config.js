module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.vue$/,
    loader: "vue-docgen-loader",
    enforce: "post",
  });

  return config;
};
