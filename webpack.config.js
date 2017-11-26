const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const distDir = path.resolve(__dirname, 'dist');

module.exports = {
  target: 'node',
  context: path.join(__dirname, 'src/api'),
  entry: {
    api: './api'
  },
  output: {
    path: distDir,
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: [
      '.webpack.js',
      '.ts',
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //     screw_ie8: true,
    //     conditionals: true,
    //     unused: true,
    //     comparisons: true,
    //     sequences: true,
    //     dead_code: true,
    //     evaluate: true,
    //     if_return: true,
    //     join_vars: true
    //   },
    //   output: {
    //     comments: false
    //   }
    // })
  ],
  externals: [nodeExternals()],
  node: {
    __dirname: false,
    __filename: false,
    console: true,
    fs: 'empty',
    net: 'empty'
  }
};
