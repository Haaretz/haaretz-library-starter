const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const pkg = require('../getPackageName');
module.exports = {
  entry: {
    [pkg.camelCase]: [
      './src/index.js'
    ]
  },
  node: {
    global: true,
    process: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  },
  module: {
    rules: [
      {
        enforce:"pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/, loader: 'eslint-loader', enforce: 'pre'
      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2|mp4|webm)$/,
        loader: 'file',  // can replace with  loader: 'url?limit=10000' to make webpack inline assets into dataUrl up to the size limie
      }
    ]
  },
  plugins: [new LodashModuleReplacementPlugin()]
};
