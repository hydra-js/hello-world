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
    extensions: ['.js', '.jsx']  // Add '.jsx'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Update to include jsx
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  node: '14'
                }
              }],
              '@babel/preset-react'  // Add this preset
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
        { from: 'public', to: 'public' },
        { from: 'layouts', to: 'layouts' },
        { from: 'routes', to: 'routes' }
      ],
    }),
    new Dotenv()
  ]
};
