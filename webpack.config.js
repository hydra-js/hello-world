const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const { NODE_ENV = 'production' } = process.env;

module.exports = {
  entry: './src/index.js',
  mode: NODE_ENV,
  target: 'node14',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js']
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  node: '14'
                }
              }]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new WebpackShellPluginNext({
      onBuildEnd: {
        scripts: ['npm run start:dev'],
        blocking: false,
        parallel: true
      }
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public', to: 'public' }
      ],
    }),
    new Dotenv()
  ]
};
