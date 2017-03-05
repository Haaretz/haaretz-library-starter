const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const pkg = require('../getPackageName');
module.exports = {
  entry: {
    [pkg.camelCase]: [
      './src/index.<%= (typescript) ? 'ts' : 'js' %>'
    ]
  },
  resolve: { // see more info here https://github.com/webpack/webpack/issues/1979
      mainFields: ['module', 'jsnext:browser', 'jsnext:main', 'browser', 'main'],
      extensions: [<%= (typescript)  ? '".ts",' : '' %> '.js']
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
    <% if (typescript) { %>
      {
        test:/\.ts$/,
        loader:'awesome-typescript-loader'
        options: { module: (process.env.NODE_ENV === 'test') ? 'commonjs' : 'es2015' }
      }, <% } %>  <% if (typescript && lint) { %>
      {
        test:/\.ts$/,
        enforce:'pre',
        loader:'tslint-loader'
      },<% } %>
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },  <% if (lint) { %>
      {
        test: /\.js$/, loader: 'eslint-loader', enforce: 'pre', exclude:/node_modules/
      },  <% } %>
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2|mp4|webm)$/,
        loader: 'file'  // can replace with  loader: 'url?limit=10000' to make webpack inline assets into dataUrl up to the size limie
      }
    ]
  },
  plugins: [new LodashModuleReplacementPlugin()]
};
